import { FROZEN_SICK_QUCKMENU, FROZEN_SICK } from './catalog/frozen-sick.catalog';

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


const QUICKMENU_LIST = [
  FROZEN_SICK_QUCKMENU
]
export const getQuickMenu = id => QUICKMENU_LIST.find(el => el.id === id);


const CAMPANHAS_LIST = [
  FROZEN_SICK
]
export const getCampain = id => CAMPANHAS_LIST.find(el => el.id === id);
