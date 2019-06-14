

export function buy(item, qty) {
    //..
    return { type: 'BUY', item, qty }
}

export function loadCart(user) {
    return { type: 'LOAD_CART', user }
}