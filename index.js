const express = require("express");
const path = require("path");
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const { districts, serviceCategories, findDistrict, findService } = require("./data/izmir-seo");
const { getBaseUrl, absoluteUrl, defaultMetaDescription, buildJsonLdGraph } = require("./lib/seo-helpers");

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'frontend', 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'frontend', 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.locals.baseUrl = getBaseUrl(req);
  res.locals.canonicalUrl = absoluteUrl(req, req.originalUrl.split('?')[0]);
  res.locals.defaultMetaDescription = defaultMetaDescription;
  res.locals.metaDescription = defaultMetaDescription;
  next();
});

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Profesyonel Temizlik Hizmetleri',
    metaDescription: 'İzmir genelinde konut, ofis ve kurumsal temizlik. Profesyonel ekip; teklif ve randevu için iletişime geçin.'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Yerel Temizlik Hizmetleri',
    metaDescription: 'Temizlik hizmeti anlayışımız ve değerlerimiz. Yerel ve güvenilir hizmet (örnek metin).'
  });
});

app.get('/clean', (req, res) => {
  res.render('clean', {
    title: 'Sanitasyon ve Sterilizasyon | Hijyenik Ortamlar',
    metaDescription: 'Sanitasyon, dezenfeksiyon ve hijyen odaklı temizlik süreçleri hakkında bilgi (örnek metin).'
  });
});

app.get('/service', (req, res) => {
  res.render('service', {
    title: 'Kaliteli Temizlik Anlayışımız',
    metaDescription: 'Konut ve ticari temizlik hizmetleri özeti. Kapsam ve planlama (örnek metin).'
  });
});

app.get('/standard', (req, res) => {
  res.render('standard', {
    title: 'Garantili Hizmet Standardımız',
    metaDescription: 'Müşteri değerlendirmeleri ve hizmet standardımız (örnek metin).'
  });
});

app.get('/hire', (req, res) => {
  res.render('hire', {
    title: 'Profesyonel Temizlik Ekibimize Katılın',
    metaDescription: 'İş ve staj başvuruları — çalışma koşulları ve iletişim (örnek metin).'
  });
});

app.get('/quote', (req, res) => {
  res.render('quote', {
    title: 'Kişiselleştirilmiş Fiyat Teklifi Alın',
    metaDescription: 'Temizlik hizmeti için ücretsiz fiyat teklifi formu. Alan ve iletişim bilgilerinizi iletin.'
  });
});

app.get('/booking', (req, res) => {
  res.render('booking', {
    title: 'Temizlik Randevunuzu Planlayın',
    metaDescription: 'Uygun tarih ve adres ile temizlik randevusu talep edin (örnek metin).'
  });
});

app.get('/izmir/:ilce/:hizmet', (req, res) => {
  const district = findDistrict(req.params.ilce);
  const service = findService(req.params.hizmet);
  if (!district || !service) {
    return res.status(404).render('error', { title: 'Sayfa Bulunamadı' });
  }
  const base = getBaseUrl(req);
  const pathOnly = `/izmir/${district.slug}/${service.slug}`;
  const pageUrl = absoluteUrl(req, pathOnly);
  const metaLead = `${district.name} ilçesinde ${service.name.toLowerCase()} talebi için örnek açıklama metni. Gerçek kapsam ve fiyatı sonra güncelleyebilirsiniz.`;
  const metaDescription = `${district.name} — ${service.name}. İzmir’de profesyonel temizlik (örnek SEO metni). Teklif ve randevu için iletişime geçin.`;
  const bodyParagraphs = [
    `${district.name} bölgesinde ${service.name} hizmeti sunuyoruz. Bu paragraf örnektir; hizmet detaylarını, süreleri ve kullanılan ürünleri buraya yazın.`,
    `İzmir genelinde benzer hizmet kategorileri için diğer ilçe sayfalarımıza da göz atabilirsiniz. İçerikleri işletmenize göre özelleştirmeniz SEO açısından önerilir.`,
    `Hızlı iletişim: teklif formu, randevu veya telefon ile bize ulaşın.`
  ];
  const serviceBlock = {
    '@type': 'Service',
    name: `${service.name} — İzmir ${district.name}`,
    description: metaLead,
    url: pageUrl,
    areaServed: { '@type': 'City', name: 'İzmir' },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Pro Temizlik Hizmetleri',
      url: `${base}/`
    }
  };
  const jsonLd = buildJsonLdGraph({
    baseUrl: base,
    crumbs: [
      { name: 'Ana sayfa', path: '/' },
      { name: 'İzmir', path: '/izmir' },
      { name: district.name, path: `/izmir/${district.slug}` },
      { name: service.shortLabel, path: pathOnly }
    ],
    serviceBlock
  });
  res.render('location/district-service', {
    title: `${service.name} — ${district.name}`,
    pageTitleFull: `${service.name} — İzmir ${district.name} | Pro Temizlik Hizmetleri`,
    metaDescription,
    canonicalUrl: pageUrl,
    jsonLd,
    district,
    service,
    metaLead,
    bodyParagraphs
  });
});

