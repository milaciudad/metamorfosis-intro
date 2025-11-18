export enum PageType {
  COVER = 'COVER',
  INTRO = 'INTRO',
  INDEX = 'INDEX',
  CHAPTER = 'CHAPTER',
  CTA = 'CTA'
}

export interface PageContent {
  id: number;
  type: PageType;
  title?: string;
  subtitle?: string;
  content?: string | string[]; // Can be a single string or array of paragraphs
  extraData?: any; // For flexible additional data like author name, specific styling hints
}