import React, {useContext} from "react";
import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import CartIcon from "../cart-icon/CartIcon";
import {OptionContainer,OptionLink,LogoContainer,HeaderContainer} from "./header.styles";
import {auth} from "../../firebase/firebase.utils";
import CartDropdown from "../cart-dropdown/CartDropdown";
import {CartContext} from "../../contexts/provider/cart/cart";

function Header({data}) {
    const {hidden} = useContext(CartContext);

    const signOut = async () =>{
        try{
            await auth.signOut()
        }catch (e) {
           console.log(e.message)
        }
    }

    return(
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <OptionContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/contact'>
                    CONTACT
                </OptionLink>
                {
                    data?
                        <OptionLink as='div' onClick={signOut}>
                            Sign out
                        </OptionLink>
                    :
                        <OptionLink to={'/auth'}>
                            Sign In
                        </OptionLink>
                }
                <CartIcon />
            </OptionContainer>
            {hidden ? null : <CartDropdown/>}
        </HeaderContainer>
    )
}


export default Header;