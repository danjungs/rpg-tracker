export interface MonsterInterface {
  id: string;
  header: HeaderMonsterInterface;
  combat?: AttributesMonsterInterface;
  extraAttributes?: TitleAndTextInterface[];
  challenge: string;
  feats?: TitleAndTextInterface[];
  actions?: TitleAndTextInterface[];
  legendaryActions?: TitleAndTextInterface[];
  image: string;
}

export interface HeaderMonsterInterface {
  monstername: string;
  type: string;
  size: string;
  alignment: string;
}

export interface AttributesMonsterInterface {
  ac: string;
  hp: string;
  speed: string,
  str: {value: number; modifier: string};
  dex: {value: number; modifier: string};
  con: {value: number; modifier: string};
  int: {value: number; modifier: string};
  wis: {value: number; modifier: string};
  cha: {value: number; modifier: string};
}
export interface TitleAndTextInterface {
  title: string,
  text: string
}
