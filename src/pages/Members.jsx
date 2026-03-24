const advisor = {
  name: '鲁 辉',
  title: '教授 / 博士生导师 / 院长',
  email: 'luhui@gzhu.edu.cn',
  interests: ['智能网络攻防', '大模型安全', '漏洞挖掘与渗透', '网络主动防御'],
  bio: '国家级人才。广州大学网络空间先进技术研究院院长、广东省新型基础设施网络安全重点实验室主任，黄埔方班班主任，中国网络空间新兴技术安全创新论坛（新安盟）秘书长。主要研究智能网络攻防与大模型安全，已发表高水平论文100余篇，授权专利50余项，获通信领域旗舰会议IEEE GlobalCom 2023最佳论文奖。\n\n在网络主动防御领域，主持设计面向溯源反制的"蜜洞"技术，作为方滨兴院士"盾立方-四密"主动防护体系的重要组成部分，成功应用于北京冬奥会、杭州亚运会、成都大运会、哈尔滨亚冬会、第15届全运会、127–138届广交会等重大网络安保活动，支撑教育部、网信办、国防等攻防演练，多次获致函感谢，成果获电子学会科技进步一等奖。\n\n在漏洞挖掘和渗透领域，实现高效漏洞挖掘和多智能体自主协同渗透，效率较国际主流技术提升一倍，发现100+关键设备及软件未知高危漏洞，经方滨兴院士为主任的专家委员会鉴定"知识驱动的闭环漏洞挖掘、多智能体攻击执行自主决策等关键技术处于国际领先水平"。\n\n在网安人才培养方面，以方滨兴院士班为载体，构建"求源-熵减-思辨"综合能力协同培养模式，推广至包括港澳在内的全国60余所高校，获广东省教学成果特等奖等荣誉。\n\n项目成果在全国能源、交通、通信、政务、国防、教育六大领域48家行业龙头单位深度应用，新增销售额超59亿元、利润超20亿元；担任中国网络空间安全人才教育论坛首届秘书长，推动300余所顶尖高校及企事业单位合作。',
  awards: [
    '电子学会科技进步一等奖',
    'IEEE GlobalCom 2023最佳论文奖',
    '广东省科技进步二等奖',
    '广东省哲学社科成果二等奖',
    '广东省教学成果特等奖',
    '网络安全产学协同育人优秀案例一等奖',
    '网络安全优秀创新成果奖',
    '广东省疫情阶段在线教学优秀案例一等奖',
    '冬奥积极参与人（中央网信办颁发）',
  ],
}

const teachers = [
  {
    name: '王志刚',
    title: '副教授 / 博士生导师',
    email: 'wangzhigang@gzhu.edu.cn',
    interests: ['数据安全', '深度学习', '大模型安全', '高性能计算'],
    bio: '广东省新型基础设施网络安全重点实验室副主任。主要研究数据安全、深度学习、大模型与高性能计算，已发表论文40余篇；主持国家自然科学基金、中国博士后科学基金特别资助、广东省重点研发-课题等项目8项。受邀在CCF会刊《中国计算机学会通讯》及多项学术大会发表文章或做特邀报告；参编盾立方系列蓝皮书和行业标准。',
    awards: [
      '山东省科技进步一等奖',
      'CCF自然科学二等奖',
      '山东省CCF科技进步一等奖',
      'CCF优秀博士论文奖',
      'ACM中国学术新星奖（青岛）',
    ],
  },
  {
    name: '卢泽丰',
    title: '副教授',
    email: 'luzefeng@gzhu.edu.cn',
    interests: ['人工智能安全', '多模态大模型攻防', '智能交通'],
    bio: '主要研究人工智能安全、多模态大模型对抗攻防、智能交通，在IEEE TIFS、IEEE TMM、IEEE TNNLS、IEEE TITS、AEI等国际重要学术期刊发表论文20余篇；申请或授权国家发明专利10余项；主持或参与国家重点研发计划课题、国自然面上项目、广东省重点研发计划课题。',
    awards: [
      '腾讯创始人创新奖',
      '国家留学基金委资助',
      '香港理工大学博后特别资助',
      '世界智能驾驶挑战赛银奖',
    ],
  },
  {
    name: '何郁郁',
    title: '讲师',
    email: 'heyy@gzhu.edu.cn',
    interests: ['软件与系统安全', '移动安全', '软件测试', '网络攻防'],
    bio: '主要研究软件与系统安全、移动安全、软件测试及安全分析、网络攻防；主持国家自然科学基金青年项目、国家重点研发子课题、广州市科技计划项目等6项；在IEEE S&P、ACM CCS等顶级会议发表高水平论文10余篇；参与设计面向溯源反制的"蜜洞"技术，应用于北京冬奥会、杭州亚运会、成都大运会、哈尔滨亚冬会、第15届全运会等重大网络安保活动；参编盾立方系列蓝皮书和行业标准。',
    awards: [],
  },
  {
    name: '陈艳利',
    title: '讲师',
    email: 'yanli.chen@gzhu.edu.cn',
    interests: ['智能化网络攻防', '人工智能安全'],
    bio: '广东省新型基础设施网络安全重点实验室副主任，致力于智能化网络攻防与人工智能安全研究。主持及参与国家级、省部级项目十余项，包括国家重点研发计划课题、广东省重点领域研发计划课题、国家自然科学基金联合基金项目、省自然科学基金等；在IEEE TIFS、IEEE TPAMI、IEEE TMM等顶级期刊、会议发表高水平论文10余篇；出版学术编著1部；申请国家发明专利10余项。',
    awards: [
      '广东省优秀教学成果特等奖（研究生类）',
    ],
  },
]

