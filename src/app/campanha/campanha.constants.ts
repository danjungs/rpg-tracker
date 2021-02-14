import { TextEnum } from './../enums/text-area.enum';
import { QuickMenuInterface, CampanhaInterface } from './../interface/campanha.interface';

const getImg = img => './../../../assets/imagens/' + img;

export const CAMPANHAS_CARDS = [
  {
    id: 'frozen-sick',
    title: 'A Doença Gélida',
    text: 'Level 1-3',
    path: 'frozen-sick',
    img: getImg('frozen-sick.png'),
    large: true
  }
];

export const CAMPANHAS_BANNER = {
  caption: 'Campanhas',
  image: 'campanha-banner'
};

const FROZEN_SICK_QUCKMENU: QuickMenuInterface = {
  id: 'frozen-sick',
  title: 'Frozen Sick',
  options: [
    {
      title: 'Visão geral da história',
      tag: 'storyOverview',
      section: [
        {
          text: 'Resumo da aventura',
          tag: 'adventureSummary'
        },
        {
          text: 'Setup e pontos iniciais',
          tag: 'setup'
        }
      ]
    },
    {
      title: 'Mistério na Vila Palebank',
      tag: 'mistery',
      section: [
        {
          text: 'O Pedido de Elro',
          tag: 'elrosRequest'
        },
        {
          text: 'A Cabana de Urgon',
          tag: 'urgonsCabin'
        },
        {
          text: 'A Cabana de Tulgi',
          tag: 'tulgisCabin'
        },
        {
          text: 'Curiosidades da Pelc',
          tag: 'pelcsCuriosities'
        }
      ]
    },
    {
      title: 'A Caverna Croaker',
      tag: 'croakerCave',
      section: [
        {
          text: 'Características da Caverna Croaker',
          tag: 'featuresCroakerCave'
        },
        {
          text: 'C1. Lagoa na entrada',
          tag: 'entrencePool'
        },
        {
          text: 'C2. Lagoa de treinamento',
          tag: 'trainingPool'
        },
        {
          text: 'C3. Morcegos da Caverna',
          tag: 'cavernBat'
        },
        {
          text: 'C4. Acampamento dos Bandidos',
          tag: 'banditCamp'
        },
        {
          text: 'C5. Lago do Coaxador Velho',
          tag: 'oldCroakerPool'
        },
        {
          text: 'C6. Caverna do Hulil',
          tag: 'hulilCavern'
        },
        {
          text: 'Desenvolvimento',
          tag: 'cavernDevelopment'
        }
      ]
    },
    {
      title: 'O Anão Alegre',
      tag: 'jollyDwarf',
      section: [
        {
          text: 'Desenvolvimento',
          tag: 'dwarfDevelopment'
        },
        {
          text: 'Avanço de personagem',
          tag: 'dwarfCharacterDev'
        }
      ]
    },
    {
      title: 'Viagem para Eiselcross',
      tag: 'travelingEiselcross',
      section: [
        {
          text: 'NPCs infectados com Frozen Sick',
          tag: 'npcInfected'
        },
        {
          text: 'Excurssão do Remorhaz',
          tag: 'remorhazVoyage'
        }
      ]
    },
    {
      title: 'Syrinlya',
      tag: 'syrinlya',
      section: [
        {
          text: 'A tenda de Bertron',
          tag: 'bertronYurt'
        },
        {
          text: 'O Comprador',
          tag: 'theBuyer'
        },
        {
          text: 'Orvo Mustave',
          tag: 'orvoMustave'
        }
      ]
    },
    {
      title: 'Adentrando a selva',
      tag: 'intoTheWild',
      section: [
        {
          text: 'Viagem terrestre',
          tag: 'overLand'
        },
        {
          text: 'Encontrando Salsvault',
          tag: 'findingSalsvault'
        }
      ]
    },
    {
      title: 'Salsvault',
      tag: 'salsvault',
      section: [
        {
          text: 'Salsvault Features',
          tag: 'salsvaultFeatures'
        },
        {
          text: 'S1. Câmara de Entrada',
          tag: 'entranceChamber'
        },
        {
          text: 'S2. O saqueado Laboratório de Sofrimento gelado',
          tag: 'ransackedFrigidWoeLaboratory'
        },
        {
          text: 'S3. Laboratório de Armadura Animadas',
          tag: 'animatedArmorLaboratory'
        },
        {
          text: 'S4. Laboratório de Sofrimento gelado',
          tag: 'frigidWoeLaboratory'
        },
        {
          text: 'S5. Armazenamento de doenças',
          tag: 'diseaseStorage'
        },
        {
          text: 'S6. Corredor do Norte',
          tag: 'northHall'
        }
      ]
    },
    {
      title: 'Salsvault (áreas S7-S12)',
      tag: 'salsvaultPart2',
      section: [
        {
          text: 'S7. Dormitório Desocupado',
          tag: 'unoccupiedDorm'
        },
        {
          text: 'S8. Dormitório em ruínas',
          tag: 'ruinedDorm'
        },
        {
          text: 'S9. Dormitório Zumbi',
          tag: 'zombieDorm'
        },
        {
          text: 'S10. O Aposento de Ferol Sal',
          tag: 'ferolSalChamber'
        },
        {
          text: 'S11 Cozinha',
          tag: 'kitchen'
        },
        {
          text: 'S12. Refeitório',
          tag: 'dinningHall'
        }
      ]
    },
    {
      title: 'Salsvault (áreas S13-S18)',
      tag: 'salsvaultPart3',
      section: [
        {
          text: 'S13. Biblioteca afogada',
          tag: 'drownedLibrary'
        },
        {
          text: 'S14. Corredor do Sul',
          tag: 'southHall'
        },
        {
          text: 'S15. Armazenamento de armas animadas',
          tag: 'animatedWeaponStorage'
        },
        {
          text: 'S16. Laboratório do Golem',
          tag: 'golemLaboratory'
        },
        {
          text: 'S17. Laboratório de Ferol',
          tag: 'FerolLaboratory'
        },
        {
          text: 'S18. Laboratório Curativo Afogado',
          tag: 'drownedCurativeLaboratory'
        }
      ]
    },
    {
      title: 'Concluindo a aventura',
      tag: 'concludingTheAdventure',
      section: [
        {
          text: 'Avanço de Personagem',
          tag: 'endCharacterDev'
        }
      ]
    },
  ]
};
const QUICKMENU_LIST = [
  FROZEN_SICK_QUCKMENU
]
export const getQuickMenu = id => QUICKMENU_LIST.find(el => el.id === id);

