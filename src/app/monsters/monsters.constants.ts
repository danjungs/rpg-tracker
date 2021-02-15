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
    attributes: {
      ac: '11 (Armadura de Couro)',
      hp: '11 (2d8 + 2)',
      speed: '30ft',
      str: {value: 11, modifier: '0'},
      dex: {value: 12, modifier: '+1'},
      con: {value: 12, modifier: '+1'},
      int: {value: 10, modifier: '0'},
      wis: {value: 10, modifier: '0'},
      cha: {value: 10, modifier: '0'},
    },
    extraAttributes: [
      {title: 'Senses', text:'Percepção Passiva 10'},
      {title: 'Languages', text:'Qualquer uma lingua'}, {title: 'Proficiency Bonus', text:'+2'},
    ],
    challenge: '1/8',
    actions: [
      {title: 'Scimitara', text:'<i>Melee Weapon Attack</i>: +3 de acerto, alcance 5 pés, uma criatura. Acerto: 5 (1d6 + 1) de dano por corte.'},
      {title: 'Besta Leve', text:'<i>Ranged Weapon Attack</i>: +3 para acertar, alcance de 80/320 pés, um alvo. Acerto: 5 (1d8 + 1) de dano perfurante.'},
    ],
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
    attributes: {
      ac: '13 (Armadura natural)',
      hp: '11 (2d8 + 2)',
      speed: '40ft',
      str: {value: 12, modifier: '+1'},
      dex: {value: 15, modifier: '+2'},
      con: {value: 12, modifier: '+1'},
      int: {value: 3, modifier: '-4'},
      wis: {value: 12, modifier: '+1'},
      cha: {value: 6, modifier: '-2'},
    },
    extraAttributes: [
      {title: 'Skills', text:'Percepção +3, Furtividade +4'}, {title: 'Senses', text:'Percepção Passiva 13'},
      {title: 'Languages', text:'--'}, {title: 'Proficiency Bonus', text:'+2'},
    ],
    challenge: '1/4',
    feats: [
      {title: 'Audição e Olfato Aguçados', text:'O lobo tem vantagem em testes de Sabedoria (Percepção) que dependem de audição ou olfato.'},
      {title: 'Táticas de Bando', text:'O batedor tem vantagem em uma jogada de ataque contra uma criatura se pelo menos um dos aliados do batedor estiver a menos de 5 pés da criatura e o aliado não estiver incapacitado.'}
    ],
    actions: [
      {title: 'Morder', text:'<i>Melee Weapon Attack</i>: +4 para acertar, alcance 5 pés, um alvo. Acerto: 7 (2d4 + 2) de dano perfurante. Se o alvo for uma criatura, ele deve ser bem-sucedido em um teste de resistência de Força DC 11 ou ser derrubado.'},
   ],
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
    attributes: {
      ac: '11 (Armadura natural)',
      hp: '39 (6d10 + 6)',
      speed: '20 ft., nado 40 ft.',
      str: {value: 15, modifier: '+2'},
      dex: {value: 13, modifier: '+1'},
      con: {value: 13, modifier: '+1'},
      int: {value: 2, modifier: '-4'},
      wis: {value: 10, modifier: '0'},
      cha: {value: 3, modifier: '-4'},
    },
    extraAttributes: [
      {title: 'Imunidades a Danos', text:'Frio'}, {title: 'Senses', text:'Visão no escuro 30 pés, percepção passiva 10'},
      {title: 'Languages', text:'--'}, {title: 'Proficiency Bonus', text:'+2'},
    ],
    challenge: '1',
    feats: [
      {title: 'Anfíbio', text:'O sapo pode respirar ar e água.'},
      {title: 'Salto de pé', text:'O salto em comprimento do sapo é de até 20 pés e o salto em altura de até 10 pés, com ou sem corrida.'},
    ],
    actions: [
      {title: 'Morder', text:'<i>Melee Weapon Attack</i>: +4 para acertar, alcance 5 pés, um alvo. Acerto: 7 (1d10 + 2) de dano perfurante e o alvo é agarrado (escape DC 13). Até que a luta termine, o alvo é contido e o sapo não pode morder outro alvo.'},
      {title: 'Engolir', text:' O sapo faz um ataque de mordida contra um alvo Médio ou menor que está segurando. Se o ataque acertar, o alvo é engolido e a segurada termina. ' +
        'O alvo engolido fica cego e contido, tem cobertura total contra ataques e outros efeitos fora do sapo e sofre  10 (3d6) de dano de ácido no início de cada turno do sapo. O sapo pode ter apenas um alvo engolido por vez. ' +
        'Se o sapo morrer, a criatura engolida não será mais contida por ele e poderá escapar do cadáver usando 1,5 metro de movimento, saindo de bruços.'},
    ],
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
    attributes: {
      ac: '11 (Armadura natural)',
      hp: '18 (4d8)',
      speed: '30 ft., nado 30 ft.',
      str: {value: 12, modifier: '+1'},
      dex: {value: 13, modifier: '+1'},
      con: {value: 11, modifier: '0'},
      int: {value: 2, modifier: '-4'},
      wis: {value: 10, modifier: '0'},
      cha: {value: 3, modifier: '-4'},
    },
    extraAttributes: [
      {title: 'Skills', text:'Percepção +2, Furtividade +3'}, {title: 'Senses', text:'Visão no escuro 30 pés, percepção passiva 12'},
      {title: 'Languages', text:'--'}, {title: 'Proficiency Bonus', text:'+2'},
    ],
    challenge: '1/4',
    feats: [
      {title: 'Anfíbio', text:'O sapo pode respirar ar e água.'},
      {title: 'Salto de pé', text:'O salto em comprimento do sapo é de até 20 pés e o salto em altura de até 10 pés, com ou sem corrida.'},
    ],
    actions: [
      {title: 'Morder', text:'<i>Melee Weapon Attack</i>: +3 para acertar, alcance 5 pés, um alvo. Acerto:  4 (1d6 + 1) de dano perfurante e o alvo é agarrado (escape DC 11). Até que a luta termine, o alvo é contido e o sapo não pode morder outro alvo.'},
      {title: 'Engolir', text:' O sapo faz um ataque de mordida contra um alvo Médio ou menor que está segurando. Se o ataque acertar, o alvo é engolido e a segurada termina. ' +
        'O alvo engolido fica cego e contido, tem cobertura total contra ataques e outros efeitos fora do sapo e sofre  5 (2d4) de dano de ácido no início de cada turno do sapo. O sapo pode ter apenas um alvo engolido por vez. ' +
        'Se o sapo morrer, a criatura engolida não será mais contida por ele e poderá escapar do cadáver usando 1,5 metro de movimento, saindo de bruços.'},
    ],
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
    attributes: {
      ac: '12 (Armadura natural)',
      hp: '22 (5d8)',
      speed: '0 ft., fly 30 ft.',
      str: {value: 5, modifier: '-3'},
      dex: {value: 15, modifier: '+2'},
      con: {value: 10, modifier: '0'},
      int: {value: 2, modifier: '-4'},
      wis: {value: 12, modifier: '+1'},
      cha: {value: 4, modifier: '-3'},
    },
    extraAttributes: [
      {title: 'Resistências a Danos', text:'Golpeando, Perfurando, Cortando'}, {title: 'Imunidade a Danos', text:'Encantado, Amedrontado, Agarrado, Paralisado, Petrificado, Propenso, Contido, Atordoado'},
      {title: 'Senses', text:'Visão no escuro 60 pés, percepção passiva 11'}, {title: 'Languages', text:'--'}, {title: 'Proficiency Bonus', text:'+2'},
    ],
    challenge: '1/4',
    feats: [
      {title: 'Ecolocalização', text:'O enxame não pode usar sua visão às cegas enquanto estiver surdo.'},
      {title: 'Audição Aguçada', text:'O enxame tem vantagem em testes de Sabedoria (Percepção) que dependem de ouvir.'},
      {title: 'Enxame', text:'O enxame pode ocupar o espaço de outra criatura e vice-versa, e o enxame pode se mover através de qualquer abertura grande o suficiente para um morcego minúsculo. O enxame não pode recuperar pontos de vida ou ganhar pontos de vida temporários.'},
    ],
    actions: [
      {title: 'Morder', text:'<i>Melee Weapon Attack</i>: +4 para acertar, alcance 0 pés, um alvo. Acerto: 5 (2d4) de dano de perfuração ou 2 (1d4) de dano de perfuração se o enxame tiver metade de seus pontos de vida ou menos.'},
    ],
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
    attributes: {
      ac: '13 (Armadura de Couro)',
      hp: '33 (6d8 + 6)',
      speed: '30 ft.',
      str: {value: 11, modifier: '0'},
      dex: {value: 14, modifier: '+2'},
      con: {value: 12, modifier: '+1'},
      int: {value: 10, modifier: '0'},
      wis: {value: 13, modifier: '+1'},
      cha: {value: 14, modifier: '+2'},
    },
    extraAttributes: [
      {title: 'Skills', text:'Decepção +4, Persuasão +4, Religião +2'},
      {title: 'Senses', text:'Percepção passiva 11'}, {title: 'Languages', text:'Qualquer uma lingua'}, {title: 'Proficiency Bonus', text:'+2'},
    ],
    challenge: '2',
    feats: [
      {title: 'Devoção das Trevas', text:'O fanático tem vantagem nos testes de resistência contra ser encantado ou assustado.'}
    ],
    actions: [
      {title: 'Morder', text:'<i>Melee Weapon Attack</i>: +4 para acertar, alcance 0 pés, um alvo. Acerto: 5 (2d4) de dano de perfuração ou 2 (1d4) de dano de perfuração se o enxame tiver metade de seus pontos de vida ou menos.'},
      {title: 'Feitiço', text:' O fanático é um conjurador de 4º nível. Sua habilidade de lançar feitiços é Sabedoria (resistência de feitiço DC 11, +3 para acertar com ataques de feitiço). O fanático tem os seguintes feitiços de clérigo preparados: <br><br>' +
        'Cantrips (à vontade): luz (light), chama sagrada (sacred flame), taumaturgia (thaumaturgy)<br>' +
        '1º nível (4 slots): comando (command), infligir feridas (inflict wounds), escudo da fé (shield of faith)<br>' +
        '2º nível (3 slots): segurar pessoa (hold person), arma espiritual (spiritual weapon)'
      },
    ],
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
    attributes: {
      ac: '12 (Armadura de Couro)',
      hp: '9 (2d8)',
      speed: '30 ft.',
      str: {value: 11, modifier: '0'},
      dex: {value: 12, modifier: '+1'},
      con: {value: 10, modifier: '0'},
      int: {value: 10, modifier: '0'},
      wis: {value: 11, modifier: '0'},
      cha: {value: 10, modifier: '0'},
    },
    extraAttributes: [
      {title: 'Skills', text:'Decepção +2, Religião +2'},
      {title: 'Senses', text:'Percepção passiva 10'}, {title: 'Languages', text:'Qualquer uma lingua'}, {title: 'Proficiency Bonus', text:'+2'},
    ],
    challenge: '1/8',
    feats: [
      {title: 'Devoção das Trevas', text:'O fanático tem vantagem nos testes de resistência contra ser encantado ou assustado.'}
    ],
    actions: [
      {title: 'Scimitara', text:'<i>Melee Weapon Attack</i>: +3 de acerto, alcance 5 pés, uma criatura. Acerto: 4 (1d6 + 1) de dano por corte.'},
    ],
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
    attributes: {
      ac: '11 (Armadura de Couro)',
      hp: '21 (6d6)',
      speed: '30 ft., voar 30 ft.',
      str: {value: 7, modifier: '-2'},
      dex: {value: 13, modifier: '+1'},
      con: {value: 10, modifier: '0'},
      int: {value: 9, modifier: '-1'},
      wis: {value: 11, modifier: '0'},
      cha: {value: 12, modifier: '+1'},
    },
    extraAttributes: [
      {title: 'Skills', text:'Percepção +2, Furtividade +3'},  {title: 'Vulnerabilidades de Danos', text:'Bludgeoning, Fire Damage'}, {title: 'Imunidades a Danos', text:'Frio, Veneno'},
      {title: 'Condição Imunidades', text:'Veneno'}, {title: 'Senses', text:'Visão no Escuro 60ft., Percepção passiva 12'}, {title: 'Languages', text:'Aquan, Auran'}, {title: 'Proficiency Bonus', text:'+2'},
    ],
    challenge: '1/2',
    feats: [
      {title: 'Falsa Aparência', text:'Enquanto o mephit permanece imóvel, é indistinguível de um fragmento de gelo comum.'}
    ],
    actions: [
      {title: 'Garras', text:'<i>Melee Weapon Attack</i>: +3 para acertar, alcance 5 pés, uma criatura. Acerto: 3 (1d4 + 1) de dano de corte mais 2 (1d4) de dano de frio.'},
      {title: 'Respiração de gelo (recarga 6)', text:' O mephit exala um cone de ar frio de 15 ft. Cada criatura naquela área deve ter sucesso em um teste de resistência de Destreza CD 10, recebendo 5 (2d4) de dano de frio em um teste falhado, ou metade do dano em um teste bem sucedido.'},
      {title: 'Lançamento de feitiço inato. (1 / dia)', text:'O mephit pode lançar nuvem de névoa (fog cloud) inatamente, não exigindo componentes materiais. Sua habilidade inata de lançar feitiços é o Carisma'},
      {title: 'Explosão de Morte', text:'Quando o mephit morre, ele explode em uma explosão de gelo irregular. Cada criatura a 1,5 m dela deve fazer um teste de resistência com Destreza DC 10, recebendo 4 (1d8) de dano cortante em um teste de resistência falhado ou metade do dano em um teste bem-sucedido.'},
    ],
    image: getIcon('mephit-icon.png')
  },
  {
    id: 'ferol',
    header: {
      monstername: 'Ferol Sal',
      type: 'Morto Vivo',
      size: 'Médio',
      alignment: 'Neutral Evil'
    },
    attributes: {
      ac: '14 (Couro Batido)',
      hp: '45 (6d8 + 18)',
      speed: '30 ft.',
      str: {value: 15, modifier: '+2'},
      dex: {value: 14, modifier: '+2'},
      con: {value: 16, modifier: '+3'},
      int: {value: 16, modifier: '+3'},
      wis: {value: 13, modifier: '+1'},
      cha: {value: 15, modifier: '+2'},
    },
    extraAttributes: [
      {title: 'Skills', text:'Percepção +3, Furtividade +4'},  {title: 'Resistências a danos', text:'necróticas; Golpeando, perfurando e cortando de ataques não mágicos que não são prateados'}, {title: 'Imunidades a Danos', text:'Veneno'},
      {title: 'Condição Imunidades', text:'Exaustão, Veneno'}, {title: 'Senses', text:'Visão no Escuro 60ft., Percepção passiva 13'}, {title: 'Languages', text:'Draconic, Elvish'}, {title: 'Proficiency Bonus', text:'+2'},
    ],
    challenge: '3',
    feats: [
      {title: 'Sensibilidade à Luz Solar', text:'Enquanto está sob a luz do sol, Ferol tem desvantagem nas jogadas de ataque, bem como nos testes de Sabedoria (Percepção) que dependem da visão.'}
    ],
    actions: [
      {title: 'Multiattack', text: 'Ferol faz dois ataques de espada longa ou dois ataques de arco longo. Ele pode usar seu Life Drain no lugar de um ataque de espada longa.'},
      {title: 'Dreno da Vida', text:'<i>Melee Weapon Attack</i>: Ataque com arma corpo a corpo: +4 para acertar, alcance 5 pés, uma criatura. Acerto: 5 (1d6 + 2) de dano necrótico. O alvo deve ter sucesso em um teste de resistência de Constituição DC 13 ' +
        'ou seu máximo de pontos de vida é reduzido em uma quantidade igual ao dano recebido. Essa redução dura até que o alvo termine um longo descanso. O alvo morre se este efeito reduzir seu máximo de pontos de vida para 0.<br><br>' +
        'Um humanóide morto por este ataque surge 24 horas depois como um zumbi sob o controle de Ferol, a menos que o humanóide seja restaurado à vida ou seu corpo seja destruído. Ferol não pode ter mais do que doze zumbis sob seu controle ao mesmo tempo.'},
      {title: 'Espada Longa', text:'<i>Melee Weapon Attack</i>: +4 para acertar, alcance 5 pés, um alvo. Acerto: 6 (1d8 + 2) de dano cortante ou 7 (1d10 + 2) de dano cortante se usado com as duas mãos.'},
      {title: 'Arco longo', text:'<i>Ranged Weapon Attack</i>: +4 para acertar, alcance de 150/600 pés, um alvo. Acerto: 6 (1d8 + 2) de dano perfurante.'},
    ],
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
    attributes: {
      ac: '8',
      hp: '22 (3d8 + 9)',
      speed: '20 ft.',
      str: {value: 13, modifier: '+1'},
      dex: {value: 6, modifier: '-2'},
      con: {value: 16, modifier: '+3'},
      int: {value: 3, modifier: '-4'},
      wis: {value: 6, modifier: '-2'},
      cha: {value: 5, modifier: '-3'},
    },
    extraAttributes: [
      {title: 'Saving Throws', text:'WIS +0'}, {title: 'Imunidades a Danos', text:'Veneno'},
      {title: 'Condição Imunidades', text:'Veneno'}, {title: 'Senses', text:'Visão no Escuro 60ft., Percepção passiva 8'}, {title: 'Languages', text:'Entende a lingua que falava, mas é incapaz de falar'}, {title: 'Proficiency Bonus', text:'+2'},
    ],
    challenge: '1/4',
    actions: [
      {title: 'Investida', text:'<i>Melee Weapon Attack</i>: +3 para acertar, alcance 5 pés, um alvo. Acerto: 4 (1d6 + 1) de dano por contusão.'},
      {title: 'Fortitude dos mortos-vivos', text:' Se o dano reduzir o zumbi a 0 pontos de vida, ele deve fazer um teste de resistência de Constituição com DC 5 + o dano recebido, a menos que o dano seja radiante ou de um acerto crítico. Com o sucesso, o zumbi cai para 1 ponto de vida'}
    ],
    image: getIcon('zombie-icon.jpg')
  }
]
export const getMonster = id => MONSTERS.find(el => el.id === id);
export const MONSTERS_SEARCH_OPTIONS = [
  { name : "Tipo", key: "type"},
  { name : "Tamanho", key: "size"},
  { name : "Desafio", key: "challenge"},
]
