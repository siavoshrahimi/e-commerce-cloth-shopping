import React from 'react';
import {useParams} from 'react-router-dom';
import CollectionItem from '../../components/collection-item/CollectionItem';
import Spinner from "../../components/spinner/Spinner";
import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './collection.styles';


const CollectionPage = ({collectionsObject, loading}) => {
    let params = useParams();
    let content;
    if(!loading){
        const collection = collectionsObject[params.collectionId] ;
        const { title, items } = collection;
        content =
            <CollectionPageContainer>
                <CollectionTitle>{title}</CollectionTitle>
                <CollectionItemsContainer>
                    {items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
                </CollectionItemsContainer>
            </CollectionPageContainer>
    }else {
        content = <Spinner/>
    }

    return (
       content
    );
};


export default CollectionPage;