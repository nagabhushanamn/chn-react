import React, { Component } from 'react';
import Item from './Item'

class ItemList extends Component {
    state = {
        items: [
            {
                id: 111,
                name: 'Veg',
                price: 170,
                canBuy: true,
                image: 'images/veg1.png',
                description: 'veg is yummy'
            },
            {
                id: 222,
                name: 'NonVeg',
                price: 160,
                canBuy: true,
                image: 'images/non-veg1.png',
                description: 'non-veg yummy too'
            }
        ]
    }
    renderItems() {
        let { items } = this.state;
        let { cart } = this.props;
        return items.map((item, idx) => {
            let itemLine = cart[item.id] || {};
            let { qty } = itemLine;
            qty = qty || 0;
            return (
                <div key={idx} className="list-group-item">
                    <Item value={item} qty={qty} onBuy={e => this.props.onBuy(e)} />
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                {this.renderItems()}
            </div>
        );
    }
}

export default ItemList;