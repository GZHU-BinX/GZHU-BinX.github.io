import { useState } from 'react'

// ─── 学术论文 ─────────────────────────────────────────────────────────────────
const papers = [
  { year: 2025, venue: 'BIG DATA MINING AND ANALYTICS', title: 'COAPT：Bridging Semantic-Operational Divide in Autonomous Penetration Testing Through LLM-Driven Cognitive Planning', authors: '鲁辉、陈艳利、何郁郁等' },
  { year: 2025, venue: 'IEEE DSC 2025', title: 'The Pursuer of Light: Exploration and Evolution of DAST Technology in XSS Vulnerability Detection', authors: '鲁辉、王志刚、卢泽丰、陈艳利、何郁郁等' },
  { year: 2025, venue: 'IEEE DSC 2025', title: 'An Arms Race in the Inbox: A Systematic Review of Phishing Generation and the Rise of LLMs', authors: '陈艳利、何郁郁、鲁辉、王志刚等' },
  { year: 2025, venue: 'IEEE DSC 2025', title: 'The Dawn of Intelligent Fuzzing: Exploring the Application of Large Language Models in Fuzzing', authors: '卢泽丰、陈艳利、何郁郁、王志刚、鲁辉等' },
  { year: 2025, venue: 'IEEE DSC 2025', title: 'Reverse Engineering of Private Protocols: Methods, Tools, Challenges and Future Directions', authors: '何郁郁、陈艳利、王志刚、鲁辉等' },
  { year: 2025, venue: 'IEEE DSC 2025', title: 'Unlocking the Next Generation of REST API Security: A Critical Analysis of the Path from Fuzzing to LLMs', authors: '王志刚、陈艳利、何郁郁、鲁辉等' },
  { year: 2025, venue: 'IEEE DSC 2025', title: 'Enhancing Vulnerability Mining with Large Language Model', authors: '王志刚、何郁郁、陈艳利、鲁辉等' },
  { year: 2025, venue: 'IEEE DSC 2025', title: 'Unveiling Directed Gray-Box Fuzzing: A Profound Insight from Foundational Principles to Future Frontiers', authors: '陈艳利、何郁郁、鲁辉等' },
  { year: 2025, venue: 'IEEE DSC 2025', title: 'From Heuristics to Intelligence：Evolving Black-box Scanners for Modern Web Applications', authors: '何郁郁、陈艳利、王志刚、鲁辉等' },
  { year: 2025, venue: 'IEEE DSC 2025', title: 'Unlocking LLM Potential: Critical Breakthroughs and Frontier Explorations in Retrieval-Augmented Generation', authors: '王志刚、陈艳利、何郁郁、鲁辉等' },
  { year: 2025, venue: 'IEEE DSC MDATA', title: 'Analysis of Recent Research on Software Vulnerability Report Quality', authors: '刘义铭、钟志强、鲁辉等' },
  { year: 2025, venue: 'IEEE Transactions on Cloud Computing', title: 'BPFGuard: Multi-Granularity Container Runtime Mandatory Access Control', authors: '鲁辉等' },
  { year: 2025, venue: 'IEEE Communications Magazine', title: 'RED-Scenario: A Resource-Efficient Deployment Framework for Scenarios through Dependency Package Management', authors: '王乐等' },
  { year: 2024, venue: '软件学报', title: '自动化渗透测试技术研究综述', authors: '鲁辉等' },
  { year: 2024, venue: 'IEEE Network', title: 'An Efficient Incentive Mechanism for Federated Learning in Vehicular Networks', authors: '鲁辉等' },
  { year: 2024, venue: 'IEEE Network', title: 'Recognizing BGP Communities Based on Graph Neural Network', authors: '鲁辉等' },
  { year: 2024, venue: 'SIGNAL PROCESSING', title: 'Ring Co-XOR encryption based reversible data hiding for 3D mesh model', authors: '鲁辉等' },
  { year: 2024, venue: 'WiMob 2024', title: 'Active and Passive Attack Detection Methods for Malicious Encrypted Traffic', authors: '鲁辉等' },
  { year: 2024, venue: 'CloudNet 2024', title: 'Vulnerability Correlation, Multi-step Attack and Exploit Chain in Breach and Attack Simulation', authors: '鲁辉等' },
  { year: 2024, venue: 'GLOBECOM 2024', title: 'Smart Contract Firewall: Protecting the on-Chain Smart Contract Projects', authors: '鲁辉等' },
  { year: 2024, venue: 'MDPI Mathematics', title: 'VTT-LLM: Advancing Vulnerability-to-Tactic-and-Technique Mapping through Fine-Tuning of Large Language Model', authors: '王乐、范敦球等' },
  { year: 2024, venue: 'Human-centric Computing', title: 'DFScan: Security Scanner of the Dockerfile Based on Instruction Coverage and Attack Perspective', authors: '鲁辉等' },
  { year: 2024, venue: '中国信息安全', title: '网络攻防对抗下的漏洞治理探索与实践', authors: '鲁辉、王乐等' },
  { year: 2024, venue: '新型电力系统太湖论坛', title: '基于动态感知攻击图的蜜阵设计及电力系统应用', authors: '鲁辉等' },
  { year: 2023, venue: '软件学报', title: '基于Capstone和流敏感混合执行的自动化反混淆技术', authors: '鲁辉、郭润生、金成杰等' },
  { year: 2023, venue: 'IWQoS 2023', title: 'Improving Precision of Detecting Deserialization Vulnerabilities with Bytecode Analysis', authors: '鲁辉等' },
  { year: 2023, venue: 'CloudNet 2023', title: 'Research on the Exploitability of Binary Software Vulnerabilities', authors: '鲁辉等' },
  { year: 2023, venue: 'IEEE Wireless Communications', title: 'Decentralized Cooperative Caching for Sustainable Metaverse Via Meta Self-Supervision Learning', authors: '鲁辉等' },
  { year: 2023, venue: 'IEEE Internet of Things Journal', title: 'Do Not Trust the Clouds Easily: The Insecurity of Content Security Policy Based on Object Storage', authors: '鲁辉等' },
  { year: 2022, venue: 'IEEE TNSE', title: 'DeepAutoD: Research on Distributed Machine Learning Oriented Scalable Mobile Communication Security Unpacking System', authors: '鲁辉、金成杰等' },
  { year: 2022, venue: 'IEEE DSC 2022', title: 'A Survey of Obfuscation and Deobfuscation Techniques in Android Code Protection', authors: '鲁辉等' },
  { year: 2022, venue: 'Simulation Modelling Practice and Theory', title: 'STG2P: A two-stage pipeline model for intrusion detection based on improved LightGBM and K-means', authors: '王乐等' },
  { year: 2021, venue: 'IJMLC 2021', title: 'A multiple-kernel clustering based intrusion detection scheme for 5G and IoT networks', authors: '胡宁、田志宏、鲁辉等' },
  { year: 2021, venue: 'Mobile Networks and Applications', title: 'Research on Intelligent Detection of Command Level Stack Pollution for Binary Program Analysis', authors: '鲁辉、金成杰等' },
  { year: 2021, venue: 'Security and Communication Networks', title: 'StFuzzer: Contribution-Aware Coverage-Guided Fuzzing for Smart Devices', authors: '鲁辉等' },
  { year: 2021, venue: 'IEEE Network', title: 'AutoD: Intelligent Blockchain Application Unpacking Based on JNI Layer Deception Call', authors: '鲁辉等' },
  { year: 2021, venue: '广州大学学报（自然科学版）', title: '基于程序动态信息的漏洞自动利用技术研究', authors: '鲁辉等' },
  { year: 2020, venue: 'Transactions on Emerging Telecom Tech', title: 'Advanced persistent threat organization identification based on software gene of malware', authors: '鲁辉等' },
  { year: 2020, venue: 'IEEE Internet of Things Journal', title: 'Deep Reinforcement Learning for Partially Observable Data Poisoning Attack in Crowdsensing Systems', authors: '鲁辉等' },
  { year: 2020, venue: 'CIAT 2020', title: 'A Systemic Review of Kernel Fuzzing', authors: '鲁辉等' },
  { year: 2020, venue: 'Computers, Materials & Continua', title: 'Evaluating the Topology Coverage of BGP monitors', authors: '范敦球等' },
  { year: 2019, venue: '信息技术与网络安全', title: '恶意计算机程序基因形式化研究', authors: '刘义铭等' },
  { year: 2019, venue: 'ICAIS 2019', title: 'A Review of Network Representation Learning', authors: '鲁辉、王乐等' },
  { year: 2019, venue: 'ICAIS 2019', title: 'Research on Content Extraction of Rich Text Web Pages', authors: '鲁辉等' },
  { year: 2019, venue: 'ICAIS 2019', title: 'A Dynamic Event Region Tracking Approach Based on Node Calibration', authors: '鲁辉、王乐等' },
  { year: 2019, venue: 'ICAIS 2019', title: 'Network Protocol Analysis Base on WeChat PC Version', authors: '鲁辉等' },
  { year: 2019, venue: 'China Communications', title: 'A Novel Search Engine for Internet of Everything Based on Dynamic Prediction', authors: '鲁辉等' },
  { year: 2019, venue: 'ICAIS 2019', title: 'A Distributed Cryptanalysis Framework Based on Mobile Phones', authors: '王乐、鲁辉等' },
  { year: 2018, venue: 'ICCCS 2018', title: 'Quality-aware query based on relative source quality', authors: '鲁辉、王乐等' },
  { year: 2018, venue: 'ICCCS 2018', title: 'Greedy embedding strategy for dynamic graphs based on spanning tree', authors: '王乐、鲁辉等' },
  { year: 2018, venue: 'ICCCS 2018', title: 'A trusted computing base for information system classified protection', authors: '鲁辉、王乐等' },
  { year: 2018, venue: 'ICCCS 2018', title: 'An encryption traffic analysis countermeasure model based on game theory', authors: '鲁辉、王乐等' },
  { year: 2018, venue: 'ICCCS 2018', title: 'The research on security audit for information system classified protection', authors: '鲁辉、王乐等' },
]

