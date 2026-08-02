import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import { join, relative } from "node:path";

const root = process.cwd();
const pagesDirectory = join(root, "src", "pages");
const routesFile = join(root, "src", "routes", "AppRoutes.tsx");
const productsFile = join(root, "src", "data", "products.ts");
const output = join(root, "public", "sitemap.xml");
const siteUrl = "https://esperradiator.com";

const allFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => entry.isDirectory()
    ? allFiles(join(directory, entry.name))
    : [join(directory, entry.name)]))).flat();
};

const routePriority = (path) => {
  if (path === "/") return "1.0";
  if (path === "/products" || path === "/contact") return "0.9";
  if (path.startsWith("/products/")) return "0.8";
  return "0.7";
};

const routeChangeFrequency = (path) => path.startsWith("/products") ? "weekly" : "monthly";
const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const routeSource = await readFile(routesFile, "utf8");
const staticRoutes = [...routeSource.matchAll(/<Route\s+path="(\/[^":]*)"/g)]
  .map((match) => match[1])
  .filter((path) => !path.includes("*"));
const productSource = (await readFile(productsFile, "utf8"))
  .replaceAll(/\/\*[\s\S]*?\*\//g, "")
  .replaceAll(/\/\/.*$/gm, "");
const productSlugs = [...productSource.matchAll(/slug:\s*"([a-z0-9-]+)"/g)]
  .map((match) => `/products/${match[1]}`);
const files = await allFiles(pagesDirectory);
const sourceLastModified = await Promise.all(files.map(async (file) => (await stat(file)).mtime));
const lastmod = new Date(Math.max(...sourceLastModified.map((date) => date.getTime()))).toISOString().slice(0, 10);
const noindexRoutes = new Set(["/ecommerce-coming-soon"]);
const urls = [...new Set([...staticRoutes, ...productSlugs])]
  .filter((path) => !noindexRoutes.has(path))
  .sort((a, b) => a.localeCompare(b));

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((path) => `  <url>\n    <loc>${escapeXml(`${siteUrl}${path}`)}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${routeChangeFrequency(path)}</changefreq>\n    <priority>${routePriority(path)}</priority>\n  </url>`).join("\n")}\n</urlset>\n`;

await writeFile(output, xml, "utf8");
console.log(`Generated sitemap with ${urls.length} URLs from ${relative(root, routesFile)} and product data.`);
