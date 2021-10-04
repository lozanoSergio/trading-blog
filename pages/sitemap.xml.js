import fs from 'fs';
import { format } from 'date-fns';

import { getAllPostsForHome } from '../lib/api';
import { DESCRIPTION, CMS_NAME, CMS_URL } from '../lib/constants';

const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
    const baseUrl = {
        development: 'http://localhost:3000',
        production: 'https://tradingbitacora.com',
    }[process.env.NODE_ENV];

    const staticPages = ['blog', 'contacto', 'index'].map((staticPagePath) => {
        return `${baseUrl}/${staticPagePath}`;
    });

    const postsMeta = await getAllPostsForHome();

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
          .map((url) => {
              return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
          })
          .join('')}
          ${postsMeta
              .map(
                  (meta) =>
                      `
                      <url>
              <loc>${CMS_URL}/blog/${meta.slug}/</loc>
              <lastmod>${meta._updatedAt}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.7</priority>
            </url>
            `,
              )
              .join('')}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;
