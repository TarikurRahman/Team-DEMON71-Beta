import { NextResponse } from "next/server";

const content = `User-agent: *
Allow: /
Sitemap: https://teamdemon71.info/sitemap.xml
`;

export async function GET() {
  return new NextResponse(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain;charset=UTF-8",
    },
  });
}
