import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 mt-auto relative overflow-hidden">
      {/* 科技网格纹理背景 */}
      <div className="absolute inset-0" style={{
        backgroundImage:
          'linear-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
      }} />

      {/* IAD 底纹装饰 */}
      <div className="absolute bottom-4 right-8 select-none pointer-events-none">
        <span className="text-[6rem] font-black text-white/[0.015] leading-none tracking-tighter">IAD</span>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent" />
      <div className="relative max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-3 group">
              <div className="w-7 h-7 bg-gradient-to-br from-primary-500 to-primary-700 rounded-md flex items-center justify-center shadow-lg shadow-primary-600/10">
                <span className="text-white font-bold" style={{fontSize: '10px'}}>IA</span>
              </div>
              <div>
                <span className="text-sm font-semibold text-white block leading-tight">智能攻防课题组</span>
                <span className="text-xs text-gray-500 leading-tight">IAD Lab</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed mt-2">广州大学网络空间安全学院</p>
            <p className="text-xs text-gray-500 mt-0.5">Intelligent Attack and Defense Lab</p>
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
        <div className="mt-8 pt-6 border-t border-gray-800 relative">
          {/* 微光装饰 */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/20 to-transparent" />
          <div className="flex items-center justify-between flex-wrap gap-2">
            <p className="text-xs text-gray-500">
              &copy; {new Date().getFullYear()} 智能攻防课题组 &middot; 广州大学网络空间安全学院
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs text-gray-500 hover:text-primary-400 transition-colors flex items-center gap-1 group"
              aria-label="回到顶部"
            >
              <svg className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              回到顶部
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
