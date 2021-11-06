import axios from 'axios';

export let endpoints = {
    "categories" : "http://127.0.0.1:8000/categories/",
    "productCategory" :(categoryId) => `http://127.0.0.1:8000/categories/${categoryId}/products/`,
    "products" : "http://127.0.0.1:8000/products/",
    "product-detail" : (productId) => `http://127.0.0.1:8000/products/${productId}/`,
    "carts": "http://127.0.0.1:8000/carts/ ",
    "oauth2-info": "http://127.0.0.1:8000/oauth2-info/",
    "login" : "http://127.0.0.1:8000/o/token/",
    "current-user" :"http://127.0.0.1:8000/users/current-user/",
    "signup": "http://127.0.0.1:8000/users/",
    "add-to-cart" : "http://127.0.0.1:8000/carts/add-to-cart/",
    "delete-cart-item":(id) => `http://127.0.0.1:8000/http://127.0.0.1:8000/cartitems/${id}/delete/`,
    "update-cart-item":(cartitemId) => `http://127.0.0.1:8000/cartitems/${cartitemId}/update-cartitem/`,
    // "profile":"http://127.0.0.1:8000/users/current-user/"
}
export default axios.create({
    baseUrl: 'http://127.0.0.1:8000/'
    
})