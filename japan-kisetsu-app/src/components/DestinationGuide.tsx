import { useMemo, useState } from 'react'
import { destinations, type Destination } from '../data/destinations'

type SeasonFilter = 'all' | 'haru' | 'natsu' | 'aki' | 'fuyu' | 'tsuyu'

type FilterOption = {
  id: SeasonFilter
  label: string
  kanji: string
  sub: string
}

const filterOptions: FilterOption[] = [
  { id: 'all', label: 'Semua Musim', kanji: '四季', sub: 'All Seasons' },
  { id: 'haru', label: 'Spring', kanji: '春', sub: 'Haru · Musim Semi' },
  { id: 'natsu', label: 'Summer', kanji: '夏', sub: 'Natsu · Musim Panas' },
  { id: 'aki', label: 'Autumn', kanji: '秋', sub: 'Aki · Musim Gugur' },
  { id: 'fuyu', label: 'Winter', kanji: '冬', sub: 'Fuyu · Musim Dingin' },
  { id: 'tsuyu', label: 'Rainy', kanji: '梅雨', sub: 'Tsuyu · Musim Hujan' },
]

interface DestinationGuideProps {
  activeSeasonId?: string
  onPlanTrip?: (destinationName: string) => void
}

export function DestinationGuide({ onPlanTrip }: DestinationGuideProps) {
  const [selectedSeason, setSelectedSeason] = useState<SeasonFilter>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeModalDest, setActiveModalDest] = useState<Destination | null>(null)

  const filteredDestinations = useMemo(() => {
    return destinations.filter((item) => {
      const matchSeason = selectedSeason === 'all' || item.seasonId === selectedSeason
      const matchSearch =
        searchQuery.trim() === '' ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.prefecture.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.japaneseName.includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchSeason && matchSearch
    })
  }, [selectedSeason, searchQuery])

  return (
    <section className="destination-section" id="destination-guide" aria-label="Panduan Destinasi Musim Jepang">
      <div className="section-container">
        {/* Section Header */}
        <header className="section-header">
          <div className="section-badge">
            <span>四季の観光地</span>
            <span>SEASONAL DESTINATION GUIDE</span>
          </div>
          <h2 className="section-title">
            Jelajahi Pesona Jepang di <span>Setiap Musim</span>
          </h2>
          <p className="section-subtitle">
            Dari mekarnya sakura di Kyoto, festival kembang api Tokyo, pesona daun merah Arashiyama,
            hingga desa salju magis Shirakawa-go. Temukan waktu terbaik dan panduan rute perjalanan impian Anda.
          </p>
        </header>

        {/* Filter Controls & Search */}
        <div className="destination-controls">
          <div className="season-tabs" role="tablist" aria-label="Filter musim destinasi">
            {filterOptions.map((opt) => {
              const isSelected = selectedSeason === opt.id
              const count =
                opt.id === 'all'
                  ? destinations.length
                  : destinations.filter((d) => d.seasonId === opt.id).length

              return (
                <button
                  key={opt.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  className={`season-tab ${isSelected ? 'active' : ''} season-${opt.id}`}
                  onClick={() => setSelectedSeason(opt.id)}
                >
                  <span className="tab-kanji">{opt.kanji}</span>
                  <span className="tab-label">{opt.label}</span>
                  <span className="tab-count">{count}</span>
                </button>
              )
            })}
          </div>

          <div className="destination-search">
            <span className="search-icon" aria-hidden="true">🔍</span>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari tempat, kota (contoh: Kyoto, Fuji, Tokyo, Shirakawa-go)..."
              aria-label="Cari destinasi wisata"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search"
                onClick={() => setSearchQuery('')}
                aria-label="Bersihkan pencarian"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Destination Grid */}
        <div className="destinations-grid">
          {filteredDestinations.map((dest) => (
            <article
              key={dest.id}
              className={`dest-card dest-season-${dest.seasonId}`}
              onClick={() => setActiveModalDest(dest)}
            >
              <div className="dest-image-wrap">
                <img
                  src={dest.image}
                  alt={`${dest.name} di ${dest.prefecture}`}
                  loading="lazy"
                />
                <div className="dest-badge-row">
                  <span className="season-pill">
                    {dest.seasonKanji} {dest.seasonLabel}
                  </span>
                  <span className="prefecture-pill">📍 {dest.prefecture}</span>
                </div>
              </div>

              <div className="dest-body">
                <div className="dest-title-group">
                  <span className="dest-kanji">{dest.japaneseName}</span>
                  <h3 className="dest-name">{dest.name}</h3>
                </div>

                <div className="dest-meta">
                  <div className="meta-item">
                    <span className="meta-icon" aria-hidden="true">🗓️</span>
                    <span className="meta-text">{dest.bestTime}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon" aria-hidden="true">🌡️</span>
                    <span className="meta-text">{dest.temperature}</span>
                  </div>
                </div>

                <p className="dest-desc">{dest.description}</p>

                <div className="dest-tags">
                  {dest.highlights.map((highlight, idx) => (
                    <span key={idx} className="dest-tag">
                      #{highlight}
                    </span>
                  ))}
                </div>

                <div className="dest-card-footer">
                  <button
                    type="button"
                    className="card-detail-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveModalDest(dest)
                    }}
                  >
                    <span>Panduan Lengkap</span>
                    <span className="arrow-icon">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredDestinations.length === 0 && (
          <div className="no-destinations">
            <p className="empty-icon">⛩️</p>
            <h3>Tidak ada destinasi yang cocok</h3>
            <p>Coba kata kunci lain atau pilih filter "Semua Musim".</p>
            <button
              type="button"
              className="btn reset-filter-btn"
              onClick={() => {
                setSelectedSeason('all')
                setSearchQuery('')
              }}
            >
              Tampilkan Semua Destinasi
            </button>
          </div>
        )}
      </div>

      {/* Destination Detail Modal */}
      {activeModalDest && (
        <div
          className="dest-modal-backdrop"
          role="presentation"
          onClick={() => setActiveModalDest(null)}
        >
          <div
            className="dest-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-dest-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-button"
              onClick={() => setActiveModalDest(null)}
              aria-label="Tutup panduan wisata"
            >
              ✕
            </button>

            <div className="dest-modal-hero">
              <img
                src={activeModalDest.image}
                alt={activeModalDest.name}
              />
              <div className="dest-modal-hero-overlay">
                <div className="modal-pills">
                  <span className="season-pill">
                    {activeModalDest.seasonKanji} {activeModalDest.seasonLabel}
                  </span>
                  <span className="prefecture-pill">📍 {activeModalDest.prefecture}</span>
                </div>
                <p className="modal-kanji">{activeModalDest.japaneseName}</p>
                <h2 id="modal-dest-title">{activeModalDest.name}</h2>
              </div>
            </div>

            <div className="dest-modal-body">
              {/* Quick Info Grid */}
              <div className="modal-info-grid">
                <div className="info-box">
                  <span className="info-icon">🗓️</span>
                  <div>
                    <h4>Waktu Terbaik</h4>
                    <p>{activeModalDest.bestTime}</p>
                  </div>
                </div>
                <div className="info-box">
                  <span className="info-icon">🌡️</span>
                  <div>
                    <h4>Suhu Rata-rata</h4>
                    <p>{activeModalDest.temperature}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="modal-section">
                <h3>Tentang Destinasi</h3>
                <p>{activeModalDest.description}</p>
              </div>

              {/* Highlights */}
              <div className="modal-section">
                <h3>Daya Tarik Utama</h3>
                <ul className="highlights-list">
                  {activeModalDest.highlights.map((item, idx) => (
                    <li key={idx}>
                      <span className="check-bullet">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Transportation & Tips */}
              <div className="modal-section-grid">
                <div className="modal-card-box access-box">
                  <h4>🚄 Cara Akses & Transportasi</h4>
                  <p>{activeModalDest.accessInfo}</p>
                </div>
                <div className="modal-card-box tips-box">
                  <h4>💡 Tips Wisata & Busana</h4>
                  <p>{activeModalDest.travelTips}</p>
                </div>
              </div>

              {/* Footer CTA */}
              <div className="dest-modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setActiveModalDest(null)}
                >
                  Tutup
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    const destName = activeModalDest.name
                    setActiveModalDest(null)
                    if (onPlanTrip) {
                      onPlanTrip(destName)
                    } else {
                      // Smooth scroll or notification
                      const contactSec = document.querySelector('#contact')
                      contactSec?.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Rencanakan Perjalanan ke Sini ✈️
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
