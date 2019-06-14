


export function itemsReducer(state = [], action) {
    console.log("-items-reducer-")
    let { type } = action;
    switch (type) {
        case 'BUY': {
            let { item } = action;
            return state.filter(i => i.id !== item.id)
        }
        case 'LOAD_ITEMS': {
            let { items } = action;
            return [...state, ...items];
        }
        default:
            return state;
    }
}