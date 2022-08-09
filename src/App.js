import React from "react";
import {Route,Routes} from 'react-router-dom'

import {GlobalStyle} from "./GlobalStyle.style";
import Home from "./containers/home/Home";
import Shop from "./containers/shop/shop";
import Header from "./components/header/Header";

function App() {
  return (
    <>
        <GlobalStyle/>
        <Header/>
        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/shop' element={<Shop/>} />
        </Routes>
    </>
  );
}

export default App;
