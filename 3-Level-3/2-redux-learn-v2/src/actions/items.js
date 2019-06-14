

import itemsApi from '../api/items'

export function loadItems(type, size) {

    // let items = [
    //     { id: "111", name: 'item-1', price: 100.00 },
    //     { id: "222", name: 'item-2', price: 200.00 }
    // ]
    // return { type: 'LOAD_ITEMS', items } // sync action

    return function (dispatch) {
        itemsApi.loadItems(type, size)
            .then(response => response.data)
            .then(items => {
                dispatch({ type: 'LOAD_ITEMS', items })// Async Action
            })
    }

}