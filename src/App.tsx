import React, {useState} from 'react';
import './App.css';
import MachineItems from "./сomponents/MachineItems";
import Menu from "./сomponents/Menu";
import {IPurchasedItems} from "./types";

function App() {

    const [vendingCurrentBalance, setVendingCurrentBalance] = useState<number>(0)
    const [purchasedItems, setPurchasedItems] = useState<IPurchasedItems[]>([])

    return (
        <div className="App">
            <MachineItems vendingCurrentBalance={vendingCurrentBalance}
                          setVendingCurrentBalance={setVendingCurrentBalance}
                          setPurchasedItems={setPurchasedItems}
                          purchasedItems={purchasedItems}
            />

            <Menu setVendingCurrentBalance={setVendingCurrentBalance}
                  purchasedItems={purchasedItems}
                  vendingCurrentBalance={vendingCurrentBalance}
            />
        </div>
    );
}

export default App;