// ─── 教改论文 ─────────────────────────────────────────────────────────────────
const eduPapers = [
  { year: 2025, venue: '计算机教育', title: '方班：网安人才培养新模式探索', authors: '鲁辉、王乐等' },
  { year: 2025, venue: '中国信息安全', title: '基于网络靶场的"学练赛讲"一体化网络安全教学创新实践', authors: '鲁辉、王乐等' },
  { year: 2024, venue: '中国网信', title: '创新网络安全人才培养体系 支撑网络强国建设', authors: '王乐、鲁辉等' },
  { year: 2020, venue: '杭州电子科技大学学报', title: '聚焦人才安全的网络安全研究生品格教育探索', authors: '王乐、鲁辉等' },
  { year: 2019, venue: '网络空间安全', title: '网络空间安全人才培养的个体引导和激励策略研究', authors: '鲁辉、王乐等' },
  { year: 2018, venue: '保密科学技术', title: '网络空间安全人才培养新模式探索', authors: '鲁辉、王乐等' },
]

// ─── 承担项目 ─────────────────────────────────────────────────────────────────
const projects = [
  { title: '基于大语言模型的智能漏洞挖掘关键技术研究', source: '国家自然科学基金面上项目', period: '2024–2027', status: '在研' },
  { title: '人工智能系统对抗攻防关键技术及应用', source: '广东省重点研发计划', period: '2023–2026', status: '在研' },
  { title: '网络流量智能检测与溯源技术研究', source: '广州市科技计划项目', period: '2022–2025', status: '在研' },
  { title: '固件安全分析与漏洞自动化挖掘', source: '国家自然科学基金青年项目', period: '2020–2023', status: '已结题' },
]

