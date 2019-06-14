

import itemsApi from '../api/items'

export function loadItems(type, size) {

    // let items = [
    //     { id: "111", name: 'item-1', price: 100.00 },
    //     { id: "222", name: 'item-2', price: 200.00 }
    // ]
    // return { type: 'LOAD_ITEMS', items } // sync action

    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading items..' })// Async Action
        itemsApi.loadItems(type, size)
            .then(response => response.data)
            .then(items => {
                dispatch({ type: 'REQUEST_COMPLETED', message: '' })// Async Action
                dispatch({ type: 'LOAD_ITEMS', items })// Async Action
            })
            .catch(err => {
                dispatch({ type: 'REQUEST_ERROR', message: err.message })// Async Action
            })
    }

}