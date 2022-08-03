import React from "react";



import {MenuItemContainer,BackgroundImageContainer,Subtitle,Title,ContainContainer} from "./menuItem.styles";

const MenuItem = ({title,imageUrl,size,linkUrl,history,match}) => {
    return(
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer className='background-image' imageUrl={imageUrl}/>
            <ContainContainer className='content'>
                <Title>{title.toUpperCase()}</Title>
                <Subtitle>shop now</Subtitle>
            </ContainContainer>
        </MenuItemContainer>
    )

}
export default MenuItem;