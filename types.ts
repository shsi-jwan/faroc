export enum Language {
  ZH = 'zh',
  EN = 'en'
}

export interface LocalizedText {
  [Language.ZH]: string;
  [Language.EN]: string;
}

// 3 Layers of Content
export interface ContentNode {
  id: string;
  title: LocalizedText;
  slug: string;
  content?: LocalizedText; // HTML/Markdown string
  children?: ContentNode[]; // Sub-units
  type: 'category' | 'page';
}

export interface SiteConfig {
  logoUrl: string;
  brandColor: string; // Hex code
  siteTitle: LocalizedText;
}

export interface AppState {
  language: Language;
  structure: ContentNode[];
  config: SiteConfig;
  setLanguage: (lang: Language) => void;
  updateConfig: (config: Partial<SiteConfig>) => void;
  updateStructure: (newStructure: ContentNode[]) => void;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}