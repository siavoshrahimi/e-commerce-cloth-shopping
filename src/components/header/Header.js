import React, {useContext, useState} from "react";


import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';
import CartIcon from "../cart-icon/CartIcon";
import {OptionContainer,OptionLink,LogoContainer,HeaderContainer} from "./header.styles";
import {auth} from "../../firebase/firebase.utils";
import CurrentUserContext from "../../contexts/current-user/current-user";
import CartDropdown from "../cart-dropdown/CartDropdown";
import CartContext from "../../contexts/cart/cart";

function Header() {
    const currentUser = useContext(CurrentUserContext)
    const [hidden, setHidden] = useState(true)
    const toggleHidden = () => setHidden(!hidden)

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
                    currentUser?
                        <OptionLink as='div' onClick={signOut}>
                            Sign out
                        </OptionLink>
                        :
                        <OptionLink to={'/auth'}>
                            Sign In
                        </OptionLink>
                }
                <CartContext.Provider value={{hidden, toggleHidden}}>
                    <CartIcon />
                </CartContext.Provider>
            </OptionContainer>
            {hidden ? null : <CartDropdown/>}
        </HeaderContainer>
    )
}


export default Header;