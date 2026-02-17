import { CONFIG } from "./config";

interface CompetitorContent {
  name: string;
  domain: string;
  recentPages: { url: string; lastmod?: string }[];
  totalPages: number;
  error?: string;
}

export interface CompetitorReport {
  competitors: CompetitorContent[];
}

const COMPETITORS = [
  { name: "Jerrard Wayne", domain: "jerrardwayne.co.uk", sitemapUrl: "https://jerrardwayne.co.uk/sitemap.xml" },
  { name: "Nettl Yeovil", domain: "nettl.com", sitemapUrl: "https://www.nettl.com/sitemap.xml" },
  { name: "Twilo Creative", domain: "twilocreative.com", sitemapUrl: "https://twilocreative.com/sitemap.xml" },
  { name: "South West Web Design", domain: "southwestwebdesign.co.uk", sitemapUrl: "https://www.southwestwebdesign.co.uk/sitemap.xml" },
  { name: "Jerrard Wayne Digital", domain: "jerrardwayne.co.uk", sitemapUrl: "https://jerrardwayne.co.uk/sitemap_index.xml" },
];

async function fetchSitemap(
  url: string
): Promise<{ urls: { loc: string; lastmod?: string }[]; error?: string }> {
  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "SaundersSimmons-SEO-Agent/1.0" },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      return { urls: [], error: `HTTP ${response.status}` };
    }

    const xml = await response.text();

    const urls: { loc: string; lastmod?: string }[] = [];

    // Handle sitemap index (contains other sitemaps)
    const sitemapIndexMatches = xml.match(/<sitemap>[\s\S]*?<\/sitemap>/g);
    if (sitemapIndexMatches) {
      for (const entry of sitemapIndexMatches.slice(0, 5)) {
        const locMatch = entry.match(/<loc>\s*(.*?)\s*<\/loc>/);
        if (locMatch) {
          const childResult = await fetchSitemap(locMatch[1]);
          urls.push(...childResult.urls);
        }
      }
      return { urls };
    }

    // Regular sitemap
    const urlMatches = xml.match(/<url>[\s\S]*?<\/url>/g);
    if (urlMatches) {
      for (const entry of urlMatches) {
        const locMatch = entry.match(/<loc>\s*(.*?)\s*<\/loc>/);
        const lastmodMatch = entry.match(/<lastmod>\s*(.*?)\s*<\/lastmod>/);
        if (locMatch) {
          urls.push({
            loc: locMatch[1],
            lastmod: lastmodMatch ? lastmodMatch[1] : undefined,
          });
        }
      }
    }

    return { urls };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    return { urls: [], error: message };
  }
}

export async function checkCompetitors(): Promise<CompetitorReport> {
  console.log("Checking competitor websites...");

  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

  const competitors: CompetitorContent[] = [];

  for (const comp of COMPETITORS) {
    console.log(`  Checking ${comp.name} (${comp.domain})...`);

    const { urls, error } = await fetchSitemap(comp.sitemapUrl);

    if (error) {
      const altUrls = [
        `https://www.${comp.domain}/sitemap.xml`,
        `https://${comp.domain}/sitemap_index.xml`,
      ];

      let found = false;
      for (const altUrl of altUrls) {
        const altResult = await fetchSitemap(altUrl);
        if (!altResult.error && altResult.urls.length > 0) {
          const recent = altResult.urls
            .filter((u) => {
              if (!u.lastmod) return false;
              return new Date(u.lastmod) >= threeMonthsAgo;
            })
            .sort(
              (a, b) =>
                new Date(b.lastmod!).getTime() -
                new Date(a.lastmod!).getTime()
            )
            .slice(0, 10);

          competitors.push({
            name: comp.name,
            domain: comp.domain,
            recentPages: recent.map((u) => ({
              url: u.loc,
              lastmod: u.lastmod,
            })),
            totalPages: altResult.urls.length,
          });
          found = true;
          break;
        }
      }

      if (!found) {
        competitors.push({
          name: comp.name,
          domain: comp.domain,
          recentPages: [],
          totalPages: 0,
          error: `Could not fetch sitemap: ${error}`,
        });
      }
      continue;
    }

    const recent = urls
      .filter((u) => {
        if (!u.lastmod) return false;
        return new Date(u.lastmod) >= threeMonthsAgo;
      })
      .sort(
        (a, b) =>
          new Date(b.lastmod!).getTime() - new Date(a.lastmod!).getTime()
      )
      .slice(0, 10);

    competitors.push({
      name: comp.name,
      domain: comp.domain,
      recentPages: recent.map((u) => ({ url: u.loc, lastmod: u.lastmod })),
      totalPages: urls.length,
    });

    console.log(
      `    ${comp.name}: ${urls.length} pages total, ${recent.length} recent`
    );
  }

  return { competitors };
}