app.get('/izmir/:ilce', (req, res) => {
  const district = findDistrict(req.params.ilce);
  if (!district) {
    return res.status(404).render('error', { title: 'Sayfa Bulunamadı' });
  }
  const base = getBaseUrl(req);
  const pathOnly = `/izmir/${district.slug}`;
  const pageUrl = absoluteUrl(req, pathOnly);
  const metaDescription = `İzmir ${district.name} temizlik hizmetleri ve kategoriler. Konut, ofis ve özel çözümler (örnek SEO metni).`;
  const jsonLd = buildJsonLdGraph({
    baseUrl: base,
    crumbs: [
      { name: 'Ana sayfa', path: '/' },
      { name: 'İzmir', path: '/izmir' },
      { name: district.name, path: pathOnly }
    ]
  });
  res.render('location/district', {
    title: `İzmir ${district.name} temizlik`,
    pageTitleFull: `İzmir ${district.name} temizlik hizmetleri | Pro Temizlik`,
    metaDescription,
    canonicalUrl: pageUrl,
    jsonLd,
    district,
    serviceCategories
  });
});

app.get('/izmir', (req, res) => {
  const base = getBaseUrl(req);
  const pageUrl = absoluteUrl(req, '/izmir');
  const metaDescription = 'İzmir ilçelerinde temizlik hizmeti bölgeleri ve hizmet kategorileri listesi. Örnek içerik — ilçe ve kategori sayfalarını güncelleyin.';
  const jsonLd = buildJsonLdGraph({
    baseUrl: base,
    crumbs: [
      { name: 'Ana sayfa', path: '/' },
      { name: 'İzmir', path: '/izmir' }
    ]
  });
  res.render('location/izmir', {
    title: 'İzmir temizlik bölgeleri',
    pageTitleFull: 'İzmir ilçeleri temizlik hizmetleri | Pro Temizlik',
    metaDescription,
    canonicalUrl: pageUrl,
    jsonLd,
    districts
  });
});

