import React, { Component } from 'react';
import Item from './Item'
import { loadItems } from '../actions/items'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

class ItemList extends Component {
    componentDidMount() {
        this.props.actions.loadItems('food', 20)
    }
    renderItems() {
        let { items } = this.props;
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
    renderReqStatus() {
        let { reqStatus } = this.props;
        if (reqStatus.message) {
            return (
                <div className="alert alert-warning">{reqStatus.message}</div>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderReqStatus()}
                {this.renderItems()}
            </div>
        );
    }
}

// export default ItemList;

function mapStateToProps(state) {
    return {
        items: state.items,
        cart: state.cart,
        reqStatus: state.reqStatus
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ loadItems }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)