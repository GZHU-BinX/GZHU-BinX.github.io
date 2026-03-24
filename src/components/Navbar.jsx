import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'

const navItems = [
  { path: '/', label: '课题组简介', end: true },
  { path: '/achievements', label: '学术成果' },
  { path: '/members', label: '团队成员' },
  { path: '/join', label: '加入我们' },
  { path: '/events', label: '新闻活动' },
  { path: '/friends', label: '友情链接' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-primary-700 rounded-md flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm tracking-tight">IA</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-gray-900 leading-tight">智能攻防课题组</div>
              <div className="text-xs text-gray-500 leading-tight">广州大学网络空间安全学院</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
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
      )}
    </header>
  )
}
