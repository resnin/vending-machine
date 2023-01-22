import React from 'react';
import {IPurchasedItems} from "../types";
import '../App.css'

type Props = {
    purchasedItems: IPurchasedItems[]
}

const PurchasedItems = ({purchasedItems}: Props) => {
    return (
        <div>
            <h2>Куплено:</h2>

            <div className={'purchased-list'}>
                {purchasedItems.map((item, index) =>
                    <div className={'product'} key={index}>
                        <img src={item.img} alt={item.title} className={'product-img'}/>
                        <div>{item.title}</div>
                        <div>Куплено: {item.count}</div>
                    </div>)}
            </div>
        </div>
    );
};

export default PurchasedItems;