app.get('/sitemap.xml', (req, res) => {
  const base = getBaseUrl(req);
  const urls = [{ loc: `${base}/`, changefreq: 'weekly', priority: '1' }];
  ['/about', '/clean', '/service', '/standard', '/hire', '/quote', '/booking', '/izmir'].forEach((p) => {
    urls.push({ loc: `${base}${p}`, changefreq: 'weekly', priority: '0.8' });
  });
  districts.forEach((d) => {
    urls.push({ loc: `${base}/izmir/${d.slug}`, changefreq: 'monthly', priority: '0.7' });
    serviceCategories.forEach((s) => {
      urls.push({ loc: `${base}/izmir/${d.slug}/${s.slug}`, changefreq: 'monthly', priority: '0.6' });
    });
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;
  res.type('application/xml');
  res.send(xml);
});

app.get('/robots.txt', (req, res) => {
  const base = getBaseUrl(req);
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
`);
});

app.post('/getQuote', (req, res) => {
  req.body.call = Boolean(req.body.call); 
  req.body.text = Boolean(req.body.text); 
  req.body.comm = Boolean(req.body.comm); 
  req.body.resd = Boolean(req.body.resd); 

   const output = `
   <p>Temizlik Hizmeti Fiyat Teklifi Talebi</p>
   <h3>İletişim Bilgileri</h3>
   <ul>
     <li>Ad: ${req.body.first}</li>
     <li>Soyad: ${req.body.last}</li>
     <li>Telefon: ${req.body.phone}</li>
     <li>E-posta: ${req.body.email}</li><br>
     Telefonla görüşme isteniyor: ${req.body.call} <br>
     Teklif SMS ile isteniyor: ${req.body.text}
   </ul>
   <h3>Mekân Bilgileri</h3>
     Yaklaşık metrekare: ${req.body.square} <br>
     Ticari: ${req.body.comm} <br>
     Konut: ${req.body.resd} <br>
   <h3>Yorumlar</h3>
   <p>${req.body.comment}</p>
  `

  let transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.nm_port,
    secure: false,
    auth: {
      user: process.env.user, 
      pass: process.env.pass, 
    },  
    tls:{
      rejectUnauthorized: false
    }
  });

  transporter.sendMail({
    from: process.env.user,
    to: process.env.user, 
    subject: "Temizlik Hizmeti Fiyat Teklifi", 
    text: "Teklif talebi", 
    html: output
  }).catch((err) => console.error("E-posta (teklif) gönderilemedi:", err.message));

  res.redirect('back');
    
});

app.post('/getDate', (req, res) => {
const output = `
   <p>Temizlik Randevusu</p>
   <h3>İletişim Bilgileri</h3>
   <ul>
     <li>Ad: ${req.body.first}</li>
     <li>Soyad: ${req.body.last}</li>
     <li>Telefon: ${req.body.phone}</li>
     <li>E-posta: ${req.body.email}</li><br>
     Önerilen temizlik tarihi: ${req.body.date} 
   </ul>
   <h3>Mekân Bilgileri</h3>
     Yaklaşık metrekare: ${req.body.square} <br>
     Adres: ${req.body.address} <br>
   <h3>Yorumlar</h3>
   <p>${req.body.comment}</p>
  `
  let transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.nm_port,
    secure: false,
    auth: {
      user: process.env.user, 
      pass: process.env.pass, 
    },  
    tls:{
      rejectUnauthorized: false
    }
  }); 

  transporter.sendMail({
    from: process.env.user,
    to: process.env.user, 
    subject: "Temizlik Randevusu Talebi", 
    text: "Temizlik tarihi planlama", 
    html: output
  }).catch((err) => console.error("E-posta (randevu) gönderilemedi:", err.message));
  
  res.redirect('back');
}); 

app.post('/rateUs', (req, res) => { 
   const output = `
   <p>Temizlik Hizmeti Değerlendirmesi</p>
   <h3>İletişim Bilgileri</h3>
   <ul>
     <li>Ad: ${req.body.first}</li>
     <li>Soyad: ${req.body.last}</li>
   </ul>
   <h3>Yıldız Puanı</h3>
   <p>Verilen puan: ${req.body.score}</p>
   <h3>Yorumlar</h3>
   <p>${req.body.comment}</p>
  `

  let transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.nm_port,
    secure: false,
    auth: {
      user: process.env.user, 
      pass: process.env.pass, 
    },  
    tls:{
      rejectUnauthorized: false
    }
  });

  transporter.sendMail({
    from: process.env.user,
    to: process.env.user, 
    subject: "Hizmet Değerlendirmesi", 
    text: "Yıldızlı değerlendirme",  
    html: output
  }).catch((err) => console.error("E-posta (değerlendirme) gönderilemedi:", err.message));

 res.redirect('back');
});  

app.post('/sendFeed', (req, res) => { 
   const output = `
   <p>Geri Bildirim</p>
   <h3>İletişim Bilgileri</h3>
   <ul>
     <li>Ad: ${req.body.first}</li>
     <li>Soyad: ${req.body.last}</li>
   </ul>
   <h3>İletişim</h3>
   <p>Müşteri e-postası: ${req.body.email}</p>
   <h3>Yorumlar</h3>
   <p>${req.body.comment}</p>
  `

  let transporter = nodemailer.createTransport({
    host: process.env.host,
    port: process.env.nm_port,
    secure: false,
    auth: {
      user: process.env.user, 
      pass: process.env.pass, 
    },  
    tls:{
      rejectUnauthorized: false
    }
  });

  transporter.sendMail({
    from: process.env.user,
    to: process.env.user, 
    subject: "Temizlik Geri Bildirimi", 
    text: "Müşteri görüşleri",  
    html: output
  }).catch((err) => console.error("E-posta (geri bildirim) gönderilemedi:", err.message));

  res.redirect('back');
});  

app.use((req, res) => {
  res.status(404).render('error', { title: 'Sayfa Bulunamadı' });
});

if (!process.env.VERCEL && require.main === module) {
  app.listen(port, () =>
    console.log(`Sunucu adresi: http://localhost:${port}`)
  );
}

module.exports = app;
