import { useState } from 'react'
import { japanRegions, type JapanRegion } from '../data/regionsData'

interface JapanRegionMapProps {
  onPlanTrip: (regionDestination: string) => void
  hideHeader?: boolean
  isEmbedded?: boolean
}

export function JapanRegionMap({ onPlanTrip, hideHeader = false, isEmbedded = false }: JapanRegionMapProps) {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('kansai')
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null)

  const activeRegion: JapanRegion =
    japanRegions.find((r) => r.id === selectedRegionId) || japanRegions[4] // default Kansai

  const handleRegionClick = (regionId: string) => {
    setSelectedRegionId(regionId)
  }

  const handlePlanClick = () => {
    onPlanTrip(`${activeRegion.name} (${activeRegion.hubCity})`)
  }

  const ContentWrapper = isEmbedded ? 'div' : 'section'

  return (
    <ContentWrapper className={`region-map-section ${isEmbedded ? 'embedded-mode' : ''}`} id="region-map" aria-label="Peta Interaktif Wilayah Jepang">
      <div className="section-container">
        {/* Section Header */}
        {!hideHeader && (
          <div className="section-header">
            <span className="section-kanji">地域探訪</span>
            <h2>Jelajahi 8 Wilayah Tradisional <span>Jepang</span></h2>
            <p className="section-subtitle">
              Dari negeri salju Hokkaido di utara hingga pesisir pulau hangat Kyushu & Okinawa. Klik wilayah di peta atau pilih tombol untuk melihat iklim, kuliner khas (<em>meibutsu</em>), dan festival legendaris.
            </p>
          </div>
        )}

        {/* Region Selector Pills */}
        <div className="region-selector-bar" role="tablist" aria-label="Pilihan wilayah">
          {japanRegions.map((region) => {
            const isSelected = region.id === selectedRegionId
            return (
              <button
                key={region.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`region-tab-btn ${isSelected ? 'active' : ''}`}
                style={{
                  '--region-color': region.color,
                } as React.CSSProperties}
                onClick={() => handleRegionClick(region.id)}
                onMouseEnter={() => setHoveredRegionId(region.id)}
                onMouseLeave={() => setHoveredRegionId(null)}
              >
                <span className="region-tab-kanji">{region.kanji}</span>
                <span className="region-tab-name">{region.name}</span>
              </button>
            )
          })}
        </div>

        {/* Map & Detail Container */}
        <div className="region-explorer-grid">
          {/* Interactive Visual SVG Map */}
          <div className="map-visual-card">
            <div className="map-card-header">
              <div className="map-status-badge">
                <span className="live-dot" />
                <span>Interaktif: Klik Wilayah</span>
              </div>
              <span className="map-focus-label">
                Fokus: <strong>{activeRegion.name} ({activeRegion.kanji})</strong>
              </span>
            </div>

            <div className="svg-map-wrapper">
              <svg
                viewBox="0 0 540 450"
                className="japan-svg-map"
                role="img"
                aria-label="Peta Vektor Kepulauan Jepang"
              >
                <defs>
                  {/* Subtle water pattern or filters */}
                  <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="ocean-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0d1814" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0a1210" stopOpacity="0.95" />
                  </linearGradient>
                </defs>

                {/* Ocean Background / Grid Lines */}
                <rect width="540" height="450" fill="url(#ocean-bg)" rx="16" />
                <g className="map-grid-lines" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" strokeDasharray="4 4">
                  <line x1="100" y1="0" x2="100" y2="450" />
                  <line x1="200" y1="0" x2="200" y2="450" />
                  <line x1="300" y1="0" x2="300" y2="450" />
                  <line x1="400" y1="0" x2="400" y2="450" />
                  <line x1="500" y1="0" x2="500" y2="450" />
                  <line x1="0" y1="100" x2="540" y2="100" />
                  <line x1="0" y1="200" x2="540" y2="200" />
                  <line x1="0" y1="300" x2="540" y2="300" />
                  <line x1="0" y1="400" x2="540" y2="400" />
                </g>

                {/* Sea of Japan & Pacific Water Labels */}
                <text x="180" y="80" fill="rgba(255,255,255,0.12)" fontSize="11" letterSpacing="3" fontFamily="sans-serif">
                  SEA OF JAPAN (日本海)
                </text>
                <text x="360" y="420" fill="rgba(255,255,255,0.12)" fontSize="11" letterSpacing="3" fontFamily="sans-serif">
                  PACIFIC OCEAN (太平洋)
                </text>

                {/* REGION 1: HOKKAIDO */}
                <g
                  className={`map-region-group ${selectedRegionId === 'hokkaido' ? 'active' : ''} ${hoveredRegionId === 'hokkaido' ? 'hovered' : ''}`}
                  onClick={() => handleRegionClick('hokkaido')}
                  onMouseEnter={() => setHoveredRegionId('hokkaido')}
                  onMouseLeave={() => setHoveredRegionId(null)}
                  role="button"
                  tabIndex={0}
                  aria-label="Pilih Hokkaido"
                >
                  <path
                    className="region-path hokkaido-path"
                    d="M 405,115 C 415,80 435,50 480,45 C 500,42 515,60 500,85 C 510,95 515,110 495,120 C 475,130 455,145 425,140 C 410,138 395,130 405,115 Z M 480,45 C 495,30 515,25 525,35 C 515,48 495,50 480,45 Z"
                  />
                  <circle cx="455" cy="95" r="4.5" className="region-capital-dot" />
                  <text x="455" y="85" className="region-svg-text">Hokkaido</text>
                  <text x="455" y="112" className="region-svg-subtext">北海 · Sapporo</text>
                </g>

                {/* REGION 2: TOHOKU */}
                <g
                  className={`map-region-group ${selectedRegionId === 'tohoku' ? 'active' : ''} ${hoveredRegionId === 'tohoku' ? 'hovered' : ''}`}
                  onClick={() => handleRegionClick('tohoku')}
                  onMouseEnter={() => setHoveredRegionId('tohoku')}
                  onMouseLeave={() => setHoveredRegionId(null)}
                  role="button"
                  tabIndex={0}
                  aria-label="Pilih Tohoku"
                >
                  <path
                    className="region-path tohoku-path"
                    d="M 425,145 C 440,150 455,170 450,205 C 445,230 425,245 405,245 C 390,245 385,225 390,195 C 395,165 410,150 425,145 Z"
                  />
                  <circle cx="420" cy="198" r="4.5" className="region-capital-dot" />
                  <text x="420" y="190" className="region-svg-text">Tohoku</text>
                  <text x="420" y="215" className="region-svg-subtext">東北 · Sendai</text>
                </g>

                {/* REGION 3: KANTO */}
                <g
                  className={`map-region-group ${selectedRegionId === 'kanto' ? 'active' : ''} ${hoveredRegionId === 'kanto' ? 'hovered' : ''}`}
                  onClick={() => handleRegionClick('kanto')}
                  onMouseEnter={() => setHoveredRegionId('kanto')}
                  onMouseLeave={() => setHoveredRegionId(null)}
                  role="button"
                  tabIndex={0}
                  aria-label="Pilih Kanto"
                >
                  <path
                    className="region-path kanto-path"
                    d="M 405,245 C 420,250 435,270 430,295 C 425,315 405,325 385,315 C 375,305 380,285 385,265 C 390,250 395,245 405,245 Z"
                  />
                  <circle cx="400" cy="288" r="5" className="region-capital-dot capital-tokyo" />
                  <text x="400" y="280" className="region-svg-text">Kanto</text>
                  <text x="400" y="303" className="region-svg-subtext">関東 · Tokyo</text>
                </g>

                {/* REGION 4: CHUBU */}
                <g
                  className={`map-region-group ${selectedRegionId === 'chubu' ? 'active' : ''} ${hoveredRegionId === 'chubu' ? 'hovered' : ''}`}
                  onClick={() => handleRegionClick('chubu')}
                  onMouseEnter={() => setHoveredRegionId('chubu')}
                  onMouseLeave={() => setHoveredRegionId(null)}
                  role="button"
                  tabIndex={0}
                  aria-label="Pilih Chubu"
                >
                  <path
                    className="region-path chubu-path"
                    d="M 385,245 C 390,265 380,295 375,315 C 360,325 330,325 320,305 C 315,285 335,255 350,245 C 365,240 375,240 385,245 Z"
                  />
                  <circle cx="348" cy="280" r="4.5" className="region-capital-dot" />
                  <text x="348" y="272" className="region-svg-text">Chubu</text>
                  <text x="348" y="295" className="region-svg-subtext">中部 · Mt. Fuji</text>
                </g>

                {/* REGION 5: KANSAI */}
                <g
                  className={`map-region-group ${selectedRegionId === 'kansai' ? 'active' : ''} ${hoveredRegionId === 'kansai' ? 'hovered' : ''}`}
                  onClick={() => handleRegionClick('kansai')}
                  onMouseEnter={() => setHoveredRegionId('kansai')}
                  onMouseLeave={() => setHoveredRegionId(null)}
                  role="button"
                  tabIndex={0}
                  aria-label="Pilih Kansai"
                >
                  <path
                    className="region-path kansai-path"
                    d="M 320,305 C 325,325 315,350 295,355 C 275,355 265,335 270,310 C 275,295 295,295 320,305 Z"
                  />
                  <circle cx="292" cy="325" r="4.5" className="region-capital-dot" />
                  <text x="292" y="318" className="region-svg-text">Kansai</text>
                  <text x="292" y="340" className="region-svg-subtext">関西 · Kyoto/Osaka</text>
                </g>

                {/* REGION 6: CHUGOKU */}
                <g
                  className={`map-region-group ${selectedRegionId === 'chugoku' ? 'active' : ''} ${hoveredRegionId === 'chugoku' ? 'hovered' : ''}`}
                  onClick={() => handleRegionClick('chugoku')}
                  onMouseEnter={() => setHoveredRegionId('chugoku')}
                  onMouseLeave={() => setHoveredRegionId(null)}
                  role="button"
                  tabIndex={0}
                  aria-label="Pilih Chugoku"
                >
                  <path
                    className="region-path chugoku-path"
                    d="M 270,305 C 275,325 250,335 220,335 C 190,335 175,320 180,305 C 195,295 240,295 270,305 Z"
                  />
                  <circle cx="225" cy="315" r="4.5" className="region-capital-dot" />
                  <text x="225" y="310" className="region-svg-text">Chugoku</text>
                  <text x="225" y="330" className="region-svg-subtext">中国 · Hiroshima</text>
                </g>

                {/* REGION 7: SHIKOKU */}
                <g
                  className={`map-region-group ${selectedRegionId === 'shikoku' ? 'active' : ''} ${hoveredRegionId === 'shikoku' ? 'hovered' : ''}`}
                  onClick={() => handleRegionClick('shikoku')}
                  onMouseEnter={() => setHoveredRegionId('shikoku')}
                  onMouseLeave={() => setHoveredRegionId(null)}
                  role="button"
                  tabIndex={0}
                  aria-label="Pilih Shikoku"
                >
                  <path
                    className="region-path shikoku-path"
                    d="M 255,350 C 265,365 245,385 215,385 C 190,385 185,365 200,350 C 220,345 240,345 255,350 Z"
                  />
                  <circle cx="228" cy="365" r="4.5" className="region-capital-dot" />
                  <text x="228" y="362" className="region-svg-text">Shikoku</text>
                  <text x="228" y="380" className="region-svg-subtext">四国 · Matsuyama</text>
                </g>

                {/* REGION 8: KYUSHU & OKINAWA */}
                <g
                  className={`map-region-group ${selectedRegionId === 'kyushu-okinawa' ? 'active' : ''} ${hoveredRegionId === 'kyushu-okinawa' ? 'hovered' : ''}`}
                  onClick={() => handleRegionClick('kyushu-okinawa')}
                  onMouseEnter={() => setHoveredRegionId('kyushu-okinawa')}
                  onMouseLeave={() => setHoveredRegionId(null)}
                  role="button"
                  tabIndex={0}
                  aria-label="Pilih Kyushu dan Okinawa"
                >
                  {/* Kyushu Island */}
                  <path
                    className="region-path kyushu-path"
                    d="M 175,320 C 185,340 175,385 155,405 C 130,415 110,395 120,360 C 125,335 155,315 175,320 Z"
                  />
                  {/* Okinawa Islands mini cluster */}
                  <circle cx="70" cy="415" r="6" className="region-path okinawa-dot" />
                  <circle cx="85" cy="425" r="4.5" className="region-path okinawa-dot" />
                  <circle cx="55" cy="430" r="3.5" className="region-path okinawa-dot" />

                  <circle cx="150" cy="365" r="4.5" className="region-capital-dot" />
                  <text x="150" y="358" className="region-svg-text">Kyushu</text>
                  <text x="150" y="382" className="region-svg-subtext">九州 · Fukuoka</text>
                  <text x="85" y="408" className="region-svg-subtext" style={{ fontSize: '9px' }}>Okinawa (沖縄)</text>
                </g>
              </svg>
            </div>

            <div className="map-card-footer">
              <span className="hint-text">
                <i className="bx bx-compass"></i> Tip: Klik wilayah manapun pada peta untuk mengubah panel informasi di samping.
              </span>
            </div>
          </div>

          {/* Region Detailed Information Panel */}
          <article className="region-detail-card" style={{ '--region-theme': activeRegion.color } as React.CSSProperties}>
            <div className="region-detail-header">
              <div className="region-title-wrap">
                <span className="region-badge-kanji">{activeRegion.kanji}</span>
                <div>
                  <h3 className="region-title">{activeRegion.japaneseName}</h3>
                  <p className="region-hub">Pusat Utama: <strong>{activeRegion.hubCity}</strong></p>
                </div>
              </div>
              <div className="region-season-tag">
                <span className="season-icon">🌸</span>
                <div>
                  <span className="tag-label">Musim Terbaik</span>
                  <strong>{activeRegion.bestSeasonKanji}</strong>
                </div>
              </div>
            </div>

            <p className="region-description">{activeRegion.description}</p>

            {/* Climate & Temperature Grid */}
            <div className="region-climate-block">
              <h4 className="block-title">
                <i className="bx bx-sun"></i> Rentang Suhu & Cuaca Musiman
              </h4>
              <div className="temp-pills-grid">
                <div className="temp-pill spring">
                  <span className="season-name">Musim Semi (春)</span>
                  <span className="temp-val">{activeRegion.tempRange.spring}</span>
                </div>
                <div className="temp-pill summer">
                  <span className="season-name">Musim Panas (夏)</span>
                  <span className="temp-val">{activeRegion.tempRange.summer}</span>
                </div>
                <div className="temp-pill autumn">
                  <span className="season-name">Musim Gugur (秋)</span>
                  <span className="temp-val">{activeRegion.tempRange.autumn}</span>
                </div>
                <div className="temp-pill winter">
                  <span className="season-name">Musim Dingin (冬)</span>
                  <span className="temp-val">{activeRegion.tempRange.winter}</span>
                </div>
              </div>
            </div>

            {/* Specialties / Meibutsu */}
            <div className="region-specialties-block">
              <h4 className="block-title">
                <i className="bx bx-restaurant"></i> Kuliner Khas Wajib (名物 · Meibutsu)
              </h4>
              <div className="specialties-list">
                {activeRegion.specialties.map((item, idx) => (
                  <div key={idx} className="specialty-item">
                    <span className="specialty-badge">{item.kanji}</span>
                    <div className="specialty-info">
                      <strong>{item.name}</strong>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Attractions & Iconic Matsuri */}
            <div className="region-highlights-block">
              <div className="attractions-group">
                <h4 className="block-title">
                  <i className="bx bx-map-pin"></i> Destinasi Ikonik
                </h4>
                <div className="attractions-chips">
                  {activeRegion.topAttractions.map((attr, idx) => (
                    <span key={idx} className="attr-chip">
                      <strong>{attr.name}</strong> ({attr.city}) · <em>{attr.tag}</em>
                    </span>
                  ))}
                </div>
              </div>

              <div className="matsuri-spotlight">
                <h4 className="block-title">
                  <i className="bx bx-party"></i> Festival Legendaris Wilayah
                </h4>
                <div className="matsuri-card-mini">
                  <span className="matsuri-icon">🎌</span>
                  <span className="matsuri-name">{activeRegion.iconicMatsuri}</span>
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="region-action-row">
              <button
                type="button"
                className="btn btn-plan-region"
                onClick={handlePlanClick}
              >
                <span>Rencanakan Wisata ke {activeRegion.name}</span>
                <i className="bx bx-right-arrow-alt"></i>
              </button>
              <span className="prefecture-count-hint">
                {activeRegion.prefectures.length} Prefektur: {activeRegion.prefectures.join(', ')}
              </span>
            </div>
          </article>
        </div>
      </div>
    </ContentWrapper>
  )
}
