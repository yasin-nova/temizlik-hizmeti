/**
 * Hizmet kategorileri — URL: /hizmetler/:slug ve /izmir/:ilce/:slug
 */

const L = (name, tagline) =>
  `${name} — ${tagline}. İzmir genelinde eğitimli ekip, uygun ekipman ve güvenli ürünlerle hizmet veriyoruz; keşif sonrası yazılı kapsam ve net teklif sunarız.`;

const serviceGroups = [
  {
    id: 'b2b',
    title: 'Kurumsal Temizlik (B2B)',
    blurb: 'Bankadan fabrikaya kurumsal mekânlarda planlı temizlik ve raporlanabilir süreçler.'
  },
  {
    id: 'b2c',
    title: 'Bireysel / Ev ve Konut Temizliği (B2C)',
    blurb: 'Ev, daire ve site yaşamına yönelik düzenli veya tek seferlik çözümler.'
  },
  {
    id: 'ozel',
    title: 'Özel Alan / Niş Temizlik',
    blurb: 'Depo, laboratuvar, etkinlik ve acil durum gibi özel gereksinimli alanlar.'
  }
];

const serviceCategories = [
  {
    slug: 'banka-temizligi',
    name: 'Banka Temizliği',
    shortLabel: 'Banka',
    tagline: 'Banka şubeleri ve ofis temizliği',
    group: 'b2b',
    intro: L('Banka temizliği', 'şube, ATM çevresi ve idari alanlarda güven protokolleriyle'),
    highlights: [
      'Müşteri yoğunluğuna göre mesai içi / dışı planlama',
      'Kamera ve hassas alanlara saygılı uygulama',
      'Zemin, cam ve bekleme alanlarında düzenli protokol'
    ]
  },
  {
    slug: 'belediye-temizligi',
    name: 'Belediye Temizliği',
    shortLabel: 'Belediye',
    tagline: 'Belediyeler, kamu kurumları ve resmi binalar',
    group: 'b2b',
    intro: L('Kamu binası temizliği', 'resmi alanlarda yoğun kullanıma uygun hijyen'),
    highlights: [
      'Ortak kullanım ve koridor odaklı programlar',
      'Yoğun günler için esnek ekip takviyesi',
      'İhale / sözleşme kapsamına uyumlu iş planı'
    ]
  },
  {
    slug: 'okul-egitim-kurumu-temizligi',
    name: 'Okul ve Eğitim Kurumu Temizliği',
    shortLabel: 'Okul',
    tagline: 'Anaokulu, ilkokul, lise, üniversite',
    group: 'b2b',
    intro: L('Eğitim kurumu temizliği', 'sınıf, koridor ve ortak alanlarda çocuk güvenliği öncelikli'),
    highlights: [
      'Teneffüs ve ders saatlerine göre planlama',
      'Tuvalet ve kantin çevresi hijyen odaklı',
      'Tatil ve yarıyıl dönemleri için derin temizlik'
    ]
  },
  {
    slug: 'hastane-saglik-kurumu-temizligi',
    name: 'Hastane ve Sağlık Kurumu Temizliği',
    shortLabel: 'Sağlık',
    tagline: 'Klinik, poliklinik, laboratuvar',
    group: 'b2b',
    intro: L('Sağlık tesisi temizliği', 'hasta ve personel güvenliği için kontrollü uygulama'),
    highlights: [
      'Bekleme ve muayene alanlarında düzenli döngü',
      'Zemin ve temas yüzeylerinde uygun dezenfeksiyon',
      'Risk alanları için ayrılmış ekipman kullanımı'
    ]
  },
  {
    slug: 'kurumsal-ofis-temizligi',
    name: 'Ofis Temizliği',
    shortLabel: 'Ofis',
    tagline: 'Kurumsal ofisler, iş merkezleri, coworking alanlar',
    group: 'b2b',
    intro: L('Kurumsal ofis temizliği', 'çalışma alanları ve ortak kullanım için düzenli bakım'),
    highlights: [
      'Mesai öncesi / sonrası veya haftalık plan',
      'Toplantı odası ve mutfak alanları dahil',
      'Çöp ve geri dönüşüm ayrıştırma'
    ]
  },
  {
    slug: 'avm-magaza-temizligi',
    name: 'AVM ve Mağaza Temizliği',
    shortLabel: 'AVM',
    tagline: 'Alışveriş merkezleri, mağazalar, showroomlar',
    group: 'b2b',
    intro: L('AVM ve mağaza temizliği', 'yürüyüş yolları ve vitrin öncelikli görünüm'),
    highlights: [
      'Yoğun saatlerde görünür alan odaklı ekip',
      'Showroom ve depo alanlarında ayrı modüller',
      'Özel gün ve kampanya dönemleri için ekstra'
    ]
  },
  {
    slug: 'fabrika-sanayi-temizligi',
    name: 'Fabrika ve Sanayi Temizliği',
    shortLabel: 'Sanayi',
    tagline: 'Üretim alanları, depolar, atölyeler',
    group: 'b2b',
    intro: L('Sanayi temizliği', 'üretim hattı güvenliği ve zemin bakımı ile'),
    highlights: [
      'Depo ve stok alanlarında zemin ve raf temizliği',
      'Atölye ve hafif üretim alanları için uygun ekipman',
      'Vardiya veya üretim duruşlarına göre planlama'
    ]
  },
  {
    slug: 'insaat-sonrasi-temizlik',
    name: 'İnşaat Sonrası Temizlik',
    shortLabel: 'İnşaat sonrası',
    tagline: 'Konut veya iş yeri inşaat sonrası derin temizlik',
    group: 'b2b',
    intro: L('İnşaat sonrası temizlik', 'toz, talaş ve etiket kalıntılarına karşı kapsamlı uygulama'),
    highlights: [
      'Cam, zemin ve banyo mutfak detayları',
      'Havalandırma ve genel ortam tozu kontrolü',
      'Teslim öncesi son kontrol turu'
    ]
  },
  {
    slug: 'otel-konaklama-temizligi',
    name: 'Oteller ve Konaklama Temizliği',
    shortLabel: 'Otel',
    tagline: 'Otel odaları, lobiler, ortak alanlar',
    group: 'b2b',
    intro: L('Otel temizliği', 'oda devirleri ve ortak alan yoğunluğuna göre'),
    highlights: [
      'Oda ve süit standartlarına uyum',
      'Lobi, asansör ve spa çevresi programlar',
      'Sezon ve doluluk artışında ekstra ekip'
    ]
  },
  {
    slug: 'restoran-kafe-temizligi',
    name: 'Restoran ve Kafe Temizliği',
    shortLabel: 'Restoran',
    tagline: 'Mutfak, salon, WC temizlikleri',
    group: 'b2b',
    intro: L('Restoran temizliği', 'mutfak hijyenine ve misafir alanına özel protokol'),
    highlights: [
      'Mutfak zemin ve tezgâh çevresi',
      'Salon ve bar alanlarında kapanış sonrası',
      'WC ve personel alanları düzenli döngü'
    ]
  },
  {
    slug: 'havaalani-terminal-temizligi',
    name: 'Havaalanı ve Terminal Temizliği',
    shortLabel: 'Terminal',
    tagline: 'Bekleme salonları, lavabolar, ofis alanları',
    group: 'b2b',
    intro: L('Terminal temizliği', 'yoğun yolcu trafiğine uygun sürekli bakım'),
    highlights: [
      'Bekleme ve yürüyüş yolları yoğunluk planı',
      'Lavabo ve ortak yüzeylerde sık aralık',
      'Ofis ve idari birimler için ayrı program'
    ]
  },
  {
    slug: 'arac-filosu-temizligi',
    name: 'Araç Filosu / Araç Temizliği',
    shortLabel: 'Araç filosu',
    tagline: 'Şirket araçları, servisler, otobüsler',
    group: 'b2b',
    intro: L('Filo araç temizliği', 'iç / dış detay ve düzenli bakım paketleri'),
    highlights: [
      'Servis ve minibüs içi koltuk / zemin',
      'Periyodik dış yıkama koordinasyonu',
      'Kurumsal filo için sabit gün programı'
    ]
  },
  {
    slug: 'ev-hane-temizligi',
    name: 'Ev / Hane Temizliği',
    shortLabel: 'Ev',
    tagline: 'Düzenli temizlik, haftalık, aylık',
    group: 'b2c',
    intro: L('Ev temizliği', 'genel yaşam alanları ve düzenli bakım paketleri'),
    highlights: [
      'Haftalık veya aylık sabit gün seçenekleri',
      'Oda ve mutfak banyo öncelik sıralaması',
      'Evde bulunan malzemeleri veya bizim getirdiklerimizi kullanma'
    ]
  },
  {
    slug: 'daire-temizligi',
    name: 'Daire Temizliği',
    shortLabel: 'Daire',
    tagline: 'Taşınma öncesi veya sonrası temizlik',
    group: 'b2c',
    intro: L('Daire temizliği', 'tek seferlik derin veya taşınma odaklı paketler'),
    highlights: [
      'Taşınma öncesi boş daire teslim hazırlığı',
      'Taşınma sonrası dolap ve zemin detayı',
      'Kısa süreli randevu ile hızlı planlama'
    ]
  },
  {
    slug: 'apartman-temizligi',
    name: 'Apartman Temizliği',
    shortLabel: 'Apartman',
    tagline: 'Ortak alanlar, merdiven, asansör, site temizliği',
    group: 'b2c',
    intro: L('Apartman ve site temizliği', 'ortak kullanım ve görünür alanlarda düzenli bakım'),
    highlights: [
      'Merdiven, asansör önü ve otopark çevresi',
      'Yönetim ile aylık veya haftalık sözleşme',
      'Site girişi ve çocuk oyun alanı çevresi'
    ]
  },
  {
    slug: 'villa-temizligi',
    name: 'Villa Temizliği',
    shortLabel: 'Villa',
    tagline: 'Büyük konut, site ve müstakil evler',
    group: 'b2c',
    intro: L('Villa temizliği', 'geniş metrekâre ve çok katlı planlama ile'),
    highlights: [
      'İç mekân ve mutfak banyo yoğun kullanım',
      'Bahçe girişi ve teras bağlantıları',
      'Ek süre ve ekip ile büyük alan desteği'
    ]
  },
  {
    slug: 'cam-pencere-temizligi',
    name: 'Cam ve Pencere Temizliği',
    shortLabel: 'Cam',
    tagline: 'Ev ve kurumsal alanlar için',
    group: 'b2c',
    intro: L('Cam temizliği', 'iç ve dış erişim olanaklarına göre güvenli uygulama'),
    highlights: [
      'Dubleks ve yüksek girişlerde ekipman seçimi',
      'Çerçeve ve pervaz detayı',
      'Periyodik kurumsal anlaşmalar'
    ]
  },
  {
    slug: 'hali-koltuk-temizligi',
    name: 'Halı ve Koltuk Temizliği',
    shortLabel: 'Halı / koltuk',
    tagline: 'Ev ve ofis için profesyonel yıkama',
    group: 'b2c',
    intro: L('Halı ve koltuk temizliği', 'dokuma tipine uygun leke ve genel bakım'),
    highlights: [
      'Koltuk ve kanepe başına süre planı',
      'Halı ve kilim için uygun ürün seçimi',
      'Kuruma süresi için randevu önerisi'
    ]
  },
  {
    slug: 'banyo-mutfak-derin-temizligi',
    name: 'Banyo ve Mutfak Derin Temizliği',
    shortLabel: 'Banyo / mutfak',
    tagline: 'Ev veya kiralık konutlar',
    group: 'b2c',
    intro: L('Banyo ve mutfak derin temizliği', 'fayans, dolap ve beyaz eşya çevresi detay'),
    highlights: [
      'Kireç ve yağ birikimi odaklı noktalar',
      'Dolap içi ve raf düzeni (istenirse)',
      'Kiracı çıkışı veya girişi öncesi paket'
    ]
  },
  {
    slug: 'bahce-dis-alan-temizligi',
    name: 'Bahçe / Dış Alan Temizliği',
    shortLabel: 'Bahçe',
    tagline: 'Dış cephe, balkon, teras',
    group: 'b2c',
    intro: L('Dış alan temizliği', 'balkon, teras ve çevre düzenleme ile birlikte'),
    highlights: [
      'Balkon cam ve zemin yıkama',
      'Teras mobilya ve örtü çevresi',
      'Hafif dış cephe ve giriş basamağı'
    ]
  },
  {
    slug: 'tasinma-temizligi',
    name: 'Taşınma Temizliği',
    shortLabel: 'Taşınma',
    tagline: 'Ev veya ofis taşınmalarında temizlik',
    group: 'b2c',
    intro: L('Taşınma temizliği', 'eski veya yeni adres için tek seferlik paketler'),
    highlights: [
      'Boşaldıktan sonra detaylı temizlik',
      'Yeni adres öncesi hazırlık',
      'Ofis ve ev için ayrı süre tahmini'
    ]
  },
  {
    slug: 'kiralik-konut-temizligi',
    name: 'Kiralık Konut Temizliği',
    shortLabel: 'Kiralık',
    tagline: 'Ev sahibi veya kiracı için profesyonel temizlik',
    group: 'b2c',
    intro: L('Kiralık konut temizliği', 'depozito ve teslim süreçlerine uygun kapsam'),
    highlights: [
      'Çıkış öncesi detaylı teslim paketi',
      'Yeni kiracı için giriş öncesi hazırlık',
      'Ev sahibi ile koordineli randevu'
    ]
  },
  {
    slug: 'depo-lojistik-temizligi',
    name: 'Depo ve Lojistik Temizliği',
    shortLabel: 'Depo',
    tagline: 'Raflar, zeminler, stok alanları',
    group: 'ozel',
    intro: L('Depo temizliği', 'raflar, zemin ve stok geçiş koridorları'),
    highlights: [
      'Zemin ve palet alanı toz kontrolü',
      'Raf altı ve depo köşe detayları',
      'Sevkiyat öncesi hızlı tur'
    ]
  },
  {
    slug: 'laboratuvar-temiz-oda-temizligi',
    name: 'Laboratuvar ve Temiz Oda Temizliği',
    shortLabel: 'Lab / temiz oda',
    tagline: 'Steril alanlar için özel temizlik',
    group: 'ozel',
    intro: L('Temiz oda temizliği', 'protokol ve giriş kurallarına saygılı uygulama'),
    highlights: [
      'Yüzey ve zemin özel ürün seçimi',
      'Giriş öncesi ekip bilgilendirmesi',
      'Periyodik veya proje bazlı planlama'
    ]
  },
  {
    slug: 'etkinlik-organizasyon-temizligi',
    name: 'Etkinlik / Organizasyon Temizliği',
    shortLabel: 'Etkinlik',
    tagline: 'Düğün, fuar, konser sonrası',
    group: 'ozel',
    intro: L('Etkinlik temizliği', 'etkinlik bitiminde hızlı ve kapsamlı toplama'),
    highlights: [
      'Gece bitimine veya ertesi güne plan',
      'Sahne ve seyirci alanı ayrı ekip',
      'Çöp ve geri dönüşüm ayrıştırma'
    ]
  },
  {
    slug: 'cam-cephe-yuksek-bina-temizligi',
    name: 'Cam Cephe / Yüksek Bina Temizliği',
    shortLabel: 'Cephe',
    tagline: 'Dış cephe ve vitrin temizliği',
    group: 'ozel',
    intro: L('Cephe temizliği', 'yükseklik ve erişim için sertifikalı ekip koordinasyonu'),
    highlights: [
      'Güvenlik ve hava koşulu değerlendirmesi',
      'Bina yönetimi ile izin süreçleri',
      'Periyodik yıllık anlaşmalar'
    ]
  },
  {
    slug: 'su-hasari-kotu-koku-temizligi',
    name: 'Su Hasarı / Kötü Koku Temizliği',
    shortLabel: 'Su hasarı',
    tagline: 'Acil müdahale ve hijyen temizliği',
    group: 'ozel',
    intro: L('Su hasarı sonrası temizlik', 'kurutma ekipleri ile koordineli hijyen adımları'),
    highlights: [
      'Hasar bölgesi sınırlandırma ve temizlik',
      'Koku kaynağına yönelik yüzey işlemi',
      'Acil öncelikli randevu'
    ]
  },
  {
    slug: 'hijyen-dezenfeksiyon-hizmeti',
    name: 'Hijyen ve Dezenfeksiyon Hizmeti',
    shortLabel: 'Hijyen',
    tagline: 'Pandemi / özel hijyen alanları',
    group: 'ozel',
    intro: L('Dezenfeksiyon', 'temas yüzeyleri ve ortak kullanım odaklı uygulama'),
    highlights: [
      'Rutin veya tek seferlik yoğun paket',
      'Ofis ve mağaza için geniş alan planı',
      'Ürün seçimi ve havalandırma önerisi'
    ]
  },
  {
    slug: 'endustriyel-temizlik',
    name: 'Endüstriyel Temizlik',
    shortLabel: 'Endüstriyel',
    tagline: 'Büyük makineler, üretim hatları, ağır temizlik',
    group: 'ozel',
    intro: L('Endüstriyel temizlik', 'makine çevresi ve hat güvenliği ile uyumlu'),
    highlights: [
      'Üretim duruşlarına göre zamanlama',
      'Ağır kir ve yağ için özel ürünler',
      'Ekip güvenliği ve iş giriş kuralları'
    ]
  },
  {
    slug: 'post-construction-nis-temizlik',
    name: 'Post-Construction / İnşaat Sonrası Niş Temizlik',
    shortLabel: 'Niş inşaat sonrası',
    tagline: 'Detaylı ve özel alan temizliği',
    group: 'ozel',
    intro: L('Niş inşaat sonrası temizlik', 'ince işçilik ve hassas yüzeyler için özel program'),
    highlights: [
      'Özel yüzey ve malzeme testi',
      'Detaylı köşe ve profil temizliği',
      'Teslim öncesi son kontrol listesi'
    ]
  }
];

function findService(slug) {
  return serviceCategories.find((s) => s.slug === slug) || null;
}

function servicesInGroup(groupId) {
  return serviceCategories.filter((s) => s.group === groupId);
}

module.exports = {
  serviceGroups,
  serviceCategories,
  findService,
  servicesInGroup
};
