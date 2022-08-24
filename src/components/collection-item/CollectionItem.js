import React,{useContext} from "react";
import {CartContext} from "../../contexts/provider/cart/cart";

import {
    CollectionItemContainer,
    BackgroundImage,
    NameContainer,
    PriceContainer,
    AddButton,
    CollectionFooterContainer}
    from "./collectionItem.styles";

function CollectionItem ({item}) {
    const {name,imageUrl,price} = item;

    const {addItem} = useContext(CartContext)
    return(
        <CollectionItemContainer>
            <BackgroundImage className='image' imageUrl={imageUrl}/>
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>$ {price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton inverted onClick={() =>addItem(item)}>ADD TO CART</AddButton>
        </CollectionItemContainer>
    )
}



export default CollectionItem;