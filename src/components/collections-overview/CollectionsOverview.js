import React from 'react';

import CollectionPreview from '../collection-preview/CollectionPreview';

import {CollectionOverviewContainer} from "./collectionsOverview.styles";
import Spinner from "../spinner/Spinner";

const CollectionsOverview = ({collectionsArray,loading}) => {

  return(
    <CollectionOverviewContainer>
      {!loading ?
          collectionsArray.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      )):
          <Spinner/>
      }
    </CollectionOverviewContainer>
  )
};

export default CollectionsOverview;
