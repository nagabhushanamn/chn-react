

import React from 'react';
import { connect } from 'react-redux';

const CartBadge = (props) => {
    let { cart } = props;
    let size = Object.keys(cart).length;
    return (
        <div>
            <i className="fa fa-shopping-cart"></i>&nbsp;
            <span className="badge badge-danger">{size}</span> item(s) in cart
        </div>
    );
};

// export default CartBadge;

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(CartBadge);
