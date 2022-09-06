import React, { useEffect} from "react";
import {Route,Routes,Navigate} from 'react-router-dom'
import { useAuthUser } from "@react-query-firebase/auth";

import {GlobalStyle} from "./GlobalStyle.style";
import Home from "./containers/home/Home";
import Shop from "./containers/shop/shop";
import SignInAndUp from "./containers/signInAndUp/signInAndUp";
import Header from "./components/header/Header";
import Checkout from "./containers/chekout/checkout";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

function App() {
    const {isLoading, data} = useAuthUser(["user"], auth);

    useEffect( () =>{
        data &&  createUserProfileDocument(data)
    },[])

  return (
    <>
        <GlobalStyle/>
        <Header data={data} isLoading={isLoading}/>
        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/shop/*' element={<Shop/>} />
            <Route  path='/checkout' element={<Checkout/>} />
            <Route  path='/auth' element={data ? <Navigate to='/' replace /> : <SignInAndUp /> } />
        </Routes>
    </>
  );
}

export default App;
