import { MonsterInterface } from './../interface/monsters.interface';
export const MONSTERS_BANNER = {
  caption: 'Monstros',
  image: 'monsters-banner'
};

const getIcon = (name) => "./../../assets/imagens/" + name

export const MONSTERS: MonsterInterface[] = [
  {
    id: 'thug',
    header: {
      monstername: 'Batedor',
      type: 'Humanoide',
      size: 'Médio',
      alignment: 'any non-good alignment',
    },
    attributes: {
      ac: '11 (Armadura de Couro)',
      hp: '32 (5d8 + 10)',
      speed: '30ft',
      str: {value: 15, modifier: '+2'},
      dex: {value: 11, modifier: '0'},
      con: {value: 14, modifier: '+2'},
      int: {value: 10, modifier: '0'},
      wis: {value: 10, modifier: '0'},
      cha: {value: 11, modifier: '0'},
    },
    extraAttributes: [
      {title: 'Skills', text:'Intimação +2'}, {title: 'Senses', text:'Percepção Passiva 10'},
      {title: 'Languages', text:'Qualquer uma lingua'}, {title: 'Proficiency Bonus', text:'+2'},
    ],
    challenge: '1/2',
    feats: [
      {title: 'Táticas de Bando', text:'O batedor tem vantagem em uma jogada de ataque contra uma criatura se pelo menos um dos aliados do batedor estiver a menos de 5 pés da criatura e o aliado não estiver incapacitado.'}
    ],
    actions: [
      {title: 'Multiattack', text:'O batedor faz dois ataques corpo a corpo.'},
      {title: 'Clava', text:'<i>Melee Weapon Attack</i>: +4 de acerto, alcance 5 pés, uma criatura. Acerto: 5 (1d6 + 2) de dano por contusão.'},
      {title: 'Besta pesada', text:'<i>Ranged Weapon Attack</i>: +2 para acertar, alcance de 100/400 pés, um alvo. Acerto: 5 (1d10) de dano perfurante.'},
    ],
    image: getIcon('thug-icon.png')
  },
  {
    id: 'bandit',
    header: {
      monstername: 'Bandido',
      type: 'Humanoide',
      size: 'Médio',
      alignment: 'any non-lawful alignment',
    },
    challenge: '1/8',
    image: getIcon('bandit-icon.png')
  },
  {
    id: 'wolf',
    header: {
      monstername: 'Lobo',
      type: 'Besta',
      size: 'Médio',
      alignment: 'non',
    },
    challenge: '1/4',
    image: getIcon('wolf-icon.jpg')
  },
  {
    id: 'croaker',
    header: {
      monstername: 'Coaxador Velho',
      type: 'Besta',
      size: 'Grande',
      alignment: 'non'
    },
    challenge: '1',
    image: getIcon('old-croaker-icon.jpg')
  },
  {
    id: 'frog',
    header: {
      monstername: 'Sapo Gigante',
      type: 'Besta',
      size: 'Médio',
      alignment: 'non',
    },
    challenge: '1/4',
    image: getIcon('giant-frog-icon.jpeg')
  },
  {
    id: 'bats',
    header: {
      monstername: 'Enxame de Morcegos',
      type: 'Besta',
      size: 'Pequeno',
      alignment: 'non',
    },
    challenge: '1/4',
    image: getIcon('bat-icon.jpeg')
  },
  {
    id: 'fanatic',
    header: {
      monstername: 'Fanático Cultista',
      type: 'Humanoide',
      size: 'Médio',
      alignment: 'any non-good alignment'
    },
    challenge: '2',
    image: getIcon('fanatic-icon.jpeg')
 ,
  },
  {
    id: 'cultist',
    header: {
      monstername: 'Cultista',
      type: 'Humanoide',
      size: 'Médio',
      alignment: 'any non-good alignment',
    },
    challenge: '1/8',
    image: getIcon('cultist-icon.png')
  },
  {
    id: 'mephit',
    header: {
      monstername: 'Mephit de Gelo',
      type: 'Elemental',
      size: 'Pequeno',
      alignment: 'Neutral Evil',
    },
    challenge: '1/2',
    image: getIcon('mephit-icon.png')
  },
  {
    id: 'feral',
    header: {
      monstername: 'Ferol Sal',
      type: 'Morto Vivo',
      size: 'Médio',
      alignment: 'Neutral Evil'
    },
    challenge: '3',
    image: getIcon('ferol-icon.png')
  },
  {
    id: 'zombie',
    header: {
      monstername: 'Zumbi',
      type: 'Morto Vivo',
      size: 'Médio',
      alignment: 'Neutral Evil',
    },
    challenge: '1/4',
    image: getIcon('zombie-icon.jpg')
  }
]
export const getMonster = id => MONSTERS.find(el => el.id === id);
export const MONSTERS_SEARCH_OPTIONS = [
  { name : "Tipo", key: "type"},
  { name : "Tamanho", key: "size"},
  { name : "Desafio", key: "challenge"},
]
