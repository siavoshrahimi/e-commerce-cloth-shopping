import {createContext} from 'react';
import SHOP_DATA from "./shop.data";
const collections =    Object.keys(SHOP_DATA).map(key => SHOP_DATA[key])

const CollectionContext = createContext({SHOP_DATA,collections});

export default CollectionContext;