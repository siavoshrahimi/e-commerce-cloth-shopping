import React from "react";

import {CartItemContainer,ItemDetailContainer,ItemName,CartItemImage,PriceContainer} from "./cartItem.styles";

const CartItem = ({item:{imageUrl,name,price,quantity}}) => {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="item"/>
            <ItemDetailContainer>
                <ItemName>{name}</ItemName>
                <PriceContainer>{quantity} x ${price}</PriceContainer>
            </ItemDetailContainer>
        </CartItemContainer>
    )
}

export default CartItem;