import React, {useContext} from 'react';

import CollectionPreview from '../collection-preview/CollectionPreview';

import {CollectionOverviewContainer} from "./collectionsOverview.styles";
import CollectionContext from "../../contexts/collections/collections.context";

const CollectionsOverview = () => {
  const {collections}  = useContext(CollectionContext);
  return(
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </CollectionOverviewContainer>
)
};

export default CollectionsOverview;
