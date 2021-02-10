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
      challenge: '1/2'
    },
    image: getIcon('thug-icon.png')
  },
  {
    id: 'bandit',
    header: {
      monstername: 'Bandido',
      type: 'Humanoide',
      size: 'Médio',
      alignment: 'any non-lawful alignment',
      challenge: '1/8'
    },
    image: getIcon('bandit-icon.png')
  },
  {
    id: 'wolf',
    header: {
      monstername: 'Lobo',
      type: 'Besta',
      size: 'Médio',
      alignment: 'non',
      challenge: '1/4'
    },
    image: getIcon('wolf-icon.jpg')
  },
  {
    id: 'croaker',
    header: {
      monstername: 'Coaxador Velho',
      type: 'Besta',
      size: 'Grande',
      alignment: 'non',
      challenge: '1'
    },
    image: getIcon('old-croaker-icon.jpg')
  },
  {
    id: 'frog',
    header: {
      monstername: 'Sapo Gigante',
      type: 'Besta',
      size: 'Médio',
      alignment: 'non',
      challenge: '1/4'
    },
    image: getIcon('giant-frog-icon.jpeg')
  },
  {
    id: 'bats',
    header: {
      monstername: 'Enxame de Morcegos',
      type: 'Besta',
      size: 'Pequeno',
      alignment: 'non',
      challenge: '1/4'
    },
    image: getIcon('bat-icon.jpeg')
  },
  {
    id: 'fanatic',
    header: {
      monstername: 'Fanático Cultista',
      type: 'Humanoide',
      size: 'Médio',
      alignment: 'any non-good alignment',
      challenge: '2'
    },
    image: getIcon('fanatic-icon.jpeg')
  },
  {
    id: 'cultist',
    header: {
      monstername: 'Cultista',
      type: 'Humanoide',
      size: 'Médio',
      alignment: 'any non-good alignment',
      challenge: '1/8'
    },
    image: getIcon('cultist-icon.png')
  },
  {
    id: 'mephit',
    header: {
      monstername: 'Mephit de Gelo',
      type: 'Elemental',
      size: 'Pequeno',
      alignment: 'Neutral Evil',
      challenge: '1/2'
    },
    image: getIcon('mephit-icon.png')
  },
  {
    id: 'feral',
    header: {
      monstername: 'Ferol Sal',
      type: 'Morto Vivo',
      size: 'Médio',
      alignment: 'Neutral Evil',
      challenge: '3'
    },
    image: getIcon('ferol-icon.png')
  },
  {
    id: 'zombie',
    header: {
      monstername: 'Zumbi',
      type: 'Morto Vivo',
      size: 'Médio',
      alignment: 'Neutral Evil',
      challenge: '1/4'
    },
    image: getIcon('zombie-icon.jpg')
  }
]

export const MONSTERS_SEARCH_OPTIONS = [
  { name : "Tipo", key: "type"},
  { name : "Tamanho", key: "size"},
  { name : "Desafio", key: "challenge"},
]
