import React, {useEffect, useState} from "react";
import {Route,Routes,Navigate} from 'react-router-dom'

import {GlobalStyle} from "./GlobalStyle.style";
import Home from "./containers/home/Home";
import Shop from "./containers/shop/shop";
import SignInAndUp from "./containers/signInAndUp/signInAndUp";
import Header from "./components/header/Header";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import CurrentUserContext from "./contexts/current-user/current-user";

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

            }else {
                setCurrentUser(userAuth)
            }
        })
    },[])

  return (
    <>
        <GlobalStyle/>
        <CurrentUserContext.Provider value={currentUser}>
            <Header/>
        </CurrentUserContext.Provider>
        <Routes>
            <Route  path='/' element={<Home/>} />
            <Route  path='/shop' element={<Shop/>} />
            <Route  path='/auth' element={currentUser ? <Navigate to='/' replace /> : <SignInAndUp /> } />
        </Routes>
    </>
  );
}

export default App;
