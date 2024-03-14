import { execSync } from "child_process";

console.log("[DEPLOY _PREVIEW]: START");
const command = "yarn deploy:staging";
const output = execSync(command, { encoding: "utf-8" });
const outputLines = output.split("\n");
const DEPLOY_URL = outputLines[outputLines.length - 1];
console.log("[DEPLOY _PREVIEW]: END");

console.log(`Você pode ver o preview do deploy em: ${DEPLOY_URL}`);

// console.log("[GITHUB_COMMENT]: START");
// console.log("[GITHUB_COMMENT]: END");
