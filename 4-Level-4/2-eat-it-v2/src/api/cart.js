import axios from 'axios';

let apiUrl = "http://localhost:8182/api/users/Nag/cart";

export default {
    addToCart(user,itemLine) {
        return axios.post(apiUrl, itemLine)
    },
    loadCart(user) {
        return axios.get(apiUrl)
    }
}