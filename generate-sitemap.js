const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/aboutjci', changefreq: 'monthly', priority: 0.8 },
  { url: '/aboutjciindia', changefreq: 'monthly', priority: 0.8 },
  { url: '/aboutjcinagpurfortune', changefreq: 'daily', priority: 1.0 },
  { url: '/npcorner', changefreq: 'monthly', priority: 0.8 },
  { url: '/downloads', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'daily', priority: 1.0 },
  { url: '/ourteam', changefreq: 'monthly', priority: 0.8 },
  { url: '/ourjcimembers', changefreq: 'monthly', priority: 0.8 },
  { url: '/events', changefreq: 'daily', priority: 1.0 },
  { url: '/gallery', changefreq: 'monthly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://www.jcinagpurfortune.in' });
const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(sitemap).then((data) => {
  writeStream.write(data.toString());
  writeStream.end();
  console.log('✅ Sitemap created at: public/sitemap.xml');
});

links.forEach(link => sitemap.write(link));
sitemap.end();
