import React,{useState} from "react";

import { signInWithGoogle } from "../../firebase/firebase.utils";
import InputForm from "../inputForm/InputForm";
import Button from "../button/button";
import {SignInContainer, Title, Subtitle, SignInForm, ButtonContainer} from "./signIn.styles";

function SingIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = event =>{
        event.preventDefault();

        setPassword('')
        setEmail('')
    }

    const handleChange = event =>{
        const {name,value} = event.target;
        name === 'email' ? setEmail(value) : setPassword(value)
    }
    return(
        <SignInContainer>
            <Title>I already have an account</Title>
            <Subtitle>Sign in with your email and password</Subtitle>
            <SignInForm onSubmit={handleSubmit}>
                <InputForm
                    type='email'
                    name='email'
                    value={email}
                    required
                    onChange={handleChange}
                    label='email'
                />
                <InputForm
                    type="password"
                    name='password'
                    value={password}
                    required
                    onChange={handleChange}
                    label='password'
                />
                <ButtonContainer>
                    <Button type="submit" >Sign In</Button>
                    <Button
                        onClick={() =>signInWithGoogle()}
                        isGoogleSignIn
                        type="button"
                    >
                        {''}Sign In with Google{''}
                    </Button>
                </ButtonContainer>
            </SignInForm>
        </SignInContainer>
    )
}

export default SingIn