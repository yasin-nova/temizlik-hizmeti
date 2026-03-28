/**
 * Örnek içerik — İzmir ilçeleri ve hizmet kategorileri (SEO sayfaları).
 * Üretimde metinleri ve listeyi güncelleyin.
 */

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

const serviceCategories = [
  {
    slug: 'konut-temizligi',
    name: 'Konut temizliği',
    shortLabel: 'Konut',
    intro:
      'Daire ve müstakil konutlarda düzenli veya tek seferlik temizlik. Örnek metin — hizmet kapsamınızı buraya yazın.'
  },
  {
    slug: 'ofis-temizligi',
    name: 'Ofis ve iş yeri temizliği',
    shortLabel: 'Ofis',
    intro:
      'Çalışma alanları, ortak kullanım ve toplantı odaları. Örnek metin — çalışma saatlerinize göre planlama.'
  },
  {
    slug: 'derin-temizlik',
    name: 'Derin temizlik',
    shortLabel: 'Derin temizlik',
    intro:
      'Detaylı yüzey temizliği ve hijyen odaklı uygulama. Örnek metin — süre ve ekipman bilgisi ekleyin.'
  },
  {
    slug: 'insaat-sonrasi-temizlik',
    name: 'İnşaat sonrası temizlik',
    shortLabel: 'İnşaat sonrası',
    intro:
      'Talaş ve inşaat tozuna yönelik temizlik. Örnek metin — güvenlik ve ekipman gereksinimleri.'
  },
  {
    slug: 'cam-temizligi',
    name: 'Cam ve cephe temizliği',
    shortLabel: 'Cam',
    intro:
      'İç ve dış cam yüzeyleri. Örnek metin — yükseklik ve erişim koşulları.'
  },
  {
    slug: 'dezenfeksiyon',
    name: 'Dezenfeksiyon ve hijyen',
    shortLabel: 'Dezenfeksiyon',
    intro:
      'Yüzey dezenfeksiyonu ve sanitasyon. Örnek metin — kullanılan ürün sınıfları.'
  }
];

function findDistrict(slug) {
  return districts.find((d) => d.slug === slug) || null;
}

function findService(slug) {
  return serviceCategories.find((s) => s.slug === slug) || null;
}

module.exports = {
  districts,
  serviceCategories,
  findDistrict,
  findService
};
