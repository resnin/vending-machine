import React, {useState} from 'react';
import '../App.css'
import UserBalance from "./UserBalance";
import MachineBalance from "./MachineBalance";
import {machineNominalLimits, userNominalLimits} from "../constants";
import {INominal, IPurchasedItems} from "../types";
import PurchasedItems from "./PurchasedItems";
import MoneyBack from "./MoneyBack";

type Props = {
    setVendingCurrentBalance: React.Dispatch<React.SetStateAction<number>>
    purchasedItems: IPurchasedItems[]
    vendingCurrentBalance: number
}

const Menu = ({setVendingCurrentBalance, purchasedItems, vendingCurrentBalance}: Props) => {

    const [vendingNominalLimits, setVendingNominalLimits] = useState<INominal[]>(machineNominalLimits)
    const [userBalance, setUserBalance] = useState<INominal[]>(userNominalLimits)

    return (
        <div className={'menu'}>
            <UserBalance userBalance={userBalance}
                         setVendingCurrentBalance={setVendingCurrentBalance}
                         setUserBalance={setUserBalance}
                         vendingNominalLimits={vendingNominalLimits}
                         setVendingNominalLimits={setVendingNominalLimits}
            />

            <MachineBalance vendingNominalLimits={vendingNominalLimits}/>

            <MoneyBack userBalance={userBalance}
                       setUserBalance={setUserBalance}
                       vendingNominalLimits={vendingNominalLimits}
                       setVendingNominalLimits={setVendingNominalLimits}
                       vendingCurrentBalance={vendingCurrentBalance}
                       setVendingCurrentBalance={setVendingCurrentBalance}
            />

            <PurchasedItems purchasedItems={purchasedItems}/>
        </div>
    );
};

export default Menu;