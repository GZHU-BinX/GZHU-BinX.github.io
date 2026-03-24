const advisor = {
  name: '鲁 辉',
  title: '教授 / 博士生导师 / 院长',
  email: 'luhui@gzhu.edu.cn',
  interests: ['智能化网络攻防', '漏洞挖掘与利用', '人工智能安全', '恶意代码分析'],
  bio: '国家级人才项目入选者，省级人才讲座教授。现任广州大学网络空间先进技术研究院院长、黄埔方班班主任，中国网络空间新兴技术安全创新论坛（新安盟）秘书长，中国网络空间安全协会竞演办负责人。广州大学"百人计划"引进人才，广州市青年后备人才，广东省计算机协会网络空间安全专委会委员，深圳平安金融研究院专家委员。长期致力于智能化网络攻防、漏洞挖掘与利用、人工智能安全等研究工作，主持参与多项国家重点研发计划课题、国家自然科学基金面上项目、广东省重点领域研发计划项目等。挖掘主流操作系统和软件未知漏洞80余个，发表论文60余篇，专利30余项。获2023年广东省科技进步二等奖，2020年广东省哲学社科成果二等奖等多项荣誉。带领团队保障第24届北京冬奥会、杭州亚运会以及多届广交会和文博会平台安全。',
  awards: [
    '2023年广东省科技进步二等奖',
    '2020年广东省哲学社科成果二等奖',
    '广东省疫情阶段在线教学优秀案例一等奖',
    '中国网络空间安全协会"2021年人工智能安全典型实践案例"',
    '第三届网络空间安全产学协同育人优秀案例一等奖',
    '首届"网络安全优秀创新成果奖"',
    '中国产学研合作成果二等奖',
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

const phds = [
  {
    name: '张 三',
    grade: '2022级博士',
    direction: '智能漏洞挖掘',
    interests: ['模糊测试', '程序分析'],
  },
  {
    name: '李 四',
    grade: '2021级博士',
    direction: '对抗样本攻防',
    interests: ['深度学习安全', '图像对抗'],
  },
]

const masters = [
  { name: '王 五', grade: '2023级硕士', direction: '固件安全分析' },
  { name: '赵 六', grade: '2023级硕士', direction: '网络流量检测' },
  { name: '陈 七', grade: '2022级硕士', direction: '大语言模型安全' },
  { name: '刘 八', grade: '2022级硕士', direction: '恶意代码检测' },
  { name: '孙 九', grade: '2021级硕士', direction: '智能合约安全' },
  { name: '周 十', grade: '2021级硕士', direction: '安卓应用安全' },
]

const alumniByYear = [
  {
    year: '2026届',
    dests: ['腾讯云安全', '腾讯QQ安全', '字节跳动', '京东', '滴滴', '海康威视', '虾皮（Shopee）'],
  },
  {
    year: '2025届',
    dests: ['广州市网警', '佛山市网警', '阿里巴巴', '拼多多', '滴滴'],
  },
  {
    year: '2024届',
    dests: ['广州市网警', '微众银行'],
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
        <div className="grid sm:grid-cols-2 gap-4">
          {phds.map(m => (
            <MemberCard key={m.name} member={m} />
          ))}
        </div>
      </section>

      {/* 硕士生 */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-gray-800 mb-5">硕士研究生</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {masters.map(m => (
            <div key={m.name} className="card">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-primary-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {m.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{m.name}</div>
                  <div className="text-xs text-gray-400">{m.grade}</div>
                </div>
              </div>
              <div className="mt-2 text-xs text-gray-500">研究方向：{m.direction}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 毕业校友 */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-5">毕业去向</h2>
        <div className="space-y-4">
          {alumniByYear.map(({ year, dests }) => (
            <div key={year} className="bg-gray-50 rounded-xl border border-gray-100 px-5 py-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-block text-xs font-semibold text-white bg-primary-600 rounded-full px-3 py-1">{year}</span>
                </div>
                <div className="flex flex-wrap gap-2 pt-0.5">
                  {dests.map((dest) => (
                    <span
                      key={dest}
                      className="text-xs px-3 py-1 bg-white border border-gray-200 text-gray-700 rounded-full shadow-sm"
                    >
                      {dest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
