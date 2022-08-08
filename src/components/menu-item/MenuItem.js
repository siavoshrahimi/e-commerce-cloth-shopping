import React from "react";
import {useMatch, useNavigate, useParams} from 'react-router-dom'



import {MenuItemContainer,BackgroundImageContainer,Subtitle,Title,ContainContainer} from "./menuItem.styles";

const MenuItem = ({title,imageUrl,size,linkUrl,history}) => {

    const navigate = useNavigate()
    const params = useParams()
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