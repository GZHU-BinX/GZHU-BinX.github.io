import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-auto">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
          {/* 左侧信息 */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-gray-900 rounded flex items-center justify-center">
                <span className="text-white font-bold" style={{fontSize: '9px'}}>IA</span>
              </div>
              <span className="text-sm font-medium text-gray-900">智能攻防课题组</span>
            </div>
            <p className="text-xs text-gray-400">广州大学网络空间安全学院</p>
            <p className="text-xs text-gray-400 mt-0.5"></p>
          </div>
          {/* 快速导航 */}
          <div className="flex gap-8 text-xs">
            <div className="space-y-1.5">
              {[
                { to: '/', label: '课题组简介' },
                { to: '/achievements', label: '学术成果' },
                { to: '/members', label: '团队成员' },
              ].map(({ to, label }) => (
                <div key={to}><Link to={to} className="text-gray-400 hover:text-gray-700 transition-colors">{label}</Link></div>
              ))}
            </div>
            <div className="space-y-1.5">
              {[
                { to: '/events', label: '课题组动态' },
                { to: '/join', label: '加入我们' },
                { to: '/friends', label: '友情链接' },
              ].map(({ to, label }) => (
                <div key={to}><Link to={to} className="text-gray-400 hover:text-gray-700 transition-colors">{label}</Link></div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 pt-5 border-t border-gray-100">
          <p className="text-xs text-gray-300">
            © {new Date().getFullYear()} 智能攻防课题组 · 广州大学网络空间安全学院
          </p>
        </div>
      </div>
    </footer>
  )
}
