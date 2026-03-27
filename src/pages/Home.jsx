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
  '智能渗透': 'border-l-orange-400 hover:bg-orange-50/50',
  '智能漏洞挖掘': 'border-l-violet-400 hover:bg-violet-50/50',
  '大模型安全': 'border-l-emerald-400 hover:bg-emerald-50/50',
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
    <div ref={ref} className="text-center py-8">
      <div className="text-2xl font-bold text-primary-600 mb-1">{display}</div>
      <div className="text-xs text-gray-400">{label}</div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-bg relative overflow-hidden">
        <div className="absolute inset-0 hero-grid" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-10 left-20 w-56 h-56 bg-accent-500/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

        <div className="relative max-w-5xl mx-auto px-6 py-20 sm:py-28">
          <div className="max-w-2xl">
            <p className="text-xs text-primary-300/80 uppercase tracking-widest mb-4 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              广州大学网络空间安全学院
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-5 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              智能攻防课题组
            </h1>
            <p className="text-blue-200/70 leading-relaxed mb-8 text-sm sm:text-base animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Intelligent Attack and Defense Lab（IAD Lab）专注于人工智能与网络安全的交叉研究，
              致力于构建下一代智能化攻防理论体系与核心技术。
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/members" className="btn-white">认识团队</Link>
              <Link to="/achievements" className="btn-ghost">学术成果</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {homeData.stats.map(({ num, label }) => (
              <StatItem key={label} num={num} label={label} />
            ))}
          </div>
        </div>
      </section>

      {/* 课题组简介 */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <ScrollReveal>
            <h2 className="section-title">课题组简介</h2>
            <div className="section-divider" />
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <ScrollReveal delay={100}>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>
                  智能攻防课题组（IAD Lab）隶属于<strong className="text-gray-800">广州大学网络空间先进技术研究院</strong>，由<strong className="text-gray-800">鲁辉教授</strong>领衔。
                  依托广东省新型基础设施网络安全重点实验室，专注于人工智能与网络安全交叉领域的前沿研究。
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
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl border border-primary-100/80 p-6 space-y-3 shadow-sm">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">课题组信息</h3>
                <ul className="space-y-3 text-sm">
                  {homeData.labInfo.map(({ label, value }) => (
                    <li key={label} className="flex gap-3">
                      <span className="text-primary-500 w-20 flex-shrink-0 text-xs pt-0.5 font-medium">{label}</span>
                      <span className="text-gray-700 text-xs font-medium">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 课题组负责人 */}
      <section className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <ScrollReveal>
            <h2 className="section-title">课题组负责人</h2>
            <div className="section-divider" />
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <Link to="/members" className="card card-hover block cursor-pointer group">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-semibold text-2xl shadow-lg shadow-primary-600/20 group-hover:shadow-xl group-hover:shadow-primary-600/30 transition-all duration-300">
                    鲁
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">鲁 辉</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">教授 / 博士生导师</span>
                    <span className="text-xs bg-primary-50 text-primary-700 px-2 py-0.5 rounded font-medium">国家级人才</span>
                  </div>
                 <p className="text-xs text-gray-400 mb-3">广州大学网络空间先进技术研究院 院长 · 广东省新型基础设施网络安全重点实验室 主任 · 黄埔方班班主任 · 新安盟秘书长</p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    主要研究智能网络攻防、大模型安全，已发表高水平论文100余篇，授权专利50余项，获IEEE GlobalCom 2023最佳论文奖。
                    主持设计"蜜洞"主动防御技术，成功应用于北京冬奥会、杭州亚运会、成都大运会、哈尔滨亚冬会等重大安保活动；
                    发现100+高危CVE/CNVD漏洞，关键技术经院士委员会鉴定"处于国际领先水平"。
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {homeData.honors.map(a => (
                      <span key={a} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 border border-gray-100 rounded hover:bg-primary-50 hover:text-primary-600 hover:border-primary-100 transition-colors">{a}</span>
                    ))}
                  </div>
                  <div className="mt-3">
                    <p className="text-xs text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">查看完整介绍 →</p>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* 研究方向 */}
      <section className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <ScrollReveal>
            <h2 className="section-title">研究方向</h2>
            <div className="section-divider" />
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {researchDirections.map(({ icon, title, desc }, idx) => (
              <ScrollReveal key={title} delay={idx * 100}>
                <Link to={`/achievements?tab=papers&dir=${encodeURIComponent(title)}`}
                  className={`card block border-l-[3px] transition-all duration-300 group cursor-pointer hover:-translate-y-0.5 hover:shadow-md ${dirBorderColors[title] || ''}`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 bg-gray-50 text-gray-500 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${dirIconColors[title] || ''}`}>
                      {icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 mb-1 text-sm group-hover:text-primary-700 transition-colors">{title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                      <p className="text-xs text-primary-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">查看相关成果 →</p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 最新动态 */}
      <section className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-2">
              <h2 className="section-title mb-0">最新动态</h2>
              <Link to="/events" className="text-xs text-gray-400 hover:text-primary-600 transition-colors">
                查看全部 →
              </Link>
            </div>
            <div className="section-divider" />
          </ScrollReveal>
          <div className="divide-y divide-gray-50">
            {recentNews.map(({ date, text }, idx) => (
              <ScrollReveal key={idx} delay={idx * 80} animation="fade-left">
                <div className="flex gap-5 py-3.5 group">
                  <div className="flex-shrink-0 w-16 text-xs text-gray-400 pt-0.5 font-medium">{date}</div>
                  <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
