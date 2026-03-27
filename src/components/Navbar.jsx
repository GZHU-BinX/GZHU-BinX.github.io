import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const navItems = [
  { path: '/', label: '课题组简介', end: true },
  { path: '/achievements', label: '学术成果' },
  { path: '/members', label: '团队成员' },
  { path: '/join', label: '加入我们' },
  { path: '/events', label: '课题组动态' },
  { path: '/gallery', label: '团建风采' },
  { path: '/friends', label: '友情链接' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
        : 'bg-white border-b border-gray-100'
    }`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 bg-gradient-to-br from-primary-600 to-primary-800 rounded flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-primary-600/30 transition-all duration-300">
              <span className="text-white font-bold text-xs">IA</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-semibold text-gray-900 leading-tight">智能攻防课题组</div>
              <div className="text-xs text-gray-400 leading-tight">广州大学网络空间安全学院</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(({ path, label, end }) => (
              <NavLink
                key={path}
                to={path}
                end={end}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          <button
            className="md:hidden p-1.5 text-gray-500 hover:text-gray-900 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="菜单"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="border-t border-gray-100 bg-white/95 backdrop-blur-lg">
          <div className="max-w-5xl mx-auto px-6 py-3 flex flex-col gap-1">
            {navItems.map(({ path, label, end }) => (
              <NavLink
                key={path}
                to={path}
                end={end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
