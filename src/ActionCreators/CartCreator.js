export function AddToCart(payload){
    return {
        "type":'ADD_TO_CART',
        "payload" : payload,
    }
}
export function AddCartUnCompleted(payload){
    return {
        "type":'ADD_CART_UN_COMPlETED',
        "payload" : payload,
    }
}
export function AddCartIsCompleted(payload){
    return {
        "type":'ADD_CART_IS_COMPlETED',
        "payload" : payload,
    }
}

export function UpdateCart(payload){
    return {
        type:'UPDATE_CART',
        payload
    }
}
export function DeleteCart(payload){
    return{
        type:'DELETE_CART',
        payload
    }
}
 
export function IncreaseQuantity(payload){
    return{
        type:'INCREASE_QUANTITY',
        payload
    }
}
export function DecreaseQuantity(payload){
    return{
        type:'DECREASE_QUANTITY',
        payload
    }
}