// ─── 竞赛获奖 ─────────────────────────────────────────────────────────────────
const awards = [
  { year: 2025, time: '2025.11', students: '吴竞航、伍宇森、陈彦名、张辛革', competition: '"华为杯"第四届中国研究生网络安全创新大赛实网对抗赛', organizer: '教育部、中国学位与研究生教育学会、中国科协青少年科技中心', level: '国家级', award: '三等奖' },
  { year: 2025, time: '2025.9', students: '吴竞航、伍宇森、阮楚鸿（BinX）', competition: 'NIDC新能源网联汽车大赛·智能网联汽车攻防赛', organizer: '重庆市贸促会、重庆高新技术产业开发区管理委员会', level: '', award: '一等奖' },
  { year: 2025, time: '2025.9', students: '吴竞航、吴雨泽、陈彦名（BinX）', competition: '第二届天网杯网络安全大赛·智能网联汽车安全赛道', organizer: '天津市人民政府、国家计算机病毒应急处理中心、公安部第一研究所', level: '', award: '二等奖' },
  { year: 2025, time: '2025.8', students: '陶昱成、陈慧珍、何云飞、吴梓峰', competition: 'CISCN全国大学生信息安全竞赛', organizer: '教育部高等学校网络空间安全专业教学指导委员会', level: '国家级', award: '一等奖' },
  { year: 2025, time: '2025.8', students: '陶昱成、黄丕', competition: '第一届全国大学生人工智能安全竞赛', organizer: '中国信息协会', level: '国家级', award: '三等奖' },
  { year: 2025, time: '2025.7', students: '黄丕、李达祺、陈灏轩', competition: '2025年能源网络安全大赛', organizer: '中国能源研究会', level: '国家级', award: '三等奖' },
  { year: 2025, time: '2025.6', students: '黄丕、李达祺、胡一帆', competition: 'ISCC2025大学生赛区破阵夺旗赛', organizer: '中国兵工学会、北京理工大学', level: '国家级', award: '二等奖' },
  { year: 2025, time: '2025.6', students: '李德林、陈慧珍、王承宇', competition: 'ISCC2025大学生赛区破阵夺旗赛', organizer: '中国兵工学会信息安全与对抗专业委员会', level: '国家级', award: '二等奖' },
  { year: 2025, time: '2025.6', students: '陶昱成、陈熙宇、陈灝轩', competition: 'ISCC2025大学生赛区破阵夺旗赛', organizer: '中国兵工学会信息安全与对抗专业委员会', level: '国家级', award: '三等奖' },
  { year: 2025, time: '2025.6', students: '张嘉杰、何云飞、李铭恒', competition: 'ISCC2025大学生赛区破阵夺旗赛', organizer: '中国兵工学会信息安全与对抗专业委员会', level: '国家级', award: '三等奖' },
  { year: 2025, time: '2025.6', students: '陶昱成、陈熙宇、陈慧珍、刘泽坤、李德林', competition: '第二届广东省计算机程序设计大赛', organizer: '', level: '省级', award: '二等奖' },
  { year: 2025, time: '2025.5', students: '陈慧珍、李德林、彭悦', competition: '第三届"盘古石杯"国际电子数据取证大赛', organizer: '', level: '', award: '三等奖' },
  { year: 2025, time: '2025.5', students: '李德林', competition: '第三届阿里云CTF', organizer: '阿里云', level: '国家级', award: '第四名' },
  { year: 2025, time: '2025.3', students: '张浩、李德林', competition: '第十八届全国大学生软件创新大赛', organizer: '示范性软件学院联盟', level: '国家级', award: '一等奖' },
  { year: 2025, time: '2025.1', students: '陶昱成、陈熙宇、陈慧珍', competition: '2025年能源网络安全大赛', organizer: '中国能源研究会', level: '国家级', award: '三等奖' },
  { year: 2024, time: '2024.12', students: '卢声涛、张浩楠等（BinX）', competition: '第八届"强网杯"全国网络安全挑战赛高阶技术专项赛', organizer: '信息工程大学、河南省委网信办等', level: '国家级', award: '优秀奖' },
  { year: 2024, time: '2024.11', students: '张浩楠、郑晨聪、张宇恒、薛捷耀', competition: '"中国网谷·华为杯"第三届中国研究生网络安全创新大赛创意作品赛', organizer: '中国学位与研究生教育学会、中国科协青少年科技中心', level: '国家级', award: '二等奖' },
  { year: 2024, time: '2024.11', students: '汤晓彬、张浩、张锐华、李德林', competition: '"中国网谷·华为杯"第三届中国研究生网络安全创新大赛实网对抗赛', organizer: '教育部、中国学位与研究生教育学会等', level: '国家级', award: '三等奖' },
  { year: 2024, time: '2024.11', students: '吴雨泽', competition: '第七届强网拟态国际精英挑战赛', organizer: '中国通信学会等', level: '', award: '优胜奖' },
  { year: 2024, time: '2024.11', students: '吴竞航、张辛革、张洲瑞、吴雨泽', competition: '第四届鹏城杯联邦网络靶场协同攻防演练赛', organizer: '鹏城实验室', level: '', award: '优胜奖' },
  { year: 2024, time: '2024.9', students: '吴竞航、刘博宇、阮楚鸿、郑镛（BinX）', competition: '第二届天网杯网络安全大赛·智能网联汽车安全赛道', organizer: '天津市人民政府等', level: '', award: '三等奖' },
  { year: 2024, time: '2024.8', students: '时可、郭嘉靖等（零封安全）', competition: '中国国际大学生创新大赛（2024）', organizer: '教育部、中央统战部等', level: '省级', award: '银奖' },
  { year: 2024, time: '2024.6', students: '吴竞航、阮楚鸿、邓子曦', competition: 'WIDC世界智能驾驶大赛·"天融信杯"信息安全攻防赛', organizer: '天津市人民政府、中国汽车技术研究中心', level: '国家级', award: '铜奖' },
  { year: 2024, time: '2024.6', students: '蔡智凯、张政羽、李德林', competition: '第三届DozerCTF2024全国大学生信息安全竞赛', organizer: '金陵科技学院', level: '', award: '二等奖' },
  { year: 2024, time: '2024.6', students: '伍宇森、彭凌赟、蔡智凯、邓子曦', competition: '第十六届全国大学生信息安全竞赛创新实践能力赛（华南赛区）', organizer: '中国互联网发展基金会、四川大学', level: '', award: '二等奖' },
  { year: 2024, time: '2024.6', students: '陶昱成、彭悦、李达祺', competition: '第三届DozerCTF2024全国大学生信息安全竞赛', organizer: '金陵科技学院', level: '', award: '三等奖' },
  { year: 2024, time: '2024.5', students: '吴竞航、郑镛、王昊（BinX）', competition: '第三届广东大学生网络安全攻防竞赛', organizer: '广东团省委等', level: '省级', award: '二等奖' },
  { year: 2024, time: '2024.5', students: '许澍机、邓子曦、龙秋旭、李德林', competition: '第三届广东大学生网络安全攻防竞赛', organizer: '广东团省委等', level: '省级', award: '二等奖' },
  { year: 2024, time: '2024.5', students: '许澍机、邓子曦、龙秋旭、李德林', competition: '第一届"长城杯"信息安全铁人三项决赛', organizer: '中国信息安全测评中心', level: '', award: '三等奖' },
  { year: 2024, time: '2024.4', students: '许澍机、邓子曦、龙秋旭、李德林', competition: '第一届"长城杯"信息安全铁人三项赛半决赛', organizer: '中国信息安全测评中心', level: '', award: '二等奖' },
  { year: 2024, time: '2024.1', students: '吴竞航、刘博宇、阮楚鸿', competition: '铸盾2024车联网网络安全攻防演练', organizer: '工业和信息化部等', level: '', award: '三等奖' },
  { year: 2024, time: '2024.01', students: '伍宇森等（AblazE）', competition: '第六届"强网杯"全国网络安全挑战赛', organizer: '信息工程大学、河南省委网信办等', level: '国家级', award: '优胜奖' },
  { year: 2023, time: '2023.12', students: '马秋同、王晨光等', competition: '2023DataCon大数据安全分析竞赛', organizer: '奇安信集团、清华大学、蚂蚁集团', level: '', award: '优胜奖' },
  { year: 2023, time: '2023.11', students: '林梓浩、王晨光、鲁建安、马秋同', competition: '第三届"鹏城杯"联邦靶场协同攻防演练赛', organizer: '鹏城实验室', level: '', award: '优胜奖' },
  { year: 2023, time: '2023.8', students: '伍宇森、张锦匀、吴蕾、彭凌赟', competition: 'GuardShield·分布式防护设备有效性验证系统（CISCN）', organizer: '教育部高等学校网络空间安全专业教学指导委员会', level: '', award: '一等奖' },
  { year: 2023, time: '2023.7', students: '郑镛、陈俊翰、梁儒烽', competition: '2023年CIVC天融信杯智能网联汽车信息安全攻防赛', organizer: '沈阳市人民政府、天融信科技集团', level: '', award: '金奖' },
  { year: 2023, time: '2023.1', students: '卢声涛、王昊、阳长江', competition: '第七届蓝帽杯·全国大学生网络安全技能大赛', organizer: '公安部', level: '', award: '一等奖' },
  { year: 2023, time: '2023.1', students: '林梓浩、王晨光', competition: '第七届蓝帽杯·全国大学生网络安全技能大赛', organizer: '公安部', level: '', award: '三等奖' },
  { year: 2023, time: '2023.1', students: '王晨光、林梓浩', competition: '2023珠海市网络安全技能大赛"广科-奇安信杯"', organizer: '中共珠海市委网络安全和信息化委员会办公室等', level: '', award: '二等奖' },
  { year: 2023, time: '2023.1', students: '彭劲、宋晓伟、黄迅', competition: '第七届蓝帽杯·全国大学生网络安全技能大赛', organizer: '公安部', level: '', award: '三等奖' },
  { year: 2022, time: '2022.11', students: '彭劲、郑晨聪、黄迅', competition: '第八届中国电子数据取证大赛', organizer: '教育部', level: '', award: '二等奖' },
  { year: 2022, time: '2022.8', students: '互联网隐蔽通信技术研究团队', competition: '第八届中国国际"互联网+"大学生创新创业大赛（广东省赛）', organizer: '广东省教育厅', level: '省级', award: '铜奖' },
  { year: 2021, time: '2021.10', students: '林炼升、李珂斌等（空盾科技）', competition: '第七届中国国际"互联网+"大学生创新创业大赛', organizer: '教育部、国家发展改革委、工信部等', level: '', award: '银奖' },
  { year: 2021, time: '2021.9', students: '黄青龙、王宇浩、何佳豪、唐香', competition: '第二届全国分布式靶场安全技能大赛', organizer: '中国网络空间安全人才教育论坛', level: '', award: '三等奖' },
  { year: 2021, time: '2021.9', students: '许镌圭、阮楚鸿、吴竞航、彭泳曦', competition: '第二届全国分布式靶场安全技能大赛', organizer: '中国网络空间安全人才教育论坛', level: '', award: '优胜奖' },
  { year: 2021, time: '2021.9', students: '郑东阳、罗锦源、刘玲、朱子枫', competition: '第二届全国分布式靶场安全技能大赛', organizer: '中国网络空间安全人才教育论坛', level: '', award: '优胜奖' },
  { year: 2020, time: '2020.9', students: '李垠帅、曾泽君、温志华、张鑫国', competition: '第十三届全国大学生信息安全竞赛', organizer: '教育部高等学校网络空间安全专业教学指导委员会', level: '', award: '赛区特等奖' },
  { year: 2020, time: '2020.9', students: '李垠帅、温志华、张鑫国、曾泽君', competition: '第十三届全国大学生信息安全竞赛创新实践能力赛', organizer: '教育部高等学校网络空间安全专业教学指导委员会', level: '', award: '全国三等奖' },
  { year: 2019, time: '2019.11', students: '李垠帅、王力永、郑潇然', competition: '2019年湖湘杯网络安全大赛决赛', organizer: '湖南网信办', level: '', award: '优胜奖' },
  { year: 2019, time: '2019.8', students: '张鑫国', competition: '2019年"天融信杯"第四届全国高校密码数学挑战赛', organizer: '教育部高等学校网络空间安全专业教学指导委员', level: '省级', award: '二等奖' },
  { year: 2019, time: '2019.7', students: '陈宗仕、陈伟翔、李玉莹、王朝斌', competition: '2019年工业信息安全技能大赛线下巡回赛', organizer: '鹏城实验室', level: '', award: '优胜奖' },
]

