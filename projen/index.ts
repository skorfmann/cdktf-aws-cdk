/* eslint-disable @typescript-eslint/no-require-imports */
import { cdk } from "projen";
import { AutoMerge } from "./auto-merge";
import { CdktfConfig } from "./cdktf-config";
import { CustomizedLicense } from "./customized-license";
import { LockIssues } from "./lock-issues";
import { ProviderUpgrade } from "./provider-upgrade";

export interface CdktfAwsCdkOptions extends Partial<cdk.JsiiProjectOptions> {
  readonly terraformProvider: string;
  readonly cdktfVersion: string;
  readonly constructsVersion: string;
}

const author = "HashiCorp";
const authorAddress = "https://hashicorp.com";
const namespace = "skorfmann";
const githubNamespace = "skorfmann";

export class CdktfAwsCdkProject extends cdk.JsiiProject {
  constructor(options: CdktfAwsCdkOptions) {
    const {
      terraformProvider,
      workflowContainerImage = "hashicorp/jsii-terraform",
      cdktfVersion,
      constructsVersion,
      minNodeVersion,
    } = options;
    const [fqproviderName, providerVersion] = terraformProvider.split("@");
    const providerName = fqproviderName.split("/").pop();
    if (!providerName) {
      throw new Error(`${terraformProvider} doesn't seem to be valid`);
    }
    // const nugetName = `HashiCorp.${pascalCase(namespace)}.AwsCdk`;

    super({
      ...options,
      workflowContainerImage,
      licensed: false, // we do supply our own license file with a custom header
      releaseToNpm: true,
      minNodeVersion,
      name: `@${namespace}/aws-cdk`,
      description: `Adapter for using AWS CDK constructs in Terraform CDK (cdktf) projects`,
      keywords: ["cdktf", "terraform", "cdk", "aws-cdk", "aws"],
      sampleCode: false,
      jest: true,
      testdir: "src/tests",
      jestOptions: {
        jestConfig: {
          setupFilesAfterEnv: ["./setupJest.js"],
          testPathIgnorePatterns: [
            "/node_modules/",
            "<rootDir>/examples",
            ".yalc",
            ".+\\.d\\.ts",
          ],
          // transform: {
          //   "^.+\\.tsx?$": "ts-jest",
          // },
          coveragePathIgnorePatterns: [
            "/node_modules/",
            "<rootDir>/examples",
            ".yalc",
            ".+\\.d\\.ts",
            // generated provider bindings
            "lib/aws",
            "lib/time",
          ],
        },
      },
      tsconfigDev: {
        compilerOptions: {},
        exclude: ["/node_modules/", "<rootDir>/examples", ".yalc"],
      },
      authorAddress,
      author,
      authorOrganization: true,
      defaultReleaseBranch: "main",
      repositoryUrl: `https://github.com/${githubNamespace}/cdktf-aws-cdk.git`,
      mergify: false,
      eslint: false,
      python: {
        distName: `${namespace}-aws-cdk`,
        module: `${namespace}_aws_cdk`,
      },
      // publishToNuget: {
      //   dotNetNamespace: nugetName,
      //   packageId: nugetName,
      // },
      peerDependencyOptions: {
        pinnedDevDependency: false,
      },
      workflowGitIdentity: {
        name: "skorfmann",
        email: "sebastian@korfmann.net",
      },
      depsUpgradeOptions: {
        workflowOptions: {
          labels: ["dependencies"],
        },
      },
      stale: true,
      staleOptions: {
        issues: {
          staleLabel: "stale",
          daysBeforeStale: 30,
          staleMessage:
            "Hi there! 👋 We haven't heard from you in 30 days and would like to know if the problem has been resolved or if " +
            "you still need help. If we don't hear from you before then, I'll auto-close this issue in 30 days.",
          daysBeforeClose: 30,
          closeMessage:
            "I'm closing this issue because we haven't heard back in 60 days. ⌛️ If you still need help, feel free to reopen the issue!",
        },
        pullRequest: {
          staleLabel: "stale",
          daysBeforeStale: 60,
          staleMessage:
            "Hi there! 👋 We haven't heard from you in 60 days and would like to know if you're still working on this or need help. " +
            "If we don't hear from you before then, I'll auto-close this PR in 30 days.",
          daysBeforeClose: 30,
          closeMessage:
            "I'm closing this pull request because we haven't heard back in 90 days. ⌛️ If you're still working on this, feel free to reopen the PR or create a new one!",
        },
      },
      postBuildSteps: [
        {
          name: "Prepare Temporary Directory",
          run: "cp -r dist .repo",
        },
        {
          name: "Install Dependencies",
          run: "cd .repo && yarn install --check-files --frozen-lockfile",
        },
        {
          name: "Create js artifact",
          run: "cd .repo && npx projen package:js",
        },
        {
          name: "Run integration tests",
          run: "cd .repo && yarn examples:test",
        },
        {
          name: "Clean up",
          run: "rm -rf .repo",
        }
      ],
    });

    [this.compileTask, this.testTask].forEach((task) =>
      task.env("NODE_OPTIONS", "--max-old-space-size=6144")
    );
    this.testTask.env("DEBUG", "jest");

    const testExamples = this.addTask("examples:test", {
      cwd: "examples/typescript-cron-lambda",
      exec: "npm run test:ci",
    });
    testExamples.exec("npm run test:ci", {
      cwd: "examples/typescript-manual-mapping",
    });
    testExamples.exec("npm run test:ci", {
      cwd: "examples/typescript-step-functions",
    });
    testExamples.exec("npm run test:ci", {
      cwd: "examples/typescript-step-functions-mixed",
    });

    const updateExampleTests = this.addTask("examples:test:update", {
      cwd: "examples/typescript-cron-lambda",
      exec: "npm run test:ci -- -- -u", // requires two level deep passthrough of -u option 😅
    });
    updateExampleTests.exec("npm run test:ci -- -- -u", {
      cwd: "examples/typescript-manual-mapping",
    });
    updateExampleTests.exec("npm run test:ci -- -- -u", {
      cwd: "examples/typescript-step-functions",
    });
    updateExampleTests.exec("npm run test:ci -- -- -u", {
      cwd: "examples/typescript-step-functions-mixed",
    });

    // for local developing (e.g. linking local changes to cdktf)
    this.addGitIgnore(".yalc");
    this.addGitIgnore("yalc.lock");

    this.addGitIgnore("src/**/*.js");
    this.addGitIgnore("src/**/*.d.ts");

    // for update-supported-types script
    this.addDevDeps("@aws-sdk/client-cloudformation@^3.36.0");
    this.setScript(
      "fetch:types",
      `mkdir -p src/awscc && rm -rf ./src/awscc/* && node ./scripts/update-supported-types.js`
    );
    this.addPackageIgnore("scripts");

    this.addPackageIgnore("examples");
    this.addPackageIgnore("/.projenrc.ts");

    new CdktfConfig(this, {
      terraformProvider,
      providerName,
      providerVersion,
      cdktfVersion,
      constructsVersion,
    });
    new ProviderUpgrade(this);
    new AutoMerge(this);
    new CustomizedLicense(this);
    new LockIssues(this);
  }
}
