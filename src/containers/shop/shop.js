import React,{lazy , Suspense} from "react";
import {Routes, Route} from 'react-router-dom';
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {query, collection} from 'firebase/firestore'
import {firestore,convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import Spinner from "../../components/spinner/Spinner";

const CollectionsOverview = lazy(() => import("../../components/collections-overview/CollectionsOverview"))
const CollectionPage = lazy(() => import("../collection/collection"))


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
        <Suspense fallback={<Spinner/>} >
            <Routes>
                <Route path='/' element={<CollectionsOverview  collectionsArray={collectionsArray}  loading={isLoading}/>}/>
                <Route path=':collectionId' element={<CollectionPage collectionsObject={collectionsObject} loading={isLoading}/>}/>
            </Routes>
        </Suspense>

    )
}

export default Shop