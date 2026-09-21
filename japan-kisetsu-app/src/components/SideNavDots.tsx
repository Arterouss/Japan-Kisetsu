import { useEffect, useState } from 'react'

interface SectionItem {
  id: string
  label: string
  kanji: string
}

const sections: SectionItem[] = [
  { id: 'destination', label: 'Musim & Beranda', kanji: '四季' },
  { id: 'destination-guide', label: 'Katalog Destinasi', kanji: '名所' },
  { id: 'booking', label: 'Trip Planner & Booking', kanji: '予約' },
  { id: 'reviews', label: 'Cerita Wisatawan', kanji: '感想' },
  { id: 'jpquest', label: 'JP Quest Belajar', kanji: '学習' },
]

export function SideNavDots() {
  const [activeSection, setActiveSection] = useState('destination')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const target = document.getElementById(id)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <aside className="side-nav-dots" aria-label="Navigasi cepat per bagian">
      {sections.map((sec, idx) => {
        const isActive = activeSection === sec.id
        return (
          <button
            key={sec.id}
            type="button"
            className={`side-dot-btn ${isActive ? 'active' : ''}`}
            onClick={() => scrollTo(sec.id)}
            aria-label={`Pindah ke ${sec.label}`}
          >
            <span className="dot-indicator" />
            <span className="dot-tooltip">
              <span className="dot-kanji">{sec.kanji}</span>
              <span className="dot-label">{sec.label}</span>
              <span className="dot-index">0{idx + 1}</span>
            </span>
          </button>
        )
      })}
    </aside>
  )
}
