import React from "react";
import CollectionItem from "../collection-item/CollectionItem";

import {CollectionPreviewContainer,CollectionPreviewTitle,PreviewContainer} from "./collectionPreview.styles";
import {useNavigate} from "react-router-dom";


function CollectionPreview({title, items}) {
    const navigate = useNavigate()
    return(
        <CollectionPreviewContainer>
            <CollectionPreviewTitle onClick={() =>navigate(`${title.toLowerCase()}`)}>
                {title.toUpperCase()}
            </CollectionPreviewTitle>
            <PreviewContainer>
                {items.filter((item,idx) => idx < 4).map(item =>(
                    <CollectionItem key={item.id} item={item} />
                ))}
            </PreviewContainer>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview