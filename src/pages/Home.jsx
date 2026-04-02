import { Link } from 'react-router-dom'
import homeData from '../data/home.json'
import ScrollReveal from '../components/ScrollReveal'
import useCountUp from '../hooks/useCountUp'

const researchDirections = homeData.researchDirections.map(d => ({
  ...d,
  icon: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={d.svgPath} />
    </svg>
  ),
}))

const dirBorderColors = {
  '智能渗透': 'border-l-orange-400 hover:bg-orange-50/30',
  '智能漏洞挖掘': 'border-l-violet-400 hover:bg-violet-50/30',
  '大模型安全': 'border-l-emerald-400 hover:bg-emerald-50/30',
}

const dirIconColors = {
  '智能渗透': 'group-hover:bg-orange-50 group-hover:text-orange-600',
  '智能漏洞挖掘': 'group-hover:bg-violet-50 group-hover:text-violet-600',
  '大模型安全': 'group-hover:bg-emerald-50 group-hover:text-emerald-600',
}

const recentNews = homeData.recentNews

function StatItem({ num, label }) {
  const { ref, display } = useCountUp(num)
  return (
    <div ref={ref} className="text-center py-8 sm:py-10 relative group">
      {/* 装饰光点 */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full bg-gradient-to-r from-primary-400/0 via-accent-400/50 to-primary-400/0 group-hover:via-accent-400/80 transition-all duration-500" />
      <div className="stat-number mb-1.5">{display}</div>
      <div className="text-xs text-blue-300/50 tracking-wide">{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute inset-0 hero-grid" />

        {/* 科技装饰元素 - 六边形 + 电路线条风 SVG */}
        <div className="absolute top-10 right-10 opacity-[0.07] animate-float hidden sm:block">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <polygon points="100,10 170,50 170,130 100,170 30,130 30,50" stroke="white" strokeWidth="1" fill="none" />
            <polygon points="100,30 150,55 150,115 100,140 50,115 50,55" stroke="white" strokeWidth="0.5" fill="none" />
            <polygon points="100,50 130,65 130,105 100,120 70,105 70,65" stroke="white" strokeWidth="0.5" fill="none" />
            <line x1="100" y1="10" x2="100" y2="0" stroke="white" strokeWidth="0.5" />
            <line x1="170" y1="50" x2="185" y2="42" stroke="white" strokeWidth="0.5" />
            <line x1="170" y1="130" x2="185" y2="138" stroke="white" strokeWidth="0.5" />
            <line x1="30" y1="50" x2="15" y2="42" stroke="white" strokeWidth="0.5" />
            <line x1="30" y1="130" x2="15" y2="138" stroke="white" strokeWidth="0.5" />
            <circle cx="100" cy="10" r="2" fill="white" />
            <circle cx="170" cy="50" r="2" fill="white" />
            <circle cx="170" cy="130" r="2" fill="white" />
            <circle cx="30" cy="50" r="2" fill="white" />
            <circle cx="30" cy="130" r="2" fill="white" />
          </svg>
        </div>

        <div className="absolute bottom-16 left-10 opacity-[0.05] animate-float hidden sm:block" style={{ animationDelay: '3s' }}>
          <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
            <path d="M10,75 L40,75 L50,50 L80,50 L90,75 L120,75 L130,50 L140,50" stroke="white" strokeWidth="1" fill="none" />
            <path d="M10,100 L30,100 L40,80 L70,80 L80,100 L110,100 L120,80 L140,80" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="50" r="3" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="90" cy="75" r="3" stroke="white" strokeWidth="0.5" fill="none" />
            <circle cx="40" cy="80" r="2" fill="white" opacity="0.5" />
            <circle cx="120" cy="80" r="2" fill="white" opacity="0.5" />
          </svg>
        </div>

        {/* 右上电路装饰 */}
        <div className="absolute top-1/3 right-1/4 opacity-[0.04] hidden md:block">
          <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
            <rect x="20" y="20" width="60" height="60" rx="4" stroke="white" strokeWidth="0.5" />
            <rect x="35" y="35" width="30" height="30" rx="2" stroke="white" strokeWidth="0.5" />
            <line x1="50" y1="0" x2="50" y2="20" stroke="white" strokeWidth="0.5" />
            <line x1="50" y1="80" x2="50" y2="100" stroke="white" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="20" y2="50" stroke="white" strokeWidth="0.5" />
            <line x1="80" y1="50" x2="100" y2="50" stroke="white" strokeWidth="0.5" />
          </svg>
        </div>

        {/* IAD Lab 大字底纹 */}
        <div className="absolute top-1/2 -translate-y-1/2 right-6 sm:right-16 select-none pointer-events-none">
          <span className="text-[8rem] sm:text-[12rem] font-black text-white/[0.03] leading-none tracking-tighter">
            IAD
          </span>
        </div>

        <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-xs text-primary-300/80 uppercase tracking-widest mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              广州大学网络空间安全学院
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-3 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-cyan-300">
                智能攻防课题组
              </span>
            </h1>
            <p className="text-xs sm:text-sm text-primary-300/50 font-medium tracking-[0.2em] mb-5 animate-fade-up" style={{ animationDelay: '0.25s' }}>
              INTELLIGENT ATTACK AND DEFENSE LAB
            </p>
            <p className="text-blue-200/60 leading-relaxed mb-8 text-sm sm:text-base animate-fade-up" style={{ animationDelay: '0.3s' }}>
              专注于人工智能与网络安全的交叉研究，致力于构建下一代智能化攻防理论体系与核心技术。
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/members" className="btn-white group">
                认识团队
                <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link to="/achievements" className="btn-ghost">学术成果</Link>
            </div>
          </div>
        </div>

        {/* Hero 底部渐变过渡 */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-400/30 to-transparent" />
      </section>

      {/* 统计数据 - 深色背景 */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-50" />
        <div className="absolute inset-0 shimmer" />
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
            {homeData.stats.map(({ num, label }) => (
              <StatItem key={label} num={num} label={label} />
            ))}
          </div>
        </div>
      </section>

      {/* 课题组简介 - 白色背景 */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="section-title">课题组简介</h2>
            <div className="section-divider" />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <ScrollReveal delay={100}>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  智能攻防课题组（IAD Lab）隶属于<strong className="text-gray-800">广州大学网络空间先进技术研究院</strong>，由<strong className="text-gray-800">鲁辉教授</strong>领衔。
                  依托广东新型基础设施网络安全重点实验室，专注于人工智能与网络安全交叉领域的前沿研究。
                </p>
                <p>
                  课题组围绕<strong className="text-gray-800">智能渗透</strong>、<strong className="text-gray-800">智能漏洞挖掘</strong>与<strong className="text-gray-800">大模型安全</strong>三大方向开展系统性研究，
                  承担国家重点研发计划课题、国家自然科学基金面上项目及广东省重点研发计划等多项重大项目。
                </p>
                <p>
                  团队累计披露主流操作系统和软件高危漏洞 <strong className="text-gray-800">100余个</strong>（CVE/CNVD），
                  发表高水平论文 <strong className="text-gray-800">100余篇</strong>，授权专利50余项。
                  积极参与国内外网络安全竞赛，获国家级、省部级奖项 <strong className="text-gray-800">100余项</strong>。
                </p>
                <p>
                  主持设计的"蜜洞"主动防御技术成功保障北京冬奥会、杭州亚运会、成都大运会、哈尔滨亚冬会、第15届全运会及127–138届广交会等重大网络安保活动，
                  多次获国家重要部门致函感谢，成果获电子学会科技进步一等奖。
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-gradient-to-br from-primary-50/80 to-white rounded-xl border border-primary-100/60 p-6 space-y-3 shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="font-semibold text-gray-900 text-sm mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                  课题组信息
                </h3>
                <ul className="space-y-3 text-sm">
                  {homeData.labInfo.map(({ label, value }) => (
                    <li key={label} className="flex gap-3 group">
                      <span className="text-primary-500 w-20 flex-shrink-0 text-xs pt-0.5 font-medium">{label}</span>
                      <span className="text-gray-700 text-xs font-medium group-hover:text-gray-900 transition-colors">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 课题组负责人 - 浅灰背景 */}
      <section className="bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="section-title">课题组负责人</h2>
            <div className="section-divider" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link to="/members" className="card card-hover block cursor-pointer group relative overflow-hidden">
              {/* 左侧渐变装饰条 */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-600 rounded-l-xl" />
              <div className="flex flex-col sm:flex-row gap-6 pl-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-semibold text-2xl shadow-lg shadow-primary-600/20 group-hover:shadow-xl group-hover:shadow-primary-600/30 group-hover:scale-105 transition-all duration-300">
                    鲁
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">鲁 辉</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-md">教授 / 博士生导师</span>
                    <span className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded-md font-medium">国家级人才</span>
                  </div>
                 <p className="text-xs text-gray-400 mb-3">广州大学网络空间先进技术研究院 院长 · 广东新型基础设施网络安全重点实验室 主任 · 黄埔方班班主任 · 新安盟秘书长</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    主要研究智能网络攻防、大模型安全，已发表高水平论文100余篇，授权专利50余项，获IEEE GlobalCom 2023最佳论文奖。
                    主持设计"蜜洞"主动防御技术，成功应用于北京冬奥会、杭州亚运会、成都大运会、哈尔滨亚冬会等重大安保活动；
                    发现100+高危CVE/CNVD漏洞，关键技术经院士委员会鉴定"处于国际领先水平"。
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {homeData.honors.map(a => (
                      <span key={a} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 border border-gray-100 rounded-md hover:bg-primary-50 hover:text-primary-600 hover:border-primary-100 transition-colors cursor-default">{a}</span>
                    ))}
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                      查看完整介绍
                      <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 研究方向 - 白色背景 */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <ScrollReveal>
            <h2 className="section-title">研究方向</h2>
            <div className="section-divider" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {researchDirections.map(({ icon, title, desc }, idx) => (
              <ScrollReveal key={title} delay={idx * 100}>
                <Link to={`/achievements?tab=papers&dir=${encodeURIComponent(title)}`}
                  className={`card block border-l-4 transition-all duration-300 group cursor-pointer hover:-translate-y-0.5 hover:shadow-md ${dirBorderColors[title] || ''}`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 bg-gray-50 text-gray-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${dirIconColors[title] || ''}`}>
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1 text-sm group-hover:text-primary-700 transition-colors">{title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                      <p className="text-xs text-primary-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-0.5">
                        查看相关成果
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 最新动态 - 浅灰背景 */}
      <section className="bg-gray-50/50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-2">
              <h2 className="section-title mb-0">最新动态</h2>
              <Link to="/events" className="text-xs text-primary-500 hover:text-primary-700 transition-colors flex items-center gap-1 group">
                查看全部
                <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="section-divider" />
          </ScrollReveal>
          <div className="space-y-2">
            {recentNews.map(({ date, text }, idx) => (
              <ScrollReveal key={idx} delay={idx * 80} animation="fade-left">
                <div className="flex gap-5 py-3 px-4 -mx-4 rounded-lg group hover:bg-white/80 transition-all duration-200">
                  <div className="flex-shrink-0 w-16 text-xs text-gray-400 pt-0.5 font-medium tabular-nums">{date}</div>
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-900 transition-colors">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
