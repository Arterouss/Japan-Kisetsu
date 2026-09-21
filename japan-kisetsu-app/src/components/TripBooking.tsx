import { useState, useId } from 'react'
import { destinations } from '../data/destinations'

type SeasonOption = 'haru' | 'natsu' | 'aki' | 'fuyu' | 'tsuyu'
type AccommOption = 'hotel' | 'ryokan' | 'boutique'

interface TripBookingProps {
  initialDestination?: string
}

export function TripBooking({ initialDestination = '' }: TripBookingProps) {
  const formId = useId()
  const [season, setSeason] = useState<SeasonOption>('haru')
  const [selectedDestId, setSelectedDestId] = useState<string>(() => {
    if (initialDestination) {
      const match = destinations.find((d) => d.name.toLowerCase().includes(initialDestination.toLowerCase()))
      return match ? match.id : destinations[0].id
    }
    return destinations[0].id
  })
  const [travelers, setTravelers] = useState<number>(2)
  const [durationDays, setDurationDays] = useState<number>(7)
  const [departureDate, setDepartureDate] = useState<string>('2026-10-15')
  const [accommodation, setAccommodation] = useState<AccommOption>('hotel')
  const [preferences, setPreferences] = useState<string[]>(['Kuil & Sejarah', 'Kuliner & Street Food'])
  const [customerName, setCustomerName] = useState<string>('')
  const [customerEmail, setCustomerEmail] = useState<string>('')
  const [showTicketModal, setShowTicketModal] = useState<boolean>(false)
  const [bookingCode, setBookingCode] = useState<string>('')

  // Filter available destinations by chosen season
  const seasonDestinations = destinations.filter((d) => d.seasonId === season)
  const activeDest = destinations.find((d) => d.id === selectedDestId) || seasonDestinations[0] || destinations[0]

  const togglePreference = (pref: string) => {
    setPreferences((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    )
  }

  // Price calculations (in IDR)
  const basePricePerDayPerPerson = 1850000 // Rp 1.85jt / hari / org
  const accommMultiplier =
    accommodation === 'ryokan' ? 1.35 : accommodation === 'boutique' ? 1.15 : 1.0
  const jrPassEstimated = 3400000 * travelers // Rp 3.4jt / org

  const estimatedTotal = Math.round(
    durationDays * basePricePerDayPerPerson * accommMultiplier * travelers + jrPassEstimated
  )
  const estimatedPerPerson = Math.round(estimatedTotal / travelers)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const randomSuffix = Math.floor(1000 + Math.random() * 9000)
    const code = `JPK-${season.toUpperCase()}-${randomSuffix}`
    setBookingCode(code)
    setShowTicketModal(true)
  }

  return (
    <section className="booking-section" id="booking" aria-label="Rencana & Simulasi Liburan Jepang">
      <div className="section-container">
        {/* Section Header */}
        <header className="section-header">
          <div className="section-badge">
            <span>旅行プランナー</span>
            <span>JAPAN TRIP PLANNER & BOOKING</span>
          </div>
          <h2 className="section-title">
            Rancang Liburan Impian <span>ke Jepang</span>
          </h2>
          <p className="section-subtitle">
            Pilih musim, destinasi favorit, dan gaya perjalanan Anda. Sistem kami menghitung estimasi biaya akomodasi,
            transportasi Shinkansen, serta mencetak tiket rencana perjalanan digital Anda.
          </p>
        </header>

        <div className="booking-layout">
          {/* Booking Form */}
          <form className="booking-form-card" onSubmit={handleSubmit}>
            <div className="form-group-section">
              <h3 className="form-legend">
                <span className="step-number">1</span> Pilih Musim & Destinasi Utama
              </h3>

              {/* Season Selector */}
              <div className="season-selector-grid">
                {[
                  { id: 'haru', label: 'Haru (Spring)', kanji: '春', icon: '🌸' },
                  { id: 'natsu', label: 'Natsu (Summer)', kanji: '夏', icon: '🎆' },
                  { id: 'aki', label: 'Aki (Autumn)', kanji: '秋', icon: '🍁' },
                  { id: 'fuyu', label: 'Fuyu (Winter)', kanji: '冬', icon: '❄️' },
                  { id: 'tsuyu', label: 'Tsuyu (Rainy)', kanji: '梅雨', icon: '🌧️' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    className={`season-choice-btn ${season === s.id ? 'active' : ''} season-${s.id}`}
                    onClick={() => {
                      setSeason(s.id as SeasonOption)
                      const firstInSeason = destinations.find((d) => d.seasonId === s.id)
                      if (firstInSeason) setSelectedDestId(firstInSeason.id)
                    }}
                  >
                    <span className="choice-icon">{s.icon}</span>
                    <span className="choice-kanji">{s.kanji}</span>
                    <span className="choice-label">{s.label}</span>
                  </button>
                ))}
              </div>

              {/* Destination Dropdown */}
              <div className="field-row">
                <label htmlFor={`${formId}-dest`} className="field-label">
                  Spot Destinasi Unggulan:
                </label>
                <select
                  id={`${formId}-dest`}
                  className="form-select"
                  value={selectedDestId}
                  onChange={(e) => setSelectedDestId(e.target.value)}
                >
                  {seasonDestinations.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} ({d.prefecture}) — {d.bestTime}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Step 2: Duration & Travelers */}
            <div className="form-group-section">
              <h3 className="form-legend">
                <span className="step-number">2</span> Durasi & Jumlah Traveler
              </h3>

              <div className="form-grid-two">
                {/* Duration Pills */}
                <div className="field-block">
                  <label className="field-label">Durasi Perjalanan:</label>
                  <div className="duration-pills">
                    {[
                      { days: 3, label: '3 Hari · Weekend' },
                      { days: 5, label: '5 Hari · Golden Route' },
                      { days: 7, label: '7 Hari · Best Season' },
                      { days: 10, label: '10 Hari · Grand Tour' },
                    ].map((item) => (
                      <button
                        key={item.days}
                        type="button"
                        className={`duration-pill ${durationDays === item.days ? 'active' : ''}`}
                        onClick={() => setDurationDays(item.days)}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Travelers Counter */}
                <div className="field-block">
                  <label className="field-label">Jumlah Peserta:</label>
                  <div className="traveler-counter">
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => setTravelers((prev) => Math.max(1, prev - 1))}
                      aria-label="Kurangi peserta"
                    >
                      −
                    </button>
                    <span className="counter-value">{travelers} Orang</span>
                    <button
                      type="button"
                      className="counter-btn"
                      onClick={() => setTravelers((prev) => Math.min(12, prev + 1))}
                      aria-label="Tambah peserta"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Departure Date */}
              <div className="field-row">
                <label htmlFor={`${formId}-date`} className="field-label">
                  Perkiraan Tanggal Berangkat:
                </label>
                <input
                  id={`${formId}-date`}
                  type="date"
                  className="form-input"
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                  min="2026-09-01"
                  required
                />
              </div>
            </div>

            {/* Step 3: Preferences & Accommodation */}
            <div className="form-group-section">
              <h3 className="form-legend">
                <span className="step-number">3</span> Akomodasi & Preferensi Wisata
              </h3>

              {/* Accommodation */}
              <div className="field-block">
                <label className="field-label">Pilihan Penginapan:</label>
                <div className="accomm-grid">
                  {[
                    { id: 'hotel', title: 'City Hotel Bintang 4', desc: 'Nyaman di pusat kota, dekat stasiun Shinkansen' },
                    { id: 'ryokan', title: 'Ryokan Tradisional', desc: 'Termasuk pemandian Onsen & makan malam Kaiseki autentik' },
                    { id: 'boutique', title: 'Boutique Aesthetic Inn', desc: 'Desain minimalis modern bergaya estetik Jepang' },
                  ].map((acc) => (
                    <div
                      key={acc.id}
                      className={`accomm-card ${accommodation === acc.id ? 'active' : ''}`}
                      onClick={() => setAccommodation(acc.id as AccommOption)}
                    >
                      <h4>{acc.title}</h4>
                      <p>{acc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Travel Preferences */}
              <div className="field-block">
                <label className="field-label">Gaya Wisata yang Diinginkan:</label>
                <div className="pref-chips">
                  {[
                    '⛩️ Kuil & Sejarah',
                    '🍱 Kuliner & Street Food',
                    '♨️ Onsen & Relaksasi',
                    '📸 Fotografi & Panorama',
                    '🛍️ Belanja & Pop Culture',
                    '🚂 Pengalaman Shinkansen',
                  ].map((pref) => {
                    const isChecked = preferences.includes(pref)
                    return (
                      <button
                        key={pref}
                        type="button"
                        className={`pref-chip ${isChecked ? 'active' : ''}`}
                        onClick={() => togglePreference(pref)}
                      >
                        {pref}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Customer Contact */}
              <div className="form-grid-two">
                <div className="field-block">
                  <label htmlFor={`${formId}-name`} className="field-label">
                    Nama Pemesan:
                  </label>
                  <input
                    id={`${formId}-name`}
                    type="text"
                    className="form-input"
                    placeholder="Contoh: Bayu Pratama"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    required
                  />
                </div>
                <div className="field-block">
                  <label htmlFor={`${formId}-email`} className="field-label">
                    Email Konfirmasi:
                  </label>
                  <input
                    id={`${formId}-email`}
                    type="email"
                    className="form-input"
                    placeholder="nama@email.com"
                    value={customerEmail}
                    onChange={(e) => setCustomerEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>

            <button type="submit" className="btn btn-submit-booking">
              <span>Konfirmasi & Cetak Tiket Perjalanan</span>
              <span className="btn-icon">🎫</span>
            </button>
          </form>

          {/* Real-time Summary Card */}
          <aside className="booking-summary-card">
            <div className="summary-header">
              <span className="summary-kanji">見積もり</span>
              <h3>Ringkasan Simulasi Biaya</h3>
              <p>Estimasi transparan tanpa biaya tersembunyi</p>
            </div>

            <div className="summary-dest-preview">
              <img src={activeDest.image} alt={activeDest.name} />
              <div className="summary-dest-info">
                <span className="badge-season-tag">
                  {activeDest.seasonKanji} {activeDest.seasonLabel}
                </span>
                <h4>{activeDest.name}</h4>
                <p>📍 {activeDest.prefecture}</p>
              </div>
            </div>

            <div className="cost-breakdown">
              <div className="cost-row">
                <span>Durasi Paket:</span>
                <strong>{durationDays} Hari / {durationDays - 1} Malam</strong>
              </div>
              <div className="cost-row">
                <span>Peserta:</span>
                <strong>{travelers} Orang</strong>
              </div>
              <div className="cost-row">
                <span>Akomodasi:</span>
                <span className="text-capitalize">{accommodation}</span>
              </div>
              <div className="cost-row">
                <span>JR Shinkansen Pass:</span>
                <span className="badge-included">Termasuk ✓</span>
              </div>
              <div className="cost-row">
                <span>Wisata & Guide Lokal:</span>
                <span className="badge-included">Termasuk ✓</span>
              </div>

              <hr className="summary-divider" />

              <div className="total-cost-block">
                <span className="total-label">Estimasi Total ({travelers} Orang):</span>
                <div className="total-price">Rp {estimatedTotal.toLocaleString('id-ID')}</div>
                <div className="per-person-price">
                  (Sekitar Rp {estimatedPerPerson.toLocaleString('id-ID')} / orang)
                </div>
              </div>
            </div>

            <div className="summary-perks">
              <p>✨ Termasuk Asuransi Perjalanan Jepang</p>
              <p>⛩️ Pemandu Berbahasa Indonesia & Jepang</p>
              <p>📶 Pocket Wi-Fi Unlimited 4G Selama di Jepang</p>
            </div>
          </aside>
        </div>
      </div>

      {/* Digital Shinkansen Ticket Modal */}
      {showTicketModal && (
        <div
          className="dest-modal-backdrop"
          role="presentation"
          onClick={() => setShowTicketModal(false)}
        >
          <div
            className="shinkansen-ticket-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ticket-heading"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close-button"
              onClick={() => setShowTicketModal(false)}
              aria-label="Tutup tiket"
            >
              ✕
            </button>

            {/* Ticket Card Container */}
            <div className="shinkansen-ticket">
              {/* Ticket Header */}
              <div className="ticket-top">
                <div className="ticket-brand">
                  <span className="ticket-logo-kanji">四季</span>
                  <div>
                    <h4>JAPAN KISETSU RAIL & TOUR PASS</h4>
                    <p>日本四季観光・新幹線デジタルパス</p>
                  </div>
                </div>
                <div className="ticket-booking-code">
                  <span className="code-label">BOOKING ID</span>
                  <span className="code-val">{bookingCode}</span>
                </div>
              </div>

              {/* Main Ticket Body */}
              <div className="ticket-main-grid">
                <div className="ticket-field">
                  <span className="field-title">PASSENGER NAME</span>
                  <span className="field-val highlight">{customerName || 'Tamu Terhormat'}</span>
                </div>
                <div className="ticket-field">
                  <span className="field-title">SEASON & TOUR</span>
                  <span className="field-val">
                    {activeDest.seasonKanji} {activeDest.seasonLabel} ({activeDest.name})
                  </span>
                </div>
                <div className="ticket-field">
                  <span className="field-title">DEPARTURE DATE</span>
                  <span className="field-val">{departureDate}</span>
                </div>
                <div className="ticket-field">
                  <span className="field-title">DURATION</span>
                  <span className="field-val">{durationDays} Days / {durationDays - 1} Nights</span>
                </div>
                <div className="ticket-field">
                  <span className="field-title">TOTAL TRAVELERS</span>
                  <span className="field-val">{travelers} Person(s)</span>
                </div>
                <div className="ticket-field">
                  <span className="field-title">ACCOMMODATION</span>
                  <span className="field-val text-capitalize">{accommodation} Style</span>
                </div>
              </div>

              {/* Travel Preferences */}
              <div className="ticket-tags">
                <span className="field-title">EXPERIENCES:</span>
                <div className="ticket-tag-list">
                  {preferences.map((p, i) => (
                    <span key={i} className="ticket-pill">{p}</span>
                  ))}
                </div>
              </div>

              {/* Perforated Divider */}
              <div className="ticket-perforated-line">
                <span className="notch-left"></span>
                <span className="dash-line"></span>
                <span className="notch-right"></span>
              </div>

              {/* Ticket Footer / Barcode */}
              <div className="ticket-footer-row">
                <div className="ticket-price-info">
                  <span className="field-title">ESTIMATED FARE</span>
                  <span className="fare-price">Rp {estimatedTotal.toLocaleString('id-ID')}</span>
                </div>

                <div className="ticket-stamp">
                  <span className="hanko-seal">予約済</span>
                  <span className="stamp-text">CONFIRMED</span>
                </div>

                <div className="ticket-barcode-block">
                  <div className="barcode-bars" aria-hidden="true"></div>
                  <span className="barcode-text">||||| | |||| ||| ||||| | ||</span>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="ticket-modal-actions">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setShowTicketModal(false)}
              >
                Tutup
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  window.print()
                }}
              >
                Cetak / Simpan Tiket PDF 🖨️
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
