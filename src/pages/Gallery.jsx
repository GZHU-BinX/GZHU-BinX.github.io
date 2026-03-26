import { useState, useEffect, useCallback } from 'react'
import galleryData from '../data/gallery.json'

const { activities } = galleryData

const CATEGORIES = ['全部', '团建出游', '学术聚餐', '体育运动', '节日庆祝']

const categoryColors = {
  '团建出游': 'bg-emerald-50 text-emerald-700 border-emerald-200',
  '学术聚餐': 'bg-amber-50 text-amber-700 border-amber-200',
  '体育运动': 'bg-blue-50 text-blue-700 border-blue-200',
  '节日庆祝': 'bg-rose-50 text-rose-700 border-rose-200',
}

// ─── Lightbox 组件 ────────────────────────────────────────────────────────────
function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrev, onNext])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80" onClick={onClose}>
      <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index]}
          alt=""
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
        {/* 关闭按钮 */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/70 hover:text-white transition-colors"
          aria-label="关闭"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* 左右切换 */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white/80 hover:bg-black/60 hover:text-white flex items-center justify-center transition-colors"
              aria-label="上一张"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white/80 hover:bg-black/60 hover:text-white flex items-center justify-center transition-colors"
              aria-label="下一张"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        {/* 计数器 */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white/70 bg-black/40 px-3 py-1 rounded-full">
            {index + 1} / {images.length}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── 主页面 ───────────────────────────────────────────────────────────────────
export default function Gallery() {
  const [category, setCategory] = useState('全部')
  const [lightbox, setLightbox] = useState(null) // { images, index }

  const filtered = category === '全部'
    ? activities
    : activities.filter(a => a.category === category)

  const openLightbox = (images, index = 0) => setLightbox({ images, index })
  const closeLightbox = () => setLightbox(null)

  const prevImage = useCallback(() => {
    if (!lightbox) return
    setLightbox(prev => ({
      ...prev,
      index: (prev.index - 1 + prev.images.length) % prev.images.length,
    }))
  }, [lightbox])

  const nextImage = useCallback(() => {
    if (!lightbox) return
    setLightbox(prev => ({
      ...prev,
      index: (prev.index + 1) % prev.images.length,
    }))
  }, [lightbox])

  return (
    <div className="page-container">
      <h1 className="section-title">团建风采</h1>
      <div className="section-divider" />

      <p className="text-sm text-gray-500 mb-6">
        记录课题组师生课余时光的精彩瞬间，共 {filtered.length} 个活动
      </p>

      {/* 类别筛选 */}
      <div className="flex gap-2 flex-wrap mb-8">
        {CATEGORIES.map(c => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
              category === c
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-primary-600'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* 活动卡片网格 */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filtered.map((activity, idx) => (
          <div key={idx} className="card p-0 overflow-hidden group hover:shadow-md transition-shadow">
            {/* 封面图 */}
            <div
              className="aspect-[4/3] bg-gray-100 overflow-hidden cursor-pointer relative"
              onClick={() => openLightbox(activity.images)}
            >
              <img
                src={activity.cover}
                alt={activity.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 items-center justify-center text-white font-bold text-lg absolute inset-0 hidden">
                {activity.title[0]}
              </div>
              {/* 图片数量角标 */}
              {activity.images.length > 1 && (
                <div className="absolute bottom-2 right-2 text-xs text-white bg-black/50 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {activity.images.length}
                </div>
              )}
            </div>
            {/* 文字信息 */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${categoryColors[activity.category]}`}>
                  {activity.category}
                </span>
                <span className="text-xs text-gray-400">{activity.date}</span>
              </div>
              <h3 className="text-sm font-medium text-gray-900 mb-1 leading-snug">{activity.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed line-clamp-2">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="card text-center py-14 text-gray-400">
          <p className="text-sm">暂无该类别的活动记录</p>
        </div>
      )}

      {/* Lightbox */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  )
}
