import React from "react";
import {Routes, Route} from 'react-router-dom'

import CollectionsOverview from "../../components/collections-overview/CollectionsOverview";
import CollectionPage from "../collection/collection";

function Shop() {
    return(
      <Routes>
          <Route path='/' element={<CollectionsOverview/>}/>
          <Route path=':collectionId' element={<CollectionPage/>}/>
      </Routes>
    )
}

export default Shop