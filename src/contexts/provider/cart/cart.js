import React,{createContext, useState, useEffect} from 'react';
import {addItemToCart, cartItemCounter, filterItems, removeItemFromCart, cartTotal} from "./cart.utils";

export const CartContext = createContext({
    hidden:true,
    toggleHidden:() =>{},
    cartItems:[],
    addItem:() =>{},
    cartItemsCount:0,
    removeItem:() =>{},
    clearItemFromCart:() =>{},
    cartTotalPrice:0,
})


const CartProvider = ({children}) =>{

    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setItemsCount] = useState(0);
    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const toggleHidden = () => setHidden(!hidden);
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => setCartItems(filterItems(cartItems, item));
    const [cartTotalPrice, setCartTotalPrice] = useState(0);


    useEffect(() =>{
        setCartTotalPrice(cartTotal(cartItems));
        setItemsCount(cartItemCounter(cartItems))
    },[cartItems])


    return <CartContext.Provider
                value={{
                    hidden,
                    addItem,
                    toggleHidden,
                    cartItems,
                    cartItemsCount,
                    removeItem,
                    clearItemFromCart,
                    cartTotalPrice
                }}
            >
                {children}
            </CartContext.Provider>
}
export default CartProvider