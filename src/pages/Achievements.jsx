import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import achievementsData from '../data/achievements.json'
import ScrollReveal from '../components/ScrollReveal'

const { papers, eduPapers, projects, awards, vulns } = achievementsData

function awardBadgeClass(award) {
  if (/特等|金奖/.test(award)) return 'bg-amber-100 text-amber-800 border border-amber-200'
  if (/一等/.test(award)) return 'bg-primary-100 text-primary-800 border border-primary-200'
  if (/银奖|二等/.test(award)) return 'bg-teal-50 text-teal-700 border border-teal-200'
  if (/铜奖|三等/.test(award)) return 'bg-gray-100 text-gray-600 border border-gray-200'
  return 'bg-gray-50 text-gray-500 border border-gray-200'
}
function levelBadgeClass(level) {
  if (level === '国家级') return 'bg-red-50 text-red-600'
  if (level === '省级') return 'bg-orange-50 text-orange-600'
  return 'hidden'
}
function vulnTypeClass(id) {
  if (id.startsWith('CVE-')) return 'bg-red-50 text-red-700 border-red-200'
  if (id.startsWith('CNVD-')) return 'bg-blue-50 text-blue-700 border-blue-200'
  return 'bg-gray-50 text-gray-600 border-gray-200'
}

function YearFilter({ years, selected, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {years.map(y => (
        <button key={y} onClick={() => onChange(y)}
          className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 ${
            selected === y
              ? 'bg-primary-600 text-white border-primary-600 shadow-sm shadow-primary-600/20'
              : 'bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-primary-600'
          }`}>{y}</button>
      ))}
    </div>
  )
}

const paperYears = ['全部', ...new Set(papers.map(p => p.year))].sort((a, b) => a === '全部' ? -1 : b - a)
const awardYears = ['全部', ...new Set(awards.map(a => a.year))].sort((a, b) => a === '全部' ? -1 : b - a)
const DIRS = ['全部', '智能渗透', '智能漏洞挖掘', '大模型安全']
const dirColors = {
  '智能渗透': 'bg-orange-50 text-orange-700 border-orange-200',
  '智能漏洞挖掘': 'bg-violet-50 text-violet-700 border-violet-200',
  '大模型安全': 'bg-emerald-50 text-emerald-700 border-emerald-200',
}

const TABS = [
  { key: 'awards', label: '竞赛获奖', count: awards.length },
  { key: 'vulns', label: '漏洞披露', count: vulns.length },
  { key: 'projects', label: '承担项目', count: null },
  { key: 'papers', label: '学术论文', count: papers.length },
  { key: 'edu', label: '教改论文', count: eduPapers.length },
]

export default function Achievements() {
  const [tab, setTab] = useState('awards')
  const [paperYear, setPaperYear] = useState('全部')
  const [awardYear, setAwardYear] = useState('全部')
  const [dirFilter, setDirFilter] = useState('全部')
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const t = searchParams.get('tab')
    const d = searchParams.get('dir')
    if (t) setTab(t)
    if (d) setDirFilter(d)
  }, [searchParams])

  const filteredPapers = papers.filter(p =>
    (paperYear === '全部' || p.year === paperYear) &&
    (dirFilter === '全部' || p.dir === dirFilter)
  )
  const filteredAwards = awardYear === '全部' ? awards : awards.filter(a => a.year === awardYear)

  return (
    <div>
      {/* 页头横幅 */}
      <div className="page-header">
        <div className="page-header-grid" />
        <div className="relative max-w-5xl mx-auto px-6 py-10">
          <h1 className="text-2xl font-bold text-white mb-1">学术成果</h1>
          <p className="text-sm text-blue-200/60">Academic Achievements</p>
        </div>
      </div>

      <div className="page-container">

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100/80 rounded-xl p-1 mb-8 flex-wrap backdrop-blur-sm">
        {TABS.map(({ key, label, count }) => (
          <button key={key} onClick={() => setTab(key)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1.5 ${
              tab === key ? 'bg-white text-primary-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}>
            {label}
            {count !== null && (
              <span className={`text-xs rounded-full px-1.5 py-0.5 transition-colors ${
                tab === key ? 'bg-primary-100 text-primary-700' : 'bg-gray-200 text-gray-500'
              }`}>{count}</span>
            )}
          </button>
        ))}
      </div>

      {/* 学术论文 */}
      {tab === 'papers' && (
        <section>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <span className="text-sm text-gray-500">{filteredPapers.length} 篇</span>
            <YearFilter years={paperYears} selected={paperYear} onChange={setPaperYear} />
          </div>
          <div className="flex gap-2 flex-wrap mb-6">
            {DIRS.map(d => (
              <button key={d} onClick={() => setDirFilter(d)}
                className={`px-3 py-1 text-xs font-medium rounded-full border transition-all duration-200 ${
                  dirFilter === d
                    ? 'bg-primary-600 text-white border-primary-600 shadow-sm shadow-primary-600/20'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-primary-600'
                }`}>{d}</button>
            ))}
          </div>
          <div className="space-y-3">
            {filteredPapers.map((p, i) => (
              <ScrollReveal key={i} delay={Math.min(i * 40, 300)}>
                <div className="card card-hover py-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xs font-medium px-2 py-0.5 bg-primary-100 text-primary-700 rounded">{p.venue}</span>
                        <span className="text-xs text-gray-400">{p.year}</span>
                        {p.dir && (
                          <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${dirColors[p.dir]}`}>{p.dir}</span>
                        )}
                      </div>
                      <p className="text-sm font-medium text-gray-900 leading-snug mb-0.5">{p.title}</p>
                      <p className="text-xs text-gray-500">作者：{p.authors}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* 教改论文 */}
      {tab === 'edu' && (
        <section>
          <div className="mb-6">
            <p className="text-sm text-gray-500">网络安全教育改革与人才培养相关研究论文，共 {eduPapers.length} 篇</p>
          </div>
          <div className="space-y-3">
            {eduPapers.map((p, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <div className="card card-hover py-4">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 text-teal-600 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-xs font-medium px-2 py-0.5 bg-teal-100 text-teal-700 rounded">{p.venue}</span>
                        <span className="text-xs text-gray-400">{p.year}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-900 leading-snug mb-0.5">{p.title}</p>
                      <p className="text-xs text-gray-500">作者：{p.authors}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* 承担项目 */}
      {tab === 'projects' && (
        <section>
          {projects.length === 0 ? (
            <div className="card text-center py-14 text-gray-400">
              <p className="text-sm">项目信息待补充</p>
            </div>
          ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">项目名称</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">来源</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">周期</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {projects.map((proj, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5 text-gray-800 font-medium">{proj.title}</td>
                    <td className="px-4 py-3.5 text-gray-500">{proj.source}</td>
                    <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">{proj.period}</td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${
                        proj.status === '在研' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'
                      }`}>{proj.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}
        </section>
      )}

      {/* 竞赛获奖 */}
      {tab === 'awards' && (
        <section>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <span className="text-sm text-gray-500">共 {filteredAwards.length} 项获奖记录</span>
            <YearFilter years={awardYears} selected={awardYear} onChange={setAwardYear} />
          </div>
          <div className="space-y-3">
            {filteredAwards.map((item, idx) => (
              <ScrollReveal key={idx} delay={Math.min(idx * 40, 300)}>
                <div className="card card-hover py-4">
                  <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm leading-snug mb-1.5">{item.competition}</h3>
                      <p className="text-xs text-gray-500 mb-1"><span className="text-gray-400">获奖学生：</span>{item.students}</p>
                      {item.organizer && <p className="text-xs text-gray-400 leading-relaxed"><span>主办：</span>{item.organizer}</p>}
                    </div>
                    <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${awardBadgeClass(item.award)}`}>{item.award}</span>
                      <div className="flex gap-1.5">
                        {item.level && <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelBadgeClass(item.level)}`}>{item.level}</span>}
                        <span className="text-xs text-gray-400">{item.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* 漏洞披露 */}
      {tab === 'vulns' && (
        <section>
          <ScrollReveal>
            <div className="mb-6 flex items-start justify-between flex-wrap gap-3">
              <div>
                <p className="text-sm text-gray-600 mb-1">课题组累计披露主流操作系统和软件漏洞 <strong>{vulns.length}</strong> 个（CVE/CNVD）</p>
                <p className="text-xs text-gray-400">包括微软 Edge 浏览器等主流软件漏洞，获微软致谢并入选微软全球最有价值安全研究员（2021）</p>
              </div>
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 rounded border bg-red-50 text-red-700 border-red-200 font-medium">CVE</span>
                <span className="text-xs px-2 py-1 rounded border bg-blue-50 text-blue-700 border-blue-200 font-medium">CNVD</span>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-amber-800 font-medium mb-1">典型成果</p>
              <ul className="text-xs text-amber-700 space-y-1">
                <li>• 学生温志华（鲁辉指导）发现微软Edge浏览器漏洞，获微软致谢并入选<strong>微软全球最有价值安全研究员（2021 MSRC MVR）</strong></li>
                <li>• 鲁辉等人发现XStream漏洞，被360评为 <strong>9.8分（满分10）</strong>，威胁等级"严重"</li>
              </ul>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[...vulns].sort((a, b) => b.date.localeCompare(a.date)).map((v, i) => (
              <ScrollReveal key={i} delay={Math.min(i * 30, 300)}>
                <div className={`bg-white border border-gray-100 rounded-lg px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 cursor-default ${
                  v.id.startsWith('CVE-') ? 'glow-border-red' : 'glow-border-blue'
                }`}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded border ${vulnTypeClass(v.id)}`}>{v.id}</span>
                    <span className="text-xs text-gray-400">{v.date}</span>
                  </div>
                  {v.contributors !== '—' && (
                    <p className="text-xs text-gray-500 leading-relaxed">{v.contributors}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}
      </div>
    </div>
  )
}
