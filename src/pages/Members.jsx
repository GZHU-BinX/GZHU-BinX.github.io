import membersData from '../data/members.json'
import ScrollReveal from '../components/ScrollReveal'

const { advisor, teachers, phds, masters, alumniByYear } = membersData

function MemberCard({ member, large }) {
  const inner = (
    <div className={`card flex items-start gap-4 ${member.profileUrl ? 'card-hover cursor-pointer' : ''}`}>
      <div className={`rounded-xl overflow-hidden flex-shrink-0 ${large ? 'w-32 h-42' : 'w-24 h-30'}`}>
        {member.avatar
          ? <img src={member.avatar} alt={member.name} className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 hover:scale-105" />
          : <div className={`w-full h-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-bold ${large ? 'text-xl' : 'text-sm'}`}>{member.name[0]}</div>
        }
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`font-semibold text-gray-900 ${large ? 'text-lg' : 'text-sm'}`}>{member.name}</span>
          <span className="text-xs text-gray-400 bg-gray-100 rounded-md px-2 py-0.5">{member.grade || member.title}</span>
        </div>
        {member.bio && <p className="text-sm text-gray-500 mt-2 leading-relaxed">{member.bio}</p>}
        {member.direction && <p className="text-xs text-gray-500 mt-1">研究方向：{member.direction}</p>}
        {member.interests && (
          <div className="flex gap-1.5 flex-wrap mt-2">
            {member.interests.map(i => (
              <span key={i} className="text-xs px-2 py-0.5 bg-primary-50 text-primary-700 rounded-md hover:bg-primary-100 transition-colors cursor-default">{i}</span>
            ))}
          </div>
        )}
        {member.awards && member.awards.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-gray-400 mb-1.5 font-medium">代表性荣誉</p>
            <div className="flex flex-wrap gap-1.5">
              {member.awards.map((a, i) => (
                <span key={i} className="text-xs px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-md">{a}</span>
              ))}
            </div>
          </div>
        )}
        {member.email && (
          <a href={`mailto:${member.email}`} className="text-xs text-primary-600 hover:underline mt-1.5 inline-block">
            {member.email}
          </a>
        )}
      </div>
    </div>
  )
  return member.profileUrl
    ? <a href={member.profileUrl} target="_blank" rel="noopener noreferrer" className="block">{inner}</a>
    : inner
}

export default function Members() {
  return (
    <div>
      {/* 页头横幅 */}
      <div className="page-header">
        <div className="page-header-grid" />
        <div className="absolute bottom-3 right-12 opacity-[0.05] hidden sm:block">
          <svg width="70" height="50" viewBox="0 0 70 50" fill="none"><circle cx="20" cy="25" r="12" stroke="white" strokeWidth="0.5"/><circle cx="50" cy="25" r="12" stroke="white" strokeWidth="0.5"/><line x1="32" y1="25" x2="38" y2="25" stroke="white" strokeWidth="0.5"/><circle cx="20" cy="25" r="4" stroke="white" strokeWidth="0.3" fill="none"/><circle cx="50" cy="25" r="4" stroke="white" strokeWidth="0.3" fill="none"/></svg>
        </div>
        <div className="relative max-w-5xl mx-auto px-6 py-10">
          <h1 className="text-2xl font-bold text-white mb-1">团队成员</h1>
          <p className="text-sm text-blue-200/60">Team Members</p>
        </div>
      </div>

      <div className="page-container">

      {/* 导师 */}
      <section className="mb-14">
        <ScrollReveal>
          <h2 className="sub-section-title">课题组负责人</h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <MemberCard member={advisor} large />
        </ScrollReveal>
      </section>

      {/* 其他老师 */}
      <section className="mb-14">
        <ScrollReveal>
          <h2 className="sub-section-title">课题组成员（教师）</h2>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {teachers.map((m, i) => (
            <ScrollReveal key={m.name} delay={i * 80}>
              <MemberCard member={m} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* 博士生 */}
      <section className="mb-14">
        <ScrollReveal>
          <h2 className="sub-section-title">博士研究生</h2>
        </ScrollReveal>
        {phds.length === 0 ? (
          <ScrollReveal delay={100}>
            <div className="empty-state">
              <p className="text-sm">成员信息待录入</p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {phds.map((m, i) => (
              <ScrollReveal key={m.name} delay={i * 80}>
                <MemberCard member={m} />
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      {/* 硕士生 */}
      <section className="mb-14">
        <ScrollReveal>
          <h2 className="sub-section-title">硕士研究生</h2>
        </ScrollReveal>
        {masters.length === 0 ? (
          <ScrollReveal delay={100}>
            <div className="empty-state">
              <p className="text-sm">成员信息待录入</p>
            </div>
          </ScrollReveal>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {masters.map((m, i) => (
              <ScrollReveal key={m.name} delay={Math.min(i * 50, 300)}>
                <div className="card card-hover">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-500 to-primary-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{m.name[0]}</div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{m.name}</div>
                      <div className="text-xs text-gray-400">{m.grade}</div>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">研究方向：{m.direction}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}
      </section>

      {/* 毕业校友 */}
      <section>
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <h2 className="sub-section-title mb-0">毕业去向</h2>
            <span className="text-xs text-primary-600 bg-primary-50 border border-primary-100 rounded-md px-2.5 py-0.5 font-medium">历届就业情况</span>
          </div>
        </ScrollReveal>
        <div className="space-y-4">
          {alumniByYear.map(({ year, dests }, idx) => (
            <ScrollReveal key={year} delay={idx * 100}>
              <div className="rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-5 py-3 flex items-center gap-3">
                  <span className="text-sm font-bold text-white">{year}</span>
                  <span className="text-xs text-primary-200/80">{dests.length} 个就业方向</span>
                </div>
                <div className="px-5 py-4 flex flex-wrap gap-2.5 bg-white">
                  {dests.map(dest => (
                    <span key={dest} className="text-sm font-medium px-4 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full hover:border-primary-300 hover:text-primary-700 hover:bg-primary-50/30 hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      </div>
    </div>
  )
}
