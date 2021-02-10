export interface MonsterInterface {
  id: string;
  header: HeaderMonsterInterface;
  // attributes: AttributesCharacterInterface;
  // combat: CombatCharacterInterface;
  // flavor: FlavorCharacterInterface;
  image: string;
}

export interface HeaderMonsterInterface {
  monstername: string;
  type: string;
  size: string;
  challenge: string;
  alignment: string;
}
