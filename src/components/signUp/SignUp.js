import React,{useState} from "react";

import FormInput from "../inputForm/InputForm";
import Button from "../button/button";

import {SignUpContainer,Title, Subtitle, Form} from "./signUp.styles";
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";

function SignUp () {
    const [displayName, setDisplayName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handelSubmit = async event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Password doesn't match");
            return;
        }

        try{
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user,{displayName})
            setDisplayName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
        }catch (e) {
            console.log(e.message)
        }
    }

    const handelChange= event =>{
        const {value,name} = event.target;
        name === 'displayName' && setDisplayName(value)
        name === 'email' && setEmail(value)
        name === 'password' && setPassword(value)
        name === 'confirmPassword' && setConfirmPassword(value)
    }

    return(
        <SignUpContainer>
            <Title>I don't have an account</Title>
            <Subtitle>Sign up with email and password</Subtitle>
            <Form className='sign-up-form' onSubmit={handelSubmit}>
                <FormInput
                    name='displayName'
                    value={displayName}
                    label='User Name'
                    onChange={handelChange}
                    required
                    type='text'
                />
                <FormInput
                    required
                    name='email'
                    value={email}
                    label='email'
                    onChange={handelChange}
                    type='email'
                />
                <FormInput
                    required
                    name='password'
                    value={password}
                    label='Password'
                    onChange={handelChange}
                    type='password'
                />
                <FormInput
                    required
                    name='confirmPassword'
                    value={confirmPassword}
                    label='Confirm Password'
                    onChange={handelChange}
                    type='password'
                />
                <Button type='submit'>SIGN UP</Button>
            </Form>
        </SignUpContainer>
    )
}



export default SignUp;