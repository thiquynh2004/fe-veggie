import cookies from 'react-cookies'

const initState = {
    "cart": cookies.load("cart"),
    "is_completed" :cookies.load("is_completed"),
    "un_completed" : cookies.load("un_completed")


}
const cartReducer = (state=initState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
        case  "ADD_TO_CART":
            return {
                ...state,
                cart: action.payload,
            }
        case "ADD_CART_IS_COMPlETED":
            return {
                ...state,
                is_completed: action.payload
            }
        case "ADD_CART_UN_COMPlETED":
            return {
                ...state,
                un_completed: action.payload
            }
        case "UPDATE_CART":
            return {
                ...state,
                cart: action.payload,
               
            }
        case "DELETE_CART":
            return {
                ...state,
                cart: action.payload,
               
            }
        case "INCREASE_QUANTITY":
            return {
                ...state,
                cart: action.payload,

            }
        case "DECREASE_QUANTITY":
            return {
                ...state,
                cart: action.payload,
            }
            default:
                return state
        }
        
    
}
export default cartReducer