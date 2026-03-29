const storesMeta = require('../stores-meta.json');
const fs = require('fs');
const path = require('path');

const BOTS = /facebookexternalhit|Twitterbot|LinkedInBot|Slackbot|LINE|Discordbot|Googlebot|bot|crawl|spider/i;
const SITE = 'https://tacos-db3.vercel.app';

module.exports = (req, res) => {
  const id = req.query.id;
  const store = storesMeta[id];

  if (!store) {
    res.redirect('/');
    return;
  }

  const [name, area, nb] = store;
  const location = area + (nb ? ' ' + nb : '');
  const ua = req.headers['user-agent'] || '';
  const isBot = BOTS.test(ua);

  if (isBot) {
    // Return minimal HTML with OGP meta tags for crawlers
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>${name} | タコスコ</title>
<meta property="og:title" content="${name} | タコスコ" />
<meta property="og:description" content="${location}のタコス専門店。評価・口コミ・メニュー・アクセスはタコスコで。" />
<meta property="og:image" content="${SITE}/api/og?id=${id}" />
<meta property="og:url" content="${SITE}/store/${id}" />
<meta property="og:type" content="restaurant" />
<meta property="og:site_name" content="タコスコ" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${name} | タコスコ" />
<meta name="twitter:description" content="${location}のタコス専門店" />
<meta name="twitter:image" content="${SITE}/api/og?id=${id}" />
</head>
<body>
<h1>${name}</h1>
<p>${location}のタコス専門店</p>
<a href="${SITE}/store/${id}">タコスコで詳細を見る</a>
</body>
</html>`);
  } else {
    // For regular users, serve index.html so SPA handles the route
    try {
      const indexPath = path.join(process.cwd(), 'index.html');
      const html = fs.readFileSync(indexPath, 'utf8');
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.send(html);
    } catch (e) {
      // Fallback: redirect to home with store param
      res.redirect('/?_openStore=' + id);
    }
  }
};