// ─── 漏洞披露 ─────────────────────────────────────────────────────────────────
const vulns = [
  { id: 'CNVD-2020-32598', contributors: '田志宏、鲁辉、郭润生', date: '2020-05-20' },
  { id: 'CNVD-2020-32597', contributors: '田志宏、鲁辉、郭润生', date: '2020-05-20' },
  { id: 'CNVD-2020-68875', contributors: '田志宏、鲁辉、张涛、杨佳庚、金成杰、张鑫国', date: '2020-11-17' },
  { id: 'CNVD-2020-68874', contributors: '田志宏、鲁辉、任怡彤、黄冬秋、何陆潇涵、谭卓波', date: '2020-11-17' },
  { id: 'CNVD-2020-68873', contributors: '田志宏、鲁辉、王力永、曾泽君、李垠帅、莫兴远', date: '2020-11-17' },
  { id: 'CNVD-2020-68877', contributors: '田志宏、鲁辉、任怡彤、孙彦斌、张涛、郑潇然', date: '2020-11-17' },
  { id: 'CNVD-2020-68876', contributors: '田志宏、鲁辉、任怡彤、苏申、莫兴远、张涛', date: '2020-11-17' },
  { id: 'CNVD-2021-26195', contributors: '田志宏、鲁辉、任怡彤、张涛、莫兴远、李垠帅、郑潇然、余安林等', date: '2021-04-01' },
  { id: 'CNVD-2021-26087', contributors: '田志宏、鲁辉、任怡彤、张涛、莫兴远、李垠帅、郑潇然、余安林等', date: '2021-03-31' },
  { id: 'CNVD-2021-26088', contributors: '田志宏、鲁辉、任怡彤、张涛、莫兴远、李垠帅、郑潇然、余安林等', date: '2021-03-31' },
  { id: 'CVE-2021-28435', contributors: '温志华', date: '2021-04-13' },
  { id: 'CVE-2021-27088', contributors: '温志华', date: '2021-04-13' },
  { id: 'CVE-2021-31191', contributors: '温志华、田志宏、鲁辉', date: '2021-04-14' },
  { id: 'CVE-2021-31972', contributors: '温志华', date: '2021-06-08' },
  { id: 'CNNVD-202108-2593', contributors: '莫兴远、田志宏、鲁辉', date: '2021-08-27' },
  { id: 'CVE-2021-44672', contributors: '余安林、鲁辉、田志宏', date: '2022-03-12' },
  { id: 'CVE-2020-26217', contributors: '黎韦成、田志宏、鲁辉', date: '2020-12-17' },
  { id: 'CVE-2020-15470', contributors: '杨嘉庚、田志宏、鲁辉', date: '2020-07-01' },
  { id: 'CNVD-2020-19589', contributors: 'su33er', date: '2020-02-11' },
  { id: 'CNVD-2020-26440', contributors: '黄卓锋', date: '2020-04-21' },
  { id: 'CNVD-2020-30220', contributors: '方栋梁、刘宸睿、程凯、宋站威、孙利民', date: '2020-04-25' },
  { id: 'CNVD-2020-31406', contributors: '北京丁牛科技有限公司、广州大学', date: '2020-04-26' },
  { id: 'CNVD-2020-32353', contributors: '北京丁牛科技有限公司、广州大学', date: '2020-05-07' },
  { id: 'CNVD-2020-46156', contributors: '苏海洪', date: '2020-08-02' },
  { id: 'CVE-2019-1635', contributors: '方栋梁、宋站威、程凯、孙利民', date: '2019-09-16' },
  { id: 'CNVD-2019-16786', contributors: '方栋梁、宋站威、程凯、孙利民', date: '2019-05-24' },
  { id: 'CVE-2022-28085', contributors: '莫兴远、鲁辉、田志宏', date: '2022-03-28' },
  { id: 'CVE-2022-28506', contributors: '姚梓梁、余安林、莫兴远、鲁辉、田志宏', date: '2022-04-04' },
  { id: 'CNVD-2022-41708', contributors: '杨南顺、田志宏、鲁辉', date: '2022-04-11' },
  { id: 'CNVD-2022-41507', contributors: '鲁辉、田志宏、陈可、王晓鹏、余安林、姚梓梁、唐香、胡大卫', date: '2022-04-21' },
  { id: 'CNVD-2022-41506', contributors: '田志宏、鲁辉、王晓鹏、余安林、姚梓梁、陈杰、黄青龙、郑镛', date: '2022-04-21' },
  { id: 'CNVD-2022-41503', contributors: '鲁辉、田志宏、王晓鹏、余安林、姚梓梁、陈杰、唐香、姚胤楠', date: '2022-04-21' },
  { id: 'CNVD-2022-31568', contributors: '莫兴远、田志宏、鲁辉', date: '2022-04-22' },
  { id: 'CVE-2022-27135', contributors: '余安林、蓝辉映、姚梓梁、鲁辉、田志宏', date: '2022-04-25' },
  { id: 'CNVD-2022-44180', contributors: '杨南顺、田志宏、鲁辉、孙彦斌', date: '2022-05-09' },
  { id: 'CVE-2022-30067', contributors: '姚梓梁、鲁辉、田志宏、余安林', date: '2022-05-18' },
  { id: 'CNVD-2022-47247', contributors: '杨南顺、田志宏、鲁辉、孙彦斌', date: '2022-05-25' },
  { id: 'CNVD-2022-41460', contributors: '莫兴远、田志宏、鲁辉', date: '2022-05-27' },
  { id: 'CNVD-2022-41461', contributors: '—', date: '2022-05-27' },
  { id: 'CNVD-2022-41349', contributors: '—', date: '2022-05-27' },
  { id: 'CNVD-2022-41462', contributors: '—', date: '2022-05-28' },
  { id: 'CNVD-2022-43012', contributors: '杨南顺、田志宏、鲁辉、孙彦斌', date: '2022-06-03' },
  { id: 'CNVD-2022-51202', contributors: '—', date: '2022-07-13' },
  { id: 'CNVD-2022-55980', contributors: '—', date: '2022-08-10' },
  { id: 'CNVD-2022-71247', contributors: '伍郭成、田志宏、鲁辉、张宇恒', date: '2022-09-20' },
  { id: 'CNVD-2022-71248', contributors: '伍郭成、田志宏、鲁辉、周厚霖', date: '2022-09-20' },
  { id: 'CNVD-2022-71249', contributors: '伍郭成、田志宏、鲁辉、郑镛', date: '2022-09-20' },
  { id: 'CNVD-2022-71250', contributors: '伍郭成、田志宏、鲁辉、张宇恒', date: '2022-09-20' },
  { id: 'CNVD-2022-64955', contributors: '杨南顺、田志宏、鲁辉、孙彦斌', date: '2022-09-22' },
  { id: 'CNVD-2022-67084', contributors: '—', date: '2022-10-04' },
  { id: 'CNVD-2023-05943', contributors: '伍郭成、田志宏、鲁辉', date: '2022-11-04' },
  { id: 'CNVD-2023-08737', contributors: '伍郭成、田志宏、鲁辉、周厚霖', date: '2023-02-19' },
  { id: 'CVE-2023-27249', contributors: '张洲瑞、鲁辉、田志宏', date: '2023-02-27' },
  { id: 'CVE-2023-27655', contributors: '张洲瑞、鲁辉、田志宏', date: '2023-03-05' },
  { id: 'CVE-2023-20117', contributors: '吴雨泽、鲁辉、田志宏', date: '2023-04' },
  { id: 'CVE-2024-28458', contributors: '张洲瑞、鲁辉、田志宏', date: '2024-04-11' },
  { id: 'CVE-2024-33768', contributors: '张洲瑞、鲁辉、田志宏、张宇恒、陈星池、李正昊、冯嘉俊', date: '2024-04-26' },
  { id: 'CVE-2024-33767', contributors: '—', date: '2024-04-26' },
  { id: 'CVE-2024-33766', contributors: '—', date: '2024-04-26' },
  { id: 'CVE-2024-33764', contributors: '—', date: '2024-04-26' },
  { id: 'CVE-2024-33763', contributors: '—', date: '2024-04-26' },
  { id: 'CVE-2024-33428', contributors: '冯嘉俊、鲁辉、田志宏、陈星驰、李正昊、张洲瑞', date: '2024-04-26' },
  { id: 'CVE-2024-33429', contributors: '—', date: '2024-04-26' },
  { id: 'CVE-2024-33430', contributors: '—', date: '2024-04-26' },
  { id: 'CVE-2024-33431', contributors: '—', date: '2024-04-26' },
  { id: 'CVE-2024-34952', contributors: '—', date: '2024-05-21' },
  { id: 'CVE-2024-34953', contributors: '—', date: '2024-05-21' },
  { id: 'CVE-2024-36691', contributors: '张辛革、鲁辉、田志宏', date: '2024-06-12' },
  { id: 'CVE-2024-37870', contributors: '柳洲洋、鲁辉、田志宏、张辛革、薛捷耀', date: '2024-06-12' },
  { id: 'CVE-2024-37871', contributors: '—', date: '2024-06-12' },
  { id: 'CVE-2024-37872', contributors: '—', date: '2024-06-12' },
  { id: 'CVE-2024-37873', contributors: '—', date: '2024-06-12' },
  { id: 'CVE-2024-41437', contributors: '—', date: '2024-07-31' },
  { id: 'CVE-2024-41438', contributors: '—', date: '2024-07-31' },
  { id: 'CVE-2024-41439', contributors: '—', date: '2024-07-31' },
  { id: 'CVE-2024-41440', contributors: '—', date: '2024-07-31' },
  { id: 'CVE-2024-41443', contributors: '—', date: '2024-07-31' },
  { id: 'CNVD-2024-45335', contributors: '刘博宇、鲁辉、田志宏', date: '2024-09-15' },
  { id: 'CVE-2024-46258', contributors: '冯嘉俊、鲁辉、田志宏、陈星驰、李正昊、张洲瑞、彭泳曦', date: '2024-10-01' },
  { id: 'CVE-2024-46259', contributors: '—', date: '2024-10-01' },
  { id: 'CVE-2024-46261', contributors: '—', date: '2024-10-01' },
  { id: 'CVE-2024-46262', contributors: '—', date: '2024-10-01' },
  { id: 'CVE-2024-46263', contributors: '—', date: '2024-10-01' },
  { id: 'CVE-2024-46264', contributors: '—', date: '2024-10-01' },
  { id: 'CVE-2024-46267', contributors: '—', date: '2024-10-01' },
  { id: 'CVE-2024-46274', contributors: '—', date: '2024-10-01' },
  { id: 'CVE-2024-46276', contributors: '—', date: '2024-10-01' },
  { id: 'CVE-2024-47939', contributors: '伍郭成、鲁辉、田志宏', date: '2024-11' },
  { id: 'CVE-2024-57391', contributors: '吴雨泽、鲁辉、田志宏', date: '2024-09' },
  { id: 'CVE-2021-33928', contributors: '杨嘉庚、田志宏、鲁辉', date: '2021-06-07' },
]

