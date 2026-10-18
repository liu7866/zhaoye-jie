const NPCS = {
  yun: { name: "乔云舒", glyph: "云", color: "#527a69", role: "散修医修 · 苍梧渡义诊", goal: "想在边境开一间不受宗门管束的医馆。她救人，却不愿任何人替她决定去留。", agenda: ["守在渡口替商旅看伤", "去雾岭采药，补足义诊药箱", "给附近村落送一批退潮丹"], likes: "守信、尊重她的医道、一起做事", ask: 62, trust: 54 },
  yue: { name: "柳月白", glyph: "月", color: "#6b7e9a", role: "归鹤剑宗弟子 · 寻师途中", goal: "师父在天隙异动前失踪，她想查明真相，也想证明剑宗的规矩并非唯一答案。", agenda: ["在青篁林练剑", "向归鹤剑宗递交寻师线索", "追查一处断裂的古阵"], likes: "坦诚、切磋、愿意承认自己不知道", ask: 64, trust: 56 },
  luo: { name: "阿罗", glyph: "烬", color: "#a65e4d", role: "赤烬教行走 · 誓约司", goal: "她在寻找一种不以强迫为代价的誓约之法，想让教中被旧契束缚的人有重新选择的机会。", agenda: ["回赤烬教处理一桩旧誓争议", "在渡口收集灵潮异象的口述", "独自去雾岭测试新符"], likes: "直率、守约、愿意听她谈自己的道", ask: 60, trust: 58 },
  qiao: { name: "裴知意", glyph: "知", color: "#a28a58", role: "万方商盟执事 · 行商人", goal: "她想把一条断了多年的商路重新接起来，让坊市不必依附某个宗门才能活下去。", agenda: ["清点商队货物与账册", "沿沧河查看灵潮后的水路", "寻找愿意共担风险的合伙人"], likes: "公平交易、清楚表达、记得兑现承诺", ask: 63, trust: 52 },
  song: { name: "宋闻舟", glyph: "舟", color: "#5d817f", role: "散修 · 地图贩子", goal: "想绘出一张会随灵潮变化的边境地图。", agenda: ["在坊市交换沿途消息", "去青篁林确认一处旧路标", "整理刚画完的水道图"], likes: "分清人情与买卖", ask: 0, trust: 0 },
  shi: { name: "石豆", glyph: "石", color: "#8a795d", role: "散修药农 · 临时向导", goal: "攒够灵石替家里赎回一片被抵押的药田。", agenda: ["在渡口帮人搬货", "回村里照看药田", "去雾岭找耐寒灵草"], likes: "按约付酬", ask: 0, trust: 0 },
  ying: { name: "沈惊鸿", glyph: "鸿", color: "#846a83", role: "大晟巡灵司 · 女官", goal: "她负责登记灵潮异案，正在追查一份被删改的边境伤亡簿。她相信秩序能护人，却不愿把规矩当成答案。", agenda: ["在云京驿城核对异案卷宗", "赴天隙外沿勘验阵痕", "替受灾村落申请赈济"], likes: "有据可查、敢于担责、听取凡人的声音", ask: 66, trust: 60 },
  ling: { name: "桑苓", glyph: "苓", color: "#6b8b68", role: "百族会盟 · 青泽灵使", goal: "她要找回被盗的泽心种，避免百药泽的水脉枯竭，也想改变会盟与人族之间互不信任的旧规矩。", agenda: ["在百药泽照料受损水脉", "去雾岭寻找泽心种的踪迹", "与边境村民交换药种"], likes: "尊重族地、愿意交换而非索取、守护弱小", ask: 64, trust: 62 },
  he: { name: "贺鸣沙", glyph: "沙", color: "#9a7658", role: "霜河关 · 镖队头领", goal: "他想守住北境商道，也在暗中寻找失踪多年的姐姐。", agenda: ["带镖队巡查霜河冰线", "在关城修补灵弩", "打听一支失联商队的消息"], likes: "并肩做事、直面危险、照顾队友", ask: 0, trust: 0 },
  man: { name: "小满", glyph: "满", color: "#bc8d5b", role: "千岛渡 · 传信人", goal: "她熟悉每条潮汐航线，想攒钱买下一艘小船，带家人离开常年受海兽袭扰的岛村。", agenda: ["在千岛渡传递船期", "替岛民寻找失联的药船", "修补自己的旧帆船"], likes: "兑现报酬、尊重她的本事、记得问家人的近况", ask: 0, trust: 0 }
};
const ROMANCES = ["yun", "yue", "luo", "qiao", "ying", "ling"];
const REALMS = ["凡人", "炼气初期", "炼气中期", "炼气后期", "筑基初期", "筑基后期", "金丹", "元婴", "化神"];
const PLACES = [
  { id: "苍梧渡", desc: "渡口坊市 · 安稳", travel: 0 },
  { id: "青篁林", desc: "竹林旧道 · 有妖兽", travel: 1 },
  { id: "雾岭药谷", desc: "灵药谷地 · 乔云舒常来", travel: 1 },
  { id: "天隙外沿", desc: "古阵裂谷 · 异动频繁", travel: 2 },
  { id: "宗门驻地", desc: "随你的归属而变", travel: 1 },
  { id: "云京驿城", desc: "皇朝州城 · 案卷与赈务", travel: 2 },
  { id: "霜河关", desc: "北境边塞 · 镖队与妖潮", travel: 3 },
  { id: "百药泽", desc: "南岭泽地 · 部族药田", travel: 2 },
  { id: "千岛渡", desc: "东海港镇 · 航线与海兽", travel: 3 }
];
const SCHOOL_LIFE = [
  { id: "sword", match: "归鹤", name: "归鹤剑宗", mentorLabel: "师父", mentors: [
    { name: "顾寒山", title: "守拙峰首座", temperament: "严谨寡言，先看你是否守得住心神。", lesson: "先辨出剑的理由，再谈剑有多快。", gift: { xp: 8 } },
    { name: "裴照影", title: "游剑长老", temperament: "洒脱好奇，不按旧谱出招。", lesson: "剑招可以学，何时收剑要自己决定。", gift: { fame: 1, clues: 1 } }
  ], peers: [
    { id: "sword_xie", name: "谢临川", title: "大师兄", temperament: "守规矩、肯担责，最怕同门因他判断失误受伤。", goal: "想证明剑宗的规矩可以保护人。" },
    { id: "sword_he", name: "贺兰知意", title: "二师姐", temperament: "冷静敏锐，说话直接，习惯先看伤势再问缘由。", goal: "在剑修中重建一套救治伤员的法子。" },
    { id: "sword_lu", name: "陆小满", title: "小师弟", temperament: "机灵嘴快，擅长钻空子，也会把错揽到自己身上。", goal: "想攒钱给山下家人修一座桥。" }
  ] },
  { id: "dan", match: "丹谷", name: "松风丹谷", mentorLabel: "师父", mentors: [
    { name: "桑问秋", title: "百草堂堂主", temperament: "耐心细致，但不容弟子糟蹋药材。", lesson: "药性要从土地、时令和病人身上一起看。", gift: { herbs: 1 } },
    { name: "乔雁回", title: "游方丹师", temperament: "爽朗务实，先问药能不能救急。", lesson: "好方子不在丹炉里，在愿意彼此照看的日子里。", gift: { hp: 8, fame: 1 } }
  ], peers: [
    { id: "dan_liang", name: "梁问药", title: "大师姐", temperament: "沉着护短，做事讲顺序，讨厌拿病人试药。", goal: "想整理一套凡人也能用的急救药册。" },
    { id: "dan_tang", name: "唐沐", title: "三师兄", temperament: "健谈爱笑，炼丹容易分心，却很会安慰病患。", goal: "想找到能缓解灵潮旧伤的方子。" },
    { id: "dan_su", name: "苏禾", title: "小师妹", temperament: "安静固执，认准的草药会一路追到根源。", goal: "想让丹谷公开药田种植法，不再垄断药材。" }
  ] },
  { id: "ember", match: "赤烬", name: "赤烬教·誓火司", mentorLabel: "引路师", mentors: [
    { name: "温照夜", title: "守誓长老", temperament: "克制严肃，最看重誓言是否留有退路。", lesson: "誓约若不能被拒绝，就只是另一种枷锁。", gift: { trust: 1 } },
    { name: "祝无咎", title: "行火使", temperament: "锋利直率，不相信空话，愿意承认自己会错。", lesson: "别替别人许诺；要守的誓，先由自己承担。", gift: { xp: 8, fame: 1 } }
  ], peers: [
    { id: "ember_he", name: "贺兰烬", title: "大师姐", temperament: "外冷内热，护短但不纵容，正和旧誓纠缠。", goal: "想找到一条安全解除旧契的办法。" },
    { id: "ember_xie", name: "谢辞", title: "二师兄", temperament: "谨慎讥诮，熟悉教内规矩，也总留一手后路。", goal: "想查清是谁改写了弟子的誓契。" },
    { id: "ember_wu", name: "乌行舟", title: "小师弟", temperament: "沉默敏感，记性极好，不愿被人当成凶器。", goal: "想学会不靠誓约也能控制自己的火灵根。" }
  ] },
  { id: "merchant", match: "商盟", name: "万方商盟·沧河分号", mentorLabel: "师父", mentors: [
    { name: "闻九筹", title: "分号掌事", temperament: "精明守信，每笔人情都记账，却愿替新人兜底。", lesson: "账要算清，人情也要算清，别让弱者替强者付账。", gift: { stones: 6 } },
    { name: "林不渡", title: "行路客卿", temperament: "随和老练，见过许多失约的商路。", lesson: "路不是画在纸上，是同行的人一起走出来的。", gift: { fame: 2, clues: 1 } }
  ], peers: [
    { id: "trade_meng", name: "孟停云", title: "领队师姐", temperament: "果断利落，分账透明，遇到危险先清点人头。", goal: "想把商队做成不依附宗门的互助网。" },
    { id: "trade_zhi", name: "祁知远", title: "账房师兄", temperament: "慢热谨慎，记得每个人欠下的承诺。", goal: "想查出一笔多年前吞掉小商户的旧账。" },
    { id: "trade_ning", name: "宁小满", title: "新入门师妹", temperament: "好胜爽快，谈价很硬，私下常寄钱回家。", goal: "想买下一艘自己的小船。" }
  ] },
  { id: "office", match: "巡灵司", name: "大晟巡灵司", mentorLabel: "带教师父", mentors: [
    { name: "沈砚之", title: "案牍校尉", temperament: "沉稳审慎，凡事要求证据，也肯为证人挡压力。", lesson: "卷宗写的是事实，不是你希望它成为的样子。", gift: { clues: 1, fame: 1 } },
    { name: "闻秋策", title: "外勤司录", temperament: "果敢务实，重视现场，厌烦只在案头推演。", lesson: "规矩若护不住人，就该找出它失灵的地方。", gift: { xp: 8, hp: 5 } }
  ], peers: [
    { id: "office_lu", name: "陆照微", title: "资深师姐", temperament: "冷静守正，对上敢顶，对证人却很温和。", goal: "想重查一桩被匆匆结案的村落失踪案。" },
    { id: "office_qin", name: "秦既白", title: "同批师兄", temperament: "谨慎圆融，擅长听人说话，怕连累家人。", goal: "想让巡灵司承认基层记录也有价值。" },
    { id: "office_yu", name: "余小满", title: "新任司吏", temperament: "认真倔强，写字极慢，遇到不公会失眠。", goal: "想做出一份不会抹去凡人名字的伤亡册。" }
  ] },
  { id: "alliance", match: "百族会盟", name: "百族会盟·青泽使团", mentorLabel: "族师", mentors: [
    { name: "青岚婆婆", title: "泽灵族师", temperament: "温和而有边界，先问来者愿不愿交换。", lesson: "共生不是占有；每一种生命都有拒绝的权利。", gift: { herbs: 1, trust: 1 } },
    { name: "白石阿公", title: "山泽行者", temperament: "爽朗豪迈，喜欢用行动而非头衔认人。", lesson: "先学会在别人的土地上做客，再谈如何结盟。", gift: { fame: 1, xp: 7 } }
  ], peers: [
    { id: "alliance_yan", name: "雁回", title: "水脉师姐", temperament: "寡言专注，护水脉也尊重村民的生计。", goal: "想恢复被旧战毁掉的泽地水渠。" },
    { id: "alliance_ming", name: "明角", title: "山行师兄", temperament: "热心直爽，容易冲动，事后会主动道歉。", goal: "想阻止族地与人族因误会再次开战。" },
    { id: "alliance_lan", name: "蓝禾", title: "小师妹", temperament: "好奇爱笑，能听懂灵兽情绪，不喜欢被当成通译工具。", goal: "想写一本记录各地灵兽习性的行旅册。" }
  ] }
];
const PERSONALITIES = {
  yun: { temperament: "温和细致，却很有主见", boundary: "她不接受别人替她决定是否继续行医", talks: [
    ["陪她给伤者分诊，听她安排", "她愿意把医馆的难题交给你一起承担。", { relation: ["yun", 4, 9], flags: ["savedYun"] }],
    ["问清她想开什么样的医馆，再谈未来", "她感到自己的选择被认真对待。", { relation: ["yun", 7, 6] }],
    ["把急救经验记下来，留给下一位伤者", "你们做成了一份实用药册，也多了共同记忆。", { relation: ["yun", 3, 8], flags: ["clinicBook"], herbs: 1 }]
  ] },
  yue: { temperament: "克制好胜，遇到疑点会追到底", boundary: "她不需要被保护起来；她要的是平等同行", talks: [
    ["与她认真切磋，输赢后复盘一招", "她尊重你愿意直面自己的不足。", { relation: ["yue", 5, 7], xp: 8 }],
    ["一起核对失踪师父留下的剑痕", "你们找到一段能交叉验证的行踪线索。", { relation: ["yue", 3, 9], clues: 1, flags: ["swordTrace"] }],
    ["承认自己还不知道答案，请她也说说困惑", "她放下了几分戒心，愿意与你讨论自己的怀疑。", { relation: ["yue", 7, 6] }]
  ] },
  luo: { temperament: "直率敏锐，对承诺格外认真", boundary: "她拒绝用强迫换来的忠诚，也不接受轻率许诺", talks: [
    ["和她逐条审视一份旧誓，标出退出条件", "她把这视为真正的帮助，而非漂亮表态。", { relation: ["luo", 4, 10], flags: ["pledgeHelped"] }],
    ["直接告诉她你能做到什么、做不到什么", "清楚的边界比空口承诺更让她信任。", { relation: ["luo", 3, 11] }],
    ["陪她去见想退出旧契的教众", "你们暂时保住了那人的选择权。", { relation: ["luo", 6, 6], fame: 1, flags: ["freeVow"] }]
  ] },
  qiao: { temperament: "精明爽快，遇到风险先算清代价", boundary: "她把公平和兑现看得比浪漫话语重要", talks: [
    ["把利润、风险和分账当面摊开", "她愿意和你谈真正长期的合作。", { relation: ["qiao", 4, 9], stones: 4, flags: ["fairTrade"] }],
    ["听她讲完商路，再问最缺哪一环", "她感受到你是在帮她完成自己的计划。", { relation: ["qiao", 6, 7], clues: 1 }],
    ["坦白你不懂商事，请她教你看账", "她喜欢你不装懂，也教你辨认一处账目陷阱。", { relation: ["qiao", 3, 10], xp: 7 }]
  ] },
  ying: { temperament: "冷静自持，习惯先听证词再下判断", boundary: "她不接受没有证据的表态，也不会替你隐瞒责任", talks: [
    ["陪她逐一复核证人原话", "可靠记录使案卷更难被随意改写。", { relation: ["ying", 4, 9], flags: ["registryEvidence"], clues: 1 }],
    ["先听受灾村民讲完，再与她讨论规则", "她看到你愿意把人的经历纳入判断。", { relation: ["ying", 6, 7], fame: 1 }],
    ["承认自己也可能判断错，约好补充证据", "她珍惜这种不急着定罪的态度。", { relation: ["ying", 3, 10], xp: 6 }]
  ] },
  ling: { temperament: "安静坚定，尊重生命的边界", boundary: "她不会为了结盟而交出族地，也不替灵兽许诺", talks: [
    ["先问泽民愿意交换什么，再谈修复水脉", "她愿意与你一起拟定双方都能拒绝的约定。", { relation: ["ling", 4, 9], flags: ["waterPact"] }],
    ["陪她沿水渠查看枯萎的根系", "你找到一处堵塞的支渠，泽地恢复了些生机。", { relation: ["ling", 5, 7], herbs: 1, flags: ["marshCare"] }],
    ["不碰泽心种，只把盗痕和证词记下来", "她信任你尊重族地，也愿意分享一条线索。", { relation: ["ling", 3, 10], clues: 1, flags: ["seedTrail"] }]
  ] },
  song: { temperament: "散漫健谈，真正看重地图上的每一个人", boundary: "他会把重要情报标出来源，不替买家隐瞒风险" },
  shi: { temperament: "朴实勤快，对药田和家人有自己的打算", boundary: "他愿意受雇同行，但不会把家里的难处当作卖身契" },
  he: { temperament: "沉稳果断，习惯先护队伍再算输赢", boundary: "他不会为了报酬让镖队成员白白冒险" },
  man: { temperament: "机灵独立，熟悉潮汐也熟悉人情往来", boundary: "她谈报酬很认真，也会把家人和航线放在心上" }
};
const LOCATION_STORIES = {
  "苍梧渡": [
    { id: "dockLedger", title: "被水泡开的船账", text: "渡口账房漏雨，一册旧船账被水泡开。账页上有几笔重复的药材运费，掌柜说只是算错，船工却说那几条船根本没有出港。", echo: { flag: "dockAid", text: "先前被你安置的船工也赶来作证。" }, choices: [
      ["逐页核对船期和签名", "你留下能复查的证据，几名船工愿意作证。", { flags: ["dockLedger", "portTrust"], clues: 1, fame: 2 }],
      ["先把被拖欠的工钱补给船工", "眼前的欠薪解决了，账目追查暂时要慢一些。", { flags: ["dockAid"], stones: 3, fame: 2, pressure: -1 }],
      ["把账册交给宋闻舟比对航线", "地图上的空白水路与账册日期对上了。", { flags: ["portMap"], introduce: ["song"], clues: 1, xp: 7 }]
    ] },
    { id: "nightFerry", title: "夜渡时少了一盏灯", text: "夜航船少点了一盏引路灯，险些撞上浅滩。乔云舒刚好在岸边义诊，船上还有一名昏迷的药童；船主却坚持说自己按旧潮表行船。", echo: { flag: "portMap", text: "你手里的新水路图标出了浅滩位置。" }, choices: [
      ["先救药童，再查灯油为何被换", "药童脱险，调查也发现有人私换了灯油。", { flags: ["dockRescue", "portTrust"], hp: -3, fame: 2, clues: 1 }],
      ["立刻更正渡口潮表并通知船队", "几艘夜航船及时改道，商旅愿意共同维护新潮表。", { flags: ["portMap", "dockAid"], stones: 3, fame: 1 }],
      ["把船交给水巡，自己护送乘客上岸", "你避免了二次事故，水巡随后会查船主的责任。", { flags: ["dockRescue"], hp: 5, trust: { yun: [2, 3] }, pressure: -1 }]
    ] }
  ],
  "宗门驻地": [
    { id: "gateReferral", title: "门前那封没有署名的引荐", text: "一名外地少年拿着褪色的引荐信，在山门前等了一整日。守门弟子说信上少了印记，少年却坚持这是故人临终前交给他的。", choices: [
      ["核对信纸、旧印和送信路线", "引荐确有来历，门内答应给少年一次正式考校。", { flags: ["gateReferral"], clues: 1, fame: 1 }],
      ["先请他在附近客舍住下，再找人辨认笔迹", "少年不必露宿山门外，调查也有了缓冲时间。", { flags: ["gateAid"], stones: 2, fame: 1 }],
      ["尊重守门规矩，不替任何一方作保", "你没有越权，但记下了之后可以查证的名字。", { clues: 1, xp: 5 }]
    ] },
    { id: "publicLesson", title: "讲道坪上的两种阵图", text: "一位外门教习讲解天隙旧阵时，台下两名弟子对阵眼方向各执一词。围观的新人听得一头雾水，教习让人拿出实际证据再争。", echo: { flag: "riftRecord", text: "你带来的裂谷记录为阵图补上了一个缺失的方位。" }, choices: [
      ["对照旧碑与阵纹，标出双方都遗漏的一段", "你把争论变成了一次可复查的推演。", { flags: ["publicLesson"], clues: 1, xp: 7 }],
      ["请两名弟子各自说明证据，再记录分歧", "新人终于听懂了两种说法的边界，教习记住了你的耐心。", { flags: ["publicLesson"], fame: 2 }],
      ["不参与争论，去帮忙整理讲道坪的旧卷", "你找到一段被折起的注释，修为也有所积累。", { clues: 1, xp: 8 }]
    ] }
  ],
  "归鹤剑宗": [
    { id: "swordFirstAid", title: "试剑坪边的止血布", text: "晨课试剑时，一名新弟子被弹开的木剑划伤。执教弟子想先查是谁分神，伤者却说自己不想耽误同门继续练习。", echo: { flag: "swordCare", text: "上次留下的急救包已经补齐，值课弟子先替伤者处理了伤口。" }, choices: [
      ["先停下练剑，替伤者止血并确认伤势", "伤者稳住了，执教弟子也把急救步骤写进晨课安排。", { flags: ["swordCare"], fame: 1, mentorBond: 3 }],
      ["核对木剑、护具与练习记录，找出失误环节", "练习规程补上了一个空缺，同门愿意一起复查器具。", { flags: ["swordRecords"], clues: 1, xp: 6, schoolFavor: 2 }],
      ["让伤者自己决定要不要继续，其余人先清出场地", "你没有替他作主，试剑坪也恢复了秩序。", { flags: ["swordChoice"], fame: 1, mentorBond: 2 }]
    ] },
    { id: "swordWatch", title: "夜巡交班时少了一页", text: "山门夜巡的交班册缺了一页，值守弟子记得有人报过林外异响，下一班却没有收到消息。长夜过去了，没人受伤，但两组人都认为责任不在自己。", echo: { flag: "swordWatchRoute", text: "新补上的交班路线和暗号让夜巡弟子顺利对上了记录。" }, choices: [
      ["让两班弟子按时辰重走一遍巡山路线", "遗漏的传讯点被找出，夜巡名单增加了交接确认。", { flags: ["swordWatchRoute"], fame: 1, schoolFavor: 3 }],
      ["先查是谁撕走交班页，再决定如何处理", "你找回了被雨水粘住的纸页，也看清了流程里的疏漏。", { flags: ["swordWatchRecords"], clues: 1, mentorBond: 3 }],
      ["替下一班补齐路标和备用传讯符", "巡夜暂时安全了，责任争议留待当事人之后说清。", { flags: ["swordWatchAid"], talismans: 1, xp: 5 }]
    ] }
  ],
  "松风丹谷": [
    { id: "danAntidote", title: "药柜里空着的那格", text: "值守药柜少了一包常用解毒散。谷中一位学徒记得昨夜把药送去了山下，却找不到签收记录；偏巧有采药人刚从苦泉边回来，手脚仍有些麻木。", echo: { flag: "danMedicineShare", text: "山下药柜与谷中药册已经互通，值守弟子很快找到了替代方子。" }, choices: [
      ["先按现有药材配出一剂低风险解毒汤", "采药人的麻木减轻了，药师把新配法记进急救册。", { flags: ["danMedicineShare"], fame: 2, mentorBond: 3 }],
      ["沿送药路线查找签收人和空药包", "你找到药包被留在半途的原因，补上了交接记录。", { flags: ["danDeliveryRecord"], clues: 1, schoolFavor: 3 }],
      ["暂缓发药，先确认苦泉样本是否带有相同毒性", "没有贸然用药，泉样也被送去复核；病人暂时由医修照看。", { flags: ["danSpringCheck"], xp: 7, herbs: 1 }]
    ] },
    { id: "danFurnaceVent", title: "药炉旁的苦烟", text: "炼药房里飘出一股发涩的黑烟，炉火没有失控，附近几名弟子却开始咳嗽。看炉人说新药方只是多添了一味稳火草，负责记录的人认为药材批次可能混了。", echo: { flag: "danVentPlan", text: "通风口和药材批次都已标记，苦烟没有再飘进隔壁药房。" }, choices: [
      ["立刻停炉开窗，把药房里的人带到上风处", "弟子们没有继续吸入苦烟，未完成的药材只能暂时报废。", { flags: ["danVentPlan"], hp: 2, fame: 1, mentorBond: 2 }],
      ["分开封存草料与炉灰，逐项比对批次", "混入药材的灰粉被查出，丹谷更新了收料复核步骤。", { flags: ["danBatchCheck"], clues: 1, schoolFavor: 3 }],
      ["请看炉人与记药人共同复盘，不先认定谁有错", "两人找到了火候与药材同时变化的原因，愿意继续合作。", { flags: ["danJointReview"], herbs: 1, xp: 6, mentorBond: 3 }]
    ] }
  ],
  "赤烬教驻地": [
    { id: "emberOldOath", title: "不肯续签的旧誓", text: "一名年轻教众的旧誓即将到期，誓火司执事拿来一份续约文书，对方却不肯落笔。围观者各有说法：有人担心旧誓失效后会惹来追债者，也有人不愿替他决定。", echo: { flag: "emberExitClause", text: "旧誓文书已补上自愿退出的条款，当事人亲自确认后才签字。" }, choices: [
      ["请双方先确认旧誓到期后的风险，再由当事人决定", "追债风险有了应对办法，是否续约仍由本人选择。", { flags: ["emberExitClause"], fame: 2, mentorBond: 4 }],
      ["逐条核对旧契，找出能暂停追索的空档", "你找到一条暂缓追索的旧例，争论终于有了缓冲。", { flags: ["emberContractReview"], clues: 1, schoolFavor: 2 }],
      ["陪他离开议事堂，给他时间想清楚", "他没有当场续誓，也没有被赶出教门；谈话约在三日后继续。", { flags: ["emberCoolingOff"], hp: 3, trust: { luo: [1, 2] } }]
    ] },
    { id: "emberAshRoom", title: "誓火堂里熄灭的灯", text: "一盏守誓灯忽然熄灭，值夜弟子担心这代表有人违誓。负责保管旧契的教众却说灯芯早已开裂，不该拿它判断谁是否守诺。", echo: { flag: "emberLampRecord", text: "灯芯更换记录已经公开，没人再用那盏旧灯指认违誓者。" }, choices: [
      ["检查灯芯与换油记录，先排除器物故障", "灯芯的裂口被找到了，值夜弟子撤回了未经证实的指控。", { flags: ["emberLampRecord"], clues: 1, mentorBond: 3 }],
      ["让被怀疑的人说明情况，并给他拒绝作证的余地", "谈话没有变成审问，双方约好等证据齐全后再议。", { flags: ["emberWitnessCare"], fame: 2, schoolFavor: 2 }],
      ["暂时封存旧契，不用灯火替任何人定罪", "争端被按下，教众开始重新整理守誓灯的使用规程。", { flags: ["emberContractHold"], pressure: -1, xp: 5 }]
    ] }
  ],
  "万方商盟分号": [
    { id: "merchantShortLedger", title: "账簿里少掉的三成货", text: "沧河分号核账时发现一批灵材少了三成。领队说货已交给下一家船队，账房却找不到收据；几名小商户怕耽误生意，不敢先报损。", echo: { flag: "merchantOpenLedger", text: "公开的交接账页让各家对上了货物去向，缺损有了共同承担的办法。" }, choices: [
      ["公开交接账页，请各家按凭据共同核对", "缺损原因被查明，分号承担了一部分损失，小商户保住了周转。", { flags: ["merchantOpenLedger"], fame: 2, stones: 2, schoolFavor: 3 }],
      ["先垫付急用货款，再沿水路追查缺货船队", "小商户没有断货，你也留下了可继续追查的水路标记。", { flags: ["merchantAdvance"], stones: -2, clues: 1, mentorBond: 2 }],
      ["只处理有完整凭证的货物，提醒其他人补齐单据", "账目更清楚了，但缺少凭证的商户只能自己承担眼前损失。", { flags: ["merchantReceiptRule"], xp: 6, fame: 1 }]
    ] },
    { id: "merchantLateBerth", title: "迟到的药船靠不了岸", text: "一艘载着急用药材的商船迟了半日，分号泊位已让给另一支船队。临时改泊会增加费用，直接卸货又可能挡住附近小船的退潮路线。", echo: { flag: "merchantSharedTide", text: "新的泊位表给急用药船留了短时窗口，也保住了小船退潮的通道。" }, choices: [
      ["重新排泊位，给急用药船留出短时卸货窗口", "药材及时入库，小船也赶上了退潮，双方愿意共用新时刻表。", { flags: ["merchantSharedTide"], fame: 2, mentorBond: 3 }],
      ["由分号承担临时改泊费用，先把药材送进城", "救急药材没有耽误，分号账上多出一笔需要追偿的费用。", { flags: ["merchantUrgentCargo"], stones: -3, schoolFavor: 3 }],
      ["核对潮汐、泊位和到货记录，再决定谁承担延误", "延误不是单一一方造成的，新的合约把风险分摊给了各家。", { flags: ["merchantRouteReview"], clues: 1, xp: 5 }]
    ] }
  ],
  "青篁林": [
    { id: "bambooBoundary", title: "竹根下的兽道界碑", text: "新竹根顶翻了一块旧界碑，妖兽脚印正穿过采药人的小路。百族会盟的桑苓正在附近巡水，村民想砍开一条直路，林中灵兽则被逼到了溪边。", echo: { flag: "forestPact", text: "此前你留下的兽道记号还在，灵兽没有立刻逃走。" }, choices: [
      ["和采药人一起把路改到旧石阶", "人能继续采药，兽群也保住了饮水路径。", { flags: ["forestPact", "forestTrail"], fame: 2, trust: { ling: [2, 4] } }],
      ["循兽道找出界碑为何移动", "你发现地底阵纹牵动竹根，记下了异动方向。", { flags: ["forestGlyph"], clues: 1, xp: 9 }],
      ["先帮村民采完这一批药，再立临时木牌", "没有解决根源，但双方有了几日缓冲。", { flags: ["forestTrail"], herbs: 2, fame: 1 }]
    ] },
    { id: "swordMarks", title: "石壁上多出的三道剑痕", text: "一段旧路旁出现三道新剑痕。受伤的年轻剑修说是自己练功所留，可痕迹方向却像在给林中迷路的人指路。", echo: { flag: "forestGlyph", text: "阵纹与你之前发现的竹根异动互相呼应。" }, choices: [
      ["陪他找回迷路的采药童", "人找到了，剑痕也被记成可靠路标。", { flags: ["forestTrail", "forestPact"], hp: -2, fame: 2 }],
      ["依剑痕推演施剑人的步法", "你看出剑痕中藏着一段古阵方位。", { flags: ["forestGlyph"], clues: 1, xp: 8 }],
      ["劝他先处理伤口，改日再练", "年轻剑修答应不再独自硬撑，给了你一把止血草。", { flags: ["forestAid"], hp: 8, herbs: 1 }]
    ] }
  ],
  "雾岭药谷": [
    { id: "mistSpring", title: "变苦的山泉", text: "药谷一眼泉水忽然发苦，几名采药人喝后经脉发麻。乔云舒正在给病人把脉；丹谷守园弟子想封泉，山下村医却说那是全村唯一的水源。", echo: { flag: "clinicBook", text: "你们整理的急救药册让村医及时稳住了病人。" }, choices: [
      ["分组取样，先找出毒性来自哪一层泉眼", "你找到被灵藤堵住的支脉，泉水有机会恢复。", { flags: ["springSample", "marshCare"], clues: 1, herbs: 1, xp: 6 }],
      ["用药谷药柜里的存药为村民配解毒散", "病人的麻痹缓解了，药谷也把这次配方记入急救册。", { flags: ["clinicStock", "clinicBook"], fame: 2, pressure: -1 }],
      ["先封闭上游，替村民找临时取水点", "村民暂时安全，泉眼的根源仍待调查。", { flags: ["springSafe"], fame: 1, trust: { yun: [3, 4] } }]
    ] },
    { id: "herbDispute", title: "同一株药草的两种名字", text: "采药人和丹谷弟子为一片药田争执：一方说药草是山民多年培育的，一方说它已变成灵植，按宗门旧例应归丹谷。桑苓受托来做见证，希望交换药种的旧约不被争执撕毁。", echo: { flag: "springSample", text: "泉样证明这片药田的灵气变化与上游水脉有关。" }, choices: [
      ["请双方共同记录种植年限和药性变化", "一份共享药册让争论有了可核对的依据。", { flags: ["herbAccord", "clinicBook"], fame: 2, herbs: 1 }],
      ["按劳动投入分成，先让本季药材入库", "药材保住了，双方也各自承担了后续风险。", { flags: ["herbShare"], stones: 5, fame: 1 }],
      ["建议保留一小片共管药田作试验", "山民与丹谷各派一人照看，约定秋后再议。", { flags: ["herbAccord", "marshCare"], xp: 7, trust: { ling: [2, 3] } }]
    ] }
  ],
  "天隙外沿": [
    { id: "riftCamp", title: "撤离营地的最后一车药", text: "临时营地开始撤离，最后一车药材卡在裂沟边。两名伤员还没醒，负责抬车的人却已灵力透支，裂隙深处传来持续的闷响。", echo: { flag: "riftWard", text: "此前加固的阵桩仍在生效，裂沟暂时没有扩大。" }, choices: [
      ["先背伤员撤离，再拆分药材分批运送", "所有人都离开了危险区，损失了一些药材。", { flags: ["riftEvac", "clinicStock"], fame: 2, pressure: -1, hp: -4 }],
      ["用阵桩固定裂沟，争取时间运完药车", "营地保住了急救物资，但你感到阵纹正在反噬。", { flags: ["riftWard"], clues: 1, xp: 10, hp: -6 }],
      ["唤来附近宗门和巡灵司共同接手", "各方第一次共享了现场记录，后续封阵更有把握。", { flags: ["riftEvac", "riftRecord"], fame: 1, clues: 1 }]
    ] },
    { id: "riftEcho", title: "裂谷里重复的一句话", text: "裂谷每隔一刻便传来同一句求救，声音却来自不同方向。沈惊鸿正在登记现场，同行修士认为是阵法诱敌，营地里的人则怀疑还有幸存者。", echo: { flag: "riftRecord", text: "各方共享的现场记录排除了几个错误回声点。" }, choices: [
      ["用绳索和回声间隔逐段定位", "你找到了空洞里的旧传讯阵，声音来自多年前的记录。", { flags: ["riftRecord"], clues: 1, xp: 8 }],
      ["沿最近的声音搜寻，带足照明与退路", "你救出一名被困的阵师，自己也受了轻伤。", { flags: ["riftRescue", "riftWard"], fame: 2, hp: -5, trust: { ying: [2, 4] } }],
      ["先让营地所有人撤出回声范围", "没有新增伤亡，旧阵的秘密暂时仍在裂谷深处。", { flags: ["riftEvac"], pressure: -1, fame: 1 }]
    ] }
  ],
  "云京驿城": [
    { id: "capitalPetition", title: "没有落款的安置请愿", text: "州衙收到一份没有落款的请愿，要求为被灵潮毁坏的村民提供临时住处。官吏担心被追责，村民又不肯在未修订的条款上画押。", echo: { flag: "registryEvidence", text: "你此前核对过的名册让安置人数有了依据。" }, choices: [
      ["把村民逐户需求写进附页，不代他们签字", "请愿保留了原意，也让每户人家能自己确认条款。", { flags: ["capitalPetition", "registryEvidence"], fame: 2, clues: 1 }],
      ["陪官吏到临时住处现场清点", "清点结果纠正了几处重复登记，安置流程开始推进。", { flags: ["capitalRelief"], pressure: -1, trust: { ying: [3, 4] } }],
      ["把空缺条款公示，邀请各方派人监督", "流程慢了些，但后续争议有了公开的凭据。", { flags: ["capitalPetition"], fame: 1, xp: 7 }]
    ] },
    { id: "capitalName", title: "名册里被划掉的名字", text: "一个年迈抄录吏私下找到你，说伤亡册里有个名字被朱笔划去。沈惊鸿正在复核同一份伤亡册；那人其实活着，却因身份登记错误领不到药和住处。", echo: { flag: "capitalPetition", text: "公开监督的约定让抄录吏敢留下证词。" }, choices: [
      ["请本人核验身份，再把更正过程留档", "名字恢复了，其他登记错误也开始浮出水面。", { flags: ["registryEvidence", "capitalRelief"], clues: 1, fame: 2 }],
      ["先带他去领药，再陪他补办文牒", "病人及时得到照料，文牒问题也有了经办人。", { flags: ["capitalRelief", "clinicStock"], hp: 5, fame: 1 }],
      ["把线索交给沈惊鸿，由巡灵司保护证人", "证人暂时安全，案卷将由熟悉程序的人继续调查。", { flags: ["registryEvidence"], clues: 1, trust: { ying: [3, 6] } }]
    ] }
  ],
  "霜河关": [
    { id: "northBell", title: "提前半刻响起的烽钟", text: "霜河关的烽钟提前半刻响起，守军误以为妖潮已经越过冰线。贺鸣沙的镖队正护着一车粮食走在关外，城门一开一合都可能误伤他们。", echo: { flag: "northRoute", text: "你熟悉的冰线小路能避开最薄的浮冰。" }, choices: [
      ["亲自沿侧路找到镖队，传递真实信号", "镖队安全入关，烽钟误报的源头也被查明。", { flags: ["northRoute", "northSignal"], fame: 2, hp: -4, trust: { he: [3, 5] } }],
      ["让守军守住城门，先以旗语确认方位", "没有仓促出兵，城门和粮队都保住了。", { flags: ["northSupply"], pressure: -1, stones: 3 }],
      ["检查烽台旧齿轮与夜班记录", "你发现有人为掩盖失职动过报时机关。", { flags: ["northSignal"], clues: 1, fame: 1, xp: 7 }]
    ] },
    { id: "northWatch", title: "风雪里的换岗名单", text: "守城换岗名单上少了两名夜哨，营帐里却有他们送回来的冻伤药。贺鸣沙负责核查此事；有人说夜哨擅离职守，也有人说他们是在冰河边救了一队村民。", echo: { flag: "northSupply", text: "你此前安排的补给让值夜的人有了热药和干衣。" }, choices: [
      ["先找回两名夜哨，核实他们救人的经过", "事实被查明，守军接受处分也承认了救援功劳。", { flags: ["northRoute", "northSupply"], fame: 2, trust: { he: [2, 4] } }],
      ["替他们补上夜班，再让队长复核名单", "关防没有空档，后续调查留在军中处理。", { flags: ["northSupply"], hp: -2, xp: 8 }],
      ["先把村民送进关内，按证词重排岗哨", "村民获救，值守制度也少了一处只看名册的漏洞。", { flags: ["northAid"], fame: 2, pressure: -1 }]
    ] }
  ],
  "百药泽": [
    { id: "marshLotus", title: "夜里不开的泽心莲", text: "泽心莲连续三夜没有开放，附近水渠的灵力正在衰退。桑苓和泽民怀疑有人挖走莲根，外来的药师却认为是水位变化造成的。", echo: { flag: "waterPact", text: "先前约定的共享水样避免双方先动手。" }, choices: [
      ["把水样、根须和潮位记录放在一起对照", "你发现上游有一段暗渠被泥沙堵住。", { flags: ["marshCare", "waterPact"], clues: 1, herbs: 1, trust: { ling: [3, 5] } }],
      ["和泽民轮流清渠，暂不采莲", "水流恢复了一些，双方都守住了药田边界。", { flags: ["waterPact", "marshCare"], fame: 2, pressure: -1 }],
      ["在外围留样，追查被带走的莲根", "你循着泥痕找到一处弃置种荚，像是有人误挖后丢下。", { flags: ["seedTrail"], clues: 1, xp: 8 }]
    ] },
    { id: "marshCouncil", title: "药种交换会上的空席", text: "泽民与山下村落约好交换药种，负责送种的老人却没有赴约。桑苓带着会盟的药种在场，桌上留下的药袋有水渍，双方都担心对方临时反悔。", echo: { flag: "herbAccord", text: "你留下的共管药册为交换会提供了清楚的底账。" }, choices: [
      ["沿水路找老人，确认他是否平安", "老人只是船只搁浅，交换没有变成一场误会。", { flags: ["marshPact", "waterPact"], fame: 2, hp: -2 }],
      ["把双方带来的种子分成试种与留种两份", "交换继续进行，也为下一季保留了种源。", { flags: ["marshPact", "marshCare"], herbs: 2, trust: { ling: [4, 4] } }],
      ["请双方各说出最担心的一件事，再写下缓冲办法", "约定里加入了迟到、歉收和退出条件。", { flags: ["marshPact"], fame: 1, clues: 1, xp: 6 }]
    ] }
  ],
  "千岛渡": [
    { id: "islandBoat", title: "没有按潮时回港的药船", text: "一艘药船超过潮时仍未回港，船上载着岛村急需的退潮丹。小满记得船长改过航线，但港口新潮表没有写明原因。", echo: { flag: "islandChart", text: "更新过的海图避开了两处新生暗礁。" }, choices: [
      ["按旧航线出发，同时带上救援绳和信号符", "你找到搁浅药船并带回船员，药箱只损失了一部分。", { flags: ["islandRescue", "islandChart"], hp: -5, fame: 2, trust: { man: [3, 5] } }],
      ["先核对潮汐、风向和船长最后的传讯", "你推算出一条安全绕行路线，港口随后派船接应。", { flags: ["islandChart", "islandBeacon"], clues: 1, xp: 8 }],
      ["把船上药先分给等待的岛民，另派快船搜救", "岛民得到急药，搜救队也不会为了货物冒险。", { flags: ["islandRescue"], fame: 2, pressure: -1 }]
    ] },
    { id: "islandBeacon", title: "灯塔发出三短一长", text: "外岛灯塔按约定发出三短一长的信号，港口却查不到对应船只。小满认出那是旧式求援信号，但有人担心海兽正在模仿灯火。", echo: { flag: "islandRescue", text: "救回的船员认出了信号来自一条废弃礁道。" }, choices: [
      ["沿礁道布设浮标，带小船近距离查看", "你找到受损灯塔和一名守塔人，危险海段被标记出来。", { flags: ["islandBeacon", "islandChart"], hp: -4, clues: 1, fame: 2 }],
      ["在港口同步点亮回信，确认对方能否回应", "守塔人收到回信并撑到救援，航线暂时没有冒进。", { flags: ["islandRescue", "islandBeacon"], trust: { man: [3, 4] }, pressure: -1 }],
      ["向渔户询问旧礁道的传闻与季节变化", "老人指出海兽只在灵潮退去时经过那片礁群。", { flags: ["islandChart"], clues: 1, xp: 7, stones: 3 }]
    ] }
  ]
};
const LOCATION_PEOPLE = {
  nightFerry: ["yun"], bambooBoundary: ["ling"], mistSpring: ["yun"], herbDispute: ["ling"],
  riftEcho: ["ying"], capitalName: ["ying"], northBell: ["he"], northWatch: ["he"],
  marshLotus: ["ling"], marshCouncil: ["ling"], islandBoat: ["man"], islandBeacon: ["man"]
};
const KEY = "zhaoye-game-save-v1";
const ENDING_KEY = "zhaoye-endings-v1";
const $ = id => document.getElementById(id);

