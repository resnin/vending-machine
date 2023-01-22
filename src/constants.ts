import {IMachineItems, INominal} from "./types";
import ColaImg from './img/coca-cola.png'
import PepsiImg from './img/pepsi.png'
import fantaImg from './img/fanta.png'
import spriteImg from './img/sprite.png'
import waterImg from './img/water.png'
import monsterImg from './img/monster.png'
import redbullImg from './img/redbull.png'
import juiceImg from './img/juice.png'

enum ItemNames {
    COCA_COLA = 'Coca-Cola',
    PEPSI = 'Pepsi',
    FANTA = 'Fanta',
    SPRITE = 'Sprite',
    WATER = 'Water',
    MONSTER = 'Monster',
    RED_BULL = 'Red-Bull',
    JUICE = 'Juice'
}

const defaultItemLimit = 5

export const machineItems: IMachineItems[] = [
    {
        title: ItemNames.COCA_COLA,
        img: ColaImg,
        limit: defaultItemLimit,
        cost: 35
    },
    {
        title: ItemNames.PEPSI,
        img: PepsiImg,
        limit: defaultItemLimit,
        cost: 30
    },
    {
        title: ItemNames.FANTA,
        img: fantaImg,
        limit: defaultItemLimit,
        cost: 50
    },
    {
        title: ItemNames.SPRITE,
        img: spriteImg,
        limit: defaultItemLimit,
        cost: 40
    },
    {
        title: ItemNames.WATER,
        img: waterImg,
        limit: defaultItemLimit,
        cost: 20
    },
    {
        title: ItemNames.MONSTER,
        img: monsterImg,
        limit: defaultItemLimit,
        cost: 100
    },
    {
        title: ItemNames.RED_BULL,
        img: redbullImg,
        limit: defaultItemLimit,
        cost: 120
    },
    {
        title: ItemNames.JUICE,
        img: juiceImg,
        limit: defaultItemLimit,
        cost: 80
    },
]

export const machineNominalLimits: INominal[] =  [
    {nominal: 1000, limit: 0},
    {nominal: 500, limit: 0},
    {nominal:100, limit: 3},
    {nominal: 50, limit: 5},
    {nominal: 10, limit: 5},
    {nominal: 5, limit: 10},
    {nominal: 1, limit: 20}
]

export const userNominalLimits: INominal[] =  [
    {nominal: 1000, limit: 1},
    {nominal: 500, limit: 3},
    {nominal: 100, limit: 3},
    {nominal: 50, limit: 5},
    {nominal: 10, limit: 0},
    {nominal: 5, limit: 0},
    {nominal: 1, limit: 0}
]