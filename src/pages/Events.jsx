import { useState } from 'react'
import eventsData from '../data/events.json'
import ScrollReveal from '../components/ScrollReveal'

const { events, medias } = eventsData

const tagColors = {
  paper: 'bg-blue-50 text-blue-700',
  project: 'bg-green-50 text-green-700',
  award: 'bg-amber-50 text-amber-700',
  academic: 'bg-purple-50 text-purple-700',
  vuln: 'bg-red-50 text-red-600',
}

const TABS = ['课题组动态', '媒体报道']

export default function Events() {
  const [tab, setTab] = useState('课题组动态')

  return (
    <div>
      {/* 页头横幅 */}
      <div className="page-header">
        <div className="page-header-grid" />
        <div className="relative max-w-5xl mx-auto px-6 py-10">
          <h1 className="text-2xl font-bold text-white mb-1">课题组动态</h1>
          <p className="text-sm text-blue-200/60">News & Events</p>
        </div>
      </div>

      <div className="page-container">

      {/* Tabs */}
      <ScrollReveal delay={100}>
        <div className="flex gap-1 bg-gray-100/80 rounded-xl p-1 mb-8 w-fit backdrop-blur-sm">
          {TABS.map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                tab === t ? 'bg-white text-primary-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'
              }`}>{t}</button>
          ))}
        </div>
      </ScrollReveal>

      {/* 课题组动态 */}
      {tab === '课题组动态' && (
        <div className="relative">
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-100 to-transparent" />
          <div className="space-y-6">
            {events.map((ev, idx) => (
              <ScrollReveal key={idx} delay={idx * 80} animation={idx % 2 === 0 ? 'fade-up' : 'fade-left'}>
                <div className="flex gap-6 group">
                  <div className="flex-shrink-0 w-[72px] text-right">
                    <div className="text-xs font-semibold text-gray-500 leading-tight">{ev.year}</div>
                    <div className="text-xs text-gray-400">{ev.month}月</div>
                  </div>
                  <div className="relative flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary-500 border-2 border-white shadow-sm mt-0.5 group-hover:bg-primary-600 transition-colors animate-pulse-dot" />
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="card card-hover py-4 px-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${tagColors[ev.tag]}`}>{ev.type}</span>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">{ev.content}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}

      {/* 媒体报道 */}
      {tab === '媒体报道' && (
        <div>
          <ScrollReveal>
            <p className="text-sm text-gray-500 mb-6">课题组相关媒体报道及社会关注，共 {medias.length} 条</p>
          </ScrollReveal>
          <div className="space-y-3">
            {medias.map((m, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <a href={m.url} target="_blank" rel="noopener noreferrer"
                  className="card card-hover flex items-start gap-4 py-4 group block">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-100 group-hover:rotate-3 transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-primary-700 transition-colors leading-snug mb-1">
                      {m.title}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="font-medium text-gray-500">{m.source}</span>
                      <span>·</span>
                      <span>{m.date}</span>
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-primary-400 flex-shrink-0 mt-1 transition-all duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  )
}
