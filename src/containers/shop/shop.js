import React, {useState} from "react";

import SHOP_DATA from "./shop-data";
import CollectionPreview from "../../components/collection-preview/CollectionPreview";

function Shop() {
    const [state, setState] = useState({collections: SHOP_DATA})
    return(
        <div>
            {state.collections.map(({id, ...otherCollectionsProps}) =>(
                <CollectionPreview key={id} {...otherCollectionsProps}/>
            ))}

        </div>
    )
}

export default Shop