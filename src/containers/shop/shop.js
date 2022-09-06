import React from "react";
import {Routes, Route} from 'react-router-dom';
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {query, collection} from 'firebase/firestore'

import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection/collection";
import {firestore,convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";

function Shop() {

    const ref = query(collection(firestore, "collections"));

    // Provide the query to the hook
    const {isLoading,data} = useFirestoreQuery("collection", ref);

   let collectionsObject, collectionsArray;
    if (!isLoading) {
        collectionsObject =convertCollectionsSnapshotToMap(data).collectionObject
        collectionsArray = convertCollectionsSnapshotToMap(data).collectionArray
    }

    return(
      <Routes>
          <Route path='/' element={<CollectionsOverview  collectionsArray={collectionsArray}  loading={isLoading}/>}/>
          <Route path=':collectionId' element={<CollectionPage collectionsObject={collectionsObject} loading={isLoading}/>}/>
      </Routes>
    )
}

export default Shop