// ─── 辅助函数 ─────────────────────────────────────────────────────────────────
function awardBadgeClass(award) {
  if (/特等|金奖/.test(award)) return 'bg-amber-100 text-amber-800 border border-amber-200'
  if (/一等/.test(award)) return 'bg-primary-100 text-primary-800 border border-primary-200'
  if (/银奖|二等/.test(award)) return 'bg-teal-50 text-teal-700 border border-teal-200'
  if (/铜奖|三等/.test(award)) return 'bg-gray-100 text-gray-600 border border-gray-200'
  return 'bg-gray-50 text-gray-500 border border-gray-200'
}
function levelBadgeClass(level) {
  if (level === '国家级') return 'bg-red-50 text-red-600'
  if (level === '省级') return 'bg-orange-50 text-orange-600'
  return 'hidden'
}
function vulnTypeClass(id) {
  if (id.startsWith('CVE-')) return 'bg-red-50 text-red-700 border-red-200'
  if (id.startsWith('CNVD-')) return 'bg-blue-50 text-blue-700 border-blue-200'
  return 'bg-gray-50 text-gray-600 border-gray-200'
}

function YearFilter({ years, selected, onChange }) {
  return (
    <div className="flex gap-2 flex-wrap">
      {years.map(y => (
        <button key={y} onClick={() => onChange(y)}
          className={`px-3 py-1 text-xs font-medium rounded-full border transition-colors ${
            selected === y
              ? 'bg-primary-600 text-white border-primary-600'
              : 'bg-white text-gray-600 border-gray-200 hover:border-primary-400 hover:text-primary-600'
          }`}>{y}</button>
      ))}
    </div>
  )
}

