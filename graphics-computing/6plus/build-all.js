import { execSync } from "node:child_process";
import { readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const subjectDir = process.cwd(); // current folder (math/, cs/, etc.)
const files = readdirSync(subjectDir);

const builtDays = [];

for (const file of files) {
  const fullPath = path.join(subjectDir, file);
  if (!file.endsWith(".md") || !statSync(fullPath).isFile()) continue;

  const baseName = path.basename(file, ".md"); // e.g. "day_1"
  const basePath = `/${baseName}/`; // for routing
  const outDir = path.join("dist", baseName); // e.g. dist/day_1

  console.log(`\n📦 Building ${baseName} -> ${outDir} (base=${basePath})`);
  execSync(`npx slidev build "${file}" --base ${basePath} --out ${outDir}`, {
    stdio: "inherit",
  });

  builtDays.push(baseName);
}

const titleDict = {
  day_06: "Exapanding the gasket",
  day_07: "animation",
  day_08: "interaction",
  day_09: "Math",
  day_10: "More Math",
};

const resources = {
  public_resources: "https://ishortn.ink/graphicsSlides",
  github: "https://ishortn.ink/graphicsGit",
};

const assignments = {
  gasket: "https://ishortn.ink/gasketSource",
  point_rendering: "https://ishortn.ink/graphicsAssignmentSubmit",
  animation: "https://ishortn.ink/animationAssignmentSubmit",
  miniCAD: "https://ishortn.ink/graphProject1",
};

// --- generate index.html ---
const links = builtDays
  .map(
    (day) =>
      `<li><a href="./${day}/">Day ${day.split("_")[1]} - ${titleDict[day]}</a></li>`,
  )
  .join("\n");

const resourcesLinks = Object.entries(resources)
  .map(
    ([key, url]) => `<li><a href="${url}">${key.replaceAll("_", " ")}</a></li>`,
  )
  .join("\n");

const assignmentsLinks = Object.entries(assignments)
  .map(
    ([key, url]) => `<li><a href="${url}">${key.replaceAll("_", " ")}</a></li>`,
  )
  .join("\n");

const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>CS270-EL1 Graphics Computing</title>
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
    <h1>Slides for CS270-EL1</h1>
    <p>Graphics Computing</p>
  </hgroup>
  <ul>
    ${links}
  </ul>

<section>
<h2>Resources</h2>
<ul>
${resourcesLinks}
</ul>
</section>

<section>
<h2>Assignments</h2>
<ul>
${assignmentsLinks}
</ul>
</section>
</body>
</html>
`;

writeFileSync(path.join("dist", "index.html"), indexHtml);
console.log(`\n✅ Generated index.html with ${builtDays.length} slides`);
