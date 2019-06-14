import React, { Component } from 'react';
import Item from './Item'

import axios from 'axios';

class ItemList extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        let apiUrl = "http://localhost:8181/api/items";
        axios
            .get(apiUrl)
            .then(response => response.data)
            .then(items => {
                this.setState({ items })
            })
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