
import 'bootstrap/dist/css/bootstrap.css'

import store from './store';
import { loadItems } from './actions/items'
import { loadReviews, addNewReview } from './actions/reviews'
import { buy } from './actions/cart'


//-------------------------------
// plain-js UI | React | NG | ...
//-------------------------------

//--------------------------------
//ItemList UI
//--------------------------------
store.subscribe(() => {
    let items = store.getState().items;
    console.log(items)
});
// ------------------------------
//Item UI
//--------------------------------
store.subscribe(() => {
    let reviews = store.getState().reviews['111'];
    console.log(reviews)
});
// ------------------------------
//CartBadge UI
//--------------------------------
store.subscribe(() => {
    let cart = store.getState().cart;
    console.log(cart)
});

//--------------------------------
//Home UI
//--------------------------------
setTimeout(() => {
    let action = loadItems();
    store.dispatch(action);
    setTimeout(() => {
        let action = loadReviews('5cad6fe4947f1c77a5820147')
        store.dispatch(action);
        setTimeout(() => {
            let action = buy({ id: '5cad6fe4947f1c77a5820147' })
            store.dispatch(action);
            setTimeout(() => {
                let action = addNewReview('5cad6fe4947f1c77a5820147', { stars: 1, author: 'who', body: '...' })
                store.dispatch(action);
            }, 2000)
        }, 2000)
    }, 2000)
}, 2000);


