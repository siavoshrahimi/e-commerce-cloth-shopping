import React from "react";
import {Route,Routes} from 'react-router-dom'
import './App.css';

import Home from "./containers/home/Home";
import Shop from "./containers/shop/shop";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/shop' element={<Shop/>} />
        </Routes>
    </div>
  );
}

export default App;
