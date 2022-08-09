import React from "react";


import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';

import {OptionContainer,OptionLink,LogoContainer,HeaderContainer} from "./header.styles";

function Header() {
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
                <OptionLink to={'/auth'}>
                    Sign In
                </OptionLink>
            </OptionContainer>
        </HeaderContainer>
    )
}


export default Header;