import React from "react";
import { SEO_OBJ } from "Essentials";

const Sitemap = () => {};

export const getServerSideProps = ({ res }: any) => {
  // Initialize the array to store URLs
  const sitemapURLOBJ: any = [];

  function pullURLAndLastUpdatedTime(incomingObj: any) {
    Object.values(incomingObj).map((page: any) => {
      sitemapURLOBJ.push({ url: page.absoluteURL, lastUpdatedTime: page.lastUpdateTime });
    });
  }

  // Pull URLs from SEO_OBJ
  pullURLAndLastUpdatedTime(SEO_OBJ);

  // Pull URLs from TataBlogPages
  // pullURLAndLastUpdatedTime(SEO_OBJ.TATA_HOMEPAGE.TATA_PAGES_OBJ);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- We'll render the URLs for our sitemap here. -->
      ${sitemapURLOBJ
        .map((singleSiteData: any) => {
          return `<url><loc>${singleSiteData.url}</loc>
              <lastmod>${singleSiteData.lastUpdatedTime}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>`;
        })
        .join("")}
    </urlset>
  `;
  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
};

export default Sitemap;
