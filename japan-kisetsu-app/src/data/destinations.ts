export type Destination = {
  id: string
  name: string
  japaneseName: string
  prefecture: string
  seasonId: 'haru' | 'natsu' | 'aki' | 'fuyu' | 'tsuyu'
  seasonLabel: string
  seasonKanji: string
  bestTime: string
  temperature: string
  image: string
  description: string
  highlights: string[]
  accessInfo: string
  travelTips: string
}

export const destinations: Destination[] = [
  {
    id: 'fushimi-philosopher',
    name: "Philosopher's Path & Fushimi Inari",
    japaneseName: '哲学の道・伏見稲荷大社',
    prefecture: 'Kyoto (京都府)',
    seasonId: 'haru',
    seasonLabel: 'Spring',
    seasonKanji: '春',
    bestTime: 'Akhir Maret – Pertengahan April',
    temperature: '12°C – 19°C',
    image: '/images/Spring.jpg',
    description:
      'Jalan setapak batu sepanjang kanal di kaki bukit Higashiyama yang dinaungi ratusan pohon sakura berpadu dengan ribuan gerbang torii merah khas Fushimi Inari.',
    highlights: ['Terowongan Sakura Kanal', 'Gerbang Torii Ikonik', 'Kedai Teh Tradisional Matcha'],
    accessInfo: '20 menit naik bus kota Kyoto dari Stasiun Kyoto atau 5 menit jalan dari Stasiun JR Inari.',
    travelTips: 'Kunjungi Philosopher’s Path saat pagi hari (07:00) sebelum dipadati rombongan turis untuk menikmati suasana tenang hanami.',
  },
  {
    id: 'chureito-fuji',
    name: 'Chureito Pagoda & Mt. Fuji',
    japaneseName: '新倉山浅間公園・富士山',
    prefecture: 'Yamanashi (山梨県)',
    seasonId: 'haru',
    seasonLabel: 'Spring',
    seasonKanji: '春',
    bestTime: 'Awal April – Pertengahan April',
    temperature: '10°C – 17°C',
    image: '/images/Spring.jpg',
    description:
      'Pemandangan paling ikonik di seluruh Jepang yang memadukan Pagoda lima tingkat Chureito, lautan bunga sakura mekar, dan megahnya Gunung Fuji berselimut salju di kejauhan.',
    highlights: ['Spot Foto Paling Ikonik Jepang', 'Festival Sakura Arakurayama', 'Pemandangan 398 Anak Tangga'],
    accessInfo: '15 menit jalan kaki dari Stasiun Shimoyoshida (Jalur Fujikyuko).',
    travelTips: 'Siapkan stamina untuk menaiki 398 anak tangga, dan datanglah saat langit cerah di pagi hari agar puncak Fuji terlihat jelas.',
  },
  {
    id: 'sumida-fireworks',
    name: 'Sumida River Fireworks Festival',
    japaneseName: '隅田川花火大会',
    prefecture: 'Tokyo (東京都)',
    seasonId: 'natsu',
    seasonLabel: 'Summer',
    seasonKanji: '夏',
    bestTime: 'Sabtu Terakhir Bulan Juli',
    temperature: '26°C – 32°C',
    image: '/images/Summer.jpg',
    description:
      'Festival kembang api tertua dan termegah di Jepang yang menerangi langit Tokyo di dekat Tokyo Skytree dengan lebih dari 20.000 kembang api spektakuler.',
    highlights: ['20.000+ Kembang Api', 'Pengalaman Berbusana Yukata', 'Street Food Tradisional Yatai'],
    accessInfo: '5 menit jalan kaki dari Stasiun Asakusa (Tokyo Metro Ginza Line).',
    travelTips: 'Sewa baju tradisional Yukata dari kawasan Asakusa di siang hari dan amankan posisi menonton di tepi sungai sejak sore.',
  },
  {
    id: 'kamikochi-alps',
    name: 'Kamikochi Alpine Highlands',
    japaneseName: '上高地・北アルプス',
    prefecture: 'Nagano (長野県)',
    seasonId: 'natsu',
    seasonLabel: 'Summer',
    seasonKanji: '夏',
    bestTime: 'Juli – Agustus',
    temperature: '18°C – 24°C (Sejuk Pegunungan)',
    image: '/images/Summer.jpg',
    description:
      'Lembah pegunungan Alpen Jepang yang asri dengan air sungai Azusa sebening kristal, Jembatan Kappa yang melegenda, serta udara sejuk yang menjadi tempat pelarian sempurna dari terik musim panas.',
    highlights: ['Jembatan Gantung Kappa-bashi', 'Air Sungai Sebening Kaca', 'Jalur Trekking Hutan Pinus'],
    accessInfo: 'Naik bus wisata langsung dari Stasiun Matsumoto atau Stasiun Takayama (sekitar 1,5 jam).',
    travelTips: 'Bawalah jaket tipis karena udara pegunungan bisa cukup dingin di pagi dan malam hari, serta kenakan sepatu jalan yang nyaman.',
  },
  {
    id: 'arashiyama-autumn',
    name: 'Arashiyama & Hozu River Gorge',
    japaneseName: '嵐山・保津峡',
    prefecture: 'Kyoto (京都府)',
    seasonId: 'aki',
    seasonLabel: 'Autumn',
    seasonKanji: '秋',
    bestTime: 'Pertengahan November – Awal Desember',
    temperature: '11°C – 18°C',
    image: '/images/Auntum.jpg',
    description:
      'Perbukitan Arashiyama yang diselimuti karpet dedaunan merah-keemasan (momiji), dilengkapi pelayaran perahu kayu tradisional menyusuri ngarai sungai Hozu yang eksotis.',
    highlights: ['Ngarai Momiji Hozugawa', 'Jembatan Bersejarah Togetsukyo', 'Kuil Tenryu-ji berlatar Daun Merah'],
    accessInfo: '15 menit naik kereta JR San-in Line dari Stasiun Kyoto menuju Stasiun Saga-Arashiyama.',
    travelTips: 'Coba naik Kereta Romantis Sagano Scenic Railway untuk melihat panorama daun musim gugur langsung dari jendela kereta retro.',
  },
  {
    id: 'nikko-autumn',
    name: 'Nikko National Park & Toshogu',
    japaneseName: '日光国立公園・東照宮',
    prefecture: 'Tochigi (栃木県)',
    seasonId: 'aki',
    seasonLabel: 'Autumn',
    seasonKanji: '秋',
    bestTime: 'Oktober – Awal November',
    temperature: '8°C – 15°C',
    image: '/images/Auntum.jpg',
    description:
      'Kompleks kuil warisan dunia UNESCO berhias ukiran emas megah, dikelilingi hutan cemara kuno dan danau Chuzenji dengan pantulan spektakuler dedaunan musim gugur.',
    highlights: ['Kuil Emas UNESCO Toshogu', 'Air Terjun Kegon Berhias Daun Merah', 'Panorama Danau Chuzenji'],
    accessInfo: '1 jam 50 menit menggunakan Tobu Limited Express Spacia dari Stasiun Asakusa Tokyo ke Stasiun Tobu-Nikko.',
    travelTips: 'Nikko terletak di dataran tinggi, sehingga puncak musim gugurnya lebih awal dibanding Tokyo. Jangan lupa mencoba kuliner khas kembang tahu (Yuba).',
  },
  {
    id: 'shirakawago-winter',
    name: 'Shirakawa-go Historic Village',
    japaneseName: '白川郷・合掌造り集落',
    prefecture: 'Gifu (岐阜県)',
    seasonId: 'fuyu',
    seasonLabel: 'Winter',
    seasonKanji: '冬',
    bestTime: 'Januari – Februari',
    temperature: '-5°C – 3°C',
    image: '/images/Winnter.jpg',
    description:
      'Desa pedalaman warisan UNESCO dengan arsitektur rumah tradisional atap jerami runcing (Gassho-zukuri) yang tampak bagai negeri dongeng saat diselimuti salju tebal berkedalaman 2 meter.',
    highlights: ['Pemandangan Desa Salju Bak Negeri Dongeng', 'Event Iluminasi Malam Musim Dingin', 'Rumah Tradisional Berusia 300+ Tahun'],
    accessInfo: '50 menit naik bus highway Nohi Bus dari Stasiun JR Takayama atau Kanazawa.',
    travelTips: 'Wajib mengenakan sepatu bot tahan air dengan sol anti-selip (ice spikes) dan jaket musim dingin thermal tebal.',
  },
  {
    id: 'otaru-sapporo',
    name: 'Otaru Canal & Sapporo Winter',
    japaneseName: '小樽運河・さっぽろ雪まつり',
    prefecture: 'Hokkaido (北海道)',
    seasonId: 'fuyu',
    seasonLabel: 'Winter',
    seasonKanji: '冬',
    bestTime: 'Februari (Festival Salju)',
    temperature: '-8°C – -1°C',
    image: '/images/Winnter.jpg',
    description:
      'Kanal kota pelabuhan Otaru bernuansa romantis dengan deretan lampu minyak gas antik berlatar gudang bata merah bersalju, dirangkai dengan festival pahatan es raksasa Sapporo Snow Festival.',
    highlights: ['Kanal Romantis Berlampu Gas', 'Sapporo Snow Festival Ice Sculptures', 'Seafood Kepiting Salju & Ramen Miso'],
    accessInfo: '30 menit naik JR Rapid Airport Train dari Stasiun Sapporo ke Stasiun Otaru.',
    travelTips: 'Waktu terbaik menyusuri kanal Otaru adalah saat senja (blue hour) ketika lampu gas mulai menyala dan menciptakan pantulan keemasan di atas salju.',
  },
  {
    id: 'meigetsuin-hydrangea',
    name: 'Meigetsu-in Hydrangea Temple',
    japaneseName: '明月院・あじさい寺',
    prefecture: 'Kamakura, Kanagawa (神奈川県)',
    seasonId: 'tsuyu',
    seasonLabel: 'Rainy',
    seasonKanji: '梅雨',
    bestTime: 'Juni – Awal Juli',
    temperature: '19°C – 25°C',
    image: '/images/Rain.jpg',
    description:
      'Kuil Zen kuno yang terkenal dengan sebutan "Kuil Ajisai" (Bunga Hortensia). Sekitar 2.500 rumpun bunga biru keunguan mekar elok berpadu rintik hujan lembut dan jendela bundar meditasi ikonik.',
    highlights: ['2.500 Bunga Hortensia Biru (Ajisai)', 'Jendela Bundar Zen Ikonik (Satori no Mado)', 'Suasana Mistis Rintik Hujan Tsuyu'],
    accessInfo: '10 menit jalan kaki dari Stasiun Kita-Kamakura (JR Yokosuka Line, 50 menit dari Tokyo).',
    travelTips: 'Bawalah payung transparan bergaya Jepang untuk foto yang lebih estetik dan nikmati aroma tanah basah nan menenangkan di taman bambunya.',
  },
  {
    id: 'hakone-ajisai-onsen',
    name: 'Hakone Hydrangea Railway & Onsen',
    japaneseName: '箱根登山鉄道・あじさい電車',
    prefecture: 'Kanagawa (神奈川県)',
    seasonId: 'tsuyu',
    seasonLabel: 'Rainy',
    seasonKanji: '梅雨',
    bestTime: 'Pertengahan Juni – Juli',
    temperature: '18°C – 24°C',
    image: '/images/Rain.jpg',
    description:
      'Menikmati rintik musim hujan dengan menaiki kereta gunung tertua di Jepang yang meliuk di antara ribuan rumpun bunga hortensia yang menyentuh jendela kereta, diakhiri dengan berendam onsen air panas alami.',
    highlights: ['Kereta Kereta Gunung Bernuansa Hortensia', 'Iluminasi Bunga Malam Hari', 'Pemandian Air Panas Alami (Onsen) Tradisional'],
    accessInfo: '85 menit naik Odakyu Romancecar dari Stasiun Shinjuku Tokyo langsung ke Stasiun Hakone-Yumoto.',
    travelTips: 'Tiket Hakone Freepass sangat menghemat biaya untuk naik kereta gunung, kereta gantung, kapal bajak laut Danau Ashi, dan bus.',
  },
]
