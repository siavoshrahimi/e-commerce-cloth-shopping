import React from "react";


import {ReactComponent as Logo} from '../../assets/4.4 crown.svg.svg';

import {OptionContainer,OptionLink,LogoContainer,HeaderContainer} from "./header.styles";

const Header = () =>{
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
                <OptionLink to={'/signin'}>
                    Sign In
                </OptionLink>
            </OptionContainer>
        </HeaderContainer>
    )
}


export default Header;