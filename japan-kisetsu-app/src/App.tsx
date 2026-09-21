import { useEffect, useState } from 'react'
import { JapanExplorerHub, type ExplorerTab } from './components/JapanExplorerHub'
import { TripBooking } from './components/TripBooking'
import { ReviewsSection } from './components/ReviewsSection'
import { SideNavDots } from './components/SideNavDots'
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
]

function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  const [plannedDestination, setPlannedDestination] = useState<string>('')
  const [activeExplorerTab, setActiveExplorerTab] = useState<ExplorerTab>('destinations')
  const activeSeason = seasons[activeIndex]

  const navigateToExplorerTab = (tab: ExplorerTab) => {
    setActiveExplorerTab(tab)
    document.querySelector('#explore-hub')?.scrollIntoView({ behavior: 'smooth' })
  }

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
          <a href="https://github.com/Arterouss/Japan-Kisetsu" target="_blank" rel="noreferrer" aria-label="GitHub"><i className="bx bxl-github" /></a>
          <a href="#contact" aria-label="Instagram"><i className="bx bxl-instagram-alt" /></a>
        </div>

        <nav className="navbar" aria-label="Navigasi utama">
          <a
            href="#explore-hub"
            onClick={(e) => {
              e.preventDefault()
              navigateToExplorerTab('destinations')
            }}
          >
            Destination
          </a>
          <a
            href="#explore-hub"
            onClick={(e) => {
              e.preventDefault()
              navigateToExplorerTab('regions')
            }}
          >
            Peta Region
          </a>
          <a
            href="#explore-hub"
            onClick={(e) => {
              e.preventDefault()
              navigateToExplorerTab('festivals')
            }}
          >
            Matsuri
          </a>
          <a
            href="#booking"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Booking
          </a>
          <a
            href="https://jpquest.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="navbar-ext-link"
          >
            JP Quest ↗
          </a>
          <a
            href="#reviews"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#reviews')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Review
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Contact
          </a>
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

        <a
          href="#explore-hub"
          className="scroll-down-hint"
          onClick={(e) => {
            e.preventDefault()
            navigateToExplorerTab('destinations')
          }}
          aria-label="Scroll ke pusat eksplorasi"
        >
          <span className="scroll-text">Explore Destinations</span>
          <span className="scroll-chevron">↓</span>
        </a>

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

      {/* Section Japan Explorer Hub (Tabbed Architecture) */}
      <JapanExplorerHub
        activeSeasonId={activeSeason.id}
        activeTab={activeExplorerTab}
        onTabChange={setActiveExplorerTab}
        onPlanTrip={(destName) => {
          setPlannedDestination(destName)
          document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* Section Trip Booking & Planner */}
      <TripBooking initialDestination={plannedDestination} />

      {/* Section Traveler Reviews & Story Wall */}
      <ReviewsSection />

      {/* Section JP Quest Promotion Banner */}
      <section className="jpquest-banner-section" id="jpquest" aria-label="JP Quest Learning App">
        <div className="section-container">
          <div className="jpquest-banner-card">
            <div className="jpquest-banner-content">
              <span className="jpquest-tag">日本語学習 · OFFICIAL LEARNING APP</span>
              <h2>Kuasai Bahasa Jepang Bersama <span>JP Quest</span></h2>
              <p>
                Platform belajar bahasa Jepang interaktif terlengkap. Pelajari Hiragana, Katakana, 2000+ Kanji, Kosakata, Tata Bahasa, dan persiapan simulasi JLPT N5 hingga N1 secara terstruktur dan seru!
              </p>

              <div className="jpquest-features-pills">
                <span className="jp-pill">🌸 Hiragana & Katakana</span>
                <span className="jp-pill">漢字 2000+ Kanji JLPT</span>
                <span className="jp-pill">⚡ Spaced Repetition</span>
                <span className="jp-pill">🎯 JLPT N5 — N1</span>
                <span className="jp-pill">🔥 Streak & XP</span>
              </div>

              <div className="jpquest-banner-actions">
                <a
                  href="https://jpquest.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-jpquest"
                >
                  <span>Mulai Belajar di JP Quest</span>
                  <span className="btn-arrow">↗</span>
                </a>
                <span className="jpquest-domain-hint">jpquest.vercel.app</span>
              </div>
            </div>

            <div className="jpquest-banner-visual" aria-hidden="true">
              <div className="jpquest-visual-badge">
                <span className="badge-kanji-big">日</span>
                <span className="badge-quest-text">QUEST</span>
                <span className="badge-sub">日本語 · NIHON</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer" id="contact">
        <div className="footer-container">
          <div className="footer-brand">
            <a className="logo" href="#destination">四季 <span>shiki · Japan Kisetsu</span></a>
            <p>
              Panduan interaktif keindahan empat musim, tradisi, dan destinasi wisata autentik di seluruh penjuru Jepang.
            </p>
          </div>
          <div className="footer-links">
            <h4>Navigasi</h4>
            <a
              href="#destination"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Beranda Slider
            </a>
            <a
              href="#explore-hub"
              onClick={(e) => {
                e.preventDefault()
                navigateToExplorerTab('destinations')
              }}
            >
              Katalog Destinasi
            </a>
            <a
              href="#explore-hub"
              onClick={(e) => {
                e.preventDefault()
                navigateToExplorerTab('regions')
              }}
            >
              Peta 8 Wilayah Region
            </a>
            <a
              href="#explore-hub"
              onClick={(e) => {
                e.preventDefault()
                navigateToExplorerTab('festivals')
              }}
            >
              Festival Budaya (Matsuri)
            </a>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Trip Planner & Booking
            </a>
            <a
              href="#reviews"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#reviews')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Cerita & Ulasan Wisatawan
            </a>
            <a href="https://jpquest.vercel.app/" target="_blank" rel="noreferrer">
              JP Quest (Belajar Bahasa Jepang) ↗
            </a>
            <a href="https://github.com/Arterouss/Japan-Kisetsu" target="_blank" rel="noreferrer">
              GitHub Repository
            </a>
          </div>
          <div className="footer-contact">
            <h4>Hubungi Kami</h4>
            <p>
              <a
                href="https://github.com/Arterouss"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
              >
                <i className="bx bxl-github" style={{ fontSize: '1.25rem' }}></i>
                GitHub: Arterouss
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Japan Kisetsu (四季). All rights reserved.</p>
        </div>
      </footer>

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
            <div className="details-dialog-actions">
              <button
                type="button"
                className="btn btn-explore-season"
                onClick={() => {
                  setIsDetailsOpen(false)
                  setTimeout(() => {
                    navigateToExplorerTab('destinations')
                  }, 120)
                }}
              >
                Lihat Destinasi Wisata Musim Ini ↓
              </button>
            </div>
          </section>
        </div>
      )}
      {/* Side Dots Quick Navigator */}
      <SideNavDots />
    </main>
  )
}

export default App
