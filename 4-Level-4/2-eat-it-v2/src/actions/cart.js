
import cartApi from '../api/cart'

export function buy(item, qty) {
    //..
    return { type: 'BUY', item, qty }

    // return function (dispatch) {
    //     cartApi.addToCart("Nag", { item, qty })
    //         .then(response => response.data)
    //         .then(() => {
    //             dispatch({ type: 'BUY', item, qty })
    //         })
    // }
}

export function loadCart(user) {
    return { type: 'LOAD_CART', user, cart: {} }
    // return function (dispatch) {
    //     cartApi.loadCart(user)
    //         .then(response => response.data)
    //         .then((cart) => {
    //             dispatch({ type: 'LOAD_CART', cart })
    //         })
    // }
}