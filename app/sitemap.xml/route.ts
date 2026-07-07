const baseUrl = "https://hyssopproperties.com";

const urls = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/properties", priority: "0.9", changefreq: "weekly" },

  { path: "/plots-for-sale-in-nakuru", priority: "0.95", changefreq: "weekly" },
  { path: "/plots-for-sale-in-nakuru-county", priority: "0.95", changefreq: "weekly" },

  {
    path: "/properties/plots-for-sale-in-tumaini-nakuru",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/properties/plots-for-sale-in-bahati-nakuru",
    priority: "0.9",
    changefreq: "weekly",
  },
  {
    path: "/properties/plots-for-sale-in-kitengela",
    priority: "0.85",
    changefreq: "weekly",
  },
  {
    path: "/properties/plots-for-sale-in-machakos",
    priority: "0.85",
    changefreq: "weekly",
  },
  {
    path: "/properties/plots-for-sale-in-malindi",
    priority: "0.85",
    changefreq: "weekly",
  },

  { path: "/about", priority: "0.6", changefreq: "monthly" },
  { path: "/diaspora", priority: "0.7", changefreq: "monthly" },
  { path: "/investments", priority: "0.7", changefreq: "monthly" },
  { path: "/foundation", priority: "0.5", changefreq: "monthly" },
  { path: "/testimonials", priority: "0.6", changefreq: "monthly" },
  { path: "/awards", priority: "0.5", changefreq: "monthly" },
  { path: "/news", priority: "0.5", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
];

export const dynamic = "force-static";

export function GET() {
  const lastmod = new Date().toISOString();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (item) => `  <url>
    <loc>${baseUrl}${item.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${item.changefreq}</changefreq>
    <priority>${item.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}