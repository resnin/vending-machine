import React from 'react';
import {INominal, IPurchasedItems} from "../types";

type Props = {
    vendingNominalLimits: INominal[]

}

const MachineBalance = ({vendingNominalLimits}: Props) => {
    return (
        <div>
            <h2>Баланс аппарата</h2>
            {vendingNominalLimits.map((item, index) =>
                <div key={index}>{item.nominal} руб. x{item.limit}</div>)}
        </div>
    );
};

export default MachineBalance;