import React from 'react';

function renderCartItems(cart) {
    let keys = Object.keys(cart);
    return keys.map((key, idx) => {
        let itemLine = cart[key];
        let { item, qty } = itemLine;
        return (
            <tr key={idx}>
                <td>{item.name}</td>
                <td>&#8377;{item.price}</td>
                <td>{qty}</td>
                <td>&#8377;{item.price * qty}</td>
            </tr>
        )
    })
}

const CartView = (props) => {
    let { value: cart } = props;
    return (
        <div className="card">
            <div className="card-header">Items(s) in cart</div>
            <div className="card-body">
                <table className="table table-sm table-bordered">
                    <tbody>
                        {renderCartItems(cart)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CartView;