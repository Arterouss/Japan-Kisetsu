export type JapanRegion = {
  id: string
  name: string
  japaneseName: string
  kanji: string
  hubCity: string
  color: string
  prefectures: string[]
  bestSeason: string
  bestSeasonKanji: string
  tempRange: {
    spring: string
    summer: string
    autumn: string
    winter: string
  }
  description: string
  specialties: {
    name: string
    kanji: string
    description: string
  }[]
  topAttractions: {
    name: string
    city: string
    tag: string
  }[]
  iconicMatsuri: string
  svgCoords: {
    labelX: number
    labelY: number
  }
}

export const japanRegions: JapanRegion[] = [
  {
    id: 'hokkaido',
    name: 'Hokkaido',
    japaneseName: '北海道 (Hokkaidō)',
    kanji: '北海',
    hubCity: 'Sapporo',
    color: '#38bdf8', // Ice blue
    prefectures: ['Hokkaido'],
    bestSeason: 'Musim Dingin (Salju Terbaik) & Musim Panas (Ladang Lavender)',
    bestSeasonKanji: '冬・夏',
    tempRange: {
      spring: '5°C ~ 15°C',
      summer: '17°C ~ 26°C',
      autumn: '7°C ~ 16°C',
      winter: '-8°C ~ 0°C',
    },
    description:
      'Pulau paling utara Jepang yang terkenal dengan salju bubuk (powder snow) kelas dunia, taman nasional megah, ladang bunga Furano, dan surga kuliner laut terlezat.',
    specialties: [
      { name: 'Sapporo Miso Ramen', kanji: '味噌ラーメン', description: 'Ramen kuah miso gurih dengan mentega dan jagung manis' },
      { name: 'Kani (Kepiting Raja)', kanji: 'カニ', description: 'Kepiting segar Taraba & Kegani dengan daging manis tebal' },
      { name: 'Shiroi Koibito & Dairy', kanji: '白い恋人', description: 'Susu segar dan biskuit cokelat putih khas Hokkaido' },
    ],
    topAttractions: [
      { name: 'Otaru Canal', city: 'Otaru', tag: 'Romantis / Bersejarah' },
      { name: 'Niseko Ski Resort', city: 'Niseko', tag: 'Powder Snow' },
      { name: 'Furano Flower Fields', city: 'Furano', tag: 'Lavender & Bunga' },
    ],
    iconicMatsuri: 'Sapporo Snow Festival (さっぽろ雪まつり) — Februari',
    svgCoords: { labelX: 470, labelY: 90 },
  },
  {
    id: 'tohoku',
    name: 'Tohoku',
    japaneseName: '東北地方 (Tōhoku)',
    kanji: '東北',
    hubCity: 'Sendai',
    color: '#34d399', // Emerald
    prefectures: ['Aomori', 'Iwate', 'Miyagi', 'Akita', 'Yamagata', 'Fukushima'],
    bestSeason: 'Musim Gugur (Daun Merah Hutan Lindung) & Musim Dingin (Monster Salju Zao)',
    bestSeasonKanji: '秋・冬',
    tempRange: {
      spring: '8°C ~ 18°C',
      summer: '20°C ~ 28°C',
      autumn: '10°C ~ 19°C',
      winter: '-4°C ~ 4°C',
    },
    description:
      'Wilayah tenang penuh keasrian alam pegunungan, onsen tersembunyi, tradisi samurai kuno di Kakunodate, dan festival lentera raksasa musim panas yang megah.',
    specialties: [
      { name: 'Gyutan Sendai', kanji: '牛タン', description: 'Lidah sapi panggang arang khas Sendai dengan bumbu garam lembut' },
      { name: 'Wanko Soba', kanji: 'わんこそば', description: 'Tradisi makan mie soba mini berulang kali di mangkuk kecil Iwate' },
      { name: 'Apel Aomori', kanji: '青森りんご', description: 'Apel terlezat dan termanis nomor satu di Jepang' },
    ],
    topAttractions: [
      { name: 'Zao Snow Monsters', city: 'Yamagata', tag: 'Fenomena Frost' },
      { name: 'Hirosaki Castle Park', city: 'Aomori', tag: '5000 Pohon Sakura' },
      { name: 'Oirase Mountain Stream', city: 'Aomori', tag: 'Lanskap Alam Asri' },
    ],
    iconicMatsuri: 'Aomori Nebuta Matsuri (青森ねぶた祭) — Agustus',
    svgCoords: { labelX: 430, labelY: 195 },
  },
  {
    id: 'kanto',
    name: 'Kanto',
    japaneseName: '関東地方 (Kantō)',
    kanji: '関東',
    hubCity: 'Tokyo',
    color: '#f43f5e', // Vibrant crimson
    prefectures: ['Tokyo', 'Kanagawa', 'Chiba', 'Saitama', 'Ibaraki', 'Tochigi', 'Gunma'],
    bestSeason: 'Musim Semi (Sakura Tokyo & Kamakura) & Musim Gugur (Nikko)',
    bestSeasonKanji: '春・秋',
    tempRange: {
      spring: '13°C ~ 22°C',
      summer: '24°C ~ 33°C',
      autumn: '14°C ~ 22°C',
      winter: '2°C ~ 12°C',
    },
    description:
      'Pusat metropolitan ultramodern dunia yang berdampingan dengan kuil kuno Asakusa, keagungan warisan UNESCO Nikko, dan pesisir bersejarah Kamakura.',
    specialties: [
      { name: 'Edomae Sushi', kanji: '江戸前寿司', description: 'Sushi otentik gaya Edo dengan ikan segar tangkapan teluk Tokyo' },
      { name: 'Monjayaki & Yakitori', kanji: 'もんじゃ焼き', description: 'Pancake gurih khas Tsukishima dan sate ayam arang' },
      { name: 'Utsunomiya Gyoza', kanji: '宇都宮餃子', description: 'Gyoza renyah keemasan khas ibukota gyoza Jepang' },
    ],
    topAttractions: [
      { name: 'Shibuya & Senso-ji', city: 'Tokyo', tag: 'Modern & Tradisi' },
      { name: 'Toshogu Shrine', city: 'Nikko', tag: 'Warisan Dunia UNESCO' },
      { name: 'Great Buddha of Kamakura', city: 'Kamakura', tag: 'Patung Perunggu Kuno' },
    ],
    iconicMatsuri: 'Sumida River Fireworks (隅田川花火大会) & Sanja Matsuri — Mei & Juli',
    svgCoords: { labelX: 405, labelY: 290 },
  },
  {
    id: 'chubu',
    name: 'Chubu',
    japaneseName: '中部地方 (Chūbu)',
    kanji: '中部',
    hubCity: 'Nagoya / Kanazawa',
    color: '#fbbf24', // Warm gold
    prefectures: ['Yamanashi', 'Nagano', 'Niigata', 'Toyama', 'Ishikawa', 'Fukui', 'Gifu', 'Shizuoka', 'Aichi'],
    bestSeason: 'Sepanjang Tahun (Fuji di Musim Semi, Shirakawa-go di Salju Musim Dingin)',
    bestSeasonKanji: '四季',
    tempRange: {
      spring: '10°C ~ 20°C',
      summer: '22°C ~ 31°C',
      autumn: '11°C ~ 20°C',
      winter: '-2°C ~ 8°C',
    },
    description:
      'Jantung pulau Honshu yang menaungi Gunung Fuji yang sakral, desa atap jerami Shirakawa-go, kota tua Takayama, dan Pegunungan Alpen Jepang yang memukau.',
    specialties: [
      { name: 'Hida Beef Wagyu', kanji: '飛騨牛', description: 'Daging wagyu marmer lembut meleleh khas pegunungan Gifu' },
      { name: 'Hitsumabushi Nagoya', kanji: 'ひつまぶし', description: 'Belut panggang unagi dengan 3 cara penyajian khas Nagoya' },
      { name: 'Echigo Sake & Koshihikari', kanji: '越後日本酒', description: 'Beras terbaik dan sake murni dari mata air salju' },
    ],
    topAttractions: [
      { name: 'Mt. Fuji & Kawaguchiko', city: 'Yamanashi', tag: 'Ikon Tertinggi Jepang' },
      { name: 'Shirakawa-go Gassho', city: 'Gifu', tag: 'UNESCO World Heritage' },
      { name: 'Kenroku-en Garden', city: 'Kanazawa', tag: '3 Taman Terindah Jepang' },
    ],
    iconicMatsuri: 'Takayama Matsuri (高山祭) — April & Oktober',
    svgCoords: { labelX: 345, labelY: 285 },
  },
  {
    id: 'kansai',
    name: 'Kansai',
    japaneseName: '関西地方 (Kansai / Kinki)',
    kanji: '関西',
    hubCity: 'Kyoto / Osaka',
    color: '#f97316', // Vibrant orange
    prefectures: ['Kyoto', 'Osaka', 'Hyogo', 'Nara', 'Shiga', 'Wakayama', 'Mie'],
    bestSeason: 'Musim Semi (Bunga Sakura Kyoto) & Musim Gugur (Pohon Momiji Merah Kemerahan)',
    bestSeasonKanji: '春・秋',
    tempRange: {
      spring: '12°C ~ 21°C',
      summer: '24°C ~ 34°C',
      autumn: '13°C ~ 22°C',
      winter: '3°C ~ 11°C',
    },
    description:
      'Pusat kebudayaan ribuan tahun Jepang: ribuan kuil Kyoto, rusa ramah Nara, gemerlap surga kuliner malam Dotonbori Osaka, dan daging Kobe legendaris.',
    specialties: [
      { name: 'Takoyaki & Okonomiyaki', kanji: 'たこ焼き', description: 'Street food gurih legendaris penguasa dapur Jepang, Osaka' },
      { name: 'Kaiseki & Uji Matcha', kanji: '京料理・抹茶', description: 'Perjamuan bangsawan Kyoto dan teh hijau nomor satu' },
      { name: 'Kobe Wagyu Beef', kanji: '神戸牛', description: 'Daging sapi paling prestisius di dunia dengan marbling sempurna' },
    ],
    topAttractions: [
      { name: 'Fushimi Inari & Kinkaku-ji', city: 'Kyoto', tag: 'Kuil Bersejarah Kuno' },
      { name: 'Dotonbori & Osaka Castle', city: 'Osaka', tag: 'Kuliner & Lampu Neon' },
      { name: 'Nara Deer Park', city: 'Nara', tag: 'Rusa Suci & Todai-ji' },
    ],
    iconicMatsuri: 'Kyoto Gion Matsuri (祇園祭) & Tenjin Matsuri — Juli',
    svgCoords: { labelX: 280, labelY: 310 },
  },
  {
    id: 'chugoku',
    name: 'Chugoku',
    japaneseName: '中国地方 (Chūgoku)',
    kanji: '中国',
    hubCity: 'Hiroshima',
    color: '#a855f7', // Purple
    prefectures: ['Hiroshima', 'Okayama', 'Tottori', 'Shimane', 'Yamaguchi'],
    bestSeason: 'Musim Semi & Musim Gugur (Pulau Torii Terapung & Kanal Kurashiki)',
    bestSeasonKanji: '春・秋',
    tempRange: {
      spring: '11°C ~ 21°C',
      summer: '23°C ~ 32°C',
      autumn: '13°C ~ 22°C',
      winter: '3°C ~ 11°C',
    },
    description:
      'Wilayah pesisir Laut Pedalaman Seto yang menawan, gerbang Torii terapung Itsukushima di Miyajima, bukti perdamaian dunia Hiroshima, dan bukit pasir eksotis Tottori.',
    specialties: [
      { name: 'Hiroshima Okonomiyaki', kanji: '広島風お好み焼き', description: 'Okonomiyaki lapis dengan mie yakisoba, tauge, dan saus kental' },
      { name: 'Tiram Laut Miyajima (Kaki)', kanji: '牡蠣', description: 'Tiram bakar segar gemuk dari perairan Seto' },
      { name: 'Buah Persik Okayama', kanji: '白桃', description: 'Buah persik putih manis juicy kebanggaan negeri dongeng Momotaro' },
    ],
    topAttractions: [
      { name: 'Itsukushima Shrine', city: 'Miyajima', tag: 'Torii Terapung di Laut' },
      { name: 'Hiroshima Peace Memorial', city: 'Hiroshima', tag: 'Monumen Bersejarah' },
      { name: 'Tottori Sand Dunes', city: 'Tottori', tag: 'Gurun Pasir Jepang' },
    ],
    iconicMatsuri: 'Miyajima Kangensai (管絃祭) & Hiroshima Flower Festival — Mei & Agustus',
    svgCoords: { labelX: 205, labelY: 315 },
  },
  {
    id: 'shikoku',
    name: 'Shikoku',
    japaneseName: '四国地方 (Shikoku)',
    kanji: '四国',
    hubCity: 'Takamatsu / Matsuyama',
    color: '#06b6d4', // Cyan
    prefectures: ['Tokushima', 'Kagawa', 'Ehime', 'Kochi'],
    bestSeason: 'Musim Panas (Festival Tari Awa Odori) & Musim Semi (Taman Ritsurin)',
    bestSeasonKanji: '夏・春',
    tempRange: {
      spring: '12°C ~ 21°C',
      summer: '24°C ~ 33°C',
      autumn: '14°C ~ 23°C',
      winter: '4°C ~ 12°C',
    },
    description:
      'Pulau spiritual dengan rute ziarah 88 kuil kuno Henro, mata air panas tertua di Jepang Dogo Onsen, lembah ngarai jembatan akar Iya Valley, dan surga mie udon.',
    specialties: [
      { name: 'Sanuki Udon Kagawa', kanji: '讃岐うどん', description: 'Mie udon paling kenyal dan terkenal di seluruh penjuru Jepang' },
      { name: 'Katsuo no Tataki Kochi', kanji: 'カツオのたたき', description: 'Ikan cakalang bakar jerami wangi dengan bawang putih segar' },
      { name: 'Jeruk Mikan Ehime', kanji: '温州みかん', description: 'Jeruk manis segar dan aneka sari buah citrus khas Shikoku' },
    ],
    topAttractions: [
      { name: 'Dogo Onsen Honkan', city: 'Matsuyama', tag: 'Onsen Tertua 3000 Tahun' },
      { name: 'Ritsurin Garden', city: 'Takamatsu', tag: 'Taman Lanskap Feodal' },
      { name: 'Iya Valley Vine Bridges', city: 'Tokushima', tag: 'Jembatan Akar Ngarai' },
    ],
    iconicMatsuri: 'Tokushima Awa Odori (阿波おどり) — Agustus (Festival Tari Terbesar)',
    svgCoords: { labelX: 215, labelY: 360 },
  },
  {
    id: 'kyushu-okinawa',
    name: 'Kyushu & Okinawa',
    japaneseName: '九州・沖縄地方 (Kyūshū & Okinawa)',
    kanji: '九州',
    hubCity: 'Fukuoka / Naha',
    color: '#ec4899', // Pink rose
    prefectures: ['Fukuoka', 'Saga', 'Nagasaki', 'Kumamoto', 'Oita', 'Miyazaki', 'Kagoshima', 'Okinawa'],
    bestSeason: 'Musim Dingin (Onsen Beppu & Suhu Ramah) & Musim Panas (Pantai Tropis Okinawa)',
    bestSeasonKanji: '冬・夏',
    tempRange: {
      spring: '14°C ~ 23°C',
      summer: '25°C ~ 34°C',
      autumn: '16°C ~ 24°C',
      winter: '7°C ~ 15°C',
    },
    description:
      'Pulau vulkanik hangat dengan sumber air panas onsen Beppu & Yufuin, ramen tonkotsu Hakata yang legendaris, serta pulau tropis Okinawa dengan terumbu karang zamrud.',
    specialties: [
      { name: 'Hakata Tonkotsu Ramen', kanji: '博多ラーメン', description: 'Ramen kuah kaldu tulang babi kental gurih khas kedai Yatai Fukuoka' },
      { name: 'Kagoshima Kurobuta Pork', kanji: '黒豚', description: 'Daging babi hitam kualitas tertinggi untuk tonkatsu renyah' },
      { name: 'Okinawa Soba & Goya Chanpuru', kanji: '沖縄そば', description: 'Masakan khas pulau tropis dengan peria dan iga empuk' },
    ],
    topAttractions: [
      { name: 'Hells of Beppu Onsen', city: 'Oita', tag: '7 Kolam Air Panas Ajaib' },
      { name: 'Kumamoto Castle', city: 'Kumamoto', tag: 'Kastil Megah Samurai' },
      { name: 'Ishigaki & Kerama Islands', city: 'Okinawa', tag: 'Surga Snorkeling Tropis' },
    ],
    iconicMatsuri: 'Hakata Gion Yamakasa (博多祇園山笠) — Juli',
    svgCoords: { labelX: 125, labelY: 380 },
  },
]
