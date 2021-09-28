import axios from 'axios';

export let endpoints = {
    "categories" : "http://127.0.0.1:8000/categories/",
    "products" : "http://127.0.0.1:8000/products/",
    "oauth2-info": "http://127.0.0.1:8000/oauth2-info/",
    "login":"http://127.0.0.1:8000/o/token/",
    "current-user": "http://127.0.0.1:8000/users/current-user/",
    "signup":"http://127.0.0.1:8000/users/"
}
export default axios.create({
    baseUrl: 'http://127.0.0.1:8000/'
    
})