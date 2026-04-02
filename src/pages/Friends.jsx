import friendsData from '../data/friends.json'
import ScrollReveal from '../components/ScrollReveal'

const { friends } = friendsData

export default function Friends() {
  return (
    <div>
      {/* 页头横幅 */}
      <div className="page-header">
        <div className="page-header-grid" />
        <div className="absolute top-3 right-14 opacity-[0.05] hidden sm:block">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><path d="M10,30 L25,30 L30,15 L35,30 L50,30" stroke="white" strokeWidth="0.5"/><path d="M10,45 L25,45 L30,35 L35,45 L50,45" stroke="white" strokeWidth="0.5"/><circle cx="30" cy="15" r="3" stroke="white" strokeWidth="0.5" fill="none"/></svg>
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-10">
          <h1 className="text-2xl font-bold text-white mb-1">友情链接</h1>
          <p className="text-sm text-blue-200/60">Friendly Links</p>
        </div>
      </div>

      <div className="page-container">

      <div className="space-y-10">
        {friends.map(({ category, links }, catIdx) => (
          <section key={category}>
            <ScrollReveal delay={catIdx * 80}>
              <h2 className="sub-section-title mb-4">
                {category}
              </h2>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {links.map(({ name, url }, i) => (
                <ScrollReveal key={name} delay={catIdx * 80 + i * 60}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:border-primary-300 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-8 h-8 bg-primary-50 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 group-hover:rotate-6 transition-all duration-300">
                      <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-primary-700 transition-colors leading-tight font-medium">
                      {name}
                    </span>
                    <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary-400 ml-auto flex-shrink-0 transition-all duration-300 group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      <ScrollReveal delay={200}>
        <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-primary-50/30 rounded-xl border border-dashed border-gray-200 text-center">
          <p className="text-sm text-gray-500 mb-3">想与我们互换友情链接？</p>
          <a
            href="mailto:luhui@gzhu.edu.cn"
            className="btn-primary text-xs"
          >
            联系我们
          </a>
        </div>
      </ScrollReveal>
      </div>
    </div>
  )
}
