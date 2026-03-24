import { Link } from 'react-router-dom'

const researchDirections = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: '智能渗透',
    desc: '研究多智能体自主协同渗透技术，实现对目标系统的自动化攻击路径规划、漏洞利用与后渗透。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: '智能漏洞挖掘',
    desc: '融合模糊测试、程序分析和大语言模型等技术，实现关键设备及软件未知高危漏洞的高效自动化挖掘。',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: '大模型安全',
    desc: '针对大语言模型的对抗攻击、提示注入等安全问题开展系统性研究，探索多模态大模型攻防对抗理论与防御方法。',
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
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">广州大学网络空间安全学院</p>
            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight mb-4">
              智能攻防课题组
            </h1>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">
              Intelligent Attack and Defense Lab（IAD Lab）专注于人工智能与网络安全的交叉研究，
              致力于构建下一代智能化攻防理论体系与核心技术。
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/members" className="btn-primary">认识团队</Link>
              <Link to="/achievements" className="btn-outline">学术成果</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 统计数据 */}
      <section className="border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
            {[
              { num: '50+', label: '发表论文' },
              { num: '90+', label: '漏洞披露' },
              { num: '40+', label: '团队成员' },
              { num: '50+', label: '竞赛获奖' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center py-8">
                <div className="text-2xl font-semibold text-gray-900 mb-1">{num}</div>
                <div className="text-xs text-gray-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 课题组简介 */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="section-title">课题组简介</h2>
          <div className="section-divider" />
          <div className="grid md:grid-cols-2 gap-10 items-start">
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
            <div className="bg-primary-50 rounded-lg border border-primary-100 p-5 space-y-3">
              <h3 className="font-semibold text-gray-900 text-sm mb-3">课题组信息</h3>
              <ul className="space-y-2.5 text-sm">
                {[
                  { label: '所属机构', value: '网络空间先进技术研究院' },
                  { label: '所属高校', value: '广州大学' },
                  { label: '负责人', value: '鲁辉 教授' },
                  { label: '研究方向', value: '智能渗透 · 漏洞挖掘 · 大模型安全' },
                  { label: '联系邮箱', value: 'luhui@gzhu.edu.cn' },
                ].map(({ label, value }) => (
                  <li key={label} className="flex gap-3">
                    <span className="text-primary-400 w-20 flex-shrink-0 text-xs pt-0.5">{label}</span>
                    <span className="text-gray-700 text-xs font-medium">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 课题组负责人 */}
      <section className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="section-title">课题组负责人</h2>
          <div className="section-divider" />
          <Link to="/members" className="card block hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex flex-col sm:flex-row gap-6">
              {/* 头像 */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-semibold text-2xl">
                  鲁
                </div>
              </div>
              {/* 基本信息 */}
              <div className="flex-1">
                <div className="flex items-center gap-2.5 flex-wrap mb-1.5">
                  <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">鲁 辉</h3>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">教授 / 博士生导师</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">国家级人才</span>
                </div>
               <p className="text-xs text-gray-400 mb-3">广州大学网络空间先进技术研究院 院长 · 广东省新型基础设施网络安全重点实验室 主任 · 黄埔方班班主任 · 新安盟秘书长</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  主要研究智能网络攻防、大模型安全，已发表高水平论文100余篇，授权专利50余项，获IEEE GlobalCom 2023最佳论文奖。
                  主持设计"蜜洞"主动防御技术，成功应用于北京冬奥会、杭州亚运会、成都大运会、哈尔滨亚冬会等重大安保活动；
                  发现100+高危CVE/CNVD漏洞，关键技术经院士委员会鉴定"处于国际领先水平"。
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    '电子学会科技进步一等奖',
                    'IEEE GlobalCom 2023最佳论文',
                    '广东省科技进步二等奖',
                    '广东省教学成果特等奖',
                    '网络安全优秀创新成果奖',
                    '冬奥积极参与人',
                  ].map(a => (
                    <span key={a} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 border border-gray-100 rounded">{a}</span>
                  ))}
                </div>
                <div className="mt-3">
                  <p className="text-xs text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity">查看完整介绍 →</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* 研究方向 */}
      <section className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="section-title">研究方向</h2>
          <div className="section-divider" />
          <div className="grid sm:grid-cols-2 gap-4">
            {researchDirections.map(({ icon, title, desc }) => (
              <Link key={title} to={`/achievements?tab=papers&dir=${encodeURIComponent(title)}`}
                className="card block hover:shadow-sm transition-shadow group cursor-pointer">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gray-50 text-gray-500 rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">
                    {icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 mb-1 text-sm group-hover:text-primary-700 transition-colors">{title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                    <p className="text-xs text-primary-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">查看相关成果 →</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 最新动态 */}
      <section className="border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="flex items-end justify-between mb-2">
            <h2 className="section-title mb-0">最新动态</h2>
            <Link to="/events" className="text-xs text-gray-400 hover:text-gray-700">
              查看全部 →
            </Link>
          </div>
          <div className="section-divider" />
          <div className="divide-y divide-gray-50">
            {recentNews.map(({ date, text }, idx) => (
              <div key={idx} className="flex gap-5 py-3.5">
                <div className="flex-shrink-0 w-16 text-xs text-gray-400 pt-0.5">{date}</div>
                <p className="text-sm text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
