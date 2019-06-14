
import itemsApi from '../api/items'

export function loadReviews(itemId, size) {
    //...
    // let reviews = [
    //     { stars: 2, author: 'Nag@mail.com', body: 'sample review-1' },
    //     { stars: 5, author: 'Nag@mail.com', body: 'sample review-2' }
    // ]
    // return { type: 'LOAD_REVIEWS', itemId, reviews }

    return function (dispatch) {
        dispatch({ type: 'REQUEST_BEGIN', message: 'Loading reviews..' })// Async Action
        itemsApi.loadReviews(itemId, size)
            .then(response => response.data)
            .then(reviews => {
                dispatch({ type: 'REQUEST_COMPLETED', message: '' })// Async Action
                dispatch({ type: 'LOAD_REVIEWS', itemId, reviews })// Async Action
            })
            .catch(err => {
                dispatch({ type: 'REQUEST_ERROR', message: err.message })// Async Action
            })
    }

}

export function addNewReview(itemId, review) {
    //..
    // return { type: 'ADD_NEW_REVIEW', itemId, review }

    return function (dispatch) {
        itemsApi.addNewReview(itemId, review)
            .then(response => response.data)
            .then(respReview => {
                dispatch({ type: 'ADD_NEW_REVIEW', itemId, review: respReview })// Async Action
            })
    }
}