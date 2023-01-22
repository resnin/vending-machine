import React, {useState} from 'react';
import {IMachineItems, IPurchasedItems} from "../types";
import MachineItem from "./MachineItem";
import '../App.css'
import {machineItems} from "../constants";

type Props = {
    vendingCurrentBalance: number
    setVendingCurrentBalance: React.Dispatch<React.SetStateAction<number>>
    setPurchasedItems: React.Dispatch<React.SetStateAction<IPurchasedItems[]>>
    purchasedItems: IPurchasedItems[]
}

const MachineItems = ({
                          vendingCurrentBalance, setVendingCurrentBalance,
                          setPurchasedItems, purchasedItems
                      }: Props) => {

    const [vendingItems, setVendingItems] = useState<IMachineItems[]>(machineItems)

    const buyItem = (item: IMachineItems, index: number) => {
        setVendingCurrentBalance(prev => prev - item.cost)

        const _vendingItems = [...vendingItems]
        _vendingItems[index].limit -= 1
        setVendingItems(_vendingItems)

        const _purchasedItems = [...purchasedItems]

        const purchasedItem: IPurchasedItems = {
            title: item.title,
            img: item.img,
            count: 1
        }

        const check = _purchasedItems.some(product => product.title === item.title)
        if (!check) {
            _purchasedItems.push(purchasedItem)
        } else {
            _purchasedItems.map(product => (
                product.title === item.title
                    ? product.count += 1
                    : product
            ))
        }
        setPurchasedItems(_purchasedItems)
    }

    return (
        <div className={'machine'}>

            <h2>Баланс для покупки: {vendingCurrentBalance}</h2>

            <div className={'itemsList'}>
                {vendingItems.map((item, index) =>
                    <MachineItem item={item} key={index} index={index}
                                 vendingCurrentBalance={vendingCurrentBalance}
                                 buyItem={buyItem}
                    />)}
            </div>
        </div>
    );
};

export default MachineItems;