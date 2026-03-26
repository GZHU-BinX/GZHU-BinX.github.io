import friendsData from '../data/friends.json'

const { friends } = friendsData

export default function Friends() {
  return (
    <div className="page-container">
      <h1 className="section-title">友情链接</h1>
      <div className="section-divider" />

      <div className="space-y-10">
        {friends.map(({ category, links }) => (
          <section key={category}>
            <h2 className="text-base font-semibold text-gray-700 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-primary-500 rounded-full inline-block" />
              {category}
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {links.map(({ name, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-lg shadow-sm hover:border-primary-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-8 h-8 bg-primary-50 rounded-md flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                    <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700 group-hover:text-primary-700 transition-colors leading-tight font-medium">
                    {name}
                  </span>
                  <svg className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary-400 ml-auto flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 p-5 bg-gray-50 rounded-xl border border-dashed border-gray-200 text-center">
        <p className="text-sm text-gray-500 mb-2">想与我们互换友情链接？</p>
        <a
          href="mailto:luhui@gzhu.edu.cn"
          className="btn-primary text-xs"
        >
          联系我们
        </a>
      </div>
    </div>
  )
}
