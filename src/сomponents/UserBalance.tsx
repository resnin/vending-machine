import React from 'react';
import {INominal} from "../types";

type Props = {
    userBalance: INominal[]
    setVendingCurrentBalance: React.Dispatch<React.SetStateAction<number>>
    setUserBalance: React.Dispatch<React.SetStateAction<INominal[]>>
    vendingNominalLimits: INominal[]
    setVendingNominalLimits: React.Dispatch<React.SetStateAction<INominal[]>>

}

const UserBalance = ({
                         userBalance, setVendingCurrentBalance, setUserBalance,
                         setVendingNominalLimits, vendingNominalLimits
                     }: Props) => {

    const onDeposit = (nominal: number, index: number) => {
        setVendingCurrentBalance(prev => prev + nominal)

        const _userBalance = [...userBalance]
        _userBalance[index].limit -= 1
        setUserBalance(_userBalance)

        const _vendingNominalLimits = [...vendingNominalLimits]
        _vendingNominalLimits[index].limit += 1
        setVendingNominalLimits(_vendingNominalLimits)
    }

    return (
        <div className={'user-balance'}>
            <h2>Ваш баланс</h2>

            {userBalance.map((item, index) =>
                <div key={index}>

                    {index < 4
                        ? <button disabled={item.limit === 0} onClick={() => onDeposit(item.nominal, index)}>
                            {item.nominal} руб.
                        </button>
                        : <span key={index}>{item.nominal} руб. </span>}

                    <span>x{item.limit}</span>
                </div>)}
        </div>
    );
};

export default UserBalance;