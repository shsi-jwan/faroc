import { ContentNode, Language, LocalizedText } from './types';

const lorem = (lang: Language) => lang === Language.ZH 
  ? "我們致力於為創業者提供最優質的資源與連結。透過這個平台，您可以找到志同道合的夥伴，並獲得專家的指導。創新是我們的核心，自由是我們的靈魂。" 
  : "We are dedicated to providing the best resources and connections for entrepreneurs. Through this platform, you can find like-minded partners and receive expert guidance. Innovation is our core, freedom is our soul.";

export const INITIAL_CONFIG = {
  logoUrl: "https://picsum.photos/id/42/200/200",
  brandColor: "#6366f1", // Indigo 500
  siteTitle: {
    [Language.ZH]: "中華民國自由自在創業協會",
    [Language.EN]: "ROC Free & Easy Entrepreneurship Association"
  }
};

const createNode = (id: string, titleZh: string, titleEn: string, type: 'category' | 'page', children: ContentNode[] = []): ContentNode => ({
  id,
  title: { [Language.ZH]: titleZh, [Language.EN]: titleEn },
  slug: id,
  type,
  children,
  content: type === 'page' ? {
    [Language.ZH]: `<h3>${titleZh}</h3><p>${lorem(Language.ZH)}</p>`,
    [Language.EN]: `<h3>${titleEn}</h3><p>${lorem(Language.EN)}</p>`
  } : undefined
});

// Helper to create 3 levels deep
const createDeepStructure = (baseId: string, titleZh: string, titleEn: string): ContentNode => {
  return createNode(baseId, titleZh, titleEn, 'category', [
    createNode(`${baseId}-sub1`, `${titleZh} - 策略`, `${titleEn} - Strategy`, 'category', [
      createNode(`${baseId}-sub1-p1`, '詳細規劃', 'Detailed Planning', 'page'),
      createNode(`${baseId}-sub1-p2`, '執行方針', 'Execution Guidelines', 'page'),
    ]),
    createNode(`${baseId}-sub2`, `${titleZh} - 歷史`, `${titleEn} - History`, 'category', [
      createNode(`${baseId}-sub2-p1`, '創始故事', 'Founding Story', 'page'),
      createNode(`${baseId}-sub2-p2`, '里程碑', 'Milestones', 'page'),
    ]),
    createNode(`${baseId}-sub3`, `${titleZh} - 團隊`, `${titleEn} - Team`, 'category', [
      createNode(`${baseId}-sub3-p1`, '理監事', 'Board of Directors', 'page'),
    ])
  ]);
};

export const INITIAL_STRUCTURE: ContentNode[] = [
  createDeepStructure('philosophy', '協會理念', 'Association Philosophy'),
  createDeepStructure('audience', '服務對象', 'Target Audience'),
  createDeepStructure('pillars', '核心支柱', 'Core Pillars'),
  createDeepStructure('resources', '資源與活動', 'Resources & Activities'),
  createDeepStructure('benefits', '會員福利', 'Member Benefits'),
  // Special Section for AI Tools (Flat structure for functional app integration)
  createNode('ai-tools', 'AI 創業助手', 'AI Startup Tools', 'category', [
    createNode('ai-chat', 'AI 顧問機器人', 'AI Consultant Chatbot', 'page'),
    createNode('ai-gen', 'AI 圖像生成', 'AI Image Generation', 'page'),
    createNode('ai-edit', 'AI 圖像編輯', 'AI Image Editing', 'page'),
  ])
];