import React from "react";
import { useNavigate} from 'react-router-dom'



import {MenuItemContainer,BackgroundImageContainer,Subtitle,Title,ContainContainer} from "./menuItem.styles";

const MenuItem = ({title,imageUrl,size}) => {

    const navigate = useNavigate()
    return(
        <MenuItemContainer size={size} onClick={() => navigate('./shop')}>
            <BackgroundImageContainer className='background-image' imageUrl={imageUrl}/>
            <ContainContainer className='content'>
                <Title>{title.toUpperCase()}</Title>
                <Subtitle>shop now</Subtitle>
            </ContainContainer>
        </MenuItemContainer>
    )

}
export default MenuItem;