/**
 * @param {import('express').Request} req
 */
function getBaseUrl(req) {
  const proto = req.headers['x-forwarded-proto'] || req.protocol || 'http';
  const host = req.get('host') || 'localhost:3000';
  return `${proto}://${host}`;
}

function absoluteUrl(req, pathname) {
  const base = getBaseUrl(req);
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${p}`;
}

/**
 * Varsayılan site açıklaması (sayfa özel meta yoksa)
 */
const defaultMetaDescription =
  'İzmir genelinde profesyonel temizlik hizmetleri. Konut, ofis ve kurumsal çözümler. Teklif ve randevu için iletişime geçin.';

/**
 * @param {{ baseUrl: string, path: string, crumbs: { name: string, path: string }[] }} opts
 */
function buildJsonLdGraph(opts) {
  const { baseUrl, crumbs, serviceBlock } = opts;
  const breadcrumb = {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: c.path.startsWith('http') ? c.path : `${baseUrl}${c.path}`
    }))
  };
  const graph = [breadcrumb];
  if (serviceBlock) graph.push(serviceBlock);
  return { '@context': 'https://schema.org', '@graph': graph };
}

module.exports = {
  getBaseUrl,
  absoluteUrl,
  defaultMetaDescription,
  buildJsonLdGraph
};
