import joinusData from '../data/joinus.json'

export default function JoinUs() {
  return (
    <div className="page-container">
      <h1 className="section-title">加入我们</h1>
      <div className="section-divider" />

      {/* 欢迎语 */}
      <div className="bg-gradient-to-r from-primary-50 to-blue-50 border border-primary-100 rounded-xl p-6 mb-10">
        <h2 className="text-base font-semibold text-primary-800 mb-2">欢迎加入智能攻防课题组</h2>
        <p className="text-sm text-primary-700 leading-relaxed">
          我们长期招募对网络安全与人工智能方向充满热情的优秀学生。无论您是本科生、硕士生还是博士生，
          只要你热爱技术、勇于探索，都欢迎与我们联系。
        </p>
      </div>

      {/* 招募岗位 */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">招募方向</h2>
        <div className="grid sm:grid-cols-3 gap-5">
          {joinusData.positions.map(({ title, badge, color, items }) => (
            <div key={title} className="card flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-semibold text-gray-900 text-sm">{title}</h3>
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                  color === 'primary' ? 'bg-primary-100 text-primary-700' :
                  color === 'teal' ? 'bg-teal-50 text-teal-700' :
                  'bg-amber-50 text-amber-700'
                }`}>
                  {badge}
                </span>
              </div>
              <ul className="space-y-2 flex-1">
                {items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                    <svg className="w-3.5 h-3.5 text-primary-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 课题组能提供什么 */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">我们能提供什么</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {joinusData.benefits.map(({ icon, title, desc }) => (
            <div key={title} className="card flex items-start gap-3">
              <span className="text-2xl leading-none">{icon}</span>
              <div>
                <h3 className="font-medium text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 联系方式 */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-5">联系方式</h2>
        <div className="card max-w-lg">
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-xs">邮箱</div>
                <a href="mailto:luhui@gzhu.edu.cn" className="text-primary-600 hover:underline">
                  luhui@gzhu.edu.cn
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary-50 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-xs">地址</div>
                <div className="text-gray-700"><br />广州大学 网络空间安全学院</div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              有意向加入的同学请将个人简历（CV）发送至上述邮箱，邮件主题请注明"申请加入智能攻防课题组—姓名"。
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
