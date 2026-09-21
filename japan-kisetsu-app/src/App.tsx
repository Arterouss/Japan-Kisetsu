import { useEffect, useState } from 'react'
import './App.css'

type Season = {
  id: string
  image: string
  number: string
  label: string
  romaji: string
  leftTitle: string
  rightTitle: string
  japanese: string
  description: string
}

const seasons: Season[] = [
  {
    id: 'haru',
    image: '/images/Spring.jpg',
    number: '01',
    label: '01. Japan Kisetsu',
    romaji: 'Haru',
    leftTitle: 'Har',
    rightTitle: 'uu',
    japanese: '春・はる',
    description:
      'Haru or spring in Japan usually lasts for 3 months starting around March to May. This season is the best time to visit Japan. Where the atmosphere is cool and views of cherry blossoms that grow are blooming everywhere. spring usually starts with the ume matsuri or plum blossom festival. Because the emergence of this flower is often marked as the entry of spring in Japan.',
  },
  {
    id: 'natsu',
    image: '/images/Summer.jpg',
    number: '02',
    label: '02. Japan Kisetsu',
    romaji: 'Natsu',
    leftTitle: 'Nat',
    rightTitle: 'su',
    japanese: '夏・なつ',
    description:
      'Natsu or summer in Japan lasts from June to August. The peak occurs around July 23, which is often called Geshi. Summer is the season for the biggest fireworks celebration in Japan (Hanabi Taikai). Almost every weekend, communities in Japan display fireworks festivals at night with various kinds and colors that enliven the night sky.',
  },
  {
    id: 'aki',
    image: '/images/Auntum.jpg',
    number: '03',
    label: '03. Japan Kisetsu',
    romaji: 'Aki',
    leftTitle: 'Aki',
    rightTitle: 'ame',
    japanese: '秋・あき',
    description:
      "In Japanese autumn, the leaves turn yellow and red, making Japan's streets, parks, and scenery even more beautiful. I think this is one of the best times to visit Japan, I always travel around October. Autumn weather is cool and breww",
  },
  {
    id: 'fuyu',
    image: '/images/Winnter.jpg',
    number: '04',
    label: '04. Japan Kisetsu',
    romaji: 'Fuyu',
    leftTitle: 'Fuy',
    rightTitle: 'uu',
    japanese: '冬・ふゆ',
    description:
      'Fuyu or winter in Japan lasts from December to February. The peak of winter is called Doji which occurs around January 20th. In this season, snow falls in almost all areas except for a few areas that are close to cold climates Even though it looks very attractive, many Japanese people tend to be lazy to leave the house because the air temperature is so cold that it reaches -10° C.',
  },
  {
    id: 'tsuyu',
    image: '/images/Rain.jpg',
    number: '05',
    label: '05. Japan Kisetsu',
    romaji: 'Tsuyu',
    leftTitle: 'Tsu',
    rightTitle: 'yuu',
    japanese: '梅雨・つゆ',
    description:
      'so named because the ripening of plums (梅ume) coincides with the arrival of tsuyu. These ripe plums are then processed into umeboshi (sour-salted plums) which often accompany Japanese bento (lunch boxes).',
  },
  {
    id: 'gakko',
    image: '/images/Bahasa.jpg',
    number: '06',
    label: 'Japanese Learning',
    romaji: 'Japan Gakko',
    leftTitle: 'Japan',
    rightTitle: 'gakko',
    japanese: 'やさい・日本語',
    description:
      'Ingatlah bahwa kunci sukses dalam belajar bahasa Jepang adalah konsistensi dan ketekunan. Semoga berhasil!',
  },
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const activeSeason = seasons[activeIndex]

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? seasons.length - 1 : currentIndex - 1,
    )
  }

  const showNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % seasons.length)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isDetailsOpen) {
        if (event.key === 'Escape') setIsDetailsOpen(false)
        return
      }

      if (event.key === 'ArrowLeft') showPrevious()
      if (event.key === 'ArrowRight') showNext()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isDetailsOpen])

  return (
    <main>
      <header className="header">
        <a className="logo" href="#destination" aria-label="Japan Kisetsu beranda">
          四季 <span>shiki</span>
        </a>

        <div className="social-media" aria-label="Social media">
          <a href="#contact" aria-label="Facebook"><i className="bx bxl-facebook" /></a>
          <a href="#contact" aria-label="Twitter"><i className="bx bxl-twitter" /></a>
          <a href="https://discord.gg/RztEwWMp" aria-label="Discord"><i className="bx bxl-discord" /></a>
          <a href="#contact" aria-label="Instagram"><i className="bx bxl-instagram-alt" /></a>
        </div>

        <nav className="navbar" aria-label="Navigasi utama">
          <a href="#destination">Destination</a>
          <button type="button" onClick={() => setIsDetailsOpen(true)}>Bookinng</button>
          <button type="button" onClick={() => setIsDetailsOpen(true)}>Review</button>
          <a id="contact" href="mailto:hello@japankisetsu.local">Contact</a>
        </nav>
      </header>

      <section className="banner" id="destination" aria-label="Japan Kisetsu seasons">
        {seasons.map((season, index) => {
          const isActive = index === activeIndex

          return (
            <article
              className={`slide ${isActive ? 'active' : ''}`}
              key={season.id}
              aria-hidden={!isActive}
            >
              <img src={season.image} alt={`${season.romaji} in Japan`} />
              <div className="left-info">
                <div className="penetrate-blur" aria-hidden="true">
                  <h1>{season.leftTitle}</h1>
                </div>
                <div className="content">
                  <h3>{season.label}</h3>
                  <p>{season.description}</p>
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setIsDetailsOpen(true)}
                    tabIndex={isActive ? 0 : -1}
                  >
                    More Details
                  </button>
                </div>
              </div>
              <div className="right-info" aria-hidden="true">
                <div className="right-title-group">
                  <h1>{season.rightTitle}</h1>
                  <h3>{season.japanese}</h3>
                </div>
              </div>
            </article>
          )
        })}

        <div className="navigation" aria-label="Kontrol slider">
          <button type="button" className="navigation-button previous" onClick={showPrevious} aria-label="Musim sebelumnya">
            ‹
          </button>
          <button type="button" className="navigation-button" onClick={showNext} aria-label="Musim berikutnya">
            ›
          </button>
        </div>
        <p className="slide-count" aria-live="polite">
          {activeIndex + 1} / {seasons.length}
        </p>
      </section>

      {isDetailsOpen && (
        <div className="dialog-backdrop" role="presentation" onMouseDown={() => setIsDetailsOpen(false)}>
          <section
            className="details-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="details-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button type="button" className="close-button" onClick={() => setIsDetailsOpen(false)} aria-label="Tutup detail">×</button>
            <p className="eyebrow">{activeSeason.label}</p>
            <h2 id="details-title">{activeSeason.romaji} · {activeSeason.japanese}</h2>
            <p>{activeSeason.description}</p>
          </section>
        </div>
      )}
    </main>
  )
}

export default App
