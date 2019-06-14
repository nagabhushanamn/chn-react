import axios from 'axios';

const apiUrl = "http://localhost:8181/api/items"

export default {
    loadItems(type, size) {
        let promise = axios.get(apiUrl);
        return promise;
    },
    loadReviews(itemId, size) {
        let promise = axios.get(apiUrl + `/${itemId}/reviews`);
        return promise;
    },
    addNewReview(itemId, review) {
        let promise = axios.post(apiUrl + `/${itemId}/reviews`, review);
        return promise;
    }

}