const phds = []

const masters = []

const alumniByYear = [
  {
    year: '2026届',
    dests: ['腾讯云安全', '腾讯QQ安全', '字节跳动', '京东', '滴滴', '海康威视', '虾皮（Shopee）'],
  },
  {
    year: '2025届',
    dests: ['广州市公安', '佛山市公安', '阿里巴巴', '拼多多', '滴滴'],
  },
  {
    year: '2024届',
    dests: ['广州市公安', '微众银行'],
  },
]

function MemberCard({ member, large }) {
  return (
    <div className={`card flex items-start gap-4`}>
      <div className={`rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white font-bold flex-shrink-0 ${large ? 'w-14 h-14 text-xl' : 'w-10 h-10 text-sm'}`}>
        {member.name[0]}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className={`font-semibold text-gray-900 ${large ? 'text-lg' : 'text-sm'}`}>{member.name}</span>
          <span className="text-xs text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">{member.grade || member.title}</span>
        </div>
        {member.bio && <p className="text-sm text-gray-500 mt-2 leading-relaxed">{member.bio}</p>}
        {member.direction && <p className="text-xs text-gray-500 mt-1">研究方向：{member.direction}</p>}
        {member.interests && (
          <div className="flex gap-1.5 flex-wrap mt-2">
            {member.interests.map(i => (
              <span key={i} className="text-xs px-2 py-0.5 bg-primary-50 text-primary-700 rounded-full">{i}</span>
            ))}
          </div>
        )}
        {member.awards && (
          <div className="mt-3">
            <p className="text-xs text-gray-400 mb-1.5 font-medium">代表性荣誉</p>
            <div className="flex flex-wrap gap-1.5">
              {member.awards.map((a, i) => (
                <span key={i} className="text-xs px-2 py-0.5 bg-amber-50 text-amber-700 border border-amber-100 rounded-full">{a}</span>
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
}

export default function Members() {
  return (
    <div className="page-container">
      <h1 className="section-title">团队成员</h1>
      <div className="section-divider" />

      {/* 导师 */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">课题组负责人</h2>
        <MemberCard member={advisor} large />
      </section>

      {/* 其他老师 */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">课题组成员（教师）</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {teachers.map(m => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </section>

      {/* 博士生 */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">博士研究生</h2>
        {phds.length === 0 ? (
          <div className="card text-center py-10 text-gray-400">
            <p className="text-sm">成员信息待录入</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {phds.map(m => <MemberCard key={m.name} member={m} />)}
          </div>
        )}
      </section>

      {/* 硕士生 */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">硕士研究生</h2>
        {masters.length === 0 ? (
          <div className="card text-center py-10 text-gray-400">
            <p className="text-sm">成员信息待录入</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {masters.map(m => (
              <div key={m.name} className="card">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-primary-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">{m.name[0]}</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">{m.name}</div>
                    <div className="text-xs text-gray-400">{m.grade}</div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-500">研究方向：{m.direction}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 毕业校友 */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-lg font-semibold text-gray-800">毕业去向</h2>
          <span className="text-xs text-primary-600 bg-primary-50 border border-primary-100 rounded-full px-2.5 py-0.5 font-medium">历届就业情况</span>
        </div>
        <div className="space-y-4">
          {alumniByYear.map(({ year, dests }) => (
            <div key={year} className="rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <div className="bg-primary-600 px-5 py-3 flex items-center gap-3">
                <span className="text-sm font-bold text-white">{year}</span>
                <span className="text-xs text-primary-200">{dests.length} 个就业方向</span>
              </div>
              <div className="px-5 py-4 flex flex-wrap gap-2.5">
                {dests.map(dest => (
                  <span key={dest} className="text-sm font-medium px-4 py-1.5 bg-white border border-gray-200 text-gray-700 rounded-full hover:border-primary-300 hover:text-primary-700 transition-colors">
                    {dest}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