const FROZEN_SICK: CampanhaInterface = {
  id: 'frozen-sick',
  title: 'A Doença Gélida',
  overview: 'Algo está matando as pessoas da Vila Palebank, e se os jogadores não botarem um fim nisso, eles poderão ser os próximos. ' +
    '"A doença do Gélida" é uma aventura que leva os jogadores do 1º ao 3º nível e os apresenta à região mais ao norte ' +
    'do continente - os desolados reinos árticos de Graying Wildlands e Eiselcross<br><br>' +
    'Se seus jogadores estão usando a crônica heróica para criar seus personagens (veja o capítulo 4 no Guia do Explorador para Montante Selvagem), ' +
    'trabalhe com eles para decidir como eles traçaram seus caminhos para a Vila Palebank. ' +
    'Eles são cidadãos de Uthodurn agora auxíliando na expansão da superfície de sua civilização? ' +
    'Eles vieram para o norte em busca de liberdade das guerras de outras terras?  Qualquer número de opções pode ajudar a vincular os personagens a esta região gélida e os mistérios que ela contém.',
  chapters: [
    {
      title: 'Visão geral da História',
      tag: 'storyOverview',
      textArea: [
        {
          type: TextEnum.NORMAL,
          text: 'Urgon Wenth, um explorador anão, voltou recentemente para sua casa na Vila Palebank, depois de explorar os desertos gelados de Eiselcross por um ano.' +
          'O anão trouxe para casa vários itens saqueados das ruínas de Foren, a maior das ilhas de Eiselcross.' +
          'Entre esses tesouros estavam dois lindos frascos de vidro azul, que Urgon vendeu para uma colecionadora elfa chamada Verla Pelc. ' +
          'Os frascos foram então roubados, dados a um contrabandista de Shadycreek Run e vendidos novamente a um comerciante desavisado.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Na realidade, a bela cor azul dos frascos é o resultado de esporos azuis mortais que se agarram ao interior do vidro. ' +
          'Fracas rachaduras em ambos os frascos expuseram cada pessoa que os manipulou o sofrimento fria, uma doença mortal que não pode ser curada por meios convencionais. ' +
          'A doença já matou Urgon e Verla, transformando-os em estátuas de gelo. ' +
          'Detalhes sobre o sofrimento fria são encontrados na seção “Eiselcross” do capítulo 3 do Explorer\'s Guide to Wildemount.'
        },
        {
          type: TextEnum.CARD,
          text: {
            title: 'Sofrimento Gelado',
            text: 'Sofrimento gelado é uma doença especial desenvolvida pelos magos de Aeor que não pode ser curada com tratamento convencional ou mágica. ' +
              'A única maneira que uma criatura infectada com a doença pode ser curada é encontrar e beber o antídoto manufaturado, ' +
              'um líquido leitoso armazenado em frascos de ouro encontrados nas ruínas de Eiselcross. Esta doença foi criada para desacelerar as forças dos deuses e contornar o poder de cura de seus clérigos e anjos.<br><br>'+
              'A doença é transmitida pela inalação de esporos azuis que os magos de Aeor criaram há muito tempo. Quando uma criatura entra em contato com esses esporos, ' +
              'ela deve ser bem-sucedida em um teste de resistência de Constituição DC 11 ou será infectado com o sofrimento fria. Leva 1d4 dias para que os sintomas se manifestem em uma criatura infectada. '+
              'Esses sintomas incluem fadiga, calafrios e veias azuis visíveis que aparecem no corpo da criatura. A velocidade da criatura infectada é reduzida em 5 feet, enquanto ela permanecer infectada. '+
              'A cada 10 dias após o aparecimento dos sintomas, uma criatura infectada deve ser bem-sucedida em um teste de resistência de Constituição DC 11 ou seu deslocamento é reduzido em mais 1,5 metro. Se a velocidade de uma criatura for reduzida a 0 como resultado desta doença, a criatura morre e seu corpo se transforma em uma estátua feita de gelo.<br><br>' +
              'Uma criatura pode beber o antídoto como uma ação, terminando todos os sintomas e efeitos da doença instantaneamente.'
          }
        },
        {
          type: TextEnum.TITLE,
          text: 'Resumo da Aventura',
          tag: 'adventureSummary'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Enquanto os personagens estão na Vila Palebank, o líder da comunidade Elro Aldataur pede ajuda para descobrir quem ou o que matou Urgon Wenth. ' +
          'Um explorador que voltou recentemente de Eiselcross, Urgon foi atingido por uma doença estranha que o transformou em uma estátua de gelo, e que desde então o mesmo mal aconteceu com outro dos residentes da vila. ' +
          'Os personagens investigam o mistério enquanto lutam com as forças dos Uttolots, uma das famílias criminosas que controlam Shadycreek Run. Mais moradores infectados são descobertos, incluindo mais um já morto, antes que os personagens derrotem os bandidos de Uttolot de um complexo de cavernas, local chamado Caverna Croaker.' +
          'No final, os frascos da miséria gelada são recuperados, mas o comerciante Irven Liel e sua família estão infectados e serão os próximos a morrer sem cura. Mais do que isso, os próprios personagens podem estar infectados com a doença.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Elro pede que os personagens viajem para Eiselcross em busca de uma cura para o sofrimento gelado. Os personagens pegam um barco para Syrinlya, o posto avançado de Uthodurno em Foren ' +
          'e refaçam o caminho de Urgon Wenth até as ruínas de Salsvault. Este laboratório mágico já fez parte de Aeor, uma antiga cidade-estado voadora que colidiu com Eiselcross durante a Calamidade. ' +
          'Somente enfrentando as defesas de Salsvault e os guardiões mortais os aventureiros podem encontrar o antídoto de que precisam.'
        },
        {
          type: TextEnum.TITLE,
          text: 'Setup e pontos iniciais',
          tag: 'setup'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Trabalhe com os jogadores para estabelecer por que seus personagens estão em Palebank Village. Você pode fornecer informações sobre a vila e as terras vizinhas,' +
          'todas descritas no capítulo 3 do  Explorer\'s Guide to Wildemount.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Antes de a aventura começar também é a hora de descobrir se os personagens já se conhecem ou se esta aventura é a primeira vez que eles se encontram.'
        }
      ]
    },
    {
      title: 'Mistério na Vila Palebank',
      tag: 'mistery',
      textArea: [
        {
          type: TextEnum.NORMAL,
          text: 'A aventura começa na Vila Palebank, com os personagens imediatamente envolvidos em um drama, uma morte em um povoado isolado. Quando os jogadores estiverem prontos para começar, leia ou parafraseie o seguinte texto para definir o cenário:'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'A neve cai suavemente do céu e o vento morde suas bochechas enquanto vocês se encontram no cemitério da Vila Palebank, '+
            'um posto avançado de pesca de Uthodurn que é o lar de várias centenas de anões e elfos. O sol está baixo no céu, '+
            'sendo abaixado para o túmulo recente cavado de Urgon Wenth, está o corpo de um velho anão que pegou uma maldição ou doença que o transformou em uma estátua de gelo. O povo da aldeia se reuniu para prestar suas últimas homenagens aos restos mortais congelados de Urgon.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Como parte da história de seus personagens, os jogadores podem decidir se algum deles conhecia Urgon ou se veio ao funeral simplesmente para mostrar respeito ao povo da comunidade. De qualquer forma, continue lendo o seguinte:'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'Uma voz fala baixinho atrás de vocês. "Obrigado por participar da despedida do Urgon." '+
            'Vocês se viram e encontram o olhar de Elro Aldataur, um elfo envelhecido, patrulheiro aposentado e líder da aldeia. "Lamento falar de más notícias sob tais circunstâncias, mas acredito que a Vila Palebank pode estar em perigo e espero que vocês possam nos ajudar."'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Sejam os personagens conhecidos na vila como aventureiros noviços ou simplesmente pareçam, Elro (um bom e neutro elfo da floresta veterano) espera que eles sejam o tipo de pessoa que não tem medo de ajudar os necessitados. Use os seguintes pontos para ajudar a orientar a conversa enquanto ele explica suas preocupações aos personagens:'
        },
        {
          type: TextEnum.LIST,
          list: [
            'Dois meses atrás, Urgon Wenth voltou para casa depois de explorar Eiselcross por um ano. Ele estava de volta há apenas alguns dias quando caiu sobre influêcia de uma estranha doença, que fez o anão se mover lentamente e fez com que veias azuis aparecessem por todo o corpo.',
            'Os sacerdotes da vila de Moradin e Corellon usaram todos os feitiços que puderam reunir para tentar curar Urgon, mas nada do que eles tentaram conseguiu parar a doença bizarra. Urgon lutou contra a aflição por semanas, até que seu corpo cada vez mais lento se transformou em gelo.',
            'Até ontem, Elro e o resto da comunidade acreditavam que o triste destino de Urgon era um incidente isolado, provavelmente causado por algo com que o anão entrou em contato enquanto explorava Eiselcross. Então Elro notou Tulgi Lutan, uma anã caçadora, mostrando sinais da mesma doença.',
            'Alarmado, Elro tentou conversar com Tulgi sobre isso, mas ela o empurrou, pedindo que ele a deixasse morrer em paz.'
          ]
        },
        {
          type: TextEnum.TITLE,
          text: 'O Pedido de Elron',
          tag: 'elrosRequest'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Se os personagens estiverem dispostos, Elro quer que eles descubram o que causou a aflição de Urgon e Tulgi. Ele está preocupado que isso possa se espalhar, mas Tulgi se recusa a falar com ele, ' +
            'e os Laminas de Vidro na vila são mais conhecidos por suas habilidades de combate do que por sua capacidade de recolher a verdade em uma situação complicada. Além disso, Tulgi é extremamente desconfiado das autoridades.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Elro acha que um grupo de aventureiros pode ter mais sorte convencendo Tulgi a falar. Se os personagens concordarem em ajudar a encontrar a causa da aflição de Urgon e Tulgi, ' +
            'Elro se oferece para pagar a eles 100 PO. Ele sugere que os personagens comecem procurando na casa de Urgon ou conversando com Tulgi em sua cabana.'
        },
        {
          type: TextEnum.TITLE,
          text: 'A Cabana de Urgon',
          tag: 'urgonsCabin'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Urgon Wenth vivia em uma cabana de madeira de um andar e um cômodo na periferia da cidade. Uma novata do Laminas de Vidro bem-humorada chamada Mila Teno (uma batedora elfa da floresta, boa e leal) fica de guarda do lado de fora da porta da frente. ' +
            'Se os personagens explicam por que vieram, ela permite que eles entrem na casa e olhem ao redor. Quando os personagens entrarem na cabine, leia:'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'Esta cabana escura e apertada pode ter sido um lugar aconchegante quando seu dono era vivo. Agora uma cama desfeita está perto de uma lareira fria, a cima da lareira pendurada uma cabeça de alguma besta branca rosnando com chifres cinzentos. '+
            'Do outro lado da sala, uma pequena mesa cheia de pratos sujos com um conjunto de cadeiras do tamanho de um anão está diante de duas prateleiras vazias cujo conteúdo está espalhado pelo chão: utensílios de cozinha, alimentos secos, equipamentos de aventura e alguns livros.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Qualquer personagem que examina a bagunça na cabana percebe que alguém recentemente destruiu o lugar enquanto o revistava. Um teste bem-sucedido de Inteligência DC 12 (Investigação) revela as pegadas do intruso. ' +
            'Tulgi Lutan era a culpada, desesperada por qualquer pista que pudesse ajudá-la a curar o sofrimento gélido que está a matando. Seus rastros levam para fora e de volta para sua cabana (veja "Cabana de Tulgi" abaixo).'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Equipamentos de Aventura',
          text: 'O equipamento de aventura de Urgon consiste em um malho prateado; uma armadura de tala do tamanho de um anão; roupas volumosas forradas de pele do tamanho de um anão; um gancho de luta; e uma lanterna com capuz.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Cabeça Montada',
          text: 'Um personagem que obtém sucesso em um teste de Inteligência (Natureza) DC 15 reconhece que a cabeça montada acima do manto pertencia a um yeti, uma monstruosidade encontrada em Eiselcross.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Estranho Recibo',
          text: 'Um personagem que procura nos livros da estante e é bem-sucedido em um teste de Inteligência (Investigação) DC 10 encontra um recibo dobrado usado como marcador. ' +
            'O recibo é datado de dois meses antes e indica que Urgon vendeu vários itens Aeorianos encontrados em Eiselcross para a loja de antiguidades Curiosidades da Pelc local por 1.000 po. ' +
            'Os itens são listados como uma adaga, uma caixa de pergaminhos, uma estatueta de jade, uma aljava com vinte flechas, um anel de prata com um jaspe e dois frascos de vidro azul.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Personagens que são residentes da Vila Palebank ou que já estiveram lá por um tempo sabem da Curiosidades da Pelc - e também sabem que a loja foi roubada e vandalizada há dois meses.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Desenvolvimento',
          text: 'Depois de vasculhar a cabana, os personagens podem continuar sua investigação indo para a cabana de Tulgi ou parando em Curiosidades da Pelc (assumindo que encontraram o recibo).'
        },
        {
          type: TextEnum.TITLE,
          text: 'A Cabana de Tulgi',
          tag: 'tulgisCabin'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Quando os personagens se aproximarem da cabana de Tulgi, leia:'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'Esta cabana coberta de neve parece pacífica e silenciosa do lado de fora. Suas janelas estão fechadas, e um fluxo constante de fumaça saindo da chaminé indica um fogo estrondoso lá dentro.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'A casa de Tulgi Lutan é uma cabana de madeira de um andar e um cômodo. Como ela não gosta de deixar os personagens entrarem, os seguintes recursos podem ser importantes:'
        },
        {
          type: TextEnum.LIST,
          list: [
            'O teto da cabine tem 12 pés (3,6 metros) de altura. Escalar as paredes externas requer um teste bem-sucedido de Força DC 10 (Atletismo).',
            'A porta de madeira da cabana está trancada e tem AC 15, 18 pontos de vida e imunidade a veneno e danos psíquicos. ' +
            'A fechadura pode ser arrombada com um teste bem sucedido de Destreza DC 12 usando ferramentas de ladrões, ou a porta pode ser aberta com um teste bem sucedido de Força DC 15 (Atletismo). Tulgi carrega a chave que destranca a porta.',
            'Cada uma das quatro paredes da cabine tem uma janela, que é fechada e trancada por dentro. Uma janela pode ser destravada de fora com uma verificação bem-sucedida de Destreza DC 12 usando ferramentas de ladrões.',
            'O interior da cabana é intensamente iluminado por fogueiras em um braseiro e uma lareira, embora a névoa de fumaça emitida por ambos torne o interior levemente obscurecido.'
          ]
        },
        {
          type: TextEnum.NORMAL,
          text: 'Se os personagens baterem na porta, Tulgi Lutan (uma anã da montanha neutra e maligna com uma velocidade de caminhada de 10 pés) responde do outro lado, dizendo-lhes para ir embora.' +
            'Um personagem que grita pela porta e é bem-sucedido em um teste de Carisma DC 12 (Decepção, Intimidação ou Persuasão) convence Tulgi a abrir a porta e permitir que o grupo entre. Caso contrário, ela ignora tudo o que os personagens dizem.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Se os personagens não forem convidados a entrar, eles terão que decidir que outros meios estão dispostos a usar para entrar. Independentemente de como o façam, quando os personagens entrarem na cabine, leia:'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'O calor nesta pequena cabana bate como um golpe de martelo. Uma mesa posta com pratos, ferramentas e utensílios empilhados ordenadamente fica no centro da sala. O cheiro de uma sopa fervendo vem de uma panela pendurada dentro de uma lareira crepitante. ' +
            'Outro fogo queima em um braseiro de ferro na extremidade oposta da sala, enchendo a cabana com uma névoa de fumaça. Tremendo na ponta de uma cama perto do braseiro está um anão enrolado em cobertores. Veias salientes e azuis marcam seu rosto, pescoço e mãos.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Se os personagens invadiram a cabana, Tulgi ataca assim que os vê, lutando até reduzir a 10 pontos de vida, então se rendendo.' +
            'Ela tem dois lobos de estimação, Iro e Jira, que se escondem debaixo de sua cama. Se uma luta começar, os lobos se juntam à briga para defendê-la.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Riscos de Fogo',
          text: 'Qualquer criatura que entrar em contato com o braseiro ou a lareira pela primeira vez em seu turno, ou que comece seu turno ali, sofre 2 (1d4) de dano de fogo.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'O Que Tulgi Sabe',
          text: 'Tulgi é rude e direto ao ponto e tenta compensar sua doença com arrogância. ' +
            'Se os personagens entraram na cabana com sua permissão ou se ela se rendeu a eles, ela diz apenas que tem a mesma doença que matou Urgon e que está procurando uma cura.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Um personagem que obtém sucesso em um teste de Carisma (Intimidação ou Persuasão) DC 12 convence Tulgi a revelar as seguintes informações:'
        },
        {
          type: TextEnum.LIST,
          list: [
            'Tulgi veio para Palebank Village alguns anos atrás de Shadycreek Run com sua irmã, Hulil. Ambos trabalham para a família Uttolot.',
            'Os Uttolots enviaram as irmãs e alguns outros para a vila para ficar de olho nos tesouros que voltavam de Eiselcross - com a intenção de roubá-los. ' +
            'Quando esses artefatos chegam ao pequeno povoado, costumam ser bens incomuns que os caçadores de tesouro estão tentando manter longe de Uthodurn ou do Império Dwendaliano.',
            'Quando Urgon Wenth voltou para Palebank Village com tesouros de Eiselcross, Tulgi viu sua chance. Ela esperou que Urgon vendesse seus achados para os Curiosidades da Pelc, em seguida, roubou todos eles.',
            'Tulgi deu a maioria das relíquias de Urgon para Hulil, mas manteve uma para si - uma adaga ornamentada. ' +
            'Ela relutantemente dá esta arma aos personagens se for solicitada (veja “Tesouro” abaixo). Hulil tem os outros itens em um local ao norte da vila conhecido como Caverna de Croaker.',
            'Tulgi foi quem vasculhou a cabana de Urgon, convencida de que o anão morto devia ter magia ou outros segredos armazenados lá.'
          ]
        },
        {
          type: TextEnum.NORMAL,
          title: 'Tesouro',
          text: 'Se Tulgi não oferecer sua adaga aos personagens, qualquer personagem com uma pontuação passiva de Sabedoria (Percepção) de 11 ou mais notará a lâmina ornamentada em uma bainha dourada enfiada sob sua camisa. ' +
            'Se os personagens reivindicarem a adaga +1, um teste bem-sucedido de Inteligência DC 15 (Arcanos ou História) revela que a adaga é uma relíquia da cidade voadora caída de Aeor.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Desenvolvimento',
          text: 'Os personagens não têm problemas para encontrar a Caverna de Croaker ou as Curiosidades da Pelc se qualquer um desses locais for o próximo destino. ' +
            'Se as coisas derem errado com Tulgi e ela morrer antes de revelar qualquer informação, os personagens podem encontrar notas ou instruções de Hulil revelando algumas das informações acima.'
        },
        {
          type: TextEnum.TITLE,
          text: 'Curiosidades da Pelc',
          tag: 'pelcsCuriosities'
        },
        {
          type: TextEnum.NORMAL,
          text: 'A Curiosidades da Pelc é uma loja de antiguidades administrada por uma elfa introvertida chamada Verla Pelc. Verla se mantém sozinha, abrindo sua loja apenas quando está com vontade. ' +
            'Ela comercializa todo e qualquer objeto de seu interesse, enviando-os por Wildemount. Personagens que são residentes de Palebank Village ou que já estiveram lá por um tempo sabem da Curiosidades de Pelc ' +
            '- e também sabem que a loja foi roubada e vandalizada há dois meses. Se os personagens forem recém-chegados à aldeia, qualquer pessoa a quem perguntarem sobre a loja mencionará o roubo.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'A Curiosidades da Pelc é uma cabana de madeira com um andar e dois quartos. As janelas são fechadas e trancadas por dentro, deixando o interior escuro. A única entrada é a porta da frente, ' +
            'mas os personagens podem abrir à força uma das venezianas nos fundos com um teste bem-sucedido de Força DC 12 (Atletismo), concedendo acesso aos aposentos de Verla (veja aquela seção abaixo).'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Quando os personagens se aproximarem da cabana, leia:'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'A cabana escura diante de você tem uma placa sobre a porta que diz: "Curiosidades da Pelc", com a imagem de um dragão curvo usado para fazer a letra P. Embora a loja pareça fechada, a porta da frente está entreaberta.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Qualquer personagem com uma pontuação passiva de Sabedoria (Percepção) de 11 ou mais ouve vozes sussurradas e passos vindos de dentro da cabana.' +
            'Se os personagens forem bem-sucedidos em um teste de Destreza DC 10 (Furtividade) em grupo, eles podem surpreender os bandidos que estão na loja.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Área da Frente da Loja',
          text: 'A loja de antiguidades ocupa a grande sala da frente da cabana. Quando os personagens puderem ver nesta área, leia:'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'Cinco elfos encapuzados parecem ter saqueado a loja e estão vasculhando os escombros quebrados no chão. Os móveis, prateleiras e balcão da frente foram destruídos, e as mercadorias da loja agora estão espalhadas pelo chão.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Esta área é um terreno difícil graças aos escombros que a cobrem. Os cinco elfos são bandidos com visão no escuro de até 18 metros, ' +
            'vantagem em testes de resistência contra serem encantados e imunidade à magia que os faria dormir.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Os bandidos atacam assim que percebem os personagens, lutando até que reste apenas um. Esse sobrevivente então se rende. ' +
            'Se um bandido capturado for questionado, um personagem que tiver sucesso em um teste de Carisma (Intimidação) DC 10 pode aprender as seguintes informações:'
        },
        {
          type: TextEnum.LIST,
          list: [
            'Os bandidos trabalham para Hulil Lutan, uma clériga anã de Tiamat. Hulil trabalha para a família Uttolot de Shadycreek Run.',
            'A irmã de Hulil, Tulgi, roubou as Curiosidades de Pelc há dois meses.',
            'Hulil está doente ou amaldiçoada por alguma aflição que a faz se mover lentamente e está deixando suas veias azuis.',
            'Hulil ordenou que os bandidos saqueassem a Curiosidades da Pelc em busca de poções, pergaminhos ou outros itens que pudessem ajudar na curá-la' +
            'Apesar da busca minuciosa, os bandidos não encontraram nada de útil. Hulil está se escondendo com mais bandidos na Caverna Croaker.',
          ]
        },
        {
          type: TextEnum.NORMAL,
          title: 'Aposentos de Verla',
          text: 'Os aposentos de Verla ficam na parte de trás da cabana. Quando os personagens ganharem acesso a esta área, leia:'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'O que parece ser uma estátua de gelo de uma elfa está enrolada sob os cobertores de uma cama ao longo da parede leste do quarto. Uma pequena mesa cheia de xícaras de chá sujas e uma chaleira estão ao lado da cama.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'A figura na cama é a infeliz Verla Pelc, que foi infectada com a sofrimento gélido pelas relíquias eorianas de Urgon Wenth. Seus sintomas apareceram algumas semanas depois que a loja foi assaltada, mas o elfo recluso nunca contou a ninguém sobre eles.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Desenvolvimento',
          text: 'Questionar qualquer um dos bandidos pode encontrar pistas sólidas que podem levar os personagens à Caverna de Croaker, ou de volta à cabana de Tulgi se houver outras perguntas que a anã ainda não respondeu. ' +
            'Se eles não foram capazes de questionar os bandidos, você pode ter um dos bandidos carregando ordens de Hulil que apontam para o esconderijo da Caverna Croaker.'
        },
      ]
    }
  ]
}
const CAMPANHAS_LIST = [
  FROZEN_SICK
]
export const getCampain = id => CAMPANHAS_LIST.find(el => el.id === id);