const paperYears = ['全部', ...new Set(papers.map(p => p.year))].sort((a, b) => a === '全部' ? -1 : b - a)
const awardYears = ['全部', ...new Set(awards.map(a => a.year))].sort((a, b) => a === '全部' ? -1 : b - a)

const TABS = [
  { key: 'papers', label: '学术论文', count: papers.length },
  { key: 'edu', label: '教改论文', count: eduPapers.length },
  { key: 'projects', label: '承担项目', count: null },
  { key: 'awards', label: '竞赛获奖', count: awards.length },
  { key: 'vulns', label: '漏洞披露', count: vulns.length },
]

export default function Achievements() {
  const [tab, setTab] = useState('papers')
  const [paperYear, setPaperYear] = useState('全部')
  const [awardYear, setAwardYear] = useState('全部')

  const filteredPapers = paperYear === '全部' ? papers : papers.filter(p => p.year === paperYear)
  const filteredAwards = awardYear === '全部' ? awards : awards.filter(a => a.year === awardYear)

  return (
    <div className="page-container">
      <h1 className="section-title">学术成果</h1>
      <div className="section-divider" />

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-lg p-1 mb-8 flex-wrap">
        {TABS.map(({ key, label, count }) => (
          <button key={key} onClick={() => setTab(key)}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-all flex items-center gap-1.5 ${
              tab === key ? 'bg-white text-primary-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'
            }`}>
            {label}
            {count !== null && (
              <span className={`text-xs rounded-full px-1.5 py-0.5 ${
                tab === key ? 'bg-primary-100 text-primary-700' : 'bg-gray-200 text-gray-500'
              }`}>{count}</span>
            )}
          </button>
        ))}
      </div>

      {/* ── 学术论文 ── */}
      {tab === 'papers' && (
        <section>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <span className="text-sm text-gray-500">{filteredPapers.length} 篇</span>
            <YearFilter years={paperYears} selected={paperYear} onChange={setPaperYear} />
          </div>
          <div className="space-y-3">
            {filteredPapers.map((p, i) => (
              <div key={i} className="card py-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-50 text-primary-600 text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-medium px-2 py-0.5 bg-primary-100 text-primary-700 rounded">{p.venue}</span>
                      <span className="text-xs text-gray-400">{p.year}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 leading-snug mb-0.5">{p.title}</p>
                    <p className="text-xs text-gray-500">作者：{p.authors}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 教改论文 ── */}
      {tab === 'edu' && (
        <section>
          <div className="mb-6">
            <p className="text-sm text-gray-500">网络安全教育改革与人才培养相关研究论文，共 {eduPapers.length} 篇</p>
          </div>
          <div className="space-y-3">
            {eduPapers.map((p, i) => (
              <div key={i} className="card py-4">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-50 text-teal-600 text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-xs font-medium px-2 py-0.5 bg-teal-100 text-teal-700 rounded">{p.venue}</span>
                      <span className="text-xs text-gray-400">{p.year}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-900 leading-snug mb-0.5">{p.title}</p>
                    <p className="text-xs text-gray-500">作者：{p.authors}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 承担项目 ── */}
      {tab === 'projects' && (
        <section>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">项目名称</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">来源</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">周期</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {projects.map((proj, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3.5 text-gray-800 font-medium">{proj.title}</td>
                    <td className="px-4 py-3.5 text-gray-500">{proj.source}</td>
                    <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">{proj.period}</td>
                    <td className="px-4 py-3.5">
                      <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${
                        proj.status === '在研' ? 'bg-green-50 text-green-700' : 'bg-gray-100 text-gray-500'
                      }`}>{proj.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* ── 竞赛获奖 ── */}
      {tab === 'awards' && (
        <section>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <span className="text-sm text-gray-500">共 {filteredAwards.length} 项获奖记录</span>
            <YearFilter years={awardYears} selected={awardYear} onChange={setAwardYear} />
          </div>
          <div className="space-y-3">
            {filteredAwards.map((item, idx) => (
              <div key={idx} className="card py-4">
                <div className="flex items-start justify-between gap-3 flex-wrap sm:flex-nowrap">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 text-sm leading-snug mb-1.5">{item.competition}</h3>
                    <p className="text-xs text-gray-500 mb-1"><span className="text-gray-400">获奖学生：</span>{item.students}</p>
                    {item.organizer && <p className="text-xs text-gray-400 leading-relaxed"><span>主办：</span>{item.organizer}</p>}
                  </div>
                  <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${awardBadgeClass(item.award)}`}>{item.award}</span>
                    <div className="flex gap-1.5">
                      {item.level && <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${levelBadgeClass(item.level)}`}>{item.level}</span>}
                      <span className="text-xs text-gray-400">{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 漏洞披露 ── */}
      {tab === 'vulns' && (
        <section>
          <div className="mb-6 flex items-start justify-between flex-wrap gap-3">
            <div>
              <p className="text-sm text-gray-600 mb-1">课题组累计披露主流操作系统和软件漏洞 <strong>{vulns.length}</strong> 个（CVE/CNVD）</p>
              <p className="text-xs text-gray-400">包括微软 Edge 浏览器等主流软件漏洞，获微软致谢并入选微软全球最有价值安全研究员（2021）</p>
            </div>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 rounded border bg-red-50 text-red-700 border-red-200 font-medium">CVE</span>
              <span className="text-xs px-2 py-1 rounded border bg-blue-50 text-blue-700 border-blue-200 font-medium">CNVD</span>
            </div>
          </div>
          {/* 特别标注 */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-amber-800 font-medium mb-1">🏆 典型成果</p>
            <ul className="text-xs text-amber-700 space-y-1">
              <li>• 学生温志华（鲁辉指导）发现微软Edge浏览器漏洞，获微软致谢并入选<strong>微软全球最有价值安全研究员（2021 MSRC MVR）</strong></li>
              <li>• 鲁辉等人发现XStream漏洞，被360评为 <strong>9.8分（满分10）</strong>，威胁等级"严重"</li>
            </ul>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {vulns.map((v, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-lg px-4 py-3 hover:shadow-sm transition-shadow">
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded border ${vulnTypeClass(v.id)}`}>{v.id}</span>
                  <span className="text-xs text-gray-400">{v.date}</span>
                </div>
                {v.contributors !== '—' && (
                  <p className="text-xs text-gray-500 leading-relaxed">{v.contributors}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
