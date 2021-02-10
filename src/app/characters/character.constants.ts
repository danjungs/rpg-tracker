import { CharacterInterface } from './../interface/characters.interface';


const getIcon = (name) => "./../../assets/imagens/" + name

export const CHARACTERS: CharacterInterface[] = [
  {
    id: 'ulfgan',
    header: {
      charname: 'Ulfgan Escama de Prata',
      class: 'Paladino 1',
      player: 'Daniel',
      race: 'Anão das Montanhas',
      background: 'Hounted One',
      alignment: 'LG',
      experience: '123'
    },
    attributes: {
    score: {
      str: {value: 16, modifier: '+3'},
      dex: {value: 10, modifier: '+0'},
      con: {value: 16, modifier: '+3'},
      int: {value: 8, modifier: '-1'},
      wis: {value: 12, modifier: '+1'},
      cha: {value: 14, modifier: '+2'},
    },
    proficiencyBonus: 2,
    saves: {
      str: {value: '+3', checked: false},
      dex: {value: '+0', checked: false},
      con: {value: '+3', checked: false},
      int: {value: '-1', checked: false},
      wis: {value: '+3', checked: true},
      cha: {value: '+4', checked: true},
    },
    skills: {
      acrobatics: {value: 0, checked: false},
      animalHandling: {value: 1, checked: false},
      arcana: {value: -1, checked: false},
      athletics: {value: 3, checked: false},
      deception: {value: 2, checked: false},
      history: {value: -1, checked: false},
      insight: {value: 3, checked: true},
      intimidation: {value: 2, checked: false},
      investigation: {value: 1, checked: true},
      medicine: {value: 1, checked: false},
      nature: {value: -1, checked: false},
      perception: {value: 1, checked: false},
      performance: {value: 2, checked: false},
      persuasion: {value: 4, checked: true},
      religion: {value: -1, checked: false},
      sleightOfHand: {value: 0, checked: false},
      stealth: {value: 0, checked: false},
      survival: {value: 3, checked: true},
    },
    perception: 11,
    },
    combat: {
      armorClass: 18,
      initiative: 0,
      speed: 30,
      maxHitPoint: 12,
      currentHitPoint: 12,
      temporaryHitPoint: 12,
      totalDice: 1,
      hitDice: '1d10 + 2',
      attacks: [
        {name: 'Espada Longa', bonus: '+5', damage: '1d8+3'},
        {name: 'Espada Longa DH', bonus: '+5', damage: '1d10+3'},
        {name: 'Machado de Mão', bonus: '+5', damage: '1d6+3'},
      ]
    },
    flavor: {
      personality: 'I don’t talk about the thing that torments me. I refuse to become a victim, and I will not allow others to be victimized.',
      ideals: 'I try to help those in need, no matter what the personal cost. (Good)',
      bonds: 'There’s evil in me, I can feel it. It must never be set free.',
      flaws: 'I talk to spirits that no one else can see.',
      features: '',
    },
    image: getIcon('ulfgan-icon.png')
  }
]
export const getCharacter = id => CHARACTERS.find(el => el.id === id);

export const CHARACTERS_BANNER = {
  caption: 'Personagens',
  image: 'characters-banner'
};

export const CHARACTERS_SEARCH_OPTIONS = [
  { name : "Classe", key: "class"},
  { name : "Raça", key: "race"},
  { name : "Jogador", key: "player"},
]
