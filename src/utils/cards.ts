import ancientApparition from '../assets/images/ancient-apparition.png'
import dragonKnight from '../assets/images/dragon-knight.png'
import jakiro from '../assets/images/jakiro.png'
import juggernaut from '../assets/images/juggernaut.png'
import loveDruid from '../assets/images/lone-druid.png'
import magnus from '../assets/images/magnus.png'
import ogreMagi from '../assets/images/ogre-magi.png'
import phantomAssassin from '../assets/images/phantom-assassin.png'
import queenOfPain from '../assets/images/queen-of-pain.png'
import ursa from '../assets/images/ursa.png'
import vengefulSpirit from '../assets/images/vengeful-spirit.png'
import viper from '../assets/images/viper.png'

export interface Card {
  id: number;
  description: string;
  image: string;
}
export const cards: Card[] = [
  {
    id: 0,
    description: 'Ancient Apparition',
    image: ancientApparition
  },
  {
    id: 1,
    description: 'Dragon Knight',
    image: dragonKnight
  },
  {
    id: 2,
    description: 'Jakiro',
    image: jakiro
  },
  {
    id: 3,
    description: 'Juggernaut',
    image: juggernaut
  },
  {
    id: 4,
    description: 'Lone Druid',
    image: loveDruid
  },
  {
    id: 5,
    description: 'Magnus',
    image: magnus
  },
  {
    id: 6,
    description: 'Ogre Magi',
    image: ogreMagi
  },
  {
    id: 7,
    description: 'Phantom Assassin',
    image: phantomAssassin
  },
  {
    id: 8,
    description: 'Queen of Pain',
    image: queenOfPain
  },
  {
    id: 9,
    description: 'Ursa',
    image: ursa
  },
  {
    id: 10,
    description: 'Vengeful Spirit',
    image: vengefulSpirit
  },
  {
    id: 11,
    description: 'Viper',
    image: viper
  },
];