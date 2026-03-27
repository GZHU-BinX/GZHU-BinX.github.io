import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-auto">
      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-6 h-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded flex items-center justify-center">
                <span className="text-white font-bold" style={{fontSize: '9px'}}>IA</span>
              </div>
              <span className="text-sm font-medium text-white">智能攻防课题组</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">广州大学网络空间安全学院</p>
            <p className="text-xs text-gray-500 mt-1">Intelligent Attack and Defense Lab</p>
          </div>
          <div className="flex gap-10 text-xs">
            <div className="space-y-2">
              <p className="text-gray-500 font-medium uppercase tracking-wider text-[10px] mb-3">导航</p>
              {[
                { to: '/', label: '课题组简介' },
                { to: '/achievements', label: '学术成果' },
                { to: '/members', label: '团队成员' },
              ].map(({ to, label }) => (
                <div key={to}>
                  <Link to={to} className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    {label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-gray-500 font-medium uppercase tracking-wider text-[10px] mb-3">更多</p>
              {[
                { to: '/events', label: '课题组动态' },
                { to: '/gallery', label: '团建风采' },
                { to: '/join', label: '加入我们' },
                { to: '/friends', label: '友情链接' },
              ].map(({ to, label }) => (
                <div key={to}>
                  <Link to={to} className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} 智能攻防课题组 · 广州大学网络空间安全学院
          </p>
        </div>
      </div>
    </footer>
  )
}
