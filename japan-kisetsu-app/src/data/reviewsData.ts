export interface ReviewItem {
  id: string
  name: string
  city: string
  avatar: string
  seasonId: 'haru' | 'natsu' | 'aki' | 'fuyu' | 'tsuyu'
  seasonName: string
  seasonKanji: string
  rating: number
  date: string
  destination: string
  title: string
  story: string
  verified: boolean
  helpfulCount: number
}

export const initialReviews: ReviewItem[] = [
  {
    id: 'rev-1',
    name: 'Rian Pratama',
    city: 'Jakarta, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    seasonId: 'haru',
    seasonName: 'Haru (Spring)',
    seasonKanji: '春',
    rating: 5,
    date: 'April 2025',
    destination: 'Kyoto · Filosof Path & Maruyama Park',
    title: 'Pengalaman Hanami Pertama yang Tak Terlupakan',
    story:
      'Melihat sakura bermekaran di sepanjang kanal Philosopher’s Path Kyoto saat pagi hari benar-benar magis. Kelopak sakura yang gugur menutupi permukaan air seperti karpet merah muda. Panduan rute dan tips pagi hari dari web ini sangat membantu menghindari kerumunan turis!',
    verified: true,
    helpfulCount: 28,
  },
  {
    id: 'rev-2',
    name: 'Alika Maharani',
    city: 'Bandung, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    seasonId: 'fuyu',
    seasonName: 'Fuyu (Winter)',
    seasonKanji: '冬',
    rating: 5,
    date: 'Januari 2025',
    destination: 'Gifu · Shirakawa-go & Takayama',
    title: 'Desa Negeri Dongeng Berselimut Salju Tebal',
    story:
      'Shirakawa-go di puncak musim dingin adalah definisi negeri dongeng di dunia nyata. Rumah gassho-zukuri yang tertutup salju tebal dan lampu hangat saat malam light-up membuat kami tak henti kagum. Tips memesan bus Nouhi via Trip Planner di sini sangat akurat.',
    verified: true,
    helpfulCount: 42,
  },
  {
    id: 'rev-3',
    name: 'Bima Satrio',
    city: 'Surabaya, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    seasonId: 'natsu',
    seasonName: 'Natsu (Summer)',
    seasonKanji: '夏',
    rating: 5,
    date: 'Agustus 2024',
    destination: 'Tokyo · Sumida River Fireworks',
    title: 'Sensasi Memakai Yukata di Festival Kembang Api',
    story:
      'Menyewa yukata di Asakusa dan berjalan menuju Sungai Sumida untuk menonton Hanabi Taikai adalah salah satu kenangan musim panas terindah. Dentuman kembang api spektakuler dengan latar Tokyo Skytree luar biasa meriah!',
    verified: true,
    helpfulCount: 19,
  },
  {
    id: 'rev-4',
    name: 'Clarissa Natalia',
    city: 'Yogyakarta, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80',
    seasonId: 'aki',
    seasonName: 'Aki (Autumn)',
    seasonKanji: '秋',
    rating: 5,
    date: 'November 2024',
    destination: 'Tochigi · Nikko & Danau Chuzenji',
    title: 'Gradasi Merah Keemasan Momiji yang Menakjubkan',
    story:
      'Musim gugur di Nikko menyajikan gradasi warna daun momiji yang luar biasa indah di sekitar Kuil Toshogu dan Air Terjun Kegon. Suhu udaranya sejuk menyegarkan, sangat cocok untuk jalan santai dan menikmati onsen hangat sore hari.',
    verified: true,
    helpfulCount: 33,
  },
  {
    id: 'rev-5',
    name: 'Dion Kusuma',
    city: 'Semarang, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    seasonId: 'tsuyu',
    seasonName: 'Tsuyu (Rainy Season)',
    seasonKanji: '梅雨',
    rating: 5,
    date: 'Juni 2024',
    destination: 'Kamakura · Meigetsu-in & Enoshima',
    title: 'Hujan Rintik dan Ribuan Bunga Hortensia Biru',
    story:
      'Jangan ragu mengunjungi Jepang saat Tsuyu! Kuil Meigetsu-in di Kamakura dipenuhi bunga ajisai (hydrangea) biru yang basah terkena hujan rintik. Suasananya tenang, syahdu, dan fotonya sangat berkesan dan berbeda dari wisata biasa.',
    verified: true,
    helpfulCount: 15,
  },
  {
    id: 'rev-6',
    name: 'Sarah Stephanie',
    city: 'Medan, Indonesia',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    seasonId: 'fuyu',
    seasonName: 'Fuyu (Winter)',
    seasonKanji: '冬',
    rating: 5,
    date: 'Februari 2025',
    destination: 'Hokkaido · Sapporo Snow Festival & Otaru',
    title: 'Kanal Otaru Bercahaya Lilin Salju yang Romantis',
    story:
      'Patung-patung es raksasa di Odori Park Sapporo dan lentera kaca di sepanjang Kanal Otaru saat sore hari sungguh memukau. Jangan lewatkan seafood segar di Nijo Market dan es krim susu Hokkaido!',
    verified: true,
    helpfulCount: 24,
  },
]
