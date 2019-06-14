

export function cartReducer(state = {}, action) {
    console.log('-cart-reducer-')
    let { type } = action;
    switch (type) {
        case 'LOAD_CART': {
            return JSON.parse(localStorage.getItem('user-cart') || {})
        }
        case 'BUY': {
            let { item, qty } = action;
            let { id } = item;
            let itemLine = state[id];
            if (!itemLine) {
                itemLine = { item, qty: qty }
            } else {
                itemLine = { item, qty: itemLine.qty + qty }
            }
            let newState = { ...state, [id]: itemLine }
            if (itemLine.qty === 0)
                delete newState[id]

            localStorage.setItem('user-cart', JSON.stringify(newState))
            return newState;
        }
        default: return state;
    }
}