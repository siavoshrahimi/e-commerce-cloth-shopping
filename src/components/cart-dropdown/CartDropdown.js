import React from 'react';
import {useNavigate} from "react-router-dom";

import CartItem from '../cart-icon/CartIcon';
import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from './cartDropdown.styles';

function CartDropdown () {
    const navigate = useNavigate()
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {/*{cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )}*/}
            </CartItemsContainer>
            <CartDropdownButton
                onClick={() => {
                    navigate('/checkout');
                }}
            >
                GO TO CHECKOUT
            </CartDropdownButton>
        </CartDropdownContainer>
    );
}


export default CartDropdown;