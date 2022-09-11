import React, { useEffect,lazy,Suspense} from "react";
import {Route,Routes,Navigate} from 'react-router-dom'
import { useAuthUser } from "@react-query-firebase/auth";

import {GlobalStyle} from "./GlobalStyle.style";
import Header from "./components/header/Header";
import Checkout from "./containers/chekout/checkout";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import Spinner from "./components/spinner/Spinner";
import ErrorBoundary from "./components/error-boundary/ErrorBoundary";
const Home = lazy(() => import("./containers/home/Home"))
const Shop = lazy(() => import("./containers/shop/shop"))
const SignInAndUp = lazy(() => import("./containers/signInAndUp/signInAndUp"))

function App() {
    const {isLoading, data} = useAuthUser(["user"], auth);

    useEffect( () =>{
        data &&  createUserProfileDocument(data)
    },[])

  return (
    <>
        <GlobalStyle/>
        <Header data={data} isLoading={isLoading}/>
        <ErrorBoundary>
            <Suspense fallback={<Spinner/>}>
                <Routes>
                        <Route  path='/' element={<Home/>} />
                        <Route  path='/shop/*' element={<Shop/>} />
                        <Route  path='/checkout' element={<Checkout/>} />
                        <Route  path='/auth' element={data ? <Navigate to='/' replace /> : <SignInAndUp /> } />
                </Routes>
            </Suspense>
        </ErrorBoundary>
    </>
  );
}

export default App;
