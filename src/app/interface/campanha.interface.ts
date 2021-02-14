import { TextEnum } from '../enums/text-area.enum';

export interface QuickMenuInterface {
  id: string;
  title: string;
  options: OptionsQuickMenuInterface[];
}

export interface OptionsQuickMenuInterface {
  title: string;
  tag: string;
  section: {text: string,tag: string}[],
  open?: boolean;
}

export interface CampanhaInterface {
  id: string;
  title: string;
  overview: string;
  chapters: ChapterCampanhaInterface[];
}

export interface ChapterCampanhaInterface {
  title: string,
  tag: string,
  textArea: TextAreaCampanhaInterface[],
}

export interface TextAreaCampanhaInterface {
  type: TextEnum;
  tag?: string;
  title?: string;
  text?: string | {title: string, text: string};
  list?: string[]
}
