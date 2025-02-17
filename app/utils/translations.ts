export type Language = 'ko' | 'en' | 'ja' | 'zh';

export type TranslationKey = string;

export type TranslationDictionary = {
  [key in TranslationKey]: {
    [lang in Language]: string;
  };
};

export const translations: TranslationDictionary = {
  profile: {
    ko: '프로필',
    en: 'Profile',
    ja: 'プロフィール',
    zh: '个人资料',
  },
  values: {
    ko: '가치관',
    en: 'Values',
    ja: '価値観',
    zh: '价值观',
  },
  valuesDescription: {
    ko: 'AI 기술의 문턱을 낮추는 것이 아니라,\n뛰어넘을 때 혁신이 시작됩니다.',
    en: 'Innovation begins not by lowering\nthe threshold of AI technology,\nbut by surpassing it.',
    ja: 'AI技術の敷居を下げるのではなく、\n乗り越えた時にイノベーションが始まります。',
    zh: '创新不是降低AI技术的门槛，\n而是在跨越门槛时开始的。',
  },
  history: {
    ko: '자격',
    en: 'Certifications',
    ja: '資格',
    zh: '资格',
  },
  sectionTitle: {
    ko: '인증 및 자격',
    en: 'Certifications',
    ja: '認定及び資格',
    zh: '认证及资格',
  },
  activities: {
    ko: '프로젝트',
    en: 'Projects',
    ja: 'プロジェクト',
    zh: '项目',
  },
  name: {
    ko: '변민수',
    en: 'Minsoo Byeon',
    ja: '邊慜洙',
    zh: '邊慜洙',
  },
  title: {
    ko: 'AI 에이전트',
    en: 'AI Agent',
    ja: 'AIエージェント',
    zh: 'AI代理',
  },
  birth: {
    ko: '출생',
    en: 'Birth',
    ja: '生年月日',
    zh: '出生',
  },
  birthDate: {
    ko: '1999년 1월 10일',
    en: 'Jan 10, 1999',
    ja: '1999年1月10日',
    zh: '1999年1月10日',
  },
  affiliation: {
    ko: '소속',
    en: 'Affiliations',
    ja: '所属',
    zh: '隶属',
  },
  affiliationDescription: {
    ko: '(사)대한청년을세계로 운영위원\n이노커브 AI AGENT',
    en: 'Operating Committee Member of Korean Youth to the World\nInnoCurve AI AGENT',
    ja: '(社)韓国青年を世界へ 運営委員\nイノカーブ AIエージェント',
    zh: '(社)韩国青年走向世界 运营委员\nInnoCurve AI代理',
  },
  field: {
    ko: '분야',
    en: 'Fields',
    ja: '分野',
    zh: '领域',
  },
  fieldDescription: {
    ko: 'AI, 청년',
    en: 'AI, Youth',
    ja: 'AI、青年',
    zh: 'AI，青年',
  },
  mbti: {
    ko: 'MBTI',
    en: 'MBTI',
    ja: 'MBTI',
    zh: 'MBTI',
  },
  mbtiType: {
    ko: 'ENTJ',
    en: 'ENTJ',
    ja: 'ENTJ',
    zh: 'ENTJ',
  },
  contact: {
    ko: '문의',
    en: 'Contact',
    ja: 'お問い合わせ',
    zh: '联系',
  },
  smartOptions: {
    ko: '스마트 옵션',
    en: 'Smart Options',
    ja: 'スマートオプション',
    zh: '智能选项',
  },
  socialMedia: {
    ko: 'SNS',
    en: 'Social Media',
    ja: 'SNS',
    zh: '社交媒体',
  },
  viewMore: {
    ko: '자세히 보기',
    en: 'View More',
    ja: '詳細を見る',
    zh: '查看更多',
  },
  allRightsReserved: {
    ko: '모든 권리 보유.',
    en: 'All rights reserved.',
    ja: 'All rights reserved.',
    zh: '版权所有。',
  },
  date: {
    ko: '게시일',
    en: 'Date',
    ja: '投稿日',
    zh: '日期',
  },
  summary: {
    ko: '요약',
    en: 'Summary',
    ja: '要約',
    zh: '摘要',
  },
  details: {
    ko: '상세 내용',
    en: 'Details',
    ja: '詳細内容',
    zh: '详情',
  },
  gallery: {
    ko: '갤러리',
    en: 'Gallery',
    ja: 'ギャラリー',
    zh: '画廊',
  },
  backToList: {
    ko: '목록으로 돌아가기',
    en: 'Back to List',
    ja: 'リストに戻る',
    zh: '返回列表',
  },
  expandToggle: {
    ko: '펼쳐보기',
    en: 'Expand',
    ja: '展開する',
    zh: '展开',
  },
  collapseToggle: {
    ko: '숨기기',
    en: 'Collapse',
    ja: '折りたたむ',
    zh: '折叠',
  },
  aiClone: {
    ko: 'AI 클론',
    en: 'AI Clone',
    ja: 'AIクローン',
    zh: 'AI克隆',
  },
  phone: {
    ko: '전화',
    en: 'Phone',
    ja: '電話',
    zh: '电话',
  },
  greetingVideo: {
    ko: '인사 영상',
    en: 'Greeting Video',
    ja: '挨拶動画',
    zh: '问候视频',
  },
  innoCardInquiry: {
    ko: 'InnoCard\n문의',
    en: 'InnoCard\nInquiry',
    ja: 'InnoCard\nお問い合わせ',
    zh: 'InnoCard\n咨询',
  },
  contactOptions: {
    ko: '연락하기',
    en: 'Get in Touch',
    ja: 'お問い合わせ',
    zh: '联系方式',
  },
  greetingTitle: {
    ko: '흐려지는 것이 아닌,\n더 선명해지는 청년의 미래',
    en: 'Not fading away,\nbut a youth future that grows clearer',
    ja: '薄れていくのではなく、\nより鮮明になっていく青年の未来',
    zh: '不是渐渐模糊，\n而是愈发清晰的青年未来',
  },
  greetingDescription: {
    ko: 'AI가 혁신을 주도하는 시대,\n그 중심에는 언제나 청년의 도전이 있습니다.\n\n우리는 기술을 넘어,\n당신의 가능성을 더욱 깊이 새깁니다.',
    en: 'In an era where AI leads innovation,\nyouth challenges are always at its core.\n\nBeyond technology,\nwe engrave your potential more deeply.',
    ja: 'AIがイノベーションを主導する時代、\nその中心には常に青年の挑戦があります。\n\n私たちは技術を超えて、\nあなたの可能性をより深く刻みます。',
    zh: '在AI引领创新的时代，\n青年的挑战永远处于核心。\n\n超越技术，\n我们将您的潜力铭刻得更深。',
  },
  chatInputPlaceholder: {
    ko: '메시지를 입력하세요...',
    en: 'Type your message...',
    ja: 'メッセージを入力してください...',
    zh: '请输入消息...',
  },
  cloneTitle: {
    ko: "'s Clone",
    en: "'s Clone",
    ja: "'s Clone",
    zh: "'s Clone"
  },
  formName: {
    ko: '이름',
    en: 'Name',
    ja: '名前',
    zh: '姓名',
  },
  formNamePlaceholder: {
    ko: '이름을 입력하세요',
    en: 'Enter your name',
    ja: '名前を入力してください',
    zh: '请输入姓名',
  },
  formBirthdate: {
    ko: '생년월일',
    en: 'Date of Birth',
    ja: '生年月日',
    zh: '出生日期',
  },
  formBirthdatePlaceholder: {
    ko: 'YYYY-MM-DD',
    en: 'YYYY-MM-DD',
    ja: 'YYYY-MM-DD',
    zh: 'YYYY-MM-DD',
  },
  formPhone: {
    ko: '전화번호',
    en: 'Phone Number',
    ja: '電話番号',
    zh: '电话号码',
  },
  formPhonePlaceholder: {
    ko: '전화번호를 입력하세요',
    en: 'Enter your phone number',
    ja: '電話番号を入力してください',
    zh: '请输入电话号码',
  },
  formInquiry: {
    ko: '문의 내용',
    en: 'Inquiry Details',
    ja: 'お問い合わせ内容',
    zh: '咨询内容',
  },
  formInquiryPlaceholder: {
    ko: '예) 제작 문의',
    en: 'e.g., Production inquiry',
    ja: '例）制作に関するお問い合わせ',
    zh: '例如：制作咨询',
  },
  formSubmit: {
    ko: '제출',
    en: 'Submit',
    ja: '送信',
    zh: '提交',
  },
  back: {
    ko: '뒤로',
    en: 'Back',
    ja: '戻る',
    zh: '返回',
  },
  initialGreeting: {
    ko: '안녕하세요! 저는 변민수입니다. 무엇을 도와드릴까요?',
    en: 'Hello! I am Minsoo Byeon. How can I help you?',
    ja: 'こんにちは！邊慜洙と申します。何かお手伝いできることはありますか？',
    zh: '你好！我是邊慜洙。我能为您做些什么？'
  },
  cloneGreeting: {
    ko: "안녕하세요! 저는 변민수's Clone입니다. 무엇을 도와드릴까요?",
    en: "Hello! I'm Minsoo Byeon's Clone. How can I help you?",
    ja: "こんにちは！邊慜洙のクローンです。どのようにお手伝いできますか？",
    zh: "你好！我是邊慜洙的克隆。我能为您做些什么？"
  },
};

export function translate(key: TranslationKey, lang: Language): string {
  try {
    const translation = translations[key]?.[lang] ?? translations[key]?.['ko'] ?? key;
    return translation || key;
  } catch (error) {
    console.error(`Translation error for key: ${key}, language: ${lang}`, error);
    return key;
  }
}

