import React, {useEffect, useState} from "react";
import {Route,Routes} from 'react-router-dom'

import {GlobalStyle} from "./GlobalStyle.style";
import Home from "./containers/home/Home";
import Shop from "./containers/shop/shop";
import SignInAndUp from "./containers/signInAndUp/signInAndUp";
import Header from "./components/header/Header";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";

function App() {
    const [currentUser, setCurrentUser] = useState(null)
    const [id, setId] = useState(null)

    useEffect(() =>{
        auth.onAuthStateChanged(async userAuth =>{
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth)

                userRef.onSnapshot(snapShot =>{
                    setCurrentUser(snapShot.data())
                    setId(snapShot.id)
                })

                console.log(currentUser)
            }else {
                setCurrentUser(userAuth)
            }
        })
    },[])

  return (
    <>
        <GlobalStyle/>
        <Header/>
        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/shop' element={<Shop/>} />
            <Route  path='/auth' element={<SignInAndUp/>} />
        </Routes>
    </>
  );
}

export default App;
