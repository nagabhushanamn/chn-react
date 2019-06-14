

export function cartReducer(state = {}, action) {
    console.log('-cart-reducer-')
    let { type } = action;
    switch (type) {
        case 'BUY': {
            let { item } = action;
            let { id } = item;
            let itemLine = state[id];
            if (!itemLine) {
                itemLine = { item, qty: 1 }
            } else {
                itemLine = { item, qty: itemLine.qty + 1 }
            }
            return { ...state, [id]: itemLine }
        }
        default: return state;
    }
}