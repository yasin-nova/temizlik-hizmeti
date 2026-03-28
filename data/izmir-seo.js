/**
 * İzmir ilçeleri + hizmet kataloğu (SEO / dinamik sayfalar).
 */

const {
  serviceGroups,
  serviceCategories,
  findService,
  servicesInGroup
} = require('./service-catalog');

/** Öncelikli hizmet bölgeleri (landing ve iç linklerde öne çıkar) */
const PRIMARY_DISTRICT_SLUGS = [
  'konak',
  'karsiyaka',
  'bornova',
  'buca',
  'gaziemir',
  'balcova',
  'cigli',
  'bayrakli'
];

const districts = [
  { slug: 'aliaga', name: 'Aliağa' },
  { slug: 'balcova', name: 'Balçova' },
  { slug: 'bayindir', name: 'Bayındır' },
  { slug: 'bayrakli', name: 'Bayraklı' },
  { slug: 'bergama', name: 'Bergama' },
  { slug: 'beydag', name: 'Beydağ' },
  { slug: 'bornova', name: 'Bornova' },
  { slug: 'buca', name: 'Buca' },
  { slug: 'cesme', name: 'Çeşme' },
  { slug: 'cigli', name: 'Çiğli' },
  { slug: 'dikili', name: 'Dikili' },
  { slug: 'foca', name: 'Foça' },
  { slug: 'gaziemir', name: 'Gaziemir' },
  { slug: 'guzelbahce', name: 'Güzelbahçe' },
  { slug: 'karabaglar', name: 'Karabağlar' },
  { slug: 'karaburun', name: 'Karaburun' },
  { slug: 'karsiyaka', name: 'Karşıyaka' },
  { slug: 'kemalpasa', name: 'Kemalpaşa' },
  { slug: 'kinik', name: 'Kınık' },
  { slug: 'kiraz', name: 'Kiraz' },
  { slug: 'konak', name: 'Konak' },
  { slug: 'menderes', name: 'Menderes' },
  { slug: 'menemen', name: 'Menemen' },
  { slug: 'narlidere', name: 'Narlıdere' },
  { slug: 'odemis', name: 'Ödemiş' },
  { slug: 'seferihisar', name: 'Seferihisar' },
  { slug: 'selcuk', name: 'Selçuk' },
  { slug: 'tire', name: 'Tire' },
  { slug: 'torbali', name: 'Torbalı' },
  { slug: 'urla', name: 'Urla' }
];

const primaryDistricts = PRIMARY_DISTRICT_SLUGS.map((slug) =>
  districts.find((d) => d.slug === slug)
).filter(Boolean);

function findDistrict(slug) {
  return districts.find((d) => d.slug === slug) || null;
}

module.exports = {
  districts,
  primaryDistricts,
  primaryDistrictSlugs: PRIMARY_DISTRICT_SLUGS,
  serviceGroups,
  serviceCategories,
  findDistrict,
  findService,
  servicesInGroup
};
