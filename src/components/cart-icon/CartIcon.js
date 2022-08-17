import React,{useContext} from "react";

import {CartContainer,SoppingIcon,ItemCountContainer} from "./cartIcon.styles";
import CartContext from "../../contexts/cart/cart";

function CartIcon  () {
    const {toggleHidden} = useContext(CartContext)
    return(
        <CartContainer onClick={toggleHidden}>
            <SoppingIcon />
            <ItemCountContainer>0</ItemCountContainer>
        </CartContainer>
    )
}

export default CartIcon