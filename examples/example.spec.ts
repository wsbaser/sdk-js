import Config from "../lib/types/config";
import VisualRegressionTracker from "../lib";
import { readFileSync } from "fs";

describe("asd", () => {
  const config: Config = {
    apiUrl: "http://localhost:4200",
    branchName: "develop",
    projectId: "a6a5cc4e-07ef-44d1-ab44-a636465ca880",
    token: "4H9S6YHFJYMG7QQNJXPJQVDG0QMV",
  };
  const vrt = new VisualRegressionTracker(config);

  it("test 2", async () => {
    const testResult = await vrt.submitTestResult({
      name: "Example 2",
      // buildId: buildId,
      imageBase64: new Buffer(readFileSync("examples/1.png")).toString(
        "base64"
      ),
      os: "Windows",
      browser: "Chrome",
      viewport: "800x600",
      device: "PC",
    });

    console.log(testResult);
  });

  it("test 1", async () => {
    const testResult = await vrt.submitTestResult({
      name: "Example 1",
      imageBase64: new Buffer(readFileSync("examples/1.png")).toString(
        "base64"
      ),
      os: "Windows",
      // browser: "Chrome",
      // viewport: "800x600",
      // device: "PC",
    });

    console.log(testResult);
  });

  it("test 1 chrome", async () => {
    const testResult = await vrt.submitTestResult({
      name: "Example 1",
      imageBase64: new Buffer(readFileSync("examples/1.png")).toString(
        "base64"
      ),
      os: "Windows",
      browser: "Chrome",
      // viewport: "800x600",
      // device: "PC",
    });

    console.log(testResult);
  });
});