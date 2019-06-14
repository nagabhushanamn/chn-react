

import React from 'react';

const CartBadge = (props) => {
    return (
        <div>
            <i className="fa fa-shopping-cart"></i>&nbsp;
            <span className="badge badge-danger">{props.value}</span> item(s) in cart
        </div>
    );
};

export default CartBadge;