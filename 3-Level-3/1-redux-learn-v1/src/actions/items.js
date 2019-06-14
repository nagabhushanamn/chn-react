


export function loadItems(type, size) {
    //...
    let items = [
        { id: "111", name: 'item-1', price: 100.00 },
        { id: "222", name: 'item-2', price: 200.00 }
    ]
    return { type: 'LOAD_ITEMS', items }
}