import { DestinationGuide } from './DestinationGuide'
import { JapanRegionMap } from './JapanRegionMap'
import { FestivalTimeline } from './FestivalTimeline'

export type ExplorerTab = 'destinations' | 'regions' | 'festivals'

interface JapanExplorerHubProps {
  activeSeasonId: string
  onPlanTrip: (destination: string) => void
  activeTab: ExplorerTab
  onTabChange: (tab: ExplorerTab) => void
}

export function JapanExplorerHub({
  activeSeasonId,
  onPlanTrip,
  activeTab,
  onTabChange,
}: JapanExplorerHubProps) {
  return (
    <section className="explorer-hub-section" id="explore-hub" aria-label="Japan Explorer Hub">
      <div className="section-container">
        {/* Master Section Header */}
        <header className="section-header hub-master-header">
          <div className="section-badge">
            <span>日本の探訪</span>
            <span>JAPAN EXPLORER HUB</span>
          </div>
          <h2 className="section-title">
            Eksplorasi Pesona Autentik <span>Jepang</span>
          </h2>
          <p className="section-subtitle">
            Satu pusat penjelajahan terpadu untuk semua keindahan Negeri Matahari Terbit. Pilih sudut pandang perjalanan Anda: temukan destinasi terbaik per musim, telusuri 8 wilayah kepulauan, atau rasakan kemeriahan festival tradisional.
          </p>
        </header>

        {/* Segmented Master Tab Bar */}
        <div className="hub-nav-switcher" role="tablist" aria-label="Mode Eksplorasi">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'destinations'}
            className={`hub-tab-card ${activeTab === 'destinations' ? 'active' : ''}`}
            onClick={() => onTabChange('destinations')}
          >
            <div className="tab-card-icon">🌸</div>
            <div className="tab-card-info">
              <div className="tab-card-title-row">
                <span className="tab-card-title">Katalog Destinasi</span>
                <span className="tab-card-kanji">名所</span>
              </div>
              <p className="tab-card-desc">Rekomendasi spot indah & rute tiap musim</p>
            </div>
            <span className="tab-active-indicator" />
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'regions'}
            className={`hub-tab-card ${activeTab === 'regions' ? 'active' : ''}`}
            onClick={() => onTabChange('regions')}
          >
            <div className="tab-card-icon">🗺️</div>
            <div className="tab-card-info">
              <div className="tab-card-title-row">
                <span className="tab-card-title">Peta 8 Wilayah</span>
                <span className="tab-card-kanji">地域</span>
              </div>
              <p className="tab-card-desc">Peta SVG interaktif, iklim & kuliner khas</p>
            </div>
            <span className="tab-active-indicator" />
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'festivals'}
            className={`hub-tab-card ${activeTab === 'festivals' ? 'active' : ''}`}
            onClick={() => onTabChange('festivals')}
          >
            <div className="tab-card-icon">🎌</div>
            <div className="tab-card-info">
              <div className="tab-card-title-row">
                <span className="tab-card-title">Festival Tradisional</span>
                <span className="tab-card-kanji">祭</span>
              </div>
              <p className="tab-card-desc">Matsuri legendaris, etiket & street food</p>
            </div>
            <span className="tab-active-indicator" />
          </button>
        </div>

        {/* Tab Content Display */}
        <div className="hub-tab-viewport">
          {activeTab === 'destinations' && (
            <div className="hub-tab-panel animate-fade-in" role="tabpanel">
              <DestinationGuide
                isEmbedded
                hideHeader
                activeSeasonId={activeSeasonId}
                onPlanTrip={onPlanTrip}
              />
            </div>
          )}

          {activeTab === 'regions' && (
            <div className="hub-tab-panel animate-fade-in" role="tabpanel">
              <JapanRegionMap
                isEmbedded
                hideHeader
                onPlanTrip={onPlanTrip}
              />
            </div>
          )}

          {activeTab === 'festivals' && (
            <div className="hub-tab-panel animate-fade-in" role="tabpanel">
              <FestivalTimeline
                isEmbedded
                hideHeader
                onPlanTrip={onPlanTrip}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
