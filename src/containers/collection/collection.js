import React,{useContext} from 'react';
import {useParams} from 'react-router-dom'

import CollectionContext from "../../contexts/collections/collections.context";

import CollectionItem from '../../components/collection-item/CollectionItem';


import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './collection.styles';

const CollectionPage = () => {
    let params = useParams();
    const {SHOP_DATA}  = useContext(CollectionContext);
    const collection = SHOP_DATA[params.collectionId];
    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};


export default CollectionPage;