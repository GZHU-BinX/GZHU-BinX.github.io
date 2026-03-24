import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 课题组信息 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">IA</span>
              </div>
              <span className="font-semibold text-white text-sm">智能攻防课题组</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              广州大学网络空间安全学院
              <br />
              聚焦网络安全、人工智能安全与攻防对抗研究
            </p>
          </div>

          {/* 快速链接 */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">快速导航</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: '课题组简介' },
                { to: '/achievements', label: '学术成果' },
                { to: '/members', label: '团队成员' },
                { to: '/events', label: '新闻活动' },
                { to: '/join', label: '加入我们' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 联系方式 */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">联系我们</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                广东省广州市番禺区大学城外环西路230号
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@gzhu-iad.edu.cn
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} 智能攻防课题组 · 广州大学网络空间安全学院
          </p>
          <p className="text-xs text-gray-600">Intelligent Attack & Defense Lab</p>
        </div>
      </div>
    </footer>
  )
}
