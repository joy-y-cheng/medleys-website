#!/usr/bin/env node

const fs = require("fs");

const cnamePath = "src/CNAME";
const navPath = "src/_data/navigation.json";
const outputPath = "_site/sitemap.xml";

// Read and parse CNAME
let cname = fs.readFileSync(cnamePath, "utf8");
if (!cname.startsWith("https://"))
  cname = "https://" + cname;

// Read and parse JSON
const nav = JSON.parse(fs.readFileSync(navPath, "utf8"));

// Build XML (minified)
const now = new Date().toISOString();
let xml = '<?xml version="1.0" encoding="UTF-8"?>';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

for (const { slug } of nav) {
  const loc = slug === "" ? cname : `${cname}/${slug}`;
  xml += `<url><loc>${loc}</loc><lastmod>${now}</lastmod></url>`;
}

xml += '</urlset>';

// Write file
fs.writeFileSync(outputPath, xml, "utf8");

console.log(`✅ Generated ${outputPath}`);
