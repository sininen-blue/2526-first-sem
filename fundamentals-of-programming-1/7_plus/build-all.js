import { execSync } from "node:child_process";
import { readdirSync, statSync } from "node:fs";
import path from "node:path";

const subjectDir = process.cwd(); // current folder (math/, cs/, etc.)
const files = readdirSync(subjectDir);

for (const file of files) {
	const fullPath = path.join(subjectDir, file);
	if (!file.endsWith(".md") || !statSync(fullPath).isFile()) continue;

	const baseName = path.basename(file, ".md");
	const basePath = `/${baseName}/`;
	const outDir = path.join("dist", baseName);

	console.log(`\n📦 Building ${baseName} -> ${basePath}`);
	execSync(`npx slidev build "${file}" --base ${basePath} --out ${outDir}`, {
		stdio: "inherit"
	});
}
