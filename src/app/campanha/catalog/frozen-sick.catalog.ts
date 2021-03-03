import { QuickMenuInterface, CampanhaInterface } from 'src/app/interface/campanha.interface';
import { TextEnum } from 'src/app/enums/text-area.enum';

const getImage = (img) => './../../../assets/imagens/' + img;

export const FROZEN_SICK: CampanhaInterface = {
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
          text: 'Urgon Wenth vivia em uma cabana de madeira de um andar e um cômodo na periferia da cidade. Uma novata do Laminas de Vidro bem-humorada chamada Mila Teno (uma patrulheira elfa da floresta, boa e leal) fica de guarda do lado de fora da porta da frente. ' +
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
          text: 'Se os personagens baterem na porta, Tulgi Lutan (uma anã da montanha <a class="monster-anchor" href="/monsters/thug">batedora</a> neutra e maligna com uma velocidade de caminhada de 10 pés) responde do outro lado, dizendo-lhes para ir embora.' +
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
            'Ela tem dois <a class="monster-anchor" href="/monsters/bandit">lobos</a> de estimação, Iro e Jira, que se escondem debaixo de sua cama. Se uma luta começar, os lobos se juntam à briga para defendê-la.'
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
          text: 'Esta área é um terreno difícil graças aos escombros que a cobrem. Os cinco elfos são <a class="monster-anchor" href="/monsters/bandit">bandidos</a> com visão no escuro de até 18 metros, ' +
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
    },
    {
      title: 'A Caverna Croaker',
      tag: 'croakerCave',
      textArea: [
        {
          type: TextEnum.NORMAL,
          text: 'Personagens locais de Palebank Village ou que passaram algum tempo lá conhecem Croaker Cave. Se todos os personagens forem recém-chegados à aldeia, qualquer um dos moradores pode contar a eles sobre a caverna e como chegar lá.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'A Caverna Croaker recebe o nome graças a seus residentes, sapos gigantes de gelo. Sua entrada fica nas margens das Profundezas Frígidas, ao norte da Vila Palebank. Conforme os personagens se aproximam da entrada da caverna, eles veem sinais frequentes de rastros por onde os bandidos estão indo e vindo. ' +
            'No entanto, não há sinais de patrulhas ou guardas. Uma nuvem de fumaça sobe do solo além da entrada da caverna, ventilando por uma estreita chaminé natural da área C6. A chaminé é muito pequena para ser escalada, infelizmente, e a entrada da caverna principal é o único ponto de entrada.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Sabendo que os residentes da Vila Palebank evitam a caverna e seus sapos perigosos, Hulil Lutan fez do local sua base de operações. Ela e os bandidos Uttolot que ela comanda domesticaram os sapos de gelo gigantes que fazem da caverna seu lar, usando-os como animais de guarda.'
        },
        {
          type: TextEnum.IMAGE,
          imagePath: getImage('croaker-cave.png'),
        },
        {
          type: TextEnum.TITLE,
          text: 'Os Gigantes Sapos de Gelo'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Com exceção do Velho Croaker (consulte a área C5), os sapos do gelo gigantes são <a class="monster-anchor" href="/monsters/frog">sapos gigantes</a> com imunidade aos danos do frio.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Os sapos de pele azul atacam qualquer criatura no complexo da caverna, não acompanhados por bandidos que eles reconhecem. Cada um luta até ser reduzido à metade de seus pontos de vida ou menos, então foge. ' +
            'Um personagem que obtém sucesso em um teste de Sabedoria (Manipulação de Animais) DC 15 como uma ação convence um sapo a não atacar ou a parar de atacar. Se o personagem ou qualquer um de seus aliados atacar ou ferir o sapo, ele continuará o combate.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Os sapos passam grande parte do tempo descansando em poças de água turva e gelada na Caverna Croaker. Um personagem que tem sucesso em um teste de Sabedoria (Percepção) ' +
            'contra um teste de Destreza (Furtividade) de um sapo nota um sapo se escondendo em uma poça. Se um sapo não for detectado, ele ataca com surpresa quando um personagem chega a 5 pés (1,5 m) do lago.'
        },
        {
          type: TextEnum.TITLE,
          text: 'Bandidos de Uttolot'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Os bandidos enviados com Hulil pela família Uttolot são todos anões e elfos. Normalmente, até dez bandidos ocupam a Caverna Croaker, mas apenas três estão presentes (na área C2). ' +
            'Eles usam o bloco de estatísticas do <a class="monster-anchor" href="/monsters/bandit">bandido</a> e têm visão no escuro até um alcance de 18 metros.' +
            'Além disso, os anões têm resistência a danos de veneno e têm vantagem em testes de resistência contra veneno; os elfos têm vantagem em testes de resistência contra serem encantados e imunidade à magia que os colocaria para dormir.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Os bandidos Uttolot atacam qualquer intruso à vista. Cada um luta até ser reduzido à metade ou menos e, em seguida, foge das cavernas. ' +
            'Se os personagens capturarem um bandido Uttolot, eles podem aprender as seguintes informações com um teste bem-sucedido de Carisma DC 10 (Intimidação):'
        },
        {
          type: TextEnum.LIST,
          list: [
            'Hulil está doente com a mesma doença que matou Urgon Wenth.',
            'Ela planeja partir para Shadycreek Run em breve, na esperança de que trocar os itens que sua irmã Tulgi roubou de Pelc’s Curiosities lhe permita pagar por alguma cura.',
          ]
        },
        {
          type: TextEnum.TITLE,
          text: 'Características da Caverna Croaker',
          tag: 'featuresCroakerCave'
        },
        {
          type: TextEnum.NORMAL,
          text: 'As cavernas e túneis do complexo Croaker Cave são mostrados no mapa. A menos que indicado de outra forma na descrição de uma área, os seguintes recursos são comuns em todas as áreas da Caverna Croaker.'
        },
        {
          type: TextEnum.NORMAL,
          title:'Tetos',
          text: 'O teto da caverna tem 3 metros (10 ft.) de altura, com apenas 2,5 (8 ft.) metros de distância abaixo das estalactites.'
        },
        {
          type: TextEnum.NORMAL,
          title:'Paredes',
          text: 'Escalar as paredes ásperas de uma caverna requer um teste bem sucedido de Força DC 12 (Atletismo).'
        },
        {
          type: TextEnum.NORMAL,
          title:'Luz',
          text: 'As cavernas não contêm fontes de luz, exceto na área C6, pois os habitantes da Caverna de Croaker contam com a visão no escuro para ver.'
        },
        {
          type: TextEnum.NORMAL,
          title:'Lagoas geladas',
          text: 'Piscinas de água turva e gelada dentro das cavernas são criadas pelo derretimento da neve no solo rochoso que goteja pelo teto. Cada piscina tem 10 pés de profundidade. ' +
            'Uma criatura completamente submersa em uma lagoa deve ser bem-sucedida em um teste de resistência de Constituição DC 10 ou ganhar um nível de exaustão. ' +
            'Criaturas com resistência ou imunidade a dano por frio são automaticamente bem-sucedidas neste teste de resistência. Para cada minuto que a criatura passa submersa em uma piscina, ela deve repetir este teste de resistência, ganhando outro nível de exaustão em caso de falha.'
        },
        {
          type: TextEnum.TITLE,
          text: 'C1. Lagoa na entrada',
          tag: 'entrencePool'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Esta área da caverna fica perto o suficiente da entrada para ser iluminada, mesmo que mal, durante o dia e em noites claras de luar. Quando os personagens puderem ver nesta área, leia:'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'O lento gotejar de água soa caindo das estalactites em uma lagoa escura que preenche o túnel áspero à frente. A cada poucos momentos, um som alto de coaxar soa de algum lugar além na escuridão.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Com visão no escuro ou uma fonte de luz apropriada, os personagens podem ver uma viga de madeira pesada de 25 pés de comprimento encostada na parede oeste da caverna na extremidade sul da piscina. ' +
            'Os bandidos Uttolot usam a viga para cruzar a piscina e puxam-na de volta para o outro lado quando estão na caverna.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Dois sapos de gelo gigantes se escondem na piscina escura. Se o combate estourar nesta área, os bandidos da área C2 rapidamente vêm para investigar.'
        },
        {
          type: TextEnum.TITLE,
          text: 'C2. Lagoa de treinamento',
          tag: 'trainingPool'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'O lento gotejar de água do teto flui para uma piscina no canto sudoeste desta caverna. Um grande balde de madeira com tampa fica perto da borda da piscina.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Três bandidos Uttolot e duas rãs de gelo gigantes normalmente ocupam esta caverna. Se os bandidos ainda não foram alertados sobre distúrbios, eles estão treinando as rãs. Adicione o seguinte:'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'Um anão e dois elfos embrulhados em camadas de roupas de inverno estão jogando morcegos mortos para o alto. Dois sapos gigantes de pele azul saltam para agarrar os morcegos no ar, aparentemente como parte de algum tipo de sessão de treinamento.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Se os bandidos foram investigar distúrbios em áreas adjacentes, os sapos estão se escondendo na piscina.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Balde',
          text: 'O balde contém seis morcegos mortos usados ​​como tratamento de treinamento. Um personagem que oferece um morcego morto a um sapo tem vantagem em seu próximo teste de Sabedoria (Manejo de Animais) feito para controlar o comportamento daquele sapo.'
        },
        {
          type: TextEnum.TITLE,
          text: 'C3. Morcegos da Caverna',
          tag: 'cavernBat'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'Esta caverna fede, e seu chão é coberto de guano de morcego.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Um enxame de morcegos dorme entre as estalactites nesta caverna. Se alguma coisa perturbar os morcegos (incluindo uma fonte de luz ou um ruído alto na caverna), o enxame ataca a fonte da perturbação. ' +
            'O enxame luta até ser reduzido à metade de seus pontos de vida ou menos, então foge do complexo da caverna. Se o combate começar nesta área, os bandidos da área C2 vêm investigar.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Piso Traiçoeiro',
          text: 'O chão dessa área é coberto de guano de morcego escorregadio. Sempre que uma criatura em pé no chão sofre dano, ela deve ser bem-sucedida em um teste de Destreza DC 10 (Acrobacia) ou fica propensa a cair.'
        },
        {
          type: TextEnum.TITLE,
          text: 'C4. Acampamento dos Bandidos',
          tag: 'banditCamp'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'Dez sacos de dormir vazios estão dispostos em círculo ao redor de uma fogueira fria no centro da caverna. Ossos de frango, garrafas vazias de vinho e destilados e outros resíduos alimentares espalham-se pelo chão.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Um dos sacos de dormir cobre a abertura de uma armadilha de fosso de 3 metros de profundidade. A armadilha pode ser detectada com um teste de Sabedoria (Percepção) DC 10. ' +
            'Se não for avistado, qualquer um que cruzar o saco de dormir cairá na fossa, levando 3 (1d6) de dano por contusão e caindo de bruços. Uma criatura que cai no buraco faz barulho suficiente para que os bandidos na área C2 investiguem.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Tesouro',
          text: 'Uma pesquisa em todos os sacos de dormir revela que um contém uma garrafa fechada de Whisky de Anão Careca (no valor de 25 PO), um álcool feito por elfos em Uthodurn.'
        },
        {
          type: TextEnum.TITLE,
          text: 'C5. Lago do Coaxador Velho',
          tag: 'oldCroakerPool'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'A água pingando de estalactites no teto preenche uma lagoa escura que cobre completamente o chão desta parte da caverna.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'O maior habitante da Caverna de Croaker - chamado de Velho Croaker pelos bandidos Uttolot - reivindicou esta piscina. ' +
            'Ele se esconde na água e ataca como outras rãs de gelo gigantes. O velho Croaker é um sapo gigante com imunidade a danos causados ​​pelo frio.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'O <a class="monster-anchor" href="/monsters/croaker">Velho Croaker</a> foi treinado para transportar Hulil e os visitantes para sua caverna (área C6) através da piscina. Um personagem que tiver sucesso em um teste de Sabedoria ' +
            '(Manipulação de Animais) DC 15 para convencer Velho Croaker a não atacar o grupo também pode convencer o sapo a transportar todos os personagens pela piscina, um de cada vez.'
        },
        {
          type: TextEnum.TITLE,
          text: 'C6. Caverna da Hulil',
          tag: 'hulilCavern'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Quando os personagens puderem ver nesta área, leia:'
        },
        {
          type: TextEnum.READ_OUT_LOUD,
          text: 'Uma onda de calor vem de uma enorme fogueira queimando no centro desta caverna, sua fumaça saindo por uma estreita chaminé de pedra. ' +
            'As chamas iluminam uma pintura tosca de um dragão de cinco cabeças que domina a parede norte. Um saco de dormir está espalhado sob o mural. ' +
            'Perto do fogo crepitante, uma anã embrulhado em uma capa pesada está sentado em um baú de pedra ao lado de um elfo cujo rosto está coberto por tatuagens de dragão. O rosto da anã está estriado com veias azuis pulsantes.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Hulil Lutan (uma anão da montanha, fanática de culto, maá neutra com uma velocidade de caminhada de 15 pés, visão no escuro até um alcance de 18 metros (60 ft.), resistência a danos de veneno e vantagem em testes de resistência contra veneno) ' +
          'e seu aprendiz, Raegrin Mau (um mal neutro, cultista elfo da floresta masculino com visão no escuro de até 18 metros, vantagem em testes de resistência contra ser encantado e imunidade à magia que o colocaria para dormir), ' +
          'estão ambos em um estado de meditação profunda, orando a Tiamat por uma cura para a aflição do anão. Mesmo que o combate comece na área C5, eles permanecem inconscientes da presença dos personagens até que sejam perturbados ou atacados.' +
          'Hulil e Raegrin são ambos servos gananciosos de Tiamat e da família Uttolot. Raegrin segue todas as ordens de Hulil com lealdade inabalável.'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Hulil está tão desesperada por uma cura para a doença que a está matando lentamente que ela não ataca os personagens quando os vê pela primeira vez, desde que ela não seja atacada primeiro. ' +
          'Em vez disso, ela ordena que eles parem e exige saber por que eles vieram para a caverna. Uma personagem de raciocínio rápido pode alegar ter vindo para ajudar Hulil (por orientação de sua irmã, após receber uma mensagem de Tiamat, ' +
          'ou com outra justificativa apropriada). Com um teste bem-sucedido de Carisma (Decepção) contra o teste de Sabedoria (Insight) de Hulil, o personagem convence a anã de que todos os personagens são seus aliados. ' +
          'Em uma verificação que falhou, ou se os personagens a desafiarem, Hulil e Raegrin atacam.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Fogueira',
          text: 'Qualquer criatura que entrar na área do fogo pela primeira vez em seu turno, ou que começar seu turno lá, sofre 3 (1d6) de dano de fogo.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'O que Hulil sabe',
          text: 'Se os personagens convencerem Hulil de que são seus aliados, ou se capturarem ela ou Raegrin e tiverem sucesso em um teste de Carisma (Intimidação) DC 14, eles podem aprender as seguintes informações:'
        },
        {
          type: TextEnum.LIST,
          list: [
            'Hulil acredita que ela tem uma doença chamada sofrimento gélido. Embora ela não saiba mais sobre a doença do que seus sintomas, ela ouviu rumores de que os exploradores em Eiselcross às ​​vezes sucumbem a ela.',
            'Hulil acredita que sua aflição foi causada por um dos frascos azuis que Tulgi roubou das Curiosidades de Pelc, originalmente vendido por Urgon Wenth. O frasco estava rachado, revelando que sua linda cor era o resultado de uma poeira azul escura aderida ao interior.',
            'Ela está desesperada para chegar a Shadycreek Run antes que a doença siga seu curso, esperando que ela possa trocar os bens roubados por Tulgi por uma cura.',
          ]
        },
        {
          type: TextEnum.NORMAL,
          text: 'Hulil usou um dos frascos para criar uma amadilha o baú contendo os outros itens roubados (veja “Baú de Pedra” abaixo). Precisando de dinheiro rápido para a viagem, ela vendeu o outro frasco para Irven Liel, ' +
            'um comerciante humano que estava hospedado na pousada Jolly Dwarf em Palebank Village enquanto viajava com sua família para Uthodurn.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Baú de Pedra',
          text: 'A tampa externa do baú de pedra é esculpida com a face de um dragão. Um personagem que examina o baú e é bem-sucedido em um teste de Sabedoria (Percepção) DC 12 ' +
            'encontra aberturas do tamanho de alfinetes na boca do dragão que contêm um pó azul. O pó pode ser removido com uma verificação bem-sucedida de Destreza DC 15 usando ferramentas de ladrões. ' +
            'Um personagem que falhar neste teste deve ser bem-sucedido em um teste de resistência de Constituição DC 11 ou contrair Sofrimento Gelado (veja a seção “Eiselcross” do capítulo 3 do Guia do Explorador para Monte Selvagem).'
        },
        {
          type: TextEnum.NORMAL,
          text: 'Um feitiço de detecção de magia revela que o baú irradia uma aura de magia de evocação. Quando uma criatura toca o baú sem falar uma prece a Tiamat, ' +
            'uma rajada de vento escapa da boca do dragão. Se o pó azul ainda estiver na boca do dragão, ele forma uma nuvem que preenche um cubo de 4,5 metros (15 ft.) na frente do baú. ' +
            'Cada criatura dentro da área deve ter sucesso em um teste de resistência de Constituição DC 11 ou contrair Sofrimento Gélido.'
        },
        {
          type: TextEnum.NORMAL,
          title: 'Tesouro',
          text: 'O baú contém o resto do tesouro encontrado por Urgon Wenth - uma caixa de pergaminho dourada coberta por um mapa cosmológico do multiverso (valendo 15 po), ' +
            'uma estatueta de jade de um gigante da tempestade (25 po), uma aljava contendo seis flechas +1 e um anel de prata incrustado com uma pedra de jaspe (50 po). ' +
            'Ele também contém a riqueza de Hulil - 415 cp, 234 sp, 43 ep e 112 gp - e um recibo indicando que Hulil vendeu um frasco de vidro azul para Irven Liel por 100 po.'
        },
        {
          type: TextEnum.TITLE,
          text: 'Desenvolvimento',
          tag: 'cavernDevelopment',
        },
        {
          type: TextEnum.NORMAL,
          text: 'Quando os personagens terminarem de explorar a Caverna Croaker, eles deverão saber que os frascos de vidro azul encontrados por Urgon Wenth são a fonte da estranha doença que está transformando as pessoas em estátuas de gelo, ' +
            'e que Irven Liel tem um desses frascos. Se os personagens não tiverem a chance de questionar Hulil ou Raegrin, você pode fazer com que o baú também contenha um diário ou notas que forneçam as informações de que precisam e os direcione para a pousada Anão Alegre.'
        },
      ]
    }
  ]
}
export const FROZEN_SICK_QUCKMENU: QuickMenuInterface = {
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
          text: 'C6. Caverna da Hulil',
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

