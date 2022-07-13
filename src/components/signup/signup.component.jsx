import React, { useState } from 'react';
import './signup.styles.scss';
import FormInput from '../forms/formInput/forminput.component';
import Button from '../forms/button/button.component';
import { auth, handleUserProfile } from '../../firebase/utils';

const SignUp = (props) => {

    const [information, setInformation] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInformation({...information, [name]: value})
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const {displayName, email, password, confirmPassword} = information;

        if (password !== confirmPassword) {
            const err = ["Passwords don't match"];
            setError(err);
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await handleUserProfile(user, {displayName});

            setInformation({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className='signup'>
            <div className='wrap'>
                <h2>Sign up</h2>
                {
                    error.length > 0 && error
                }
                <div className='formWrap'>
                    <form onSubmit={handleFormSubmit}>
                        <FormInput 
                            type="text" 
                            name="displayName" 
                            value={information.displayName} 
                            placeholder="Full name"
                            onChange={(e) => handleChange(e)} 
                        />
                        <FormInput 
                            type="email" 
                            name="email" 
                            value={information.email} 
                            placeholder="Email"
                            onChange={(e) => handleChange(e)} 
                        />
                        <FormInput 
                            type="password" 
                            name="password" 
                            value={information.password} 
                            placeholder="Enter Password"
                            onChange={(e) => handleChange(e)} 
                        />
                        <FormInput 
                            type="password" 
                            name="confirmPassword" 
                            value={information.confirmPassword} 
                            placeholder="Confirm Password"
                            onChange={(e) => handleChange(e)} 
                        />

                        <Button type="submit">Register</Button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;