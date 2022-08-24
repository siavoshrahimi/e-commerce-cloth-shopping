import React,{useContext} from "react";

import {CartContainer,SoppingIcon,ItemCountContainer} from "./cartIcon.styles";
import {CartContext} from "../../contexts/provider/cart/cart";

function CartIcon  () {
    const {toggleHidden, cartItemsCount} = useContext(CartContext)
    return(
        <CartContainer onClick={toggleHidden}>
            <SoppingIcon />
            <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
        </CartContainer>
    )
}

export default CartIcon