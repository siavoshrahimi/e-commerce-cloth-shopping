import React from "react";

import {CollectionItemContainer,BackgroundImage,NameContainer,PriceContainer,AddButton,CollectionFooterContainer} from "./collectionItem.styles";

function CollectionItem ({item}) {
    const {name,imageUrl,price} = item;
    return(
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>$ {price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() => console.log(3)}>ADD TO CART</AddButton>
        </CollectionItemContainer>
    )
}



export default CollectionItem;