function freshState() {
  return {
    version: 4, day: 1, turn: 0, phase: "event", lastChoice: null, location: "苍梧渡", realm: 0, xp: 0, hp: 100, maxHp: 100,
    stones: 12, fame: 0, clues: 0, faction: "未入门", path: "尚未选择修行道路", pressure: 1, tide: 1,
    affection: Object.fromEntries(Object.keys(NPCS).map(id => [id, 0])),
    trust: Object.fromEntries(Object.keys(NPCS).map(id => [id, 0])),
    met: {}, friends: [], followers: [], party: [], partner: null, awayUntil: {},
    school: { id: null, mentor: null, mentorBond: 0, peerBonds: {}, metPeers: [], cycle: 0, favor: 0, introduced: false }, localSeen: {},
    inventory: { herbs: 0, talismans: 0 }, beastBond: 0, beastTamed: false,
    flags: { recruited: false, layLow: false, climaxResolved: false, pledgeHelped: false, savedYun: false, registryEvidence: false, waterPact: false, northRoute: false, islandChart: false, dead: false },
    history: [], recent: [], eventId: "arrival", eventData: {}, pendingEnding: null, lastPartnerEvent: 0, lastCrisis: null, deathCause: null
  };
}

let state = loadState() || freshState();
let toastTimer;
let dialogPerson = null;

