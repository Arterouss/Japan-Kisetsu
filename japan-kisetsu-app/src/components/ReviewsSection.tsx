import { useState, useMemo } from 'react'
import { initialReviews, type ReviewItem } from '../data/reviewsData'

export function ReviewsSection() {
  const [reviews, setReviews] = useState<ReviewItem[]>(initialReviews)
  const [selectedSeason, setSelectedSeason] = useState<string>('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [likedReviews, setLikedReviews] = useState<Record<string, boolean>>({})
  const [notification, setNotification] = useState<string | null>(null)

  // Form State
  const [formName, setFormName] = useState('')
  const [formCity, setFormCity] = useState('')
  const [formSeason, setFormSeason] = useState<'haru' | 'natsu' | 'aki' | 'fuyu' | 'tsuyu'>('haru')
  const [formDestination, setFormDestination] = useState('')
  const [formRating, setFormRating] = useState<number>(5)
  const [formTitle, setFormTitle] = useState('')
  const [formStory, setFormStory] = useState('')

  // Filter logic
  const filteredReviews = useMemo(() => {
    if (selectedSeason === 'all') return reviews
    return reviews.filter((r) => r.seasonId === selectedSeason)
  }, [reviews, selectedSeason])

  // Average Rating
  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 5
    const total = reviews.reduce((acc, cur) => acc + cur.rating, 0)
    return (total / reviews.length).toFixed(1)
  }, [reviews])

  // Like helpful handler
  const handleToggleHelpful = (id: string) => {
    const isCurrentlyLiked = likedReviews[id]
    setLikedReviews((prev) => ({ ...prev, [id]: !isCurrentlyLiked }))
    setReviews((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            helpfulCount: isCurrentlyLiked ? item.helpfulCount - 1 : item.helpfulCount + 1,
          }
        }
        return item
      }),
    )
  }

  // Handle submit review
  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formName.trim() || !formStory.trim() || !formTitle.trim()) {
      alert('Mohon lengkapi nama, judul, dan cerita pengalaman Anda.')
      return
    }

    const seasonMap = {
      haru: { name: 'Haru (Spring)', kanji: '春' },
      natsu: { name: 'Natsu (Summer)', kanji: '夏' },
      aki: { name: 'Aki (Autumn)', kanji: '秋' },
      fuyu: { name: 'Fuyu (Winter)', kanji: '冬' },
      tsuyu: { name: 'Tsuyu (Rainy Season)', kanji: '梅雨' },
    }

    const newReview: ReviewItem = {
      id: `user-${Date.now()}`,
      name: formName.trim(),
      city: formCity.trim() || 'Wisatawan Indonesia',
      avatar: `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(formName)}`,
      seasonId: formSeason,
      seasonName: seasonMap[formSeason].name,
      seasonKanji: seasonMap[formSeason].kanji,
      rating: formRating,
      date: 'Baru saja',
      destination: formDestination.trim() || 'Destinasi Jepang Autentik',
      title: formTitle.trim(),
      story: formStory.trim(),
      verified: true,
      helpfulCount: 0,
    }

    setReviews([newReview, ...reviews])
    setIsModalOpen(false)

    // Reset Form
    setFormName('')
    setFormCity('')
    setFormDestination('')
    setFormTitle('')
    setFormStory('')
    setFormRating(5)

    // Toast Notification
    setNotification('Arigatou! Ulasan perjalanan Anda berhasil diterbitkan.')
    setTimeout(() => setNotification(null), 4000)
  }

  return (
    <section className="reviews-section" id="reviews" aria-label="Ulasan dan Testimoni Wisatawan">
      <div className="section-container">
        {notification && (
          <div className="review-toast-notification">
            <span className="toast-icon">✨</span>
            <span>{notification}</span>
          </div>
        )}

        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">VOICES OF JAPAN · CERITA WISATAWAN</span>
          <h2>Kisah & Pengalaman di <span>5 Musim Jepang</span></h2>
          <p>
            Dengarkan ulasan autentik dari para pelancong yang telah merasakan keajaiban bunga sakura, festival kembang api, daun momiji, hingga salju murni.
          </p>
        </div>

        {/* Reviews Stats Card */}
        <div className="reviews-stats-card">
          <div className="stat-col rating-highlight">
            <div className="stat-number">{averageRating}</div>
            <div className="stat-stars">★★★★★</div>
            <span className="stat-label">Skor Kepuasan Wisatawan</span>
          </div>
          <div className="stat-col">
            <div className="stat-number">{reviews.length}</div>
            <span className="stat-label">Total Ulasan Terverifikasi</span>
          </div>
          <div className="stat-col">
            <div className="stat-number">99%</div>
            <span className="stat-label">Merekomendasikan Perjalanan</span>
          </div>
          <div className="stat-col stat-action">
            <button
              type="button"
              className="btn btn-write-review"
              onClick={() => setIsModalOpen(true)}
            >
              <span>✍ Tulis Ulasan Perjalanan</span>
            </button>
          </div>
        </div>

        {/* Seasonal Filters */}
        <div className="review-filter-tabs" role="tablist">
          <button
            type="button"
            className={`review-tab-btn ${selectedSeason === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedSeason('all')}
          >
            Semua Musim ({reviews.length})
          </button>
          <button
            type="button"
            className={`review-tab-btn season-tab-haru ${selectedSeason === 'haru' ? 'active' : ''}`}
            onClick={() => setSelectedSeason('haru')}
          >
            🌸 春 Haru
          </button>
          <button
            type="button"
            className={`review-tab-btn season-tab-natsu ${selectedSeason === 'natsu' ? 'active' : ''}`}
            onClick={() => setSelectedSeason('natsu')}
          >
            🎆 夏 Natsu
          </button>
          <button
            type="button"
            className={`review-tab-btn season-tab-aki ${selectedSeason === 'aki' ? 'active' : ''}`}
            onClick={() => setSelectedSeason('aki')}
          >
            🍁 秋 Aki
          </button>
          <button
            type="button"
            className={`review-tab-btn season-tab-fuyu ${selectedSeason === 'fuyu' ? 'active' : ''}`}
            onClick={() => setSelectedSeason('fuyu')}
          >
            ❄️ 冬 Fuyu
          </button>
          <button
            type="button"
            className={`review-tab-btn season-tab-tsuyu ${selectedSeason === 'tsuyu' ? 'active' : ''}`}
            onClick={() => setSelectedSeason('tsuyu')}
          >
            🌧️ 梅雨 Tsuyu
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {filteredReviews.map((rev) => {
            const isLiked = likedReviews[rev.id]
            return (
              <article className="review-card" key={rev.id}>
                <div className="review-card-top">
                  <div className="traveler-info">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="traveler-avatar"
                      loading="lazy"
                    />
                    <div>
                      <div className="traveler-name-row">
                        <h4>{rev.name}</h4>
                        {rev.verified && (
                          <span className="badge-verified" title="Wisatawan Terverifikasi">
                            ✓ Verified
                          </span>
                        )}
                      </div>
                      <p className="traveler-origin">{rev.city}</p>
                    </div>
                  </div>

                  <span className={`review-season-badge badge-${rev.seasonId}`}>
                    {rev.seasonKanji} · {rev.seasonName.split(' ')[0]}
                  </span>
                </div>

                <div className="review-rating-row">
                  <div className="stars-row">
                    {'★'.repeat(rev.rating)}
                    {'☆'.repeat(5 - rev.rating)}
                  </div>
                  <span className="review-date">{rev.date}</span>
                </div>

                <div className="review-destination-tag">
                  📍 {rev.destination}
                </div>

                <h3 className="review-title">{rev.title}</h3>
                <p className="review-story">{rev.story}</p>

                <div className="review-footer">
                  <button
                    type="button"
                    className={`btn-helpful ${isLiked ? 'active' : ''}`}
                    onClick={() => handleToggleHelpful(rev.id)}
                    aria-label="Tandai ulasan bermanfaat"
                  >
                    <span>{isLiked ? '❤️ Bermanfaat' : '🤍 Bermanfaat'}</span>
                    <span className="helpful-counter">{rev.helpfulCount}</span>
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {/* Write Review Modal */}
      {isModalOpen && (
        <div
          className="dialog-backdrop"
          role="presentation"
          onMouseDown={() => setIsModalOpen(false)}
        >
          <div
            className="review-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="write-review-title"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="close-button"
              onClick={() => setIsModalOpen(false)}
              aria-label="Tutup form ulasan"
            >
              ×
            </button>

            <div className="review-dialog-header">
              <div className="dialog-badge">
                <span className="badge-kanji">旅の思い出</span>
                <span className="dialog-eyebrow">SHARE YOUR JOURNEY</span>
              </div>
              <h2 id="write-review-title">Bagikan Cerita Liburan <span>Jepang Anda</span></h2>
              <p>Ceritakan momen magis, kuliner favorit, atau tips autentik Anda untuk menginspirasi wisatawan lainnya.</p>
            </div>

            <form onSubmit={handleSubmitReview} className="review-form">
              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="rev-name">
                    <i className="bx bx-user" /> Nama Lengkap <span className="req-star">*</span>
                  </label>
                  <input
                    id="rev-name"
                    type="text"
                    required
                    placeholder="Contoh: Budi Santoso"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="rev-city">
                    <i className="bx bx-map-pin" /> Kota / Asal <span className="req-star">*</span>
                  </label>
                  <input
                    id="rev-city"
                    type="text"
                    required
                    placeholder="Contoh: Jakarta / Bandung"
                    value={formCity}
                    onChange={(e) => setFormCity(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-field">
                  <label htmlFor="rev-season">
                    <i className="bx bx-calendar" /> Musim Kunjungan <span className="req-star">*</span>
                  </label>
                  <select
                    id="rev-season"
                    value={formSeason}
                    onChange={(e) => setFormSeason(e.target.value as any)}
                  >
                    <option value="haru">🌸 Haru (Spring - Musim Semi)</option>
                    <option value="natsu">🎆 Natsu (Summer - Musim Panas)</option>
                    <option value="aki">🍁 Aki (Autumn - Musim Gugur)</option>
                    <option value="fuyu">❄️ Fuyu (Winter - Musim Dingin)</option>
                    <option value="tsuyu">🌧️ Tsuyu (Rainy Season - Musim Hujan)</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="rev-dest">
                    <i className="bx bx-compass" /> Destinasi / Spot Kunjungan <span className="req-star">*</span>
                  </label>
                  <input
                    id="rev-dest"
                    type="text"
                    required
                    placeholder="Contoh: Kyoto · Arashiyama & Gion"
                    value={formDestination}
                    onChange={(e) => setFormDestination(e.target.value)}
                  />
                </div>
              </div>

              <div className="form-field">
                <label>
                  <i className="bx bx-star" /> Rating Pengalaman <span className="req-star">*</span>
                </label>
                <div className="rating-selector">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`star-pick-btn ${star <= formRating ? 'active' : ''}`}
                      onClick={() => setFormRating(star)}
                      aria-label={`Beri rating ${star} bintang`}
                    >
                      ★
                    </button>
                  ))}
                  <span className="rating-text-hint">
                    {formRating === 5 && '🌟 Sempurna! Luar biasa memukau'}
                    {formRating === 4 && '✨ Sangat memuaskan'}
                    {formRating === 3 && '👍 Cukup bagus'}
                    {formRating < 3 && '👌 Pengalaman standar'}
                  </span>
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="rev-title">
                  <i className="bx bx-bookmark" /> Judul Cerita <span className="req-star">*</span>
                </label>
                <input
                  id="rev-title"
                  type="text"
                  required
                  placeholder="Contoh: Pemandangan Sakura Kyoto yang Bikin Takjub!"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                />
              </div>

              <div className="form-field">
                <label htmlFor="rev-story">
                  <i className="bx bx-message-detail" /> Cerita Pengalaman & Tips Perjalanan <span className="req-star">*</span>
                </label>
                <textarea
                  id="rev-story"
                  rows={4}
                  required
                  placeholder="Ceritakan keindahan suasana, kuliner lokal yang dicicipi, atau tips menarik untuk para pelancong berikutnya..."
                  value={formStory}
                  onChange={(e) => setFormStory(e.target.value)}
                />
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Batal
                </button>
                <button type="submit" className="btn btn-submit-review">
                  Publikasikan Ulasan 🚀
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
