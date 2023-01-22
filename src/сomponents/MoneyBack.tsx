import React from 'react';
import {INominal} from "../types";

type Props = {
    userBalance: INominal[]
    setUserBalance: React.Dispatch<React.SetStateAction<INominal[]>>
    vendingNominalLimits: INominal[]
    setVendingNominalLimits: React.Dispatch<React.SetStateAction<INominal[]>>
    vendingCurrentBalance: number
    setVendingCurrentBalance: React.Dispatch<React.SetStateAction<number>>
}

const MoneyBack = ({
                       userBalance, setVendingCurrentBalance,
                       setVendingNominalLimits, vendingNominalLimits,
                       vendingCurrentBalance, setUserBalance
                   }: Props) => {

    const getMoney = () => {
        let _vendingNominalLimits = [...vendingNominalLimits]
        let _userBalance = [...userBalance]
        let _vendingCurrentBalance = vendingCurrentBalance

        for (let i = 0; i < vendingNominalLimits.length; i++) {

            while ((_vendingCurrentBalance - _vendingNominalLimits[i].nominal >= 0) &&
            (_vendingNominalLimits[i].limit > 0)) {

                _vendingCurrentBalance -= _vendingNominalLimits[i].nominal
                _userBalance[i].limit += 1
                _vendingNominalLimits[i].limit -= 1
            }
        }

        setVendingNominalLimits(_vendingNominalLimits)
        setUserBalance(_userBalance)
        setVendingCurrentBalance(_vendingCurrentBalance)

        if (_vendingCurrentBalance > 0) alert('Сдачи нет')
    }

    return (
        <button onClick={getMoney} className={'get-money'}>Получить сдачу</button>
    );
};

export default MoneyBack;