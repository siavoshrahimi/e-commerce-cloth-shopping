import React from "react";

import {SignInAndUpContainer} from "./signInAndUp.styles";

import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signUp/SignUp";


function SignInAndUp () {
    return(
        <SignInAndUpContainer>
            <SignIn/>
            <SignUp/>
        </SignInAndUpContainer>
    )
}

export default SignInAndUp;