export interface CharacterInterface {
  id: string;
  header: HeaderCharacterInterface;
  attributes: AttributesCharacterInterface;
  combat: CombatCharacterInterface;
  flavor: FlavorCharacterInterface;
  image: string;
}

export interface HeaderCharacterInterface {
  charname: string;
  class: string;
  background: string;
  player: string;
  race: string;
  alignment: string;
  experience: string;
}

export interface AttributesCharacterInterface {
  score: {
    str: {value: number; modifier: string};
    dex: {value: number; modifier: string};
    con: {value: number; modifier: string};
    int: {value: number; modifier: string};
    wis: {value: number; modifier: string};
    cha: {value: number; modifier: string};
  }
  proficiencyBonus: number;
  saves: {
    str: {value: string; checked: boolean};
    dex: {value: string; checked: boolean};
    con: {value: string; checked: boolean};
    int: {value: string; checked: boolean};
    wis: {value: string; checked: boolean};
    cha: {value: string; checked: boolean};
  }
  skills: {
    acrobatics: {value: number; checked: boolean};
    animalHandling: {value: number; checked: boolean};
    arcana: {value: number; checked: boolean};
    athletics: {value: number; checked: boolean};
    deception: {value: number; checked: boolean};
    history: {value: number; checked: boolean};
    insight: {value: number; checked: boolean};
    intimidation: {value: number; checked: boolean};
    investigation: {value: number; checked: boolean};
    medicine: {value: number; checked: boolean};
    nature: {value: number; checked: boolean};
    perception: {value: number; checked: boolean};
    performance: {value: number; checked: boolean};
    persuasion: {value: number; checked: boolean};
    religion: {value: number; checked: boolean};
    sleightOfHand: {value: number; checked: boolean};
    stealth: {value: number; checked: boolean};
    survival: {value: number; checked: boolean};
  }
  perception: number;
}

export interface CombatCharacterInterface {
  armorClass: number;
  initiative: number;
  speed: number;
  maxHitPoint: number;
  currentHitPoint: number;
  temporaryHitPoint: number;
  totalDice: number;
  hitDice: string;
  attacks: {name: string; bonus: string; damage: string}[]
}

export interface FlavorCharacterInterface {
  personality: string;
  ideals: string;
  bonds: string;
  flaws: string;
  features: string;
}
