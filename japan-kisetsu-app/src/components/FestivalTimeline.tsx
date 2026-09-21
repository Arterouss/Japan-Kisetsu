import { useState, useMemo } from 'react'
import { festivalsData, type Festival } from '../data/festivalsData'

interface FestivalTimelineProps {
  onPlanTrip: (festivalPlan: string) => void
  hideHeader?: boolean
  isEmbedded?: boolean
}

type SeasonFilter = 'all' | 'haru' | 'natsu' | 'aki' | 'fuyu'

export function FestivalTimeline({ onPlanTrip, hideHeader = false, isEmbedded = false }: FestivalTimelineProps) {
  const [selectedSeason, setSelectedSeason] = useState<SeasonFilter>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [activeModalFestival, setActiveModalFestival] = useState<Festival | null>(null)

  const filteredFestivals = useMemo(() => {
    return festivalsData.filter((festival) => {
      const matchSeason = selectedSeason === 'all' || festival.seasonId === selectedSeason
      const q = searchQuery.toLowerCase().trim()
      const matchSearch =
        !q ||
        festival.name.toLowerCase().includes(q) ||
        festival.romaji.toLowerCase().includes(q) ||
        festival.japaneseName.includes(q) ||
        festival.location.toLowerCase().includes(q) ||
        festival.prefecture.toLowerCase().includes(q) ||
        festival.category.toLowerCase().includes(q) ||
        festival.region.toLowerCase().includes(q)

      return matchSeason && matchSearch
    })
  }, [selectedSeason, searchQuery])

  const handlePlanFestival = (fest: Festival) => {
    setActiveModalFestival(null)
    onPlanTrip(`${fest.romaji} (${fest.location})`)
  }

  const ContentWrapper = isEmbedded ? 'div' : 'section'

  return (
    <ContentWrapper className={`festivals-section ${isEmbedded ? 'embedded-mode' : ''}`} id="festivals" aria-label="Kalender Festival Tradisional Jepang (Matsuri)">
      <div className="section-container">
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header">
            <span className="section-kanji">祭りと四季</span>
            <h2>Kalender & Pesona <span>Matsuri Tradisional</span></h2>
            <p className="section-subtitle">
              Rasakan denyut kebudayaan Jepang yang berusia ratusan tahun: arak-arakan kuil portabel <em>mikoshi</em>, gemerlap kembang api musim panas <em>hanabi</em>, lentera malam, dan kehangatan jajanan stan <em>yatai</em>.
            </p>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="festivals-filter-row">
          <div className="festival-season-tabs" role="tablist" aria-label="Filter musim festival">
            <button
              type="button"
              role="tab"
              aria-selected={selectedSeason === 'all'}
              className={`festival-tab-btn ${selectedSeason === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('all')}
            >
              Semua Musim ({festivalsData.length})
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedSeason === 'haru'}
              className={`festival-tab-btn ${selectedSeason === 'haru' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('haru')}
            >
              🌸 Spring (春)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedSeason === 'natsu'}
              className={`festival-tab-btn ${selectedSeason === 'natsu' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('natsu')}
            >
              ☀️ Summer (夏)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedSeason === 'aki'}
              className={`festival-tab-btn ${selectedSeason === 'aki' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('aki')}
            >
              🍁 Autumn (秋)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={selectedSeason === 'fuyu'}
              className={`festival-tab-btn ${selectedSeason === 'fuyu' ? 'active' : ''}`}
              onClick={() => setSelectedSeason('fuyu')}
            >
              ❄️ Winter (冬)
            </button>
          </div>

          <div className="festival-search-box">
            <i className="bx bx-search search-icon" />
            <input
              type="text"
              placeholder="Cari festival, kota, atau jenis tradisi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Cari festival"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery('')}
                aria-label="Bersihkan pencarian"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Festival Cards Grid */}
        <div className="festivals-grid">
          {filteredFestivals.length === 0 ? (
            <div className="festivals-empty-state">
              <span className="empty-icon">🏮</span>
              <h3>Tidak ada festival yang cocok dengan pencarian</h3>
              <p>Coba kata kunci lain atau pilih tab musim yang berbeda.</p>
              <button
                type="button"
                className="btn btn-empty-reset"
                onClick={() => {
                  setSelectedSeason('all')
                  setSearchQuery('')
                }}
              >
                Tampilkan Semua Festival
              </button>
            </div>
          ) : (
            filteredFestivals.map((fest) => {
              return (
                <article
                  key={fest.id}
                  className="festival-card"
                  style={{ '--fest-accent': fest.badgeColor } as React.CSSProperties}
                >
                  {/* Card Header Top */}
                  <div className="fest-card-top">
                    <div className="fest-month-badge">
                      <span className="month-text">{fest.month}</span>
                      <span className="period-sub">{fest.period}</span>
                    </div>

                    <div className="fest-badges-group">
                      <span className="fest-season-pill">{fest.seasonKanji} · {fest.seasonLabel}</span>
                      <span className="fest-history-pill">{fest.historyYears}</span>
                    </div>
                  </div>

                  {/* Festival Title */}
                  <div className="fest-title-block">
                    <h3 className="fest-title-romaji">{fest.name}</h3>
                    <p className="fest-title-kanji">{fest.japaneseName}</p>
                  </div>

                  {/* Meta Tags */}
                  <div className="fest-meta-row">
                    <span className="fest-meta-item">
                      <i className="bx bx-map-pin"></i> {fest.location} ({fest.region})
                    </span>
                    <span className="fest-category-tag">
                      <i className="bx bx-purchase-tag-alt"></i> {fest.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="fest-desc">{fest.description}</p>

                  {/* Yatai Food Teaser */}
                  <div className="fest-yatai-teaser">
                    <span className="yatai-label">🍢 Kuliner Yatai:</span>
                    <div className="yatai-tags-wrap">
                      {fest.yataiFoods.map((food, i) => (
                        <span key={i} className="yatai-pill">{food}</span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="fest-card-actions">
                    <button
                      type="button"
                      className="btn-fest-details"
                      onClick={() => setActiveModalFestival(fest)}
                      aria-label={`Buka panduan ${fest.name}`}
                    >
                      <i className="bx bx-book-open"></i> Panduan & Tips Budaya
                    </button>
                    <button
                      type="button"
                      className="btn-fest-plan"
                      onClick={() => handlePlanFestival(fest)}
                      aria-label={`Rencanakan trip untuk ${fest.name}`}
                    >
                      <span>Jadwalkan Trip</span>
                      <i className="bx bx-calendar-plus"></i>
                    </button>
                  </div>
                </article>
              )
            })
          )}
        </div>

        {/* Culture Highlight Box at the bottom */}
        <div className="matsuri-culture-banner">
          <div className="culture-banner-content">
            <span className="culture-tag">日本文化 · MATSURI ETIQUETTE</span>
            <h3>Aturan Santun & Tips Menikmati Festival di Jepang</h3>
            <div className="etiquette-grid">
              <div className="etiquette-item">
                <span className="eti-icon">👘</span>
                <div>
                  <strong>Sewa Yukata Musim Panas</strong>
                  <p>Banyak penyewaan di dekat kuil menyediakan paket yukata lengkap dengan sandal geta dan tas kinchaku.</p>
                </div>
              </div>
              <div className="etiquette-item">
                <span className="eti-icon">🗑️</span>
                <div>
                  <strong>Bawa Kembali Sampah Anda</strong>
                  <p>Jepang jarang menyediakan tong sampah umum di festival. Bawa kantong kecil untuk membuang wadah yatai di kedai asal.</p>
                </div>
              </div>
              <div className="etiquette-item">
                <span className="eti-icon">🪙</span>
                <div>
                  <strong>Siapkan Uang Koin 100 & 500 Yen</strong>
                  <p>Kedai tenda jalanan (yatai) umumnya hanya menerima uang tunai pecahan pas untuk mempercepat antrean.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Festival Detail Modal Dialog */}
      {activeModalFestival && (
        <div
          className="dialog-backdrop"
          role="presentation"
          onMouseDown={() => setActiveModalFestival(null)}
        >
          <div
            className="details-dialog fest-detail-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="fest-modal-title"
            onMouseDown={(e) => e.stopPropagation()}
            style={{ '--fest-accent': activeModalFestival.badgeColor } as React.CSSProperties}
          >
            <button
              type="button"
              className="close-button"
              onClick={() => setActiveModalFestival(null)}
              aria-label="Tutup detail festival"
            >
              ×
            </button>

            <div className="dialog-header-meta">
              <span className="fest-modal-season">
                {activeModalFestival.seasonKanji} · {activeModalFestival.seasonLabel} ({activeModalFestival.month})
              </span>
              <span className="fest-modal-history">{activeModalFestival.historyYears} Tradisi</span>
            </div>

            <h2 id="fest-modal-title" className="fest-modal-title">
              {activeModalFestival.name}
            </h2>
            <p className="fest-modal-subtitle">
              {activeModalFestival.japaneseName} · {activeModalFestival.location}, {activeModalFestival.prefecture} ({activeModalFestival.region})
            </p>

            <div className="fest-modal-content-scroll">
              <div className="fest-modal-section">
                <h4><i className="bx bx-info-circle"></i> Tentang Festival</h4>
                <p>{activeModalFestival.description}</p>
              </div>

              <div className="fest-modal-section highlight-box">
                <h4><i className="bx bx-star"></i> Momen Paling Dinantikan & Ritual Utama</h4>
                <p>{activeModalFestival.culturalHighlight}</p>
              </div>

              <div className="fest-modal-section">
                <h4><i className="bx bx-closet"></i> Panduan Pakaian & Dress Code</h4>
                <p>{activeModalFestival.dressCodeTips}</p>
              </div>

              <div className="fest-modal-section">
                <h4><i className="bx bx-restaurant"></i> Kuliner Wajib di Stand Festival (屋台 · Yatai)</h4>
                <div className="fest-yatai-list">
                  {activeModalFestival.yataiFoods.map((item, idx) => (
                    <div key={idx} className="yatai-item-card">
                      <i className="bx bx-check-circle"></i>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="fest-modal-section timing-box">
                <h4><i className="bx bx-time"></i> Waktu & Periode Pelaksanaan</h4>
                <p><strong>{activeModalFestival.period}</strong> ({activeModalFestival.month})</p>
              </div>
            </div>

            <div className="fest-modal-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setActiveModalFestival(null)}
              >
                Tutup
              </button>
              <button
                type="button"
                className="btn btn-plan-fest-cta"
                onClick={() => handlePlanFestival(activeModalFestival)}
              >
                <i className="bx bx-calendar-check"></i>
                <span>Jadwalkan Trip ke Festival Ini</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </ContentWrapper>
  )
}
