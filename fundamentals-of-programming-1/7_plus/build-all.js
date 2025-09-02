import { execSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const subjectDir = process.cwd(); // current folder (math/, cs/, etc.)
const files = readdirSync(subjectDir);

const builtDays = [];

for (const file of files) {
	const fullPath = path.join(subjectDir, file);
	if (!file.endsWith(".md") || !statSync(fullPath).isFile()) continue;

	const baseName = path.basename(file, ".md");   // e.g. "day_1"
	const basePath = `/${baseName}/`;              // for routing
	const outDir = path.join("dist", baseName);    // e.g. dist/day_1

	console.log(`\n📦 Building ${baseName} -> ${outDir} (base=${basePath})`);
	execSync(`npx slidev build "${file}" --base ${basePath} --out ${outDir}`, {
		stdio: "inherit"
	});

	builtDays.push(baseName);
}

const titleDict = {
	day_7: "Bisection search",
	day_8: "Decomposition and abstraction",
}

// --- generate index.html ---
const links = builtDays
	.map((day) => `<li><a href="./${day}/">Day ${day.split("_")[1]} - ${titleDict[day]}</a></li>`)
	.join("\n");

const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>CS170 Fundamentals of Programming</title>
  <style>
    body { background-color: #141414; color: #cecabe; font-family: sans-serif; padding: 2rem; max-width: 700px; margin: auto; }
    h1 { margin-bottom: 1rem; }
    ul { list-style: none; padding: 0; }
    li { margin: 0.5rem 0; }
    a { text-decoration: none; font-weight: 700; color: #4b978e; }
    a:hover { text-decoration: underline; }
  </style>
</head>
<body>
  <hgroup>
    <h1>Slides for CS170</h1>
    <p>Fundamentals of Programming</p>
  </hgroup>
  <ul>
    ${links}
  </ul>
</body>
</html>
`;

writeFileSync(path.join("dist", "index.html"), indexHtml);
console.log(`\n✅ Generated index.html with ${builtDays.length} slides`);
