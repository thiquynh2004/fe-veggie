import axios from 'axios';

export let endpoints = {
    "categories" : "http://127.0.0.1:8000/categories/",
    "products" : "http://127.0.0.1:8000/products/"
}
export default axios.create({
    baseUrl: 'http://127.0.0.1:8000/'
    
})