function safeNumber(value, fallback, min, max) {
  const number = Number(value);
  return Number.isFinite(number) ? Math.max(min, Math.min(max, number)) : fallback;
}
function isRecord(value) { return value !== null && typeof value === "object" && !Array.isArray(value); }
function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (!isRecord(saved) || ![1, 2, 3, 4].includes(saved.version) || !Number.isFinite(saved.day)) return null;
    const clean = { ...freshState(), ...saved };
    clean.version = 4;
    clean.phase = clean.phase === "action" ? "action" : "event";
    clean.turn = Math.floor(safeNumber(clean.turn, 0, 0, 999999));
    clean.pressure = Math.floor(safeNumber(clean.pressure, 1, 0, 6));
    clean.tide = Math.floor(safeNumber(clean.tide, 1, 1, 5));
    clean.lastPartnerEvent = Math.floor(safeNumber(clean.lastPartnerEvent, 0, 0, 99999));
    clean.faction = typeof clean.faction === "string" ? clean.faction.slice(0, 80) : "未入门";
    clean.path = typeof clean.path === "string" ? clean.path.slice(0, 80) : "尚未选择修行道路";
    const validLocations = new Set([...PLACES.map(place => place.id), ...SCHOOL_LIFE.map(school => schoolBaseLocation(school.id))]);
    clean.location = validLocations.has(clean.location) ? clean.location : "苍梧渡";
    clean.lastChoice = clean.lastChoice && typeof clean.lastChoice === "object" ? {
      label: String(clean.lastChoice.label || "事件已处理"),
      hint: String(clean.lastChoice.hint || "")
    } : null;
    clean.day = Math.floor(safeNumber(clean.day, 1, 1, 99999));
    clean.realm = Math.floor(safeNumber(clean.realm, 0, 0, REALMS.length - 1));
    clean.xp = safeNumber(clean.xp, 0, 0, 100);
    clean.maxHp = safeNumber(clean.maxHp, 100, 1, 9999);
    clean.hp = safeNumber(clean.hp, 100, 1, clean.maxHp);
    clean.stones = safeNumber(clean.stones, 0, 0, 999999);
    clean.fame = safeNumber(clean.fame, 0, -999, 9999);
    clean.clues = safeNumber(clean.clues, 0, 0, 999);
    clean.affection = { ...freshState().affection, ...(clean.affection || {}) };
    clean.trust = { ...freshState().trust, ...(clean.trust || {}) };
    for (const id of Object.keys(NPCS)) {
      clean.affection[id] = safeNumber(clean.affection[id], 0, 0, 100);
      clean.trust[id] = safeNumber(clean.trust[id], 0, 0, 100);
    }
    clean.history = Array.isArray(clean.history) ? clean.history.slice(-8) : [];
    clean.recent = Array.isArray(clean.recent) ? clean.recent.slice(-3) : [];
    clean.friends = Array.isArray(clean.friends) ? [...new Set(clean.friends.filter(id => ["song", "he"].includes(id)))] : [];
    clean.followers = Array.isArray(clean.followers) ? [...new Set(clean.followers.filter(id => ["shi", "man"].includes(id)))] : [];
    clean.inventory = { ...freshState().inventory, ...(clean.inventory || {}) };
    clean.inventory.herbs = Math.floor(safeNumber(clean.inventory.herbs, 0, 0, 999));
    clean.inventory.talismans = Math.floor(safeNumber(clean.inventory.talismans, 0, 0, 99));
    clean.beastBond = Math.floor(safeNumber(clean.beastBond, 0, 0, 3));
    clean.beastTamed = !!clean.beastTamed;
    const savedAwayUntil = isRecord(clean.awayUntil) ? clean.awayUntil : {};
    clean.awayUntil = Object.fromEntries([...Object.keys(NPCS), "beast"].map(id => [id, Math.floor(safeNumber(savedAwayUntil[id], 0, 0, 99999))]));
    clean.partner = ROMANCES.includes(clean.partner) ? clean.partner : null;
    const savedMet = isRecord(clean.met) ? clean.met : {};
    clean.met = Object.fromEntries(Object.keys(NPCS).map(id => [id, savedMet[id] === true]));
    clean.party = Array.isArray(clean.party) ? [...new Set(clean.party.filter(id => [...clean.friends, ...clean.followers, ...(clean.partner ? [clean.partner] : []), ...(clean.beastTamed ? ["beast"] : [])].includes(id)))].slice(0, 3) : [];
    clean.eventId = eventExists(clean.eventId) ? clean.eventId : "arrival";
    clean.eventData = isRecord(clean.eventData) ? { ...clean.eventData } : {};
    if (Object.prototype.hasOwnProperty.call(clean.eventData, "person") && !(typeof clean.eventData.person === "string" && Object.prototype.hasOwnProperty.call(NPCS, clean.eventData.person))) delete clean.eventData.person;
    if (Object.prototype.hasOwnProperty.call(clean.eventData, "enemy")) {
      if (!isRecord(clean.eventData.enemy)) delete clean.eventData.enemy;
      else clean.eventData.enemy = {
        name: typeof clean.eventData.enemy.name === "string" ? clean.eventData.enemy.name.slice(0, 48) : "拦路劫修",
        power: Math.floor(safeNumber(clean.eventData.enemy.power, 5, 0, 999)),
        reward: Math.floor(safeNumber(clean.eventData.enemy.reward, 4, 0, 999))
      };
    }
    if (!["raid", "calamity", "aftershock"].includes(clean.eventData.kind)) delete clean.eventData.kind;
    clean.eventData.rolled = clean.eventData.rolled === true;
    const savedFlags = isRecord(clean.flags) ? clean.flags : {};
    clean.flags = { ...freshState().flags, ...savedFlags };
    for (const [key, value] of Object.entries(clean.flags)) clean.flags[key] = value === true;
    clean.lastCrisis = clean.lastCrisis && typeof clean.lastCrisis.title === "string" && typeof clean.lastCrisis.outcome === "string" ? clean.lastCrisis : null;
    if (clean.lastCrisis) clean.lastCrisis.day = Math.floor(safeNumber(clean.lastCrisis.day, clean.day, 1, 99999));
    clean.deathCause = typeof clean.deathCause === "string" ? clean.deathCause : null;
    const savedLocalSeen = isRecord(clean.localSeen) ? clean.localSeen : {};
    clean.localSeen = Object.fromEntries(Object.values(LOCATION_STORIES).flat().map(story => [story.id, Math.floor(safeNumber(savedLocalSeen[story.id], 0, 0, 99999))]));
    clean.school = { ...freshState().school, ...(isRecord(clean.school) ? clean.school : {}) };
    clean.school.id = SCHOOL_LIFE.some(school => school.id === clean.school.id) ? clean.school.id : currentSchoolId(clean.faction);
    clean.school.mentor = Number.isInteger(clean.school.mentor) && SCHOOL_LIFE.find(school => school.id === clean.school.id)?.mentors[clean.school.mentor] ? clean.school.mentor : null;
    clean.school.mentorBond = Math.floor(safeNumber(clean.school.mentorBond, 0, 0, 100));
    clean.school.favor = Math.floor(safeNumber(clean.school.favor, 0, 0, 100));
    clean.school.cycle = Math.floor(safeNumber(clean.school.cycle, 0, 0, 99999));
    clean.school.peerBonds = isRecord(clean.school.peerBonds) ? clean.school.peerBonds : {};
    for (const school of SCHOOL_LIFE) for (const peer of school.peers) clean.school.peerBonds[peer.id] = Math.floor(safeNumber(clean.school.peerBonds[peer.id], 0, 0, 100));
    const currentSchool = SCHOOL_LIFE.find(school => school.id === clean.school.id);
    const peerIds = currentSchool?.peers.map(peer => peer.id) || [];
    clean.school.metPeers = Array.isArray(clean.school.metPeers) ? [...new Set(clean.school.metPeers.filter(id => peerIds.includes(id)))] : [];
    clean.school.introduced = clean.school.introduced === true && !!clean.school.id && clean.school.mentor !== null;
    if (clean.eventId === "sectLife" && currentSchool && clean.school.cycle > 0) {
      const currentPeer = currentSchool.peers[(clean.school.cycle - 1) % currentSchool.peers.length];
      if (!clean.school.metPeers.includes(currentPeer.id)) clean.school.metPeers.push(currentPeer.id);
      clean.school.peerBonds[currentPeer.id] = Math.max(10, clean.school.peerBonds[currentPeer.id] || 0);
    }
    clean.pendingEnding = isRecord(clean.pendingEnding) && typeof clean.pendingEnding.title === "string" && typeof clean.pendingEnding.body === "string"
      ? { title: clean.pendingEnding.title.slice(0, 120), body: clean.pendingEnding.body.slice(0, 1200) }
      : null;
    if (saved.version < 3) {
      const factionIntroductions = {
        yun: [5, 8, "丹谷"], yue: [8, 8, "归鹤"], luo: [10, 8, "赤烬"],
        qiao: [7, 9, "商盟"], ying: [12, 12, "巡灵司"], ling: [12, 10, "百族会盟"]
      };
      for (const [id, [affection, trust, faction]] of Object.entries(factionIntroductions)) {
        if (clean.met[id] && clean.partner !== id && clean.affection[id] === affection && clean.trust[id] === trust && clean.faction.includes(faction)) {
          clean.met[id] = false;
          clean.affection[id] = 0;
          clean.trust[id] = 0;
        }
      }
    }
    return clean;
  } catch { return null; }
}
function saveState(manual = false) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
    if (manual) toast("进度已保存在这台设备的浏览器中。");
  } catch { if (manual) toast("浏览器暂时无法保存进度。"); }
}
function eventExists(id) { return ["arrival", "worldIntro", "recruitment", "market", "cultivation", "rumor", "world", "forest", "riftScout", "riftCall", "friend", "follower", "combat", "meet", "partner", "breakthrough", "layLow", "climax", "ending", "recovery", "commission", "craft", "regional", "beast", "tide", "trial", "local", "mentor", "sectLife", "catastrophe", "death"].includes(id); }
function clampRelation(value) { return Math.max(0, Math.min(100, value)); }
function currentSchoolId(faction = state?.faction || "") { return SCHOOL_LIFE.find(school => faction.includes(school.match))?.id || null; }
function schoolBaseLocation(id = state.school.id) {
  return { sword: "归鹤剑宗", dan: "松风丹谷", ember: "赤烬教驻地", merchant: "万方商盟分号", office: "云京驿城", alliance: "百药泽" }[id] || "宗门驻地";
}
function changeRelation(id, affection = 0, trust = 0) {
  state.affection[id] = clampRelation((state.affection[id] || 0) + affection);
  state.trust[id] = clampRelation((state.trust[id] || 0) + trust);
}
function changePeerBond(id, amount) {
  state.school.peerBonds[id] = clampRelation((state.school.peerBonds[id] || 0) + amount);
}
function applyEffect(effect = {}) {
  state.stones = Math.max(0, state.stones + (effect.stones || 0));
  state.fame += effect.fame || 0;
  state.xp = Math.max(0, Math.min(100, state.xp + (effect.xp || 0)));
  state.hp = Math.max(1, Math.min(state.maxHp, state.hp + (effect.hp || 0)));
  state.inventory.herbs = Math.max(0, Math.min(99, state.inventory.herbs + (effect.herbs || 0)));
  state.inventory.talismans = Math.max(0, Math.min(99, state.inventory.talismans + (effect.talismans || 0)));
  state.pressure = Math.max(0, Math.min(6, state.pressure + (effect.pressure || 0)));
  state.school.mentorBond = clampRelation(state.school.mentorBond + (effect.mentorBond || 0));
  state.school.favor = clampRelation(state.school.favor + (effect.schoolFavor || 0));
  if (effect.clues) addClue(effect.clues);
  for (const flag of effect.flags || []) state.flags[flag] = true;
  for (const id of effect.introduce || []) markMet(id);
  if (effect.relation) changeRelation(...effect.relation);
  for (const [id, [affection, trust]] of Object.entries(effect.trust || {})) { changeRelation(id, affection, trust); markMet(id); }
}
function localSupportCount() {
  const regions = [
    ["portTrust", "dockAid", "dockRescue"], ["forestPact", "forestAid"], ["clinicBook", "clinicStock", "herbAccord"],
    ["riftEvac", "riftRescue", "riftRecord", "riftWard"], ["registryEvidence", "capitalPetition", "capitalRelief"],
    ["northRoute", "northSupply", "northAid"], ["waterPact", "marshPact", "marshCare"], ["islandRescue", "islandChart", "islandBeacon"]
  ];
  return regions.filter(flags => flags.some(flag => state.flags[flag])).length + (state.flags.crisisAid ? 1 : 0);
}
function schoolSupportCount() {
  if (!state.school.introduced) return 0;
  const school = SCHOOL_LIFE.find(item => item.id === state.school.id);
  return (state.school.mentorBond >= 45 ? 1 : 0) + (school?.peers.filter(peer => state.school.metPeers.includes(peer.id) && (state.school.peerBonds[peer.id] || 0) >= 35).length || 0);
}
function markMet(id) { state.met[id] = true; }
function addClue(amount = 1) { state.clues = Math.min(9, state.clues + amount); }
function addPartyMember(id, group = "friend") {
  const list = group === "follower" ? state.followers : state.friends;
  if (!list.includes(id)) list.push(id);
  if (!state.party.includes(id) && state.party.length < 3) state.party.push(id);
}
function setFaction(faction, path) {
  state.faction = faction;
  state.path = path;
  state.flags.recruited = true;
  const id = currentSchoolId(faction);
  state.school = { id, mentor: null, mentorBond: 0, peerBonds: {}, metPeers: [], cycle: 0, favor: 0, introduced: false };
  if (faction.includes("商盟")) state.stones += 5;
  if (faction.includes("百族会盟")) state.beastBond = Math.max(1, state.beastBond);
}
function passDays(days = 1) {
  state.turn += 1;
  for (let i = 0; i < days; i++) {
    state.day += 1;
    for (const id of Object.keys(NPCS)) {
      if (state.met[id] && state.day % 4 === 0 && id === state.partner) state.trust[id] = clampRelation(state.trust[id] + 1);
    }
    if (state.day % 5 === 0) state.pressure = Math.min(6, state.pressure + 1);
    if (state.day % 9 === 0) state.tide = Math.min(5, state.tide + 1);
    if (state.day % 18 === 0 && state.pressure > 1) state.pressure -= 1;
  }
  state.hp = Math.max(1, state.hp);
}
function addHistory(text) {
  state.history.unshift(`第 ${state.day} 日 · ${text}`);
  state.history = state.history.slice(0, 8);
}
function recordEnding(title) {
  try {
    const endings = JSON.parse(localStorage.getItem(ENDING_KEY) || "[]");
    if (!endings.includes(title)) endings.push(title);
    localStorage.setItem(ENDING_KEY, JSON.stringify(endings));
  } catch { /* Browser storage may be unavailable in private browsing. */ }
}
function recordCrisis(title, outcome) { state.lastCrisis = { title, outcome, day: state.day }; }
function killPlayer(cause) {
  if (state.flags.dead) return;
  state.flags.dead = true;
  state.deathCause = cause;
  const title = `此生骤止：${cause}`;
  recordCrisis("高阶修士斗法余波", `你在${state.location}被交战余波误杀，尚浅的修为没能护住性命。`);
  recordEnding(title);
  addHistory(`意外殒命：${cause}`);
}
function toast(message) {
  const el = $("toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2600);
}

function eventArrival() {
  return {
    type: "异世来客", title: "那道裂缝落在河滩", place: "苍梧渡外的河滩",
    text: "你原本生活在一个没有灵气的现代世界。昨夜下班归家，暴雨冲开了河堤边的泥土，露出半面青铜古镜。你伸手触碰时，镜中映出一道横贯夜空的裂谷；雷光落下，镜面碎裂，青光把你连同碎片一并拖了进去。\n\n再睁眼时，你躺在照夜界苍梧渡外的河滩，衣物浸透，手机黑屏，掌中只剩一块镜缘碎片。你没有修为、没有当地身份，也不知道还能不能回家。河边一名受伤的女修正伸手去够滚远的药箱，远处的天隙仍泛着青光。",
    tags: ["来自无灵世界的穿越者", "凡人 · 无身份文牒", "镜片纹路与天隙相似"], choices: [
      choice("先把她从水边扶起来，再去捞药箱", "她醒来后向你道谢，留下了自己的名字；镜片上的纹路也引起她注意。", () => { markMet("yun"); changeRelation("yun", 12, 10); state.flags.savedYun = true; state.flags.originFragment = true; addClue(); state.hp -= 4; }, "worldIntro"),
      choice("先检查河面的异光和手里的镜片", "镜片裂纹与天隙的亮纹短暂重合，你记住了那道阵纹，却被灵潮震得气血翻涌。", () => { state.flags.originFragment = true; state.flags.crossingClue = true; addClue(); state.hp -= 9; state.fame += 1; }, "worldIntro"),
      choice("暂时躲进渡口旧亭，等天亮再说", "你避开最初的混乱，在亭中找到一袋散落的灵石，也听见坊市里的人谈论天隙。", () => { state.flags.originFragment = true; state.hp = Math.min(state.maxHp, state.hp + 18); state.stones += 3; state.flags.layLow = true; }, "worldIntro")
    ]
  };
}
function eventWorldIntro() {
  const guide = state.flags.savedYun ? "乔云舒替你包扎时告诉你" : "渡口老船夫把你领到屋檐下后告诉你";
  return {
    type: "初识照夜界", title: "先弄清自己身在何处", place: "苍梧渡坊市",
    text: `${guide}：这里是照夜界，灵潮纪三一七年。八百年前的“断天之变”令古老灵路崩塌，天隙成了横贯边境的古阵裂谷；如今灵潮回升，各地灵脉和遗迹重新显现。此界没有一个势力能管尽天下：太微道盟诸宗、大晟巡灵司、万方商盟、百族会盟与赤烬教都在边境活动，各有规矩与打算。\n\n你目前仍是凡人，来历无法登记，也没有宗门凭信。奇怪的是，你能听懂当地人的话。镜片的纹路与你昨夜见到的天隙相近，但没人能解释它为何把你带来。眼下你至少有一夜遮雨的地方；往后要靠自己找身份、活计和修行的路。`,
    tags: ["世界观会随旅途逐步展开", "你的来历仍是未解线索"], choices: [
      choice("先问清天隙与灵潮的关系", "对方说灵潮会带来机缘，也会让旧阵失控；没人知道这次会持续多久。", () => { if (!state.flags.crossingClue) addClue(); state.flags.learnedRift = true; if (state.met.yun) changeRelation("yun", 1, 2); }, "recruitment"),
      choice("先问各方势力为何聚在渡口", "你弄清了当地主要势力的来历，也知道每份庇护都伴随责任。", () => { state.flags.learnedFactions = true; if (state.met.yun) changeRelation("yun", 1, 2); }, "recruitment"),
      choice("先问一个没有身份的凡人该怎么活下去", "对方建议你先找能遮风避雨的落脚处，再决定是否把命运交给某个势力。", () => { state.flags.learnedSurvival = true; if (state.met.yun) changeRelation("yun", 2, 2); }, "recruitment")
    ]
  };
}
function eventRecruitment() {
  return {
    type: "道路抉择", title: "渡口的几封引荐信", place: "苍梧渡坊市",
    text: `天亮后，昨夜的异光已经传遍渡口。几股势力的人为调查天隙、招募行走和补充边境人手来到坊市。${state.flags.originFragment ? "你掌中的青铜镜片仍带着微温，裂纹与远处天隙的形状隐约相合。" : "他们都在留意昨夜天隙的异动。"}归鹤剑宗正在招收外门弟子，松风丹谷愿意收下懂得照料伤者的人；赤烬教的行走递来刻着誓纹的木牌，万方商盟、大晟巡灵司与百族会盟也各自递来引荐。你没有资历，他们不会立刻委以重任；眼下拿到的只是入门考校或随队试用的机会。\n\n这些道路都伴随着责任：宗门要你守门规，商盟看重契约，巡灵司要求担责，会盟讲究互惠，赤烬教以誓约约束成员。你不必马上相信任何一方，也可以先留在渡口，靠自己的办法活下去。`,
    tags: ["加入势力会打开专属机缘", "散修也有自己的道路"], choices: [
      choice("投归鹤剑宗，先学会握剑", "得到宗门庇护，也接下寻找失踪剑修的委托。", () => setFaction("太微道盟 · 归鹤剑宗", "剑修"), "mentor"),
      choice("入松风丹谷，从药理与调息学起", "你获得丹谷外门身份，能使用一处静室。", () => setFaction("太微道盟 · 松风丹谷", "丹修"), "mentor"),
      choice("接受赤烬教的木牌，试着理解誓约之道", "你加入赤烬教的行走队伍；誓约带来保护，也带来责任。", () => setFaction("赤烬教 · 誓火司", "誓火魔道"), "mentor"),
      choice("加入万方商盟，先把路走熟", "你拿到行商凭信与一小笔路费，开始经营自己的名声。", () => setFaction("万方商盟 · 沧河分号", "游方客"), "mentor"),
      choice("接受大晟巡灵司的案牒，调查灵潮异案", "你取得行走文牒，可以查阅州郡异案；也要对卷宗里的每个名字负责。", () => setFaction("大晟皇朝 · 巡灵司", "符律术修"), "mentor"),
      choice("随百族会盟的使团南下，学习与山泽共处", "你成为会盟的外行使者，族地愿意与你交换药材与灵兽消息。", () => setFaction("百族会盟 · 青泽使团", "御兽行者"), "mentor"),
      choice("暂不入门，租一间旧屋慢慢来", "你保留自由身，接零工、养伤、过自己的日子。", () => { state.faction = "散修 · 自由身"; state.path = "随缘修行 / 可选择躺平"; state.flags.recruited = true; state.flags.layLow = true; state.stones += 4; })
    ]
  };
}
function eventCommission() {
  const client = {
    "苍梧渡": "渡口坊市的商队", "青篁林": "寻找旧路标的地图客", "雾岭药谷": "急需药材的义诊医馆", "天隙外沿": "勘验古阵的修士",
    "云京驿城": "等待赈粮的州郡驿站", "霜河关": "北境巡防的镖队", "百药泽": "守护水脉的泽民", "千岛渡": "寻找药船的岛民"
  }[state.location] || "驻地执事";
  return {
    type: "委托与营生", title: "今日的委托簿", place: state.location,
    text: `${client}在告示板上留了几项活计。报酬不算丰厚，但能换来灵材、人情和一条继续走下去的路。你可以按自己的本事挑一件。`,
    tags: [state.faction, "委托可以反复承接", `灵材 ${state.inventory.herbs} 份`], choices: [
      choice("接下采集与补给委托", "带回灵材，也能积累野外经验。", () => { state.inventory.herbs = Math.min(99, state.inventory.herbs + (["百药泽", "雾岭药谷"].includes(state.location) ? 2 : 1)); state.xp = Math.min(100, state.xp + 10); if (state.location === "百药泽") { state.flags.waterPact = true; if (state.met.ling) changeRelation("ling", 2, 3); } }, null, 2),
      choice("护送一段商路或渡口航线", "按路程拿到酬劳；同行者会帮你照看队伍。", () => { state.stones += 7 + (state.faction.includes("商盟") ? 3 : 0); state.fame += 2; if (state.party.length && state.party[0] !== "beast") state.trust[state.party[0]] = clampRelation((state.trust[state.party[0]] || 0) + 2); if (state.location === "千岛渡") state.flags.islandChart = true; }, null, 2),
      choice("调查一件与灵潮有关的委托", "得到一条线索，当地人也会记下你的处理方式。", () => { addClue(); state.fame += 1; if (state.location === "云京驿城") state.flags.registryEvidence = true; if (state.location === "霜河关") state.flags.northRoute = true; if (state.location === "天隙外沿") state.pressure = Math.min(6, state.pressure + 1); }, null, 2)
    ]
  };
}
function eventCraft() {
  const pillCost = state.path.includes("丹修") ? 1 : 2;
  return {
    type: "行囊与技艺", title: "整理灵材，做些实用之物", place: state.location,
    text: `你在旅店、驻地或临时营火旁整理行囊。手上有灵材 ${state.inventory.herbs} 份、护身符 ${state.inventory.talismans} 张。${pillCost === 1 ? "丹谷所学让你少耗一份药材。" : "灵材可以制药、画符，也可以直接出售。"}`,
    tags: ["灵材可从委托与野外采集获得", "护身符可在战斗中主动使用"], choices: [
      choice(`炼一份回春散（消耗 ${pillCost} 份灵材）`, "恢复气血；丹修所需药材更少。", () => { state.inventory.herbs -= pillCost; state.hp = Math.min(state.maxHp, state.hp + 38); }, null, 1, state.inventory.herbs < pillCost, "灵材不足"),
      choice("画一张护身灵符（消耗一份灵材与三枚灵石）", "下一场战斗可选择使用，提升胜算并减轻伤势。", () => { state.inventory.herbs -= 1; state.stones -= 3; state.inventory.talismans = Math.min(9, state.inventory.talismans + 1); }, null, 1, state.inventory.herbs < 1 || state.stones < 3 || state.inventory.talismans >= 9, "灵材或灵石不足，或护身符已满"),
      choice("把一份灵材卖给当地药铺", "用现成的材料换一点灵石。", () => { state.inventory.herbs -= 1; state.stones += state.faction.includes("商盟") ? 7 : 5; }, null, 1, state.inventory.herbs < 1, "没有可出售的灵材")
    ]
  };
}
function eventRegional() {
  const stories = {
    "云京驿城": {
      title: "被涂改的赈灾名册", text: "驿城里，一份记录灵潮伤亡的名册少了几个村子的名字。巡灵司说是抄录出错，等着领赈粮的村民却已经在城门外排了一夜。", tags: ["皇朝州郡", state.flags.registryEvidence ? "你手上已有一份副本" : "有人不想留下证据"], choices: [
        choice("抄下原册并请村民逐一核对", "完整的证词让后续追查有了依据。", () => { state.flags.registryEvidence = true; addClue(); state.fame += 2; if (state.met.ying) changeRelation("ying", 4, 6); }),
        choice("先垫付三枚灵石，让村民领到口粮", "你解决了眼前的饥饿，也让州郡欠下一个人情。", () => { state.stones -= 3; state.fame += 3; state.pressure = Math.max(0, state.pressure - 1); if (state.met.ying) changeRelation("ying", 3, 3); }, null, 1, state.stones < 3),
        choice("把名册交给愿意接案的人，不公开姓名", "你保护了证人，但调查暂时留在暗处。", () => { state.flags.registryEvidence = true; if (state.met.ying) changeRelation("ying", 0, 5); state.fame += 1; })
      ]
    },
    "霜河关": {
      title: "冰线外的求援烽火", text: "霜河冰线突然裂开，烽火指向一支没有按时回关的商队。关城守军缺人，镖队也不愿把伤员留在风雪里。", tags: ["北境边塞", state.flags.northRoute ? "你已认出这条商道" : "妖潮正在逼近"], choices: [
        choice("和镖队出关寻找失联者", "你冒险走了一趟冰线，找到幸存者与一段妖兽迁徙的痕迹。", () => { state.hp -= 8; state.xp = Math.min(100, state.xp + 16); state.flags.northRoute = true; addClue(); state.fame += 2; if (state.met.he) changeRelation("he", 4, 5); }, null, 2),
        choice("留下加固关门与烽台", "没有追上商队，但关城撑过了一轮冲击。", () => { state.stones += 4; state.fame += 2; state.pressure = Math.max(0, state.pressure - 1); if (state.met.he) changeRelation("he", 3, 4); }, null, 2),
        choice("记录兽群的方向，先送伤员回关", "你避开正面冲突，得到了可靠的北境路况。", () => { state.hp = Math.min(state.maxHp, state.hp + 5); state.flags.northRoute = true; state.xp = Math.min(100, state.xp + 9); }, null, 1)
      ]
    },
    "百药泽": {
      title: "水脉边的陌生药种", text: "泽地里几亩药田忽然枯黄，水渠却被新生的灵藤堵住。当地人怀疑外来修士取走了泽心种，一名青泽灵使正试着让双方坐下来谈。", tags: ["百族会盟", state.flags.waterPact ? "你曾帮忙修复水脉" : "交换比争夺更难"], choices: [
        choice("和泽民一起清理水渠，不追问谁对谁错", "药田重新见水，双方愿意继续交换种子。", () => { state.inventory.herbs = Math.min(99, state.inventory.herbs + 2); state.flags.waterPact = true; state.fame += 2; if (state.met.ling) changeRelation("ling", 5, 7); }, null, 2),
        choice("沿着盗取痕迹追查泽心种", "你找到了被遗弃的种荚，也发现它正在吸走附近灵气。", () => { addClue(); state.xp = Math.min(100, state.xp + 14); state.flags.waterPact = true; if (state.met.ling) changeRelation("ling", 2, 5); }, null, 2),
        choice("用灵石换一份当地药种和水路图", "你没有介入争论，但拿到了能继续远行的物资。", () => { state.stones -= 3; state.inventory.herbs = Math.min(99, state.inventory.herbs + 1); state.flags.waterPact = true; }, null, 1, state.stones < 3)
      ]
    },
    "千岛渡": {
      title: "雾潮中的空船", text: "一艘没有船主的药船在雾潮里漂回港口，舱中药箱还在，航海图却被撕走一角。岛民担心海兽只是暂时离开。", tags: ["东海航路", state.flags.islandChart ? "你有一份更新过的海图" : "潮汐正在改变"], choices: [
        choice("把药箱送到岛村，并沿途标记暗礁", "岛民收到药材，你也绘出了一段安全航线。", () => { state.fame += 2; state.hp = Math.min(state.maxHp, state.hp + 8); state.flags.islandChart = true; if (state.met.man) changeRelation("man", 4, 5); }, null, 2),
        choice("检查空船留下的阵纹与爪痕", "你发现海兽追逐的并不是船，而是舱底的一枚古旧信标。", () => { addClue(); state.inventory.talismans = Math.min(9, state.inventory.talismans + 1); state.flags.islandChart = true; }, null, 2),
        choice("把船和药材交给港口管事，领取报酬", "你按规矩交接了货物，拿到一笔酬谢。", () => { state.stones += 8; state.fame += 1; state.flags.islandChart = true; }, null, 1)
      ]
    }
  };
  const story = stories[state.location];
  if (!story) return eventMarket();
  return { type: "山河奇遇", title: story.title, place: state.location, text: story.text, tags: story.tags, choices: story.choices };
}
function eventLocal(data = {}) {
  const stories = LOCATION_STORIES[state.location] || [];
  if (!stories.length) return eventRegional();
  let story = stories.find(item => item.id === data.storyId);
  if (!story) {
    const fresh = stories.filter(item => !(state.localSeen[item.id] > 0));
    const choices = fresh.length ? fresh : stories;
    story = choices[Math.floor(Math.random() * choices.length)];
  }
  const echo = story.echo && state.flags[story.echo.flag] ? `\n\n${story.echo.text}` : "";
  return {
    type: "地方支线", title: story.title, place: state.location,
    text: story.text + echo,
    tags: ["当地人会记住处理方式", story.echo && state.flags[story.echo.flag] ? "前情已经改变现场" : "选择会留下后续影响"],
    choices: story.choices.map(([label, hint, effect]) => choice(label, hint, () => applyEffect(effect)))
  };
}
function eventMentor() {
  const school = SCHOOL_LIFE.find(item => item.id === state.school.id);
  if (!school) return eventMarket();
  return {
    type: "拜师与入门", title: `在${school.name}择一位引路人`, place: state.location,
    text: `入门手续办妥后，${school.mentorLabel}的人选由你自己决定。${school.mentors.map(mentor => `${mentor.name}（${mentor.title}）${mentor.temperament}`).join("\n\n")}\n\n其他同门会在日常修习与门内差事中逐渐与你相识。每个人都有自己的性情和打算，关系需要靠相处慢慢建立。`,
    tags: [school.name, "师父各有教法与初始机缘", "同门会在事件中逐渐相识"], choices: school.mentors.map((mentor, index) => choice(
      `拜${mentor.name}为${school.mentorLabel} · ${mentor.title}`,
      `${mentor.lesson}入门后会依此教法安排你的第一课。`,
      () => {
        state.school.mentor = index;
        state.school.mentorBond = 24;
        state.school.favor = 5;
        state.school.introduced = true;
        state.school.metPeers = [];
        state.school.peerBonds = {};
        const gift = { ...mentor.gift };
        if (gift.trust) { state.school.mentorBond = clampRelation(state.school.mentorBond + gift.trust * 5); delete gift.trust; }
        applyEffect(gift);
      }
    ))
  };
}
function eventSectLife() {
  const school = SCHOOL_LIFE.find(item => item.id === state.school.id);
  const mentor = school?.mentors[state.school.mentor];
  if (!school || !mentor) return eventMentor();
  const cycle = Math.max(0, state.school.cycle - 1);
  const peer = school.peers[cycle % school.peers.length];
  const peerPronoun = /师姐|师妹/.test(peer.title) || peer.id === "office_yu" ? "她" : "他";
  if (state.location !== schoolBaseLocation(school.id)) {
    const choices = [
      choice("认真回信，帮同门把眼前的难题拆成几步", "对方按自己的判断试了新办法；师父也认可你们的交流。", () => { changePeerBond(peer.id, 7); state.school.mentorBond = clampRelation(state.school.mentorBond + 3); state.school.favor = clampRelation(state.school.favor + 2); }),
      choice("寄回一份沿途见闻和可核对的线索", "同门把你的消息记进门内路册，之后可能派上用场。", () => { changePeerBond(peer.id, 5); state.school.mentorBond = clampRelation(state.school.mentorBond + 4); state.school.favor = clampRelation(state.school.favor + 2); addClue(); }),
      choice("坦白自己暂时无法插手，约好归门后再谈", "你没有轻率承诺，对方仍愿意把这件事留到重逢时继续商量。", () => { changePeerBond(peer.id, 4); state.school.mentorBond = clampRelation(state.school.mentorBond + 2); state.school.favor = clampRelation(state.school.favor + 1); })
    ];
    return {
      type: "师门来信", title: `${peer.name}寄来的近况`, place: state.location,
      text: `你在${state.location}收到一封从${school.name}辗转送来的信。${peer.title}${peer.name}写道：${peer.goal}${peer.temperament}师父${mentor.name}在信末添了一句：「${mentor.lesson}」你人在远方，仍能决定怎么回应。`,
      tags: [`${peer.title} · ${peer.name}`, `师父：${mentor.name}`, `同门情分 ${state.school.peerBonds[peer.id] || 0}`], choices
    };
  }
  const scene = cycle % 4;
  const scenes = [
    { title: "晨课上的一处破绽", text: `${peer.name}在晨课中连续三次停在同一招上。${peer.temperament}${mentor.name}没有替${peerPronoun}解答，只让你们自己试着找出原因。`, choices: [
      [`陪${peerPronoun}拆分招式，一步一步练到顺手`, `你们找到适合${peerPronoun}的节奏；${peerPronoun}开始愿意把难处告诉你。`, 7, 2, 1],
      ["请师父示范，再和他一起复盘", "师父指出了关键，你也学会如何把教法讲清楚。", 4, 7, 2],
      ["坦白说自己也不懂，邀他一起试错", "没有立刻解开难题，但同门间多了一分坦诚。", 9, 3, 1]
    ] },
    { title: "轮值差事出了岔子", text: `${peer.name}负责的差事遇到意外：一批公用物资送错了地方。${peer.goal}${mentor.name}要求你们先处理受影响的人，再查清责任。`, choices: [
      ["一起补上缺口，之后再查交接记录", "眼前的人没有被耽误，交接错误也留下了可查的线索。", 6, 5, 2],
      ["先核对名册与路引，找出错在何处", "责任分清了，同门也知道你重视公平。", 4, 4, 3],
      [`替${peerPronoun}扛下责任，免得${peerPronoun}受罚`, `${peerPronoun}记住了你的好意，但也提醒你不要替${peerPronoun}做决定。`, 8, -1, 1]
    ] },
    { title: "同门对修行路线起了争执", text: `${peer.name}和另一位同门对宗门差事有不同看法。${peer.temperament}${mentor.name}暂不评判，让你们先说出各自最担心的结果。`, choices: [
      ["让双方把理由说完，再找能共同承担的方案", "争执没有消失，但你们把分歧谈清楚了。", 8, 5, 2],
      ["指出哪一方的方案风险更小", "事情很快有了决定，落选的一方仍需要时间接受。", -4, 5, 3],
      ["不替他们裁决，先去完成两边都同意的部分", "你守住了自己的界线，也避免小事拖成怨怼。", 5, 2, 2]
    ] },
    { title: "夜里的家书没有寄出", text: `${peer.name}把一封家书收进袖中，说自己最近${peer.goal}。${mentor.name}给了你们一晚空闲，没有规定该怎么安慰同门。`, choices: [
      [`陪${peerPronoun}把信写完，不追问不愿提的事`, `${peerPronoun}把信寄了出去，也更相信你尊重${peerPronoun}的沉默。`, 8, 3, 1],
      [`替${peerPronoun}跑一趟腿，让${peerPronoun}能亲手处理家事`, "你们把难题往前推了一步，对方也没有因此欠你人情。", 6, 3, 2],
      ["聊聊自己来此界后最放不下的事", "你们交换了各自的牵挂，关系变得更平等。", 7, 2, 1]
    ] }
  ];
  const chosen = scenes[scene];
  const choices = chosen.choices.map(([label, hint, peerBond, mentorBond, favor]) => choice(label, hint, () => {
    changePeerBond(peer.id, peerBond);
    state.school.mentorBond = clampRelation(state.school.mentorBond + mentorBond);
    state.school.favor = clampRelation(state.school.favor + favor);
    if (scene === 0) state.xp = Math.min(100, state.xp + 5);
    if (scene === 1 && peerBond > 0) state.fame += 1;
    if (scene === 2 && mentorBond > 0) state.school.favor = clampRelation(state.school.favor + 1);
  }));
  return {
    type: "师门日常", title: chosen.title, place: school.name,
    text: `${chosen.text}\n\n${mentor.name}的教法是：「${mentor.lesson}」你目前與${peer.name}的同門情分為 ${state.school.peerBonds[peer.id] || 0}，師父信任為 ${state.school.mentorBond}。`,
    tags: [`${peer.title} · ${peer.name}`, `師父：${mentor.name}`, "同門情分會影響支援、修行與後續選擇"], choices
  };
}
function eventBeast() {
  const tamed = state.beastTamed;
  const choices = tamed ? [
    choice("和灵狐练习配合与传讯", "它学会了更好地听懂你的手势，同行时也能替你望风。", () => { state.xp = Math.min(100, state.xp + 12); state.beastBond = Math.min(3, state.beastBond + 1); }),
    choice("让它独自去附近探路", "灵狐带回一枚古阵碎片与一段安全路线。", () => { addClue(); state.flags.northRoute = true; state.beastBond = Math.min(3, state.beastBond + 1); }, null, 1),
    choice("给它一份灵材，当作今日口粮", "灵狐亲近了几分，也把一枚藏起来的灵石推给你。", () => { state.inventory.herbs -= 1; state.beastBond = Math.min(3, state.beastBond + 1); state.stones += 2; }, null, 1, state.inventory.herbs < 1, "灵材不足")
  ] : [
    choice("替它解开缠住前爪的捕兽索", "它没有逃远，只在林边看了你很久。", () => { state.beastBond = Math.min(3, state.beastBond + 1); state.fame += 1; if (state.met.ling) changeRelation("ling", 3, 4); }),
    choice("把一份灵材放在安全处，再退开等待", "灵狐吃下药草，留下了愿意再次靠近的气息。", () => { state.inventory.herbs -= 1; state.beastBond = Math.min(3, state.beastBond + 1); }, null, 1, state.inventory.herbs < 1, "灵材不足"),
    choice("放下食物后离开，不要求它跟随", "你们没有结伴，但它记住了你的气味。", () => { state.beastBond = Math.min(3, state.beastBond + 1); state.xp = Math.min(100, state.xp + 5); }),
    ...(state.beastBond >= 2 ? [choice("问它是否愿意与你同行", "你们不以契约束缚彼此，只约定一起走一段路。", () => { state.beastTamed = true; if (!state.party.includes("beast") && state.party.length < 3) state.party.push("beast"); state.fame += 1; toast(state.party.includes("beast") ? "霜纹灵狐加入了你的旅程。" : "霜纹灵狐愿意同行；队伍满员时，可稍后在队伍栏召集它。"); })] : [])
  ];
  return {
    type: "相逢与御兽", title: tamed ? "灵狐带回的新路标" : state.location === "霜河关" ? "雪线边的霜纹灵狐" : "竹影间的霜纹灵狐", place: state.location,
    text: tamed ? `霜纹灵狐从前方跑回来，爪上沾着灵潮留下的淡蓝色尘土。你们已经同行一段时间，${state.beastBond >= 3 ? "它对你的手势几乎心领神会。" : "它仍保留着自己的习性与去处。"}` : state.location === "霜河关" ? `一只霜纹灵狐被困在冰线旁的旧捕兽索里，身边还留着商队走过的痕迹。它没有伤人，却一直盯着你手里的行囊。你可以帮助它、与它交换善意，或转身离开。当前善意：${state.beastBond}/2。` : `一只霜纹灵狐被旧捕兽索困在石缝边。它没有伤人，却一直盯着你手里的行囊。你可以帮助它、与它交换善意，或转身离开。当前善意：${state.beastBond}/2。`,
    tags: ["灵兽可选择结伴，也可保持自由", tamed ? "已同行" : "帮助与喂养会建立信任"], choices
  };
}
function eventTide() {
  const scene = state.location === "千岛渡" ? "海潮推着一艘破损的药船靠近港口" : state.location === "百药泽" ? "泽水越过田埂，几条沉睡的水渠重新发光" : state.location === "雾岭药谷" ? "雾岭的灵泉漫出石阶，药藤在水面舒展" : "沧河水位忽然上涨，几艘渡船被冲离了系缆处";
  return {
    type: "灵潮与天时", title: "涨潮时分", place: state.location,
    text: `${scene}。潮光里混着细碎的阵纹，附近的人都在忙着收拾东西。你有一段时间可以趁潮行事，也可以先帮他们稳住眼前的局面。`,
    tags: [`灵潮层级 ${state.tide}`, `异动压力 ${state.pressure}/6`], choices: [
      choice("趁水势采集被冲上岸的灵材", "你拿到几份可制药的材料，也被灵潮划伤。", () => { state.inventory.herbs = Math.min(99, state.inventory.herbs + 2); state.xp = Math.min(100, state.xp + 8); state.hp -= 5; }, null, 1),
      choice("循着水面阵纹寻找回声来源", "水势短暂指向天隙，你记下了新的阵纹变化。", () => { addClue(); state.pressure = Math.min(6, state.pressure + 1); state.fame += 1; }, null, 2),
      choice("先帮船户与田民把物资转移到高处", "你没有追逐异象，附近的人记住了这份及时的援手。", () => { state.stones += 3; state.fame += 2; state.pressure = Math.max(0, state.pressure - 1); }, null, 1)
    ]
  };
}
function eventTrial() {
  const faction = state.faction;
  let title = "驻地的临时考校";
  let text = `你所属的${faction}安排了一次日常考校。考校没有标准答案，更关心你如何使用手里的本事。`;
  let choices = [
    choice("把最近的经历整理成一段修行心得", "你从自己的选择里找到了新的着力点。", () => { state.xp = Math.min(100, state.xp + 12); state.fame += 1; }),
    choice("替同门或同伴完成一件小差事", "你结下了一点人情，也换到了一些日用资源。", () => { state.stones += 3; state.fame += 1; }),
    choice("提出自己对宗门规矩的疑问", "你的问题暂时没有定论，但有人记下了你的名字。", () => { state.fame += 1; state.xp = Math.min(100, state.xp + 6); })
  ];
  if (faction.includes("归鹤")) {
    title = "归鹤剑宗的夜间试剑";
    text = "新入门的弟子要在竹影里守住一盏灯。对手不一定更强，但会试着让你忘记自己为何拔剑。";
    choices = [
      choice("迎上对手，按剑宗所学正面拆招", "你在交手中磨出了一点剑意，也受了轻伤。", () => { state.xp = Math.min(100, state.xp + 18); state.hp -= 6; state.fame += 1; }, null, 1),
      choice("先护住灯火，再寻找出招间隙", "你没有追求胜负，反而记住了一段适合破阵的步法。", () => { state.xp = Math.min(100, state.xp + 10); addClue(); }),
      choice("认输停手，向师兄请教为何会输", "你保住体力，也换来一次坦诚的指点。", () => { state.hp = Math.min(state.maxHp, state.hp + 8); state.xp = Math.min(100, state.xp + 4); })
    ];
  } else if (faction.includes("丹谷")) {
    title = "松风丹谷的药理小课";
    text = "丹房收到一批被灵潮浸过的草药，药性互相冲撞。长老要你在天黑前找出能保住药性的处理方法。";
    choices = [
      choice("先辨药性，再小火慢煎", "你做成一份回春散，也学会了减少药材损耗。", () => { state.hp = Math.min(state.maxHp, state.hp + 20); state.inventory.herbs -= 1; state.xp = Math.min(100, state.xp + 12); }, null, 1, state.inventory.herbs < 1, "灵材不足"),
      choice("把药草分给义诊医馆，请医修一起判断", "你让救治先于考核，乔云舒听说后向你道谢。", () => { state.fame += 2; if (state.met.yun) changeRelation("yun", 0, 5); state.hp = Math.min(state.maxHp, state.hp + 8); }),
      choice("记录药性变化，暂不急着炼制", "你留下了一份可复用的观察记录，增加了修为。", () => { state.xp = Math.min(100, state.xp + 15); addClue(); })
    ];
  } else if (faction.includes("赤烬")) {
    title = "赤烬教的旧誓复核";
    text = "一名教众想退出旧誓，另一人担心失去誓约的保护。誓火司请你听完双方陈述，再给出处理办法。";
    choices = [
      choice("允许当事人解除誓约，再一起商量补偿", "你没有抹掉承诺，只让承诺重新变成自愿的选择。", () => { state.flags.pledgeHelped = true; if (state.met.luo) changeRelation("luo", 0, 7); state.fame += 1; }),
      choice("先维持原约，查明当年订约时的条件", "你暂时保住了秩序，也把旧誓的来历列入调查。", () => { state.flags.pledgeHelped = true; addClue(); state.xp = Math.min(100, state.xp + 8); }),
      choice("请双方在没有旁人的地方重新谈一次", "你让两人自己作出决定，降低了教内的争执。", () => { state.pressure = Math.max(0, state.pressure - 1); if (state.met.luo) changeRelation("luo", 0, 4); })
    ];
  } else if (faction.includes("商盟")) {
    title = "万方商盟的分账争议";
    text = "一批灵材因灵潮改道延误，船队和货主都认为该由对方承担损失。商盟执事让你试着找一份双方都能接受的账目。";
    choices = [
      choice("按契约逐项核对，先保障船工工钱", "你维护了契约，也让商队愿意继续雇你。", () => { state.stones += 7; state.fame += 2; }),
      choice("由商盟先垫一部分，之后公开追讨", "你让货物流转下去，商盟暂时承担了一笔成本。", () => { state.stones += 3; state.pressure = Math.max(0, state.pressure - 1); state.fame += 1; }),
      choice("拒绝替任何一方背书，只记录货损", "你没有卷入争端，但留下了能帮到下一支商队的记录。", () => { addClue(); state.xp = Math.min(100, state.xp + 7); })
    ];
  } else if (faction.includes("巡灵司")) {
    title = "巡灵司的案牍复核";
    text = "一宗灵潮异案即将封卷，案卷里有两处时间对不上。沈惊鸿请你重新询问证人，不要先替任何一方定罪。";
    markMet("ying");
    choices = [
      choice("重访村民，按原话补录证词", "案卷多了能经得起复核的证词。", () => { state.flags.registryEvidence = true; addClue(); state.fame += 2; state.trust.ying = clampRelation(state.trust.ying + 5); }),
      choice("先核查调令与道路记录", "你找到了异案发生前后的一段空白行程。", () => { state.flags.registryEvidence = true; state.xp = Math.min(100, state.xp + 12); }),
      choice("暂缓封卷，公开说明仍缺关键证人", "你顶住了催办压力，证人也多了几天时间。", () => { state.pressure = Math.max(0, state.pressure - 1); state.fame += 1; })
    ];
  } else if (faction.includes("百族会盟")) {
    title = "青泽使团的共生试炼";
    text = "一只受伤的山泽灵兽闯入药田，泽民想赶走它，族人则担心它身上的伤会污染水脉。使团请你先查明原因。";
    choices = [
      choice("替灵兽处理伤口，再把它送回族地", "你学会了几种安抚灵兽的手势，彼此都没有被迫立誓。", () => { state.beastBond = Math.min(3, state.beastBond + 1); state.hp = Math.min(state.maxHp, state.hp + 8); if (state.met.ling) changeRelation("ling", 0, 5); }),
      choice("检查伤口与足迹，寻找是谁伤了它", "你找到了人留下的陷阱，也记下一条新的线索。", () => { addClue(); state.flags.waterPact = true; state.xp = Math.min(100, state.xp + 9); }),
      choice("先疏散附近的药田工人，再让会盟接手", "你把人群安顿好，也没有替灵兽或族人越权决定。", () => { state.fame += 2; state.pressure = Math.max(0, state.pressure - 1); })
    ];
  }
  if (state.school.introduced && state.school.favor >= 20) {
    const reward = {
      sword: { label: "请同门陪你练一轮合击剑势", hint: "消耗 20 点门内人情，获得修为与战斗经验。", effect: { xp: 14 } },
      dan: { label: "请丹房调配一份共用药箱", hint: "消耗 20 点门内人情，补充灵材并恢复气血。", effect: { herbs: 2, hp: 10 } },
      ember: { label: "请誓火司替你核验一枚旧誓印", hint: "消耗 20 点门内人情，平息争议并积累名望。", effect: { fame: 2, pressure: -1 } },
      merchant: { label: "请分号调一笔周转灵石", hint: "消耗 20 点门内人情，拿到一笔行路资金。", effect: { stones: 9 } },
      office: { label: "请案牍同僚帮你复核一份卷宗", hint: "消耗 20 点门内人情，找到一条可用线索。", effect: { clues: 1, fame: 1 } },
      alliance: { label: "请族人借你一包药种和灵兽口粮", hint: "消耗 20 点门内人情，补充灵材并增进灵兽善意。", effect: { herbs: 1 } }
    }[state.school.id];
    choices.push(choice(reward.label, reward.hint, () => {
      state.school.favor -= 20;
      applyEffect(reward.effect);
      if (state.school.id === "alliance") state.beastBond = Math.min(3, state.beastBond + 1);
    }));
  }
  return { type: "势力专属机缘", title, place: state.location, text, tags: [faction, state.path, "不同道路有不同考校"], choices };
}
function eventMarket() {
  const rumor = state.clues < 2;
  return {
    type: "坊市日常", title: "苍梧渡的灵潮早市", place: "苍梧渡坊市",
    text: `摊贩把新采的草药摆在门前，商队正在清点昨夜的损失。有人说天隙附近的古阵亮过三次；也有人只关心今天的米价。${state.flags.layLow ? "你租下的小屋就在后巷，坊市的吆喝声已经不再陌生。" : "修士与凡人从同一座石桥上来来往往。"}`,
    tags: ["坊市消息", state.faction], choices: [
      choice(rumor ? "花两枚灵石向老船夫打听天隙旧事" : "请老船夫讲讲灵潮前的河道", "消息未必完整，但他亲眼见过旧阵的水下基座。", () => { state.stones -= 2; addClue(); state.fame += 1; }, null, 1, state.stones < 2),
      choice("帮商队搬货换取灵石", "做些实在活计，商队管事记住了你的脸。", () => { state.stones += 5; state.fame += 1; }, null, 2),
      choice("买一份止血散，顺便问问最近的伤者", "药效平平，但足够应付沿途小伤。", () => { state.stones -= 3; state.hp = Math.min(state.maxHp, state.hp + 22); }, null, 1, state.stones < 3),
      choice("在河边吃碗热面，听人们聊自己的日子", "这座坊市的生活也许比天隙更值得先弄明白。", () => { state.hp = Math.min(state.maxHp, state.hp + 8); state.fame += 1; }, null, 1)
    ]
  };
}
function eventCultivation() {
  const bonus = state.faction.includes("丹谷") ? 8 : state.faction.includes("剑宗") ? 5 : 0;
  const mentorBonus = state.school.mentorBond >= 45 ? 5 : 0;
  const growth = 22 + bonus + mentorBonus;
  return {
    type: "修行与心境", title: "灵气落在何处", place: state.location,
    text: `你试着引气入体。照夜界的灵气沿着呼吸涌来，却没有告诉你该成为什么样的人。${state.realm === 0 ? "经脉仍未打通，急着求成只会留下道痕。" : `你已能感到${REALMS[state.realm]}的灵力在体内缓慢流转。`}`,
    tags: ["修为积累", "境界提升需要机缘与准备"], choices: [
      choice("按自己的节奏吐纳，稳稳积累", `修为增加 ${growth} 点${mentorBonus ? "（师父指点 +5）" : ""}。`, () => { state.xp = Math.min(100, state.xp + growth); state.hp = Math.min(state.maxHp, state.hp + 4); }, null, 1),
      choice("拆解一段旧阵纹，把它当作功课", "你没有立刻得到答案，但对天隙的理解更深了一层。", () => { state.xp = Math.min(100, state.xp + 14); if (state.clues < 3) addClue(); }, null, 2),
      choice("今天先不练功，替自己做顿饭", "你让身体和心神都缓了下来。", () => { state.hp = Math.min(state.maxHp, state.hp + 18); state.fame += state.flags.layLow ? 1 : 0; }, null, 1)
    ]
  };
}
function eventRumor() {
  const messages = [
    "北境霜河关的灵兽开始南迁，几支镖队改道经过苍梧渡。",
    "云京原有宗门在争一条新显露的地脉，双方都向边境招募人手。",
    "东海千岛传来消息：几座无人岛的夜空出现了和天隙相似的光。",
    "有人在旧洞天里找到断天之变前的账册，万方商盟正在收购拓本。",
    "巡灵司的一份伤亡名册疑似被人涂改，几名案牍吏突然离开了云京。",
    "百药泽的泽心种失窃，几条水脉开始枯竭，百族会盟派出了青泽使团。",
    "一艘送药船在千岛渡外失联，港口只找回一张被撕去半角的潮汐图。",
    "霜河关外的商队断了音讯，镖队头领正在寻找一位失踪的亲人。"
  ];
  return {
    type: "远方来信", title: "一则不知真假的消息", place: state.location,
    text: `${messages[(state.day + state.pressure) % messages.length]}消息顺着商路传来，谁也不敢保证它没有被添油加醋。你可以打听来源，也可以把它当作寻常闲谈。`,
    tags: ["远方势力也在行动", "时局会自行变化"], choices: [
      choice("追问消息从哪支商队传来", "你找到一条通往旧驿站的线索。", () => { state.fame += 1; if (state.clues < 3) addClue(); }),
      choice("把消息告诉熟识的人，听听他们的判断", "不同立场的人给出了不同解释。", () => { for (const id of ROMANCES.filter(x => state.met[x])) changeRelation(id, 1, 3); }),
      choice("记下来就好，不急着卷入", "你没有让传闻替自己做决定。", () => { state.hp = Math.min(state.maxHp, state.hp + 5); })
    ]
  };
}
function eventWorld() {
  return {
    type: "时局变化", title: "灵潮之后的商队", place: state.location,
    text: `灵潮扰乱了河道，一支从赤炉地来的商队晚了三天才到。此刻他们正在${state.location}附近歇脚，货物受潮，护卫也有人受伤。管事正在商量要不要继续北上。`,
    tags: ["时局压力", "凡人的生活也受灵潮影响"], choices: [
      choice("帮忙安置附近住户，再陪商队修船", "商队安全靠岸，附近的居民也记住了你的名字。", () => { state.pressure = Math.max(0, state.pressure - 1); state.fame += 2; state.stones += 2; }),
      choice("拿灵石换下他们受潮的地图拓本", "拓本记录了一段被水淹没的旧路。", () => { state.stones -= 2; addClue(); }, null, 1, state.stones < 2),
      choice("不接这桩事，留在一旁观察", "你记下了各方的态度，暂时保留自己的精力。", () => { state.xp = Math.min(100, state.xp + 8); })
    ]
  };
}
function eventForest() {
  return {
    type: "野外探索", title: state.location === "雾岭药谷" ? "雾岭深处的药藤" : "青篁林里的旧路标", place: state.location,
    text: state.location === "雾岭药谷" ? "药谷边缘的石阶被新长出的灵藤顶裂了。一块旧路标半埋在泥土里，边上有妖兽踩过的湿痕。你闻到药香，也听见低低的兽鸣。" : "竹林间的石阶被新长出的灵藤顶裂了。一块旧路标半埋在泥土里，边上有妖兽踩过的湿痕。你听见远处有人在练剑，也听见低低的兽鸣。",
    tags: ["可采集灵材", "灵潮改变了旧路"], choices: [
      choice("沿旧路标找一圈，看看它指向哪里", "你找到一段刻着天隙方位的古阵残文。", () => { addClue(); state.xp = Math.min(100, state.xp + 8); }),
      choice("采下成熟灵藤，留一部分作灵材", "你收获了药草与能用来制符的藤丝。", () => { state.stones += 2; state.inventory.herbs = Math.min(99, state.inventory.herbs + 1); state.xp = Math.min(100, state.xp + 5); }),
      choice("听见兽鸣后退回有人烟的地方", "你避开了一次不必要的冲突。", () => { state.hp = Math.min(state.maxHp, state.hp + 3); }, null, 1)
    ]
  };
}
function eventRiftScout() {
  return {
    type: "天隙线索", title: "裂谷边缘的无名碑", place: "天隙外沿",
    text: "天隙外沿的碎石上立着一块没有姓名的石碑。碑面刻痕与昨夜河上的异光相同，底部却被人新近挖开。远处传来阵法共鸣，随时可能再起灵潮。",
    tags: ["高危区域", "灵潮压力较高"], choices: [
      choice("用拓纸拓下整段碑文，带回去慢慢研究", "你得到了清楚的阵纹线索，也留下了自己的足迹。", () => { addClue(); state.pressure = Math.min(6, state.pressure + 1); state.fame += 1; }, null, 2),
      choice("与同行者一起固定碑基，免得它坠入裂谷", "几个人合力稳住石碑，碑下露出了旧时代的铭记。", () => { addClue(); state.hp = Math.min(state.maxHp, state.hp + 4); state.pressure = Math.max(0, state.pressure - 1); }, null, 2),
      choice("只在安全距离观察，确认没有追兵再离开", "你没有拿到碑文，却看清了灵潮的运行方向。", () => { state.xp = Math.min(100, state.xp + 12); state.hp = Math.min(state.maxHp, state.hp + 5); }, null, 1)
    ]
  };
}
function eventRiftCall() {
  return {
    type: "天隙回声", title: "远处传来的阵鸣", place: state.location,
    text: "你手里的几条线索忽然共振，指向天隙外沿的一处旧阵。那不是命令，更像一次短促的回响。若要查明来源，需要亲自走一趟；你也可以把这件事交给当地势力，或暂时放下。",
    tags: ["已找到两条以上线索", "前往天隙外沿才能接近阵眼"], choices: [
      choice("收拾行囊，沿河道赶往天隙外沿", "远行需要两日，路上也可能遇到灵潮余波。", () => { state.location = "天隙外沿"; state.pressure = Math.min(6, state.pressure + 1); }, "climax", 2),
      choice("把线索交给所属势力，请他们先派人查看", "有人接手了调查，但你暂时留在原地。", () => { state.fame += 2; state.pressure = Math.max(0, state.pressure - 1); state.flags.climaxResolved = true; state.pendingEnding = { title: "第一卷结局：把线索交给后来者", body: "你将线索交给了愿意承担后果的人，继续过自己的生活。天隙的秘密还没有揭开，但附近的人多了一分准备。" }; recordEnding(state.pendingEnding.title); }, "ending", 1, state.faction.includes("自由身") || state.faction === "未入门"),
      choice("不追这道回声，回到眼前的生活", "你把线索收好，先照顾自己的日常。", () => { state.fame += 1; }, null, 1)
    ]
  };
}
function eventFriend(data = {}) {
  const id = data.person || (state.location === "霜河关" ? "he" : "song");
  const person = NPCS[id];
  markMet(id);
  const already = state.friends.includes(id);
  const stories = {
    song: already ? "宋闻舟摊开一张被雨水洇过的地图，说青篁林有条旧路可能通到雾岭。他想和你校对标记。" : "背着卷轴的宋闻舟正在修补地图。灵潮冲毁了一处路标，他准备独自回林子确认。",
    he: already ? "贺鸣沙刚从关外巡逻回来，带着一段断裂的灵弩弦。他想和你商量失联商队的搜寻路线。" : "贺鸣沙在霜河关外给镖队分派人手。姐姐失踪前最后出现的地方，就在一支没有归来的商队路线上。"
  };
  const choices = already ? [
    choice(id === "he" ? "和他一起整理巡防与搜寻路线" : "和他一起校对地图，商量分工", "你们补上了几处错漏，也分享了各自的经验。", () => { state.xp = Math.min(100, state.xp + 10); state.trust[id] = clampRelation(state.trust[id] + 5); if (id === "he") state.flags.northRoute = true; else addClue(); }),
    choice("让他先忙自己的事，约好改天再见", "他留下一条有用的消息，继续自己的行程。", () => { state.stones += 1; state.trust[id] = clampRelation(state.trust[id] + 2); })
  ] : [
    choice(id === "he" ? "和镖队并肩巡防，之后结伴走一段" : "和他一起回林子核对路标，之后结伴走一段", "你们成为朋友。他仍有自己的目标，也可能因工作暂时离队。", () => { markMet(id); state.trust[id] = 28; addPartyMember(id); state.fame += 1; if (id === "he") state.flags.northRoute = true; }),
    choice("付两枚灵石请他带路，不邀请同行", "他收下报酬，给了你可靠的路况和一条线索。", () => { state.stones -= 2; addClue(); markMet(id); state.trust[id] = 12; }, null, 1, state.stones < 2),
    choice("祝他顺利，自己先去处理眼前的事", "你没有把一次相遇变成义务。", () => { state.hp = Math.min(state.maxHp, state.hp + 4); })
  ];
  return { type: "相逢与结伴", title: already ? `${person.name}带来一条新消息` : `遇见${person.name}`, place: state.location, text: stories[id], tags: [person.role, "朋友有自己的目标", "可邀请同行"], choices };
}
function eventFollower(data = {}) {
  const id = data.person || (state.location === "千岛渡" ? "man" : "shi");
  const person = NPCS[id];
  markMet(id);
  const already = state.followers.includes(id);
  const story = id === "shi" ? (already ? "石豆从雾岭回来，带着刚采的草药。他想多接一些安全的采集活，也惦记着家里的药田。" : `你在${state.location === "苍梧渡" ? "坊市药摊旁" : "雾岭外沿"}遇见药农石豆。他的药篓破了，正准备再进一次林子攒钱赎回药田。`) : (already ? "小满带回了更新后的潮汐表，问你要不要和她合伙接一趟近海送药的活。" : "千岛渡的传信人小满正把几封药船失联的消息分开登记。她想攒钱买船，自己跑一条更安全的航线。");
  const choices = already ? [
    choice(id === "shi" ? "付两枚灵石，让他回家看一趟药田" : "付三枚灵石，让她休整并更新潮汐表", id === "shi" ? "他安心处理私事，约好几日后再会。" : "她安心处理私事，约好几日后再会。", () => { state.stones -= id === "shi" ? 2 : 3; state.trust[id] = clampRelation(state.trust[id] + 7); state.party = state.party.filter(member => member !== id); state.awayUntil[id] = state.day + 3; }, null, 2, state.stones < (id === "shi" ? 2 : 3)),
    choice(id === "shi" ? "交换药材与路况消息" : "和她核对近海航线，平分报酬", "你们互相补上了缺少的物资和消息。", () => { state.stones += 2; state.trust[id] = clampRelation(state.trust[id] + 4); if (id === "man") state.flags.islandChart = true; })
  ] : [
    choice(id === "shi" ? "按市价雇他同行" : "和她谈好报酬，请她做向导", id === "shi" ? "石豆成为你的追随者，但他仍会惦记自己的药田。" : "小满成为你的追随者，但她仍会安排自己的航线。", () => { state.stones -= 3; markMet(id); state.trust[id] = 26; addPartyMember(id, "follower"); }, null, 1, state.stones < 3),
    choice("先帮忙处理眼前的难题，不谈雇佣", "她记下了你的人情，之后可能主动带来消息。", () => { markMet(id); state.trust[id] = 14; state.fame += 1; if (id === "shi") state.inventory.herbs = Math.min(99, state.inventory.herbs + 1); else state.flags.islandChart = true; }),
    choice("让她先回自己的生活，日后有缘再见", "你没有把一次相遇变成义务。", () => { state.hp = Math.min(state.maxHp, state.hp + 2); })
  ];
  return { type: "同行与生计", title: already ? `${person.name}带回一份新消息` : `遇见${person.name}`, place: state.location, text: story, tags: [person.role, "同行需要报酬与信任", "追随者也有自己的生活"], choices };
}
function characterEvent(id) {
  const person = NPCS[id];
  const personality = PERSONALITIES[id];
  markMet(id);
  const agenda = currentAgenda(id);
  const isPartner = state.partner === id;
  const affinity = state.affection[id] || 0;
  const trust = state.trust[id] || 0;
  let text = `${person.name}最近${agenda}。她见到你时先谈起自己的打算，随后才问你这几日过得如何。她愿意与你相处，也仍然保留自己的选择。`;
  if (id === "yun" && state.flags.savedYun) text = `乔云舒记得你在河边救过她。她最近${agenda}，药箱里还留着那晚被河水浸湿的旧药方。她说自己准备继续义诊，想听听你怎么看。`;
  if (id === "yue") text = `柳月白收到了归鹤剑宗的回信，却没有因此停下寻师。她最近${agenda}。她问你：若门规和眼前的人冲突，你会怎么选？`;
  if (id === "luo") text = `阿罗最近${agenda}。有人想让她用更严苛的誓约换取秩序，她没有立刻答应。她问你，约束与守诺之间究竟差在哪里。`;
  if (id === "qiao") text = `裴知意最近${agenda}。商路计划遇到了新的成本，她仍打算继续谈下去。她问你愿不愿意帮她一起算清风险。`;
  if (id === "ying") text = `沈惊鸿最近${agenda}。她找到的卷宗显示，有人把灵潮伤亡归咎于无名散修。她问你是否愿意和她一起核对证词，再决定要不要公开。`;
  if (id === "ling") text = `桑苓最近${agenda}。泽心种的踪迹把她带到人族村落附近，她想先听村民的说法，再判断该如何保护族地。`;
  if (isPartner) text += `\n\n你们已结为道侣，但她的目标没有因此消失。`;
  text += `\n\n${personality.temperament}她在意的是：${personality.boundary}。`;
  const choices = personality.talks.map(([label, hint, effect]) => choice(label, hint, () => applyEffect(effect)));
  if (isPartner && (affinity <= 25 || trust <= 20)) choices.push(choice("坦诚提出暂时分开，给彼此留些时间", "你们结束了道侣关系，之后是否重逢由各自的选择决定。", () => { state.partner = null; state.party = state.party.filter(member => member !== id); state.awayUntil[id] = state.day + 5; changeRelation(id, -5, -3); }));
  if (!isPartner && !state.partner && ROMANCES.includes(id) && affinity >= 35 && trust >= 30) {
    choices.push(choice("坦诚表达心意，问她愿不愿结为道侣", affinity >= person.ask && trust >= person.trust ? "她会按自己的心意回应，也会认真谈起未来各自的道路。" : "她尚未准备好；心意被听见了，但关系需要更多时间。", () => {
      if (affinity >= person.ask && trust >= person.trust && !state.partner) {
        state.partner = id;
        state.lastPartnerEvent = state.day;
        changeRelation(id, 6, 8);
        toast(`${person.name}愿意与你结为道侣。`);
      } else {
        changeRelation(id, -5, -2);
        state.flags[`proposal_${id}`] = true;
        toast(`${person.name}婉言拒绝了这次提议；她仍愿意继续认识你。`);
      }
    }, null, 1));
  }
  return { type: isPartner ? "道侣近况" : "故人来访", title: isPartner ? `${person.name}的近况` : `与${person.name}再会`, place: state.location, text, tags: [person.role, `性情：${personality.temperament}`, `好感 ${affinity} · 信任 ${trust}`, `她的计划：${agenda}`], choices };
}
function eventPartner() {
  const id = state.partner;
  if (!NPCS[id]) return eventMarket();
  const person = NPCS[id];
  const agenda = currentAgenda(id);
  const incident = {
    yun: "医馆的药材被一支迟到商队压在仓库，她想先去帮村里的伤者配药。",
    yue: "归鹤剑宗送来师父失踪前留下的半张剑谱，她准备沿剑谱上的地点继续追查。",
    luo: "赤烬教有人准备重订旧誓，她想亲自去谈一套允许成员退出的规则。",
    qiao: "沧河商路的一位合伙人临时撤资，她打算独自去和船队谈新的分账方式。",
    ying: "巡灵司打算结案一宗伤亡异案，她发现最关键的证人还没被问过，准备亲自去云京核对卷宗。",
    ling: "百药泽的水脉再次变色，她想去找出被埋在泽底的信标，避免会盟与村民再次发生冲突。"
  }[id];
  state.lastPartnerEvent = state.day;
  return {
    type: "道侣各自的道路", title: `${person.name}收到一封远行信`, place: state.location,
    text: `${incident}她最近${agenda}，现在有机会去处理这件重要的事。她没有替你作决定，也没有要求你陪同，只把几种可能摆在桌上与你商量。`,
    tags: ["道侣有独立人生", "共同生活也需要沟通"], choices: [
      choice("陪她走一段，先把她的事办妥", "你们一起完成了她的计划，关系更稳固，也耽误了自己的安排。", () => { changeRelation(id, 5, 10); state.xp = Math.min(100, state.xp + 8); if (["yue", "ying", "ling"].includes(id) && state.clues < 3) addClue(); if (id === "yun") state.hp = Math.min(state.maxHp, state.hp + 12); if (id === "luo") { state.flags.pledgeHelped = true; state.pressure = Math.max(0, state.pressure - 1); } if (id === "qiao") state.stones += 4; if (id === "ying") state.flags.registryEvidence = true; if (id === "ling") { state.flags.waterPact = true; state.inventory.herbs = Math.min(99, state.inventory.herbs + 1); } }, null, 2),
      choice("支持她独自前往，约好归期与联络方式", "她会处理自己的事；几日不在身边时，你仍会各自成长。", () => { changeRelation(id, 2, 8); state.fame += 1; state.awayUntil[id] = state.day + 4; state.party = state.party.filter(member => member !== id); }, null, 1),
      choice("坦白说自己担心，但把最后决定留给她", "她感受到你的顾虑，也感受到你尊重她的选择。", () => { changeRelation(id, 4, 9); state.hp = Math.min(state.maxHp, state.hp + 4); }),
      choice("要求她放弃这次机会，留在你身边", "她拒绝放弃自己的计划。你们需要重新谈谈彼此的边界。", () => { changeRelation(id, -10, -12); state.fame -= 1; })
    ]
  };
}
function eventLayLow() {
  return {
    type: "坊间生活", title: "没有大事发生的一天", place: "苍梧渡",
    text: "渡口照常开市，邻居在屋檐下晒药草。天隙的消息仍在传，但没有谁来催你做决定。你可以趁这段安稳日子找份活计、修缮住处，或者只把今天过好。",
    tags: ["躺平是一条可玩的路线", "世界仍会继续变化"], choices: [
      choice("替药铺整理货架，挣些日用灵石", "店主按约付钱，还邀请你下次继续来帮忙。", () => { state.stones += 4; state.hp = Math.min(state.maxHp, state.hp + 5); state.fame += 1; }, null, 2),
      choice("把小屋收拾好，安静睡一整天", "你没有修为上的进步，但身心都松快不少。", () => { state.hp = Math.min(state.maxHp, state.hp + 28); state.stones += 1; }, null, 1),
      choice("去河边听坊市老人讲断天之变", "旧故事里有几段和你见过的阵纹相似。", () => { if (state.clues < 3) addClue(); state.fame += 1; }, null, 1)
    ]
  };
}
function eventBreakthrough() {
  return {
    type: "境界关隘", title: "灵台将开", place: state.location,
    text: `你的修为已经积累到临界处。突破不是一道单纯的门槛；每个人对“道”的理解不同，急于借用别人的答案，可能会在心神中留下难以消除的道痕。当前境界：${REALMS[state.realm]}。`,
    tags: ["可尝试突破", `灵石 ${state.stones}`], choices: [
      choice("花六枚灵石稳固根基，再尝试突破", "准备更充分，失败也能留下经验。", () => attemptBreakthrough(true), null, 2, state.stones < 6),
      choice("不借外物，顺着自己的理解冲关", "省下灵石，但会承受更大风险。", () => attemptBreakthrough(false), null, 1),
      choice("先把突破放一放，继续积累", "你暂时守住已有的修为。", () => { state.xp = 76; state.hp = Math.min(state.maxHp, state.hp + 8); }, null, 1)
    ]
  };
}
function attemptBreakthrough(steady) {
  if (steady) state.stones -= 6;
  const power = state.realm * 5 + (steady ? 30 : 10) + (state.party.length ? 8 : 0) + (state.path.includes("丹修") ? 8 : 0);
  const roll = Math.random() * 100;
  if (roll < Math.min(90, 48 + power)) {
    state.realm = Math.min(REALMS.length - 1, state.realm + 1);
    state.xp = 0;
    state.maxHp += 6;
    state.hp = Math.min(state.maxHp, state.hp + 20);
    state.fame += 1;
    toast(`突破成功：${REALMS[state.realm]}。`);
  } else {
    state.xp = steady ? 62 : 45;
    state.hp = Math.max(1, state.hp - (steady ? 8 : 17));
    toast("冲关未成，但你摸清了下一次需要准备的方向。\n");
  }
}
function eventCombat(data = {}) {
  const wild = ["青篁林", "雾岭药谷", "天隙外沿", "霜河关", "百药泽", "千岛渡"].includes(state.location);
  const enemy = data.enemy || (wild ? { name: state.location === "千岛渡" ? "雾潮海兽" : "裂潮妖狼", power: 6 + state.pressure, reward: 5 } : { name: "拦路劫修", power: 5 + state.pressure, reward: 5 });
  const partyNames = state.party.map(id => NPCS[id]?.name || (id === "beast" ? "霜纹灵狐" : id));
  const options = [
    choice("独自迎战", "依靠自己的境界、准备和一点运气。", () => resolveCombat("solo", enemy), null, 1),
  ];
  if (state.party.length) options.push(choice(`招呼同行者并肩作战（${partyNames.join("、")}）`, "队友会按自己的能力帮忙，也可能受伤。", () => resolveCombat("party", enemy), null, 1));
  if (state.inventory.talismans > 0) {
    options.push(choice("用护身符助阵，独自迎战", `消耗一张护身符；当前 ${state.inventory.talismans} 张。`, () => resolveCombat("solo", enemy, true), null, 1));
    if (state.party.length) options.push(choice("用护身符保护同行者，一起迎战", "消耗一张护身符，降低队伍受伤风险。", () => resolveCombat("party", enemy, true), null, 1));
  }
  options.push(choice("观察地形，找机会脱身", "身法、伤势、地形和敌人强弱会影响脱身结果。", () => resolveCombat("flee", enemy), null, 1));
  if (enemy.name === "拦路劫修" && state.stones >= 4) options.push(choice("交四枚灵石，避免正面冲突", "保住体力，但劫修可能记住你的行踪。", () => { state.stones -= 4; state.pressure = Math.min(6, state.pressure + 1); state.fame -= 1; toast("你用灵石换来了脱身时间。"); }, null, 1));
  return { type: "冲突与抉择", title: `${enemy.name}拦住去路`, place: state.location, text: `${state.location === "苍梧渡" ? "坊市外的石桥" : "一段被灵潮扰乱的旧路"}上，${enemy.name}拦住了你。对方的威胁约有${enemy.power}分强，身后没有援兵的动静。你可以战斗、求助或离开，没人会替你选。`, tags: [`对手威胁 ${enemy.power}`, state.party.length ? "有人同行" : "当前独行"], choices: options };
}
function combatPower(withParty, prepared = false) {
  const realmPower = [1, 3, 5, 7, 10, 12, 16, 20, 24][state.realm] || 1;
  const pathBonus = state.path.includes("剑修") ? 4 : state.path.includes("魔道") ? 3 : state.path.includes("御兽") ? 3 : state.path.includes("符律") ? 2 : state.path.includes("丹修") ? 1 : 0;
  const strength = { song: 3, shi: 2, yun: 2, yue: 5, luo: 4, qiao: 2, ying: 3, ling: 4, he: 5, man: 2, beast: 4 };
  const friends = withParty ? state.party.reduce((sum, id) => sum + (strength[id] || 0), 0) : 0;
  const schoolTraining = Math.min(4, schoolSupportCount()) * 2;
  return realmPower + pathBonus + friends + schoolTraining + Math.floor(Math.random() * 5) + (state.hp > 65 ? 2 : 0) + (prepared ? 7 : 0);
}
function resolveCombat(mode, enemy, prepared = false) {
  if (mode === "flee") {
    const chance = Math.max(15, Math.min(88, 62 + state.realm * 4 - enemy.power * 3 + (state.party.length ? 5 : 0) + (state.path.includes("御兽") && state.beastTamed ? 6 : 0) - (state.hp < 35 ? 14 : 0)));
    if (Math.random() * 100 < chance) {
      state.fame += 1;
      toast("你借地形脱身，没有让这场冲突继续扩大。");
    } else {
      state.hp -= Math.min(34, 9 + enemy.power * 2);
      toast("脱身时仍受了伤，但你终于拉开了距离。");
    }
    return;
  }
  if (prepared) state.inventory.talismans = Math.max(0, state.inventory.talismans - 1);
  const power = combatPower(mode === "party", prepared);
  if (power >= enemy.power + Math.floor(Math.random() * 5)) {
    state.stones += enemy.reward;
    state.xp = Math.min(100, state.xp + 16);
    state.fame += 2;
    state.hp -= Math.max(0, (mode === "party" ? 3 : 8) - (prepared ? 4 : 0));
    if (enemy.name === "裂潮妖狼" && state.clues < 3 && Math.random() < .45) addClue();
    toast(mode === "party" ? "你们互相掩护，合力击退了对手。" : "你抓住破绽赢下这一战，代价是受了些轻伤。");
  } else {
    state.hp -= Math.max(5, Math.min(48, 15 + enemy.power * 2) - (prepared ? 8 : 0));
    state.xp = Math.min(100, state.xp + 8);
    if (mode === "party" && state.party[0] !== "beast") state.trust[state.party[0]] = clampRelation((state.trust[state.party[0]] || 0) + 3);
    toast("这一战没有打赢。你们付出代价后找机会撤开，伤势需要尽快处理。");
    if (state.hp <= 0) { state.hp = 18; state.stones = Math.max(0, state.stones - 3); state.day += 3; toast("你在渡口医馆醒来，昏睡了三日，身上少了些灵石。"); }
  }
  state.hp = Math.max(1, state.hp);
}
function eventClimax() {
  const support = state.faction !== "未入门" && !state.faction.includes("自由身");
  const allies = localSupportCount();
  const schoolSupport = schoolSupportCount();
  const choices = [
    choice("通知周边村落与商队先撤离，再尝试稳住古阵", "你优先保护附近的人；天隙的秘密仍有一部分没有揭开。", () => resolveClimax("守望者"), "ending"),
    choice("和愿意同行的人一起封存阵眼", "若人手与准备够，古阵会暂时沉寂；否则要承担受伤风险。", () => resolveClimax("封阵者"), "ending", 2),
    choice("趁灵潮聚集时取走阵心的古物", "你可能得到珍贵机缘，也可能把后续危险带回世间。", () => resolveClimax("拾遗者"), "ending", 1),
    choice("把线索交给当地势力，回苍梧渡过自己的日子", "你不再追逐天隙，仍会记得这段旅程中的人。", () => resolveClimax("归乡客"), "ending", 1)
  ];
  if (allies >= 2) choices.unshift(choice("召集各地盟友，共同商议阵眼归属", "沿途建立的信任让多个地方愿意先谈判，再决定如何处置古阵。", () => resolveClimax("缔约者"), "ending", 2));
  if (schoolSupport >= 2) choices.unshift(choice("请师父与同门按各自专长协助封阵", "师父和同门愿意与你并肩，但他们会按自己的判断行动。", () => resolveClimax("师门共阵"), "ending", 2));
  return {
    type: "第一卷·天隙异动", title: "天隙深处传来回声", place: "天隙外沿",
    text: `你收集到的${state.clues}条线索在同一处古阵上拼合。天隙里传出的并非呼唤，更像是某种古老机关重新启动的声响。灵潮正在聚集，周围的商队和村落还不知道发生了什么。${support ? `你所属的${state.faction}也派人赶来，但他们对如何处置古阵意见不一。` : "你没有宗门替你安排立场，附近的人都在等消息。"}`,
    tags: ["主线节点", `灵潮压力 ${state.pressure}/6`, `地方支援 ${allies}/8`, `师门支援 ${schoolSupport}/4`, state.partner ? `道侣：${NPCS[state.partner].name}` : "仍可独自决定"], choices
  };
}
function resolveClimax(route) {
  state.flags.climaxResolved = true;
  let title = route;
  let body = "";
  if (route === "守望者") {
    state.fame += 4; state.pressure = Math.max(0, state.pressure - 2);
    body = "你把撤离路线写在渡口告示上，和愿意帮忙的人一户户敲门。古阵的异象暂时平息，很多人不知道是谁做的，但你留下了自己的路标。";
  } else if (route === "缔约者") {
    const allies = localSupportCount() + schoolSupportCount();
    state.pressure = Math.max(0, state.pressure - 4); state.fame += 6; state.stones += allies * 2;
    body = "你把各地留下的证词、航线与水脉约定带到阵前。宗门、皇朝、百族与商旅各自派人到场；没有人得到古阵的独占权，但更多地方拿到了共同监看它的机会。";
  } else if (route === "封阵者" || route === "师门共阵") {
    const localAid = localSupportCount() * 2 + schoolSupportCount() * 3;
    const power = combatPower(true) + state.clues * 2 + localAid + (state.faction === "未入门" ? 0 : 4);
    if (power >= 17) { state.pressure = Math.max(0, state.pressure - 3); state.fame += 3; state.xp = Math.min(100, state.xp + 22); body = `你们用阵纹、符箓与彼此的掩护封住了阵眼。天隙的回声暂歇，同行者仍有自己的去处，却都记得这次并肩。${schoolSupportCount() ? "师父与同门各守一处阵脚，配合来自平日积累的信任。" : ""}`; }
    else { state.hp = Math.max(1, state.hp - 20); state.pressure = Math.min(6, state.pressure + 1); body = "阵眼没有完全封住，你们只能压下最危险的一段。你受了伤，天隙的异动仍会继续，但周边暂时安全。"; }
  } else if (route === "拾遗者") {
    state.stones += 12; state.xp = Math.min(100, state.xp + 30); state.pressure = Math.min(6, state.pressure + 2); state.fame += 1;
    body = "你取走一枚温热的古代阵核，得到灵石与修为，也让一段未明的力量跟随你离开裂谷。以后会有人来打听它的下落。";
  } else {
    state.stones += 3; state.hp = Math.min(state.maxHp, state.hp + 12); state.pressure = Math.max(0, state.pressure - 1);
    body = "你把线索留给愿意接手的人，回到苍梧渡继续自己的生活。天隙仍有谜团，但你的选择同样属于这段历史。";
  }
  if (state.partner) body += ` ${NPCS[state.partner].name}尊重你的决定，也继续处理她自己的目标；你们约定之后再谈各自看见的未来。`;
  state.pendingEnding = { title: `第一卷结局：${title}`, body };
  recordEnding(state.pendingEnding.title);
}
function eventEnding() {
  const ending = state.pendingEnding || { title: "新的日子", body: "天亮后，你又有了自己的安排。" };
  return {
    type: "卷终余韵", title: ending.title, place: state.location,
    text: `${ending.body}\n\n照夜界没有停下。宗门、商队、朋友与道侣会继续走自己的路；你也可以继续探索，或从头开始另一段人生。`,
    tags: ["结局会记录在本机", "仍可继续周游此界"], choices: [
      choice("把这段经历收进行囊，继续在照夜界行走", "你可以先安排接下来的生活；之后的相逢仍会留下这段因果。", () => { state.pendingEnding = null; state.location = "苍梧渡"; }),
      choice("留在此处休整几日，再决定下一步", "你先把生活安顿好，天隙的故事暂时告一段落。", () => { state.pendingEnding = null; state.location = "苍梧渡"; state.hp = Math.min(state.maxHp, state.hp + 20); }, "layLow", 2)
    ]
  };
}
function eventCatastrophe(data = {}) {
  if (data.kind === "raid") return {
    type: "低概率重大事件 · 魔门劫掠", title: `枯骨门夜袭${state.location}`, place: state.location,
    text: `夜半，数名戴着骨面具的邪修闯入${state.location}，搜掠财物并对阻拦者下了杀手。守夜警钟被人截断，附近的人还没来得及聚拢。这伙人自称枯骨门，与赤烬教并无瓜葛。你修为尚浅，眼下先要决定怎样活过今夜。`,
    tags: ["重大事件 · 全局低概率", "躲藏、撤离或迎战"], choices: [
      choice("躲进附近的石室，等邪修离开后再出去", "你保住了自己，但没能顾上附近的人。", () => { state.flags.demonRaid = true; state.hp -= 3; state.pressure = Math.min(6, state.pressure + 1); recordCrisis(`枯骨门劫掠${state.location}`, "你藏身石室躲过搜捕；附近住处受损，幸存者正在清点伤亡。"); }),
      choice("带周围的人沿安全路线撤离", "你试着在追兵赶到前把人带出危险地带；同行者和师门支援能提高成功机会。", () => {
        const escaped = combatPower(true) + schoolSupportCount() >= 6 + state.pressure;
        state.flags.demonRaid = true; state.flags.raidRefugees = true; state.flags.crisisAid = true;
        state.fame += escaped ? 3 : 1; state.hp -= escaped ? 4 : 14;
        state.pressure = Math.max(0, Math.min(6, state.pressure + (escaped ? -1 : 1)));
        recordCrisis(`枯骨门劫掠${state.location}`, escaped ? "你带大半邻里脱险，巡夜队已赶来接应。" : "你带出一部分邻里，自己也受了伤；附近仍有人失联。");
      }),
      choice("在巷口拖住领头邪修", "正面对抗风险很高；你和同伴的实力会决定能否逼退他。", () => {
        const won = combatPower(true) >= 9 + state.pressure;
        state.flags.demonRaid = true;
        if (won) { state.flags.raidRefugees = true; state.flags.crisisAid = true; state.fame += 3; state.pressure = Math.max(0, state.pressure - 1); addClue(); recordCrisis(`枯骨门劫掠${state.location}`, "领头邪修被迫撤走，附近住处保住了大半；骨面具上的印记留下了线索。"); }
        else { state.hp -= 22; state.pressure = Math.min(6, state.pressure + 1); recordCrisis(`枯骨门劫掠${state.location}`, "你没能拦住领头邪修，受伤后被附近人拖走；当地损失惨重。"); }
      })
    ]
  };
  if (data.kind === "calamity") {
    const disaster = state.location === "苍梧渡" ? "灵潮黑雨倒灌旧渠" : state.location === "青篁林" || state.location === "雾岭药谷" ? "山洪掀开地底阵泥" : state.location === "霜河关" ? "雪崩压向关外营地" : state.location === "百药泽" ? "泽水倒灌，药田水脉乱流" : state.location === "千岛渡" ? "逆潮风暴卷向港口" : state.location === "天隙外沿" ? "地脉震裂，裂隙逼近撤离营地" : "地脉突然暴动";
    return {
      type: "低概率重大事件 · 天灾", title: disaster, place: state.location,
      text: `没有征兆，地面与水脉同时发出闷响。${disaster}正在吞没道路与低处的屋舍，附近的人慌忙寻找高地。灾变可能来自灵潮，也可能是古阵受损后的连锁反应；你有片刻时间选择。`,
      tags: ["重大事件 · 天候与地脉会因地点变化", "你的选择会影响救援与后续局势"], choices: [
        choice("先躲进高处的石屋，等洪流过去", "你避开最危险的一阵冲击，但周围道路仍被冲毁。", () => { state.flags.calamity = true; state.hp -= 3; state.pressure = Math.min(6, state.pressure + 1); recordCrisis(`天灾：${disaster}`, "你及时躲进高处，附近道路与低处屋舍受损，救援还在赶来。"); }),
        choice("协助附近的人撤到安全地带", "体力、同伴和师门援手会影响能救下多少人。", () => {
          const rescued = combatPower(true) + schoolSupportCount() * 2 >= 9 + state.pressure;
          state.flags.calamity = true; state.flags.calamityAid = true; state.flags.crisisAid = true;
          state.fame += rescued ? 3 : 1; state.hp -= rescued ? 5 : 15;
          state.pressure = Math.max(0, Math.min(6, state.pressure + (rescued ? -1 : 1)));
          recordCrisis(`天灾：${disaster}`, rescued ? "你带人撤离了主要受灾地，救援队接手后续安置。" : "你救出了一部分人，也在余震中受伤；仍有失联者等待搜寻。");
        }),
        choice("沿着裂开的地脉查找灾变源头", "查明原因可能减轻后续灵潮；若判断失误，你会被余震波及。", () => {
          const found = state.realm * 3 + schoolSupportCount() + Math.random() * 6 >= 6 + state.pressure;
          state.flags.calamity = true; state.flags.calamitySurveyed = true;
          if (found) { addClue(); state.xp = Math.min(100, state.xp + 8); state.pressure = Math.max(0, state.pressure - 1); recordCrisis(`天灾：${disaster}`, "你找到一处被堵塞的灵脉节点并留下标记，附近修士已据此布置疏导阵。"); }
          else { state.hp -= 12; state.pressure = Math.min(6, state.pressure + 1); recordCrisis(`天灾：${disaster}`, "你被余震逼退，只来得及标出危险区，成因仍未查清。"); }
        })
      ]
    };
  }
  return {
    type: "低概率重大事件 · 高阶斗法余波", title: "天外交手，山河失色", place: state.location,
    text: "天隙方向忽然亮起两道无法直视的灵光。远在云层之上的强大修士正在交手，剑意与法术碰撞后，余波越过山河轰然落下。那场争斗与你无关，可碎石、罡风和失控的灵压正朝此处席卷。",
    tags: ["强者交锋不以凡人死活为念", state.realm <= 1 ? "修为尚浅，存在猝死风险" : "境界与援手会影响受伤程度"], choices: [
      choice("立刻躲到背风岩壁后", "你放弃观察战局，先避开最直接的冲击。", () => { const damage = Math.max(2, 12 - state.realm * 2 - state.party.length * 2 - schoolSupportCount()); state.flags.shockSurvived = true; state.hp -= damage; recordCrisis("高阶修士斗法余波", "你躲过正面冲击，但附近道路被碎石封住，伤者仍需要救援。"); }),
      choice("护住被卷倒的伤者，再一起撤离", "同行者与师门支援能帮你护住更多人，失败也会付出伤势代价。", () => {
        const saved = combatPower(true) + schoolSupportCount() * 2 >= 11;
        state.flags.shockSurvived = true; state.flags.shockRescue = true; state.flags.crisisAid = true;
        state.fame += saved ? 2 : 1; state.hp -= saved ? 7 : 19;
        if (saved) addClue();
        recordCrisis("高阶修士斗法余波", saved ? "你护送伤者离开落石带，也记下了余波最强的方向。" : "你救出几名伤者后被余波掀翻；更多人由赶来的修士接走。");
      }),
      choice("趁冲击间隙记下余波落点", "阵纹和落点也许能解释天隙的异变，但靠近冲击带很危险。", () => {
        const traced = state.realm * 3 + state.clues + schoolSupportCount() + Math.random() * 6 >= 6 + state.pressure;
        state.flags.shockSurvived = true; state.flags.shockTraced = true;
        if (traced) { addClue(); state.xp = Math.min(100, state.xp + 10); recordCrisis("高阶修士斗法余波", "你记下了余波落点与古阵纹路的重合处，获得一条可靠线索。"); }
        else { state.hp -= 15; recordCrisis("高阶修士斗法余波", "风压把你推离落点，你受了伤，只确认余波来自天隙方向。"); }
      })
    ]
  };
}
function eventDeath() {
  const cause = state.deathCause || "一场突如其来的灾厄";
  return {
    type: "此世终章", title: "命数未尽？此生已止", place: state.location,
    text: `强者交锋的余波没有针对你，你尚浅的修为却承受不住那股力量。你的死因：${cause}。这段人生会记在轮回碑上；照夜界还会继续向前。`,
    tags: ["死亡结局已记录", "开启下一世后，故事从新的相逢开始"], choices: [
      choice("把此世刻上轮回碑，开启下一世", "轮回碑会保留这次死亡记录；新的主角重新踏入照夜界。", () => { state = freshState(); }, "arrival", 0)
    ]
  };
}
function eventRecovery() {
  return {
    type: "伤势与休整", title: "医馆的三日", place: "苍梧渡",
    text: "你在乔云舒常去的医馆醒来。外伤已处理，仍需要几天安静调息。照夜界不会因为你卧床就停下：窗外有人谈起了新的商路与灵潮。",
    tags: ["恢复气血", "三日后"], choices: [
      choice("安心休养，听医馆里的人说话", "你恢复了大半，也得到一条坊市消息。", () => { state.hp = Math.min(state.maxHp, state.hp + 48); if (state.clues < 3) addClue(); }, null, 3),
      choice("只休息一天就起身，先去看望同行者", "恢复有限，但你没有让同伴久等。", () => { state.hp = Math.min(state.maxHp, state.hp + 25); if (state.party.length && state.party[0] !== "beast") state.trust[state.party[0]] = clampRelation((state.trust[state.party[0]] || 0) + 4); }, null, 1)
    ]
  };
}
function choice(label, hint, apply, next = null, days = 1, disabled = false, disabledHint = "灵石不足") { return { label, hint, apply, next, days, disabled, disabledHint }; }
function currentAgenda(id) {
  const person = NPCS[id];
  if (!person) return "整理自己的行程";
  return person.agenda[(Math.floor(state.day / (id === "qiao" ? 3 : 4)) + state.tide) % person.agenda.length];
}
function makeEvent(id, data = {}) {
  switch (id) {
    case "arrival": return eventArrival();
    case "worldIntro": return eventWorldIntro();
    case "recruitment": return eventRecruitment();
    case "market": return eventMarket();
    case "cultivation": return eventCultivation();
    case "rumor": return eventRumor();
    case "world": return eventWorld();
    case "forest": return eventForest();
    case "riftScout": return eventRiftScout();
    case "riftCall": return eventRiftCall();
    case "friend": return eventFriend(data);
    case "follower": return eventFollower(data);
    case "commission": return eventCommission();
    case "craft": return eventCraft();
    case "regional": return eventRegional();
    case "local": return eventLocal(data);
    case "mentor": return eventMentor();
    case "sectLife": return eventSectLife();
    case "beast": return eventBeast();
    case "tide": return eventTide();
    case "trial": return eventTrial();
    case "combat": return eventCombat(data);
    case "meet": return characterEvent(data.person || "yun");
    case "partner": return eventPartner();
    case "layLow": return eventLayLow();
    case "breakthrough": return eventBreakthrough();
    case "climax": return eventClimax();
    case "ending": return eventEnding();
    case "catastrophe": return eventCatastrophe(data);
    case "death": return eventDeath();
    case "recovery": return eventRecovery();
    default: return eventMarket();
  }
}
function showEvent(id, data = {}) {
  if (id === "random") return selectNextEvent();
  if (id === "catastrophe") {
    if (!data.kind) {
      const weights = [
        ["raid", state.location === "苍梧渡" ? 6 : state.location === "宗门驻地" ? 3 : 2],
        ["calamity", ["霜河关", "百药泽", "千岛渡", "雾岭药谷"].includes(state.location) ? 5 : 3],
        ["aftershock", state.location === "天隙外沿" ? 8 : 1]
      ];
      let draw = Math.random() * weights.reduce((sum, [, weight]) => sum + weight, 0);
      data = { ...data, kind: weights.find(([, weight]) => (draw -= weight) < 0)[0] };
    }
    if (!data.rolled) {
      data = { ...data, rolled: true };
      if (data.kind === "aftershock" && state.realm <= 1) {
        const deathChance = Math.max(.08, .22 + Math.max(0, state.pressure - 1) * .025 - Math.min(.12, state.party.length * .05) - Math.min(.08, schoolSupportCount() * .025));
        if (Math.random() < deathChance) { killPlayer("高阶修士交战余波"); id = "death"; data = { cause: state.deathCause }; }
      }
    }
  }
  if (id === "local" && !data.storyId) {
    const stories = LOCATION_STORIES[state.location] || [];
    const fresh = stories.filter(item => !(state.localSeen[item.id] > 0));
    const pool = fresh.length ? fresh : stories;
    if (pool.length) data = { ...data, storyId: pool[Math.floor(Math.random() * pool.length)].id };
  }
  state.eventId = eventExists(id) ? id : "market";
  state.eventData = data;
  state.phase = "event";
  state.lastChoice = null;
  if (state.eventId === "local" && data.storyId) state.localSeen[data.storyId] = (state.localSeen[data.storyId] || 0) + 1;
  if (state.eventId === "local") for (const person of LOCATION_PEOPLE[data.storyId] || []) markMet(person);
  if (state.eventId === "sectLife") {
    const school = SCHOOL_LIFE.find(item => item.id === state.school.id);
    if (school?.peers.length) {
      const peer = school.peers[state.school.cycle % school.peers.length];
      if (!state.school.metPeers.includes(peer.id)) {
        state.school.metPeers.push(peer.id);
        state.school.peerBonds[peer.id] = Math.max(10, state.school.peerBonds[peer.id] || 0);
      }
      state.school.cycle += 1;
    }
  }
  state.recent.push(state.eventId);
  state.recent = state.recent.slice(-3);
  if (window.matchMedia("(max-width: 760px)").matches) setMobileView("event");
  render();
}
function urgentEvent() {
  if (state.flags.dead) return "death";
  if (state.hp < 28) return "recovery";
  if (state.xp >= 100 && state.realm < REALMS.length - 1) return "breakthrough";
  if (!state.flags.climaxResolved && state.clues >= 2 && state.location === "天隙外沿") return "climax";
  return null;
}
function selectNextEvent() {
  if (state.flags.dead) return showEvent("death", { cause: state.deathCause });
  if (state.school.id && state.school.mentor === null) return showEvent("mentor");
  const urgent = urgentEvent();
  if (urgent) return showEvent(urgent);
  const candidates = [];
  const add = (id, weight, condition = true, data = {}) => { if (condition) candidates.push({ id, weight, data }); };
  const town = state.location === "苍梧渡";
  const woods = state.location === "青篁林";
  const mist = state.location === "雾岭药谷";
  const rift = state.location === "天隙外沿";
  const north = state.location === "霜河关";
  const marsh = state.location === "百药泽";
  const island = state.location === "千岛渡";
  const capital = state.location === "云京驿城";
  const wild = woods || mist || rift || north || marsh || island;
  const beastHabitat = woods || mist || north;
  const regional = north || marsh || island || capital;
  const tidal = town || mist || marsh || island;
  add("market", town ? 4 : 0, town);
  add("cultivation", 2 + (state.realm > 0 ? 1 : 0));
  add("rumor", 1 + Math.min(2, state.pressure));
  add("world", state.pressure >= 3 ? 3 : 0, state.pressure >= 3);
  add("forest", woods || mist ? 5 : 0, woods || mist);
  add("regional", regional ? 4 : 0, regional);
  add("local", (LOCATION_STORIES[state.location]?.length || 0) ? 4.5 : 0, state.turn > 1 && !!LOCATION_STORIES[state.location]?.length);
  add("catastrophe", .3 + (state.flags.layLow ? .3 : 0) + (state.pressure >= 4 ? .2 : 0) + (rift ? .15 : 0), state.turn > 2);
  add("commission", 1.5, state.turn > 1);
  add("trial", 2.5, state.flags.recruited && state.faction !== "未入门" && !state.faction.includes("自由身"));
  add("sectLife", 3.5, !!(state.school.id && state.school.mentor !== null && state.school.introduced) && state.turn > 2);
  add("tide", 2, tidal && state.tide >= 3);
  add("beast", beastHabitat ? 2 : 0, beastHabitat);
  add("riftScout", rift ? 5 : 0, rift);
  add("riftCall", !rift && state.clues >= 2 && state.day >= 8 ? 3 : 0, !rift && state.clues >= 2 && state.day >= 8 && !state.flags.climaxResolved);
  const friendId = north ? "he" : "song";
  const friendPlace = north || woods || town;
  add("friend", friendPlace ? (state.friends.includes(friendId) ? 1 : 3) : 0, state.turn > 1 && friendPlace, { person: friendId });
  const followerId = island ? "man" : "shi";
  const followerPlace = island || mist || town;
  const followerReturned = !state.awayUntil[followerId] || state.awayUntil[followerId] <= state.day;
  add("follower", followerPlace ? (state.followers.includes(followerId) ? 1 : 2) : 0, state.turn > 2 && followerPlace && followerReturned, { person: followerId });
  const enemy = wild ? { name: island ? "雾潮海兽" : north ? "霜牙妖熊" : "裂潮妖狼", power: 5 + state.pressure + (rift ? 3 : 0), reward: 5 } : { name: "拦路劫修", power: 4 + state.pressure, reward: 4 };
  add("combat", (wild ? 2 : 0) + Math.max(0, state.pressure - 2), state.turn > 2, { enemy });
  if (state.flags.layLow || state.faction.includes("自由身")) add("layLow", town ? 4 : 1);
  for (const id of ROMANCES) {
    const locationOk = id === "yun" ? (town || mist || state.faction.includes("丹谷")) : id === "yue" ? (woods || state.location.includes("剑宗") || state.faction.includes("剑宗")) : id === "luo" ? (mist || town || state.faction.includes("赤烬")) : id === "qiao" ? (town || island || state.faction.includes("商盟")) : id === "ying" ? (capital || rift || state.faction.includes("巡灵司")) : (marsh || mist || woods || state.faction.includes("百族会盟"));
    const access = state.met[id] || id === "yun" || id === "qiao" || (id === "yue" && (state.turn > 2 || state.faction.includes("剑宗"))) || (id === "luo" && (state.turn > 2 || state.faction.includes("赤烬"))) || (id === "ying" && (state.turn > 3 || state.faction.includes("巡灵司"))) || (id === "ling" && (state.turn > 3 || state.faction.includes("百族会盟")));
    const returned = !state.awayUntil[id] || state.awayUntil[id] <= state.day;
    add("meet", state.met[id] ? 2 : 1, locationOk && access && returned && state.turn > 1, { person: id });
  }
  if (state.met[state.partner] && state.partner && state.day - state.lastPartnerEvent >= 5) add("partner", 4);
  if (!state.recent.includes("riftScout") && rift && state.clues < 2) add("riftScout", 5);
  const eligible = candidates.filter(c => !state.recent.slice(-2).includes(c.id));
  const pool = eligible.length ? eligible : candidates;
  const total = pool.reduce((sum, c) => sum + c.weight, 0);
  let pick = Math.random() * total;
  for (const item of pool) { pick -= item.weight; if (pick <= 0) return showEvent(item.id, item.data); }
  return showEvent("market");
}
function applyChoice(option) {
  if (option.disabled) return;
  addHistory(option.label);
  option.apply?.();
  passDays(option.days ?? 1);
  if (state.flags.dead) showEvent("death", { cause: state.deathCause });
  else if (option.next === "random") selectNextEvent();
  else if (option.next) showEvent(option.next);
  else {
    const urgent = urgentEvent();
    if (urgent) showEvent(urgent);
    else {
      state.lastChoice = { label: option.label, hint: option.hint };
      state.phase = "action";
      render();
    }
  }
  updateUI();
  saveState();
}
function renderEvent() {
  const event = makeEvent(state.eventId, state.eventData);
  const isActionPhase = state.phase === "action";
  $("eventType").textContent = isActionPhase ? "事件已处理 · 自行安排" : event.type;
  $("eventPlace").textContent = event.place || state.location;
  $("eventTitle").textContent = event.title;
  $("eventText").textContent = event.text;
  $("eventDetails").replaceChildren(...(event.tags || []).map(text => { const chip = document.createElement("span"); chip.className = "detail-chip"; chip.textContent = text; return chip; }));
  const root = $("choices");
  const result = $("eventResult");
  result.hidden = !isActionPhase;
  if (isActionPhase) {
    root.replaceChildren();
    const copy = document.createElement("p");
    copy.textContent = state.lastChoice ? `你选择了：${state.lastChoice.label}。${state.lastChoice.hint}` : "这件事暂告一段落。现在可以自行安排下一步。";
    const button = document.createElement("button");
    button.type = "button";
    button.className = "event-next-button";
    button.textContent = "前往自行安排";
    button.addEventListener("click", () => {
      setMobileView("actions");
      $("freeActions").scrollIntoView({ behavior: "smooth", block: "center" });
    });
    result.replaceChildren(copy, button);
    return;
  }
  result.replaceChildren();
  root.replaceChildren(...event.choices.map((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `choice${option.disabled ? " locked" : ""}`;
    button.disabled = !!option.disabled;
    const number = document.createElement("span"); number.className = "choice-index"; number.textContent = String(index + 1).padStart(2, "0");
    const copy = document.createElement("span");
    const title = document.createElement("b"); title.textContent = option.label;
    const hint = document.createElement("small"); hint.textContent = option.disabled ? option.disabledHint : option.hint;
    copy.append(title, hint); button.append(number, copy);
    button.addEventListener("click", () => applyChoice(option));
    return button;
  }));
}
function renderPeople() {
  const root = $("peopleList");
  const ids = Object.keys(NPCS).filter(id => state.met[id]);
  $("peopleFootnote").classList.toggle("hidden", !ids.length);
  if (!ids.length) {
    root.replaceChildren(Object.assign(document.createElement("p"), { className: "empty-note", textContent: "还没有遇见同行之人。相逢会在旅途事件中自然发生。" }));
    return;
  }
  root.replaceChildren(...ids.map(id => {
    const person = NPCS[id];
    const button = document.createElement("button"); button.type = "button"; button.className = "person-card"; button.addEventListener("click", () => openPerson(id));
    const avatar = document.createElement("span"); avatar.className = "avatar"; avatar.dataset.person = id; avatar.style.setProperty("--avatar", person.color); avatar.textContent = person.glyph;
    const info = document.createElement("span"); info.className = "person-info";
    const name = document.createElement("b"); name.textContent = person.name + (state.partner === id ? " · 道侣" : "");
    const role = document.createElement("small"); role.textContent = state.met[id] ? person.role : "尚未相识 · 各有行程";
    info.append(name, role);
    const score = document.createElement("span"); score.className = "relation-score";
    score.innerHTML = state.met[id] ? `好感 ${state.affection[id] || 0}<span>信任 ${state.trust[id] || 0}</span>` : "未相识";
    button.append(avatar, info, score); return button;
  }));
}
function renderCompanions() {
  const root = $("companionsList");
  const ids = [...new Set([...state.friends, ...state.followers, ...(state.partner ? [state.partner] : []), ...(state.beastTamed ? ["beast"] : [])])];
  if (!ids.length) { root.innerHTML = '<p class="empty-note">还没有结伴的朋友或追随者。</p>'; return; }
  root.replaceChildren(...ids.map(id => {
    const row = document.createElement("div"); row.className = "companion-row";
    const role = id === "beast" ? "灵兽" : ROMANCES.includes(id) ? "道侣" : state.friends.includes(id) ? "朋友" : "追随者";
    const away = state.awayUntil[id] > state.day;
    const status = away ? `外出至第${state.awayUntil[id]}日` : state.party.includes(id) ? "同行" : "暂不同行";
    const name = id === "beast" ? "霜纹灵狐" : NPCS[id].name;
    const copy = document.createElement("span"); copy.innerHTML = `<b>${name}</b><br><small>${role} · ${status}</small>`;
    const button = document.createElement("button"); button.type = "button"; button.className = "toggle-party"; button.textContent = state.party.includes(id) ? "离队" : "同行";
    button.disabled = away || state.phase !== "action";
    button.title = away ? "这位同行者暂时外出" : state.phase !== "action" ? "先处理当前事件，再安排同行队伍" : "调整是否同行";
    button.addEventListener("click", () => {
      if (state.phase !== "action") { toast("先处理当前事件，再安排同行队伍。"); return; }
      if (state.awayUntil[id] > state.day) { toast("这位同行者暂时外出，回来后才能调整。"); return; }
      if (!state.party.includes(id) && state.party.length >= 3) { toast("同行队伍最多三位。请先安排一位伙伴休整。"); return; }
      state.party = state.party.includes(id) ? state.party.filter(x => x !== id) : [...state.party, id];
      addHistory(`${name}${state.party.includes(id) ? "加入同行" : "暂时离队"}`); saveState(); updateUI();
    });
    row.append(copy, button); return row;
  }));
}
function renderSchool() {
  const panel = $("schoolPanel");
  const root = $("schoolList");
  const school = SCHOOL_LIFE.find(item => item.id === state.school.id);
  panel.classList.toggle("hidden", !school);
  if (!school) { root.replaceChildren(); return; }
  $("schoolSummary").textContent = `${school.name} · 门内人情 ${state.school.favor}`;
  if (!state.school.introduced || state.school.mentor === null) {
    root.replaceChildren(Object.assign(document.createElement("p"), { className: "empty-note", textContent: "你已入门，师父与同门会在择师事件中正式相识。" }));
    return;
  }
  const mentor = school.mentors[state.school.mentor];
  const mentorRow = document.createElement("article"); mentorRow.className = "school-member school-mentor";
  mentorRow.innerHTML = `<div class="school-person-head"><span class="school-seal">师</span><span><b>${mentor.name}</b><small>${school.mentorLabel} · ${mentor.title}</small></span><strong>${state.school.mentorBond}</strong></div><p>${mentor.temperament}</p><small class="school-lesson">教法：${mentor.lesson}</small>`;
  const peers = school.peers.filter(peer => state.school.metPeers.includes(peer.id)).map(peer => {
    const row = document.createElement("article"); row.className = "school-member";
    const bond = state.school.peerBonds[peer.id] || 0;
    row.innerHTML = `<div class="school-person-head"><span class="school-seal">${peer.name[0]}</span><span><b>${peer.name}</b><small>${peer.title} · 情分 ${bond}</small></span><span class="school-bond"><i style="width:${bond}%"></i></span></div><p>${peer.temperament}</p><small class="school-lesson">心愿：${peer.goal}</small>`;
    return row;
  });
  const peerNote = Object.assign(document.createElement("p"), {
    className: "empty-note",
    textContent: "其他同门会在师门事件中逐渐相识。"
  });
  root.replaceChildren(mentorRow, ...(peers.length ? peers : [peerNote]));
}
function renderMap() {
  const root = $("mapList");
  root.replaceChildren(...PLACES.map(place => {
    const isCurrent = state.location === place.id || (place.id === "宗门驻地" && ["归鹤剑宗", "松风丹谷", "赤烬教驻地", "万方商盟分号"].includes(state.location));
    const button = document.createElement("button"); button.type = "button"; button.className = `map-place${isCurrent ? " current" : ""}`;
    button.innerHTML = `${place.id}<small>${place.desc}</small>`;
    button.addEventListener("click", () => travel(place)); return button;
  }));
}
function updateUI() {
  const canAct = state.phase === "action";
  $("actionGrid").classList.toggle("hidden", !canAct);
  $("actionLockNote").classList.toggle("hidden", canAct);
  $("mapPanel").classList.toggle("hidden", !canAct);
  const year = 317 + Math.floor((state.day - 1) / 360);
  const month = Math.floor(((state.day - 1) % 360) / 30) + 1;
  const date = ((state.day - 1) % 30) + 1;
  $("dateLabel").textContent = `灵潮纪 ${year} 年 · ${["春", "夏", "秋", "冬"][Math.floor((month - 1) / 3)]}${month}月 · 第${date}日`;
  $("locationLabel").textContent = state.location;
  $("weatherLabel").textContent = state.tide >= 4 ? "灵潮涌动" : state.tide >= 2 ? "云气渐浓" : "潮息微明";
  $("realmLabel").textContent = REALMS[state.realm] || "凡人";
  $("pathLabel").textContent = state.path;
  $("hpText").textContent = `${state.hp} / ${state.maxHp}`;
  $("hpBar").style.width = `${Math.max(0, Math.min(100, state.hp / state.maxHp * 100))}%`;
  $("xpText").textContent = `${state.xp} / 100`;
  $("xpBar").style.width = `${Math.max(0, Math.min(100, state.xp))}%`;
  $("stonesLabel").textContent = state.stones;
  $("fameLabel").textContent = state.fame;
  $("clueLabel").textContent = state.clues;
  $("partyLabel").textContent = state.party.length ? `${state.party.length} 人同行` : "独行";
  $("herbsLabel").textContent = state.inventory.herbs;
  $("talismanLabel").textContent = state.inventory.talismans;
  $("factionLabel").textContent = state.faction;
  $("goalCount").textContent = `${Math.min(state.clues, 2)} / 2`;
  $("goalBar").style.width = `${Math.min(100, state.clues * 50)}%`;
  const localNews = {
    "苍梧渡": "渡口照常开市，商队、散修与凡人都在打听下一段安全水路。",
    "宗门驻地": "山门前的引路信与讲道坪上的旧阵图，吸引了不少新来修士驻足。",
    "归鹤剑宗": "归鹤剑宗的晨课照常进行，试剑坪与夜巡册都有人按新规复核。",
    "松风丹谷": "松风丹谷的药柜与炼药房重新核对了交接记录，值守弟子留意着泉样变化。",
    "赤烬教驻地": "誓火司有人整理旧契与守誓灯的记录，续约之前会先问当事人的意愿。",
    "万方商盟分号": "沧河分号正在对账与调整泊位表，小商户也能查看货物交接记录。",
    "青篁林": "旧路标不断被新生竹根顶起，林中妖兽的活动范围正在变化。",
    "雾岭药谷": "药谷的灵藤长势异常，义诊药箱和采药人的行程都变得紧张。",
    "天隙外沿": "古阵回声在裂谷间传递，远处的营地开始准备撤离路线。",
    "云京驿城": "州郡官牒和巡灵司案卷同时流转，城门外仍有人等待赈济。",
    "霜河关": "烽台昼夜有人值守，镖队沿冰线寻找失联商旅。",
    "百药泽": "水渠的灵藤仍在生长，泽民与外来修士正在商议药种交换。",
    "千岛渡": "港口按新的潮汐表调整船期，岛民盼着失联药船平安归来。"
  }[state.location] || "驻地来往的修士正在商议下一步安排。";
  const aftermath = (...outcomes) => outcomes.filter(([flag]) => state.flags[flag]).map(([, text]) => text).join(" ");
  const localAftermath = {
    "苍梧渡": state.flags.portMap ? "渡口已张贴新水路图，夜航船会按新潮表绕开浅滩。" : state.flags.dockAid ? "先前被安置的船工开始互相照应，欠薪账也有人继续追查。" : "",
    "宗门驻地": state.flags.gateReferral ? "那封引荐信已得到复核，少年获准参加正式考校。" : state.flags.publicLesson ? "讲道坪留下了新阵图和不同意见的记录。" : "",
    "归鹤剑宗": aftermath(
      ["swordCare", "试剑坪把止血与检查伤势列入晨课，练剑前会先确认护具。"], ["swordRecords", "器具复核和试剑记录已经补齐，弟子可以按新规查证事故。"], ["swordWatchRoute", "夜巡交班新增路线与确认步骤，漏报异响的情况减少了。"],
      ["swordWatchAid", "夜巡弟子拿到了备用传讯符，交接争议仍待查清。"], ["swordChoice", "试剑坪允许受伤弟子自行决定是否继续，不再以进度催促。"], ["swordWatchRecords", "找回的交班页已经附入夜巡册，传讯空档也被标了出来。"]
    ),
    "松风丹谷": aftermath(
      ["danMedicineShare", "药柜补入了低风险解毒方，山下药柜也拿到配药记录。"], ["danDeliveryRecord", "送药路线和签收记录完成复核，药材交接有了凭据。"], ["danSpringCheck", "苦泉样本仍在复核，药谷暂时没有贸然发放解毒散。"],
      ["danVentPlan", "炼药房增加了通风安排，值守弟子会先把人带到上风处。"], ["danBatchCheck", "药材批次已分开封存，收料时会同时核对炉灰与草料。"], ["danJointReview", "看炉人与记药人开始共同复盘，后续药方会记录火候变化。"]
    ),
    "赤烬教驻地": aftermath(
      ["emberExitClause", "旧誓文书已补上自愿退出的条款，续约会先确认当事人意愿。"], ["emberContractReview", "旧契暂停追索的条款已有记录，誓火司可以继续处理争议。"], ["emberCoolingOff", "续誓谈话延后三日，当事人有时间独立决定。"],
      ["emberLampRecord", "守誓灯更换记录已经公开，不再单凭灯火指认违誓。"], ["emberWitnessCare", "被询问的教众可以拒绝作证，后续议事会等待确实证据。"], ["emberContractHold", "旧契暂时封存，教众正在重订守誓灯的使用规程。"]
    ),
    "万方商盟分号": aftermath(
      ["merchantOpenLedger", "交接账页向各家开放，缺损货物已有共同承担的办法。"], ["merchantAdvance", "分号垫付了急用货款，追查缺货船队的水路标记已存档。"], ["merchantReceiptRule", "货物入账需要完整凭证，缺少凭据的商户仍在补齐单据。"],
      ["merchantSharedTide", "泊位表为急用药船留出窗口，也给小船保留了退潮通道。"], ["merchantUrgentCargo", "急用药材已经入库，临时改泊费用还要继续追偿。"], ["merchantRouteReview", "潮汐、泊位和到货记录已放在一起复核，合约风险开始共同分担。"]
    ),
    "青篁林": state.flags.forestPact ? "采药路绕开兽道后，人和灵兽都能继续使用林中水源。" : state.flags.forestGlyph ? "竹根下的阵纹被记入路册，修士开始留意地脉变化。" : "",
    "雾岭药谷": state.flags.clinicBook ? "义诊药册开始在村医与药谷之间传抄。" : state.flags.clinicStock ? "药谷为急救药柜补上了新的药方。" : "",
    "天隙外沿": state.flags.riftEvac ? "营地撤离名册已核过，伤员和药材都有去向。" : state.flags.riftRecord ? "各方共享的回声记录减少了误判。" : "",
    "云京驿城": state.flags.capitalRelief ? "临时安置和药物发放开始按逐户核验的名单推进。" : state.flags.capitalPetition ? "请愿副页仍贴在州衙门口，村民可以自行确认条款。" : "",
    "霜河关": state.flags.northSignal ? "烽台报时已经校正，关外队伍会收到备用旗语。" : state.flags.northSupply ? "守军与夜哨拿到了热药和干衣。" : "",
    "百药泽": state.flags.marshPact ? "泽民和山下村落开始按约交换药种。" : state.flags.marshCare ? "上游暗渠疏通后，泽田水色恢复了些。" : "",
    "千岛渡": state.flags.islandBeacon ? "港口把外岛灯塔的求援信号重新列入值守表。" : state.flags.islandChart ? "新海图已交给岛民与船队共同使用。" : ""
  }[state.location] || "";
  const pressureNews = state.pressure >= 4 ? "天隙灵潮持续增强，附近势力开始准备应急方案。" : state.pressure >= 2 ? "异象沿各地商路传开，各方仍在观察。" : "远方暂时没有新的战报传来。";
  const crisisNews = state.lastCrisis && state.day - state.lastCrisis.day <= 20 ? `近日报讯：${state.lastCrisis.title}。${state.lastCrisis.outcome}` : "";
  $("worldText").textContent = `${localNews} ${localAftermath} ${pressureNews} ${crisisNews}`;
  $("pressureDots").replaceChildren(...Array.from({ length: 6 }, (_, i) => { const dot = document.createElement("i"); if (i < state.pressure) dot.className = "on"; return dot; }));
  $("tideNote").textContent = `灵潮层级 ${state.tide} · 每逢灵潮加深，野外危险与机缘都会增加。`;
  let endings = [];
  try { endings = JSON.parse(localStorage.getItem(ENDING_KEY) || "[]"); } catch { }
  $("endingCount").textContent = `已记下 ${Array.isArray(endings) ? endings.length : 0} 种`;
  $("endingMemory").textContent = Array.isArray(endings) && endings.length ? endings.slice(-3).join(" · ") : "你做出的选择会留下不同的结局记忆。";
  $("chronicle").replaceChildren(...(state.history.length ? state.history : ["你刚刚抵达照夜界，故事从河滩开始。"]).map(line => { const li = document.createElement("li"); li.textContent = line; return li; }));
  renderPeople(); renderCompanions(); renderSchool(); renderMap();
}
function render() { renderEvent(); updateUI(); }
function travel(place) {
  if (state.phase !== "action") { toast("先处理当前事件，再安排远行。" ); return; }
  const destination = place.id === "宗门驻地" && state.faction.includes("归鹤") ? "归鹤剑宗" : place.id === "宗门驻地" && state.faction.includes("丹谷") ? "松风丹谷" : place.id === "宗门驻地" && state.faction.includes("赤烬") ? "赤烬教驻地" : place.id === "宗门驻地" && state.faction.includes("商盟") ? "万方商盟分号" : place.id === "宗门驻地" && state.faction.includes("巡灵司") ? "云京驿城" : place.id === "宗门驻地" && state.faction.includes("百族会盟") ? "百药泽" : place.id;
  if (destination === state.location) { toast("你已经在这里了。"); return; }
  const days = place.travel;
  state.location = destination;
  passDays(days);
  addHistory(`远行至${state.location}`);
  selectNextEvent();
  updateUI();
  saveState();
}
function freeAction(action) {
  if (state.phase !== "action") { toast("先处理当前事件，再安排行动。" ); return; }
  if (action === "commission" || action === "craft") {
    showEvent(action);
  } else if (action === "cultivate") {
    state.xp = Math.min(100, state.xp + 30 + (state.path.includes("丹修") ? 8 : 0));
    state.hp = Math.min(state.maxHp, state.hp + 5);
    passDays(2); addHistory("闭关静修两日");
    if (state.xp >= 100 && state.realm < REALMS.length - 1) showEvent("breakthrough"); else selectNextEvent();
  } else if (action === "rest") {
    state.hp = Math.min(state.maxHp, state.hp + 32); passDays(1); addHistory("休整调息"); selectNextEvent();
  } else if (action === "social") {
    const ids = [...ROMANCES.filter(id => state.met[id] && (!state.awayUntil[id] || state.awayUntil[id] <= state.day)), ...state.friends, ...state.followers.filter(id => !state.awayUntil[id] || state.awayUntil[id] <= state.day)];
    if (!ids.length) { toast("还没有熟识的人。先在旅途中结交一位道友吧。"); return; }
    const id = state.partner && Math.random() < .55 ? state.partner : ids[Math.floor(Math.random() * ids.length)];
    if (ROMANCES.includes(id)) showEvent("meet", { person: id });
    else if (state.friends.includes(id)) showEvent("friend", { person: id });
    else showEvent("follower", { person: id });
    addHistory(`决定拜访${NPCS[id]?.name || "一位同行者"}`);
  } else if (action === "continue") {
    passDays(1);
    addHistory("继续赶路，等待新的机缘");
    selectNextEvent();
  }
  saveState(); updateUI();
}
function openPerson(id) {
  if (!state.met[id]) return;
  const person = NPCS[id]; dialogPerson = id;
  const personality = PERSONALITIES[id] || { temperament: "谨慎而有自己的处事方式", boundary: person.likes };
  const pronoun = ["song", "shi", "he"].includes(id) ? "他" : "她";
  const affinity = state.affection[id] || 0;
  const trust = state.trust[id] || 0;
  const met = !!state.met[id];
  const agenda = currentAgenda(id);
  $("personDialogContent").innerHTML = `<div class="dialog-profile"><span class="avatar" data-person="${id}" style="--avatar:${person.color}">${person.glyph}</span><span><h2>${person.name}${state.partner === id ? '<i class="partner-badge">道侣</i>' : ""}</h2><small>${met ? person.role : "尚未相识 · 仍在走自己的路"}</small></span></div><p class="dialog-copy">${met ? person.goal : `你还没有遇见此人。${pronoun}的生活仍在别处继续，之后可能因地域、势力和时局与你相逢。`}</p><div class="dialog-bars"><div><div class="dialog-meter-label"><span>好感</span><b>${met ? affinity : "—"}</b></div><div class="meter"><i class="xp-fill" style="width:${met ? affinity : 0}%"></i></div></div><div><div class="dialog-meter-label"><span>信任</span><b>${met ? trust : "—"}</b></div><div class="meter"><i class="hp-fill" style="width:${met ? trust : 0}%"></i></div></div></div><div class="dialog-agenda"><b>性情：</b>${personality.temperament}<br><b>底线：</b>${personality.boundary}<br><b>最近的安排：</b>${met ? agenda : "尚未得知"}<br><b>在意的事：</b>${person.likes}${state.partner === id ? "<br><b>你们的约定：</b>成为道侣后仍保有各自的目标，重大决定会彼此商量。" : ""}</div>`;
  $("personDialog").showModal();
}
function resetGame() {
  if (!confirm("重新开局会覆盖当前本机进度。仍要继续吗？")) return;
  state = freshState(); setMobileView("event"); saveState(); render(); window.scrollTo({ top: 0, behavior: "smooth" });
}
function init() {
  $("saveButton").addEventListener("click", () => saveState(true));
  $("newGameButton").addEventListener("click", resetGame);
  $("closeDialog").addEventListener("click", () => $("personDialog").close());
  $("personDialog").addEventListener("click", event => { if (event.target === $("personDialog")) $("personDialog").close(); });
  document.querySelectorAll("[data-action]").forEach(button => button.addEventListener("click", () => freeAction(button.dataset.action)));
  document.querySelectorAll("[data-mobile-tab]").forEach(button => button.addEventListener("click", () => setMobileView(button.dataset.mobileTab)));
  setMobileView(state.phase === "action" ? "actions" : "event");
  render();
}
function setMobileView(view) {
  const allowed = ["event", "actions", "people", "world"];
  const nextView = allowed.includes(view) ? view : "event";
  const changed = document.body.dataset.mobileView !== nextView;
  document.body.dataset.mobileView = nextView;
  document.querySelectorAll("[data-mobile-tab]").forEach(button => {
    if (button.dataset.mobileTab === document.body.dataset.mobileView) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  if (changed && window.matchMedia("(max-width: 760px)").matches) window.scrollTo(0, 0);
}
init();
