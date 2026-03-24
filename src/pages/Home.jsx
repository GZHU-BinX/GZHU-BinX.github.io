import { Link } from 'react-router-dom'

const researchDirections = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '智能漏洞挖掘',
    desc: '利用机器学习与程序分析技术，自动化发现软件系统中的安全漏洞，研究模糊测试与符号执行的融合方法。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '对抗样本与鲁棒性',
    desc: '研究深度学习模型在对抗攻击下的脆弱性，探索增强 AI 系统安全鲁棒性的防御方法与理论框架。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: '恶意代码检测与分析',
    desc: '基于行为分析与深度学习的恶意软件检测技术，研究新型勒索软件、APT 攻击的溯源与防御机制。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    title: '网络流量分析',
    desc: '利用人工智能技术对网络流量进行实时检测与异常识别，研究加密流量分类与网络入侵检测系统。',
  },
]

const recentNews = [
  {
    date: '2025-08',
    text: '陶昱成、陈慧珍、何云飞、吴梓峰在 CISCN 全国大学生信息安全竞赛中荣获国家级一等奖。',
  },
  {
    date: '2025-03',
    text: '张浩、李德林在第十八届全国大学生软件创新大赛中荣获国家级一等奖。',
  },
  {
    date: '2024-11',
    text: '张浩楠等同学在"中国网谷·华为杯"第三届中国研究生网络安全创新大赛中荣获国家级二等奖。',
  },
  {
    date: '2023-07',
    text: '郑镛、陈俊翰、梁儒烽在 2023年 CIVC 天融信杯智能网联汽车信息安全攻防赛中斩获金奖。',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-white/90">广州大学网络空间安全学院</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-5">
              智能攻防
              <br />
              <span className="text-primary-200">课题组</span>
            </h1>
            <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
              Intelligent Attack and Defense Lab（IAD Lab）专注于人工智能与网络安全的交叉研究，
              致力于构建下一代智能化攻防理论体系与核心技术。
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/members" className="btn-primary bg-white text-primary-800 hover:bg-primary-50">
                认识团队
              </Link>
              <Link to="/achievements" className="btn-outline border-white/50 text-white hover:bg-white/10">
                学术成果
              </Link>
            </div>
          </div>
        </div>
        {/* Wave divider */}
        <div className="h-10 bg-white" style={{ clipPath: 'ellipse(120% 100% at 50% 100%)' }} />
      </section>

      {/* 统计数据 */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '60+', label: '发表论文' },
              { num: '90+', label: '漏洞披露' },
              { num: '20+', label: '团队成员' },
              { num: '100+', label: '竞赛获奖' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center py-6 border-b-2 border-primary-100 hover:border-primary-500 transition-colors">
                <div className="text-3xl font-bold text-primary-700 mb-1">{num}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 课题组简介 */}
      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="section-title">课题组简介</h2>
          <div className="section-divider" />
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
              <p>
                智能攻防课题组（IAD Lab）隶属于广州大学网络空间先进技术研究院，由<strong className="text-gray-800">鲁辉教授</strong>领衔，
                长期深耕网络安全与人工智能交叉领域前沿研究。
              </p>
              <p>
                课题组围绕"智能化漏洞挖掘"、"对抗攻防"、"恶意代码分析"与"网络流量检测"四大方向开展系统性研究，
                承担多项国家重点研发计划课题、国家自然科学基金面上项目及广东省重点研发计划等。
              </p>
              <p>
                团队累计披露主流操作系统和软件漏洞 <strong className="text-gray-800">80余个</strong>（CVE/CNVD），
                在国内外期刊与会议发表论文 <strong className="text-gray-800">60余篇</strong>，专利 30余项。
                课题组积极参与国内外网络安全竞赛（CTF），获得国家级、省部级各类奖项 <strong className="text-gray-800">100余项</strong>。
              </p>
              <p>
                带领团队保障第24届北京冬奥会、杭州亚运会以及多届广交会和文博会平台安全，
                参与3届教育部攻防演练和"粤盾"攻防演练等活动，多次获得国家重要部门致函感谢。
              </p>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 space-y-4">
              <h3 className="font-semibold text-gray-900 text-base">课题组信息</h3>
              <ul className="space-y-3 text-sm">
                {[
                  { label: '所属机构', value: '网络空间先进技术研究院' },
                  { label: '所属高校', value: '广州大学' },
                  { label: '负责人', value: '鲁辉 教授' },
                  { label: '研究方向', value: 'AI安全 · 漏洞挖掘 · 对抗攻防' },
                  { label: '联系邮箱', value: 'luhui@gzhu.edu.cn' },
                ].map(({ label, value }) => (
                  <li key={label} className="flex gap-3">
                    <span className="text-gray-400 w-20 flex-shrink-0">{label}</span>
                    <span className="text-gray-700 font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 课题组负责人 */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="section-title">课题组负责人</h2>
          <div className="section-divider" />
          <div className="card">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* 头像 */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-900 flex items-center justify-center text-white font-bold text-3xl shadow-md">
                  鲁
                </div>
              </div>
              {/* 基本信息 */}
              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap mb-2">
                  <h3 className="text-xl font-bold text-gray-900">鲁 辉</h3>
                  <span className="text-xs bg-primary-100 text-primary-700 px-2.5 py-1 rounded-full font-medium">教授 / 博士生导师</span>
                  <span className="text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full font-medium">国家级人才项目入选者</span>
                </div>
                <p className="text-xs text-gray-400 mb-3">广州大学网络空间先进技术研究院 院长 | 黄埔方班班主任 | 新安盟秘书长</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  长期致力于智能化网络攻防、漏洞挖掘与利用、人工智能安全等研究工作。主持参与多项国家重点研发计划课题，
                  国家自然科学基金面上项目，广东省重点领域研发计划项目等。挖掘主流操作系统和软件未知漏洞80余个，
                  研究成果在国内外期刊与会议共计发表论文60余篇，专利30余项。
                </p>
                {/* 荣誉 */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    '2023广东省科技进步二等奖',
                    '2020广东省哲学社科成果二等奖',
                    '网络安全优秀创新成果奖',
                    '中国产学研合作成果二等奖',
                    '冬奥积极参与人',
                    'AI安全典型实践案例（2021）',
                  ].map(a => (
                    <span key={a} className="text-xs px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-full">{a}</span>
                  ))}
                </div>
                <div className="mt-3">
                  <a href="mailto:luhui@gzhu.edu.cn" className="text-xs text-primary-600 hover:underline">luhui@gzhu.edu.cn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 研究方向 */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="section-title">研究方向</h2>
          <div className="section-divider" />
          <div className="grid sm:grid-cols-2 gap-5">
            {researchDirections.map(({ icon, title, desc }) => (
              <div key={title} className="card group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 最新动态 */}
      <section className="bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="flex items-end justify-between mb-2">
            <h2 className="section-title mb-0">最新动态</h2>
            <Link to="/events" className="text-sm text-primary-600 hover:text-primary-800 font-medium">
              查看全部 →
            </Link>
          </div>
          <div className="section-divider" />
          <div className="space-y-4">
            {recentNews.map(({ date, text }, idx) => (
              <div key={idx} className="flex gap-5 py-4 border-b border-gray-100 last:border-0">
                <div className="flex-shrink-0 w-20 text-xs text-gray-400 font-medium pt-0.5">{date}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
