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
    ko: 'AI와 청년,\n그리고 스포츠\n미래를 움직이는 힘',
    en: 'AI and Youth,\nand Sports\nPower to Move the Future',
    ja: 'AIと青年、\nそしてスポーツ\n未来を動かす力',
    zh: 'AI与青年，\n以及体育\n推动未来的力量',
  },
  history: {
    ko: '연혁',
    en: 'History',
    ja: '経歴',
    zh: '历史',
  },
  activities: {
    ko: '프로젝트',
    en: 'Projects',
    ja: 'プロジェクト',
    zh: '项目',
  },
  name: {
    ko: '최석재',
    en: 'Seokjae Choi',
    ja: '崔碩宰',
    zh: '崔碩宰',
  },
  title: {
    ko: '사단법인 사무국장|AI 에이전트',
    en: 'Secretary General of the Association|AI Agent',
    ja: '社団法人事務局長|AIエージェント',
    zh: '社团法人事务局长|AI代理',
  },
  birth: {
    ko: '출생',
    en: 'Birth',
    ja: '生年月日',
    zh: '出生',
  },
  birthDate: {
    ko: '1999년 9월 27일',
    en: 'Sep 27, 1999',
    ja: '1999年9月27日',
    zh: '1999年9月27日',
  },
  affiliation: {
    ko: '소속',
    en: 'Affiliations',
    ja: '所属',
    zh: '隶属',
  },
  affiliationDescription: {
    ko: '(사)대한청년을세계로 사무국장\n이노커브 AI AGENT',
    en: 'Secretary General of the Association|AI Agent',
    ja: '社団法人事務局長|AIエージェント',
    zh: '社团法人事务局长|AI代理',
  },
  education: {
    ko: '학력',
    en: 'Education',
    ja: '学歴',
    zh: '教育',
  },
  educationDescription: {
    ko: '배재대학교 레저스포츠학 학사',
    en: 'PaiChai University, Leisure Sports Bachelor',
    ja: '培材大学 レジャースポーツ学 学士',
    zh: '培材大学 休闲体育学 学士',
  },
  field: {
    ko: '분야',
    en: 'Fields',
    ja: '分野',
    zh: '领域',
  },
  fieldDescription: {
    ko: 'AI, 청년, 스포츠',
    en: 'AI, Youth, Sports',
    ja: 'AI、青年、スポーツ',
    zh: 'AI，青年，体育',
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
    ko: '더 나은 미래를 향한\n당신의 발걸음',
    en: 'A Step Forward\nfor a Better Future',
    ja: 'より良い未来を目指す\nあなたの一歩',
    zh: '迈向更美好未来的\n您的脚步',
  },
  greetingDescription: {
    ko: '우리는 AI를 통해 더 스마트하게,\n청년들과 함께 더 뜨겁게,\n스포츠로 더 강인하게 나아갑니다.\n\n당신의 열정과 도전이 흐려지지 않도록,\n우리는 당신의 가치를 더욱 선명하게 기록합니다.\n\nInnoCurve, 당신과 함께 혁신을 그립니다.',
    en: 'We move forward smarter through AI,\nmore passionately with youth,\nand stronger through sports.\n\nTo keep your passion and challenges bright,\nwe record your value more clearly.\n\nInnoCurve, drawing innovation together with you.',
    ja: '私たちはAIでよりスマートに、\n青年たちと共により熱く、\nスポーツでより力強く前進します。\n\nあなたの情熱と挑戦が薄れないように、\nあなたの価値をより鮮明に記録します。\n\nInnoCurve、共にイノベーションを描きます。',
    zh: '我们通过AI变得更智能，\n与青年一起更热情，\n通过体育变得更强大。\n\n为了让您的热情与挑战永不褪色，\n我们更清晰地记录您的价值。\n\nInnoCurve，与您一起描绘创新。',
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
    ko: '안녕하세요! 저는 최석재입니다. 무엇을 도와드릴까요?',
    en: 'Hello! I am Seokjae Choi. How can I help you?',
    ja: 'こんにちは！崔碩宰と申します。何かお手伝いできることはありますか？',
    zh: '你好！我是崔碩宰。我能为您做些什么？'
  },
  cloneGreeting: {
    ko: "안녕하세요! 저는 최석재's Clone입니다. 무엇을 도와드릴까요?",
    en: "Hello! I'm Seokjae Choi's Clone. How can I help you?",
    ja: "こんにちは！崔碩宰のクローンです。どのようにお手伝いできますか？",
    zh: "你好！我是崔碩宰的克隆。我能为您做些什么？"
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

