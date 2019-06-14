

export function loadReviews(itemId, size) {
    //...
    let reviews = [
        { stars: 2, author: 'Nag@mail.com', body: 'sample review-1' },
        { stars: 5, author: 'Nag@mail.com', body: 'sample review-2' }
    ]
    return { type: 'LOAD_REVIEWS', itemId, reviews }
}

export function addNewReview(itemId, review) {
    //..
    return { type: 'ADD_NEW_REVIEW', itemId, review }
}