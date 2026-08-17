import { NextResponse } from "next/server";

const baseUrl = "https://www.teamdemon71.vercel.app";
const pages = ["", "about", "achievements", "Acknowledgements", "contact", "project", "support", "team"];

const content = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((page) => {
    const path = page === "" ? "" : `/${page}`;
    return `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </url>`;
  })
  .join("\n")}
</urlset>
`;

export async function GET() {
  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "application/xml;charset=UTF-8",
    },
  });
}
