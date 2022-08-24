import React,{useContext} from 'react';
import {useNavigate} from "react-router-dom";

import CartItem from '../cart-item/CartItem';
import {CartContext} from "../../contexts/provider/cart/cart";

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
} from './cartDropdown.styles';

function CartDropdown () {
    const navigate = useNavigate()
    const {cartItems, toggleHidden} = useContext(CartContext)
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
                )}
            </CartItemsContainer>
            <CartDropdownButton
                onClick={() => {
                    navigate('/checkout');
                    toggleHidden()
                }}
            >
                GO TO CHECKOUT
            </CartDropdownButton>
        </CartDropdownContainer>
    );
}


export default CartDropdown;