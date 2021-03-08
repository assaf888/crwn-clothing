import React, { useState } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';

import { auth, signInWithGoogle } from '../../firebase/firebase';

import './sign-in.scss'

const SignIn = () => {


    const [userCredentials, setUserCredentials] = useState({ 
        email: '',
        password: ''
     })
     const { email, password } = userCredentials;

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        
        // const { email } = email;
        // const { password } = password;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({email: '',
            password: ''
        })
            // setEmail('');
            // setPassword('');
        } catch (error) {
            console.log(error);
        }
        
    }

    const handleChange = (e) => {
        const { value, name } = e.target;
        setUserCredentials({ ...userCredentials, [name]: value })
        // name === 'email' ? setEmail(value) : setPassword(value);
    }

    return (
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    handleChange={handleChange}
                    value={email}
                    label="email"
                    required />
                <FormInput
                    name="password"
                    type="password"
                    value={password}
                    handleChange={handleChange}
                    label="password"
                    required
                />
                <div className="buttons">
                    <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                </div>
            </form>
        </div>
    );
}

export default SignIn;