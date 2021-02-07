const getImg = img => './../../../assets/imagens/' + img;

export const HOME_CARDS = [
  {
    id: 'card-campanha',
    title: 'Campanhas',
    path: '/campanha',
    img: getImg('campanha-card.png')
  },
  {
    id: 'card-characters',
    title: 'Personagens',
    path: '/characters',
    img: getImg('characters-card.png')
  },
  {
    id: 'card-monsters',
    title: 'Monstros',
    path: '/monsters',
    img: getImg('monsters-card.jpg')
  }
];

export const HOME_BANNER = {
  caption: 'RPG Tracker',
  subCaption: 'O seu organizador de campanhas',
  image: 'home-banner'
};
