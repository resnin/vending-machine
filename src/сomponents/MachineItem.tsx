import React from 'react';
import {IMachineItems} from "../types";
import '../App.css'

type Props = {
    item: IMachineItems
    vendingCurrentBalance: number
    index: number
    buyItem: (item: IMachineItems, index: number) => void
}

const MachineItem = ({item, vendingCurrentBalance, index, buyItem}: Props) => {

    const isEnoughBalance = vendingCurrentBalance >= item.cost
    const isInStock = item.limit > 0

    return (
        <div className={'product'}>
            <div className={'product-img'}>
                {isInStock && <img src={item.img} alt={item.title} className={'product-img'}/>}
            </div>
            <div>{item.title}</div>
            <div>{isInStock ? 'В наличии ' + item.limit : 'Нет в наличии'}</div>
            <div>Цена: {item.cost}</div>

            <button disabled={!isEnoughBalance || !isInStock} onClick={() => buyItem(item, index)}>
                Купить
            </button>
        </div>
    );
};

export default MachineItem;