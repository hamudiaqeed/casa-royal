import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './signup.styles.scss';
import FormInput from '../forms/formInput/forminput.component';
import Button from '../forms/button/button.component';
import AuthWrapper from '../authWrapper';
import { auth, handleUserProfile } from '../../firebase/utils';

const SignUp = (props) => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            const err = ["Passwords don't match"];
            setError(err);
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await handleUserProfile(user, {displayName});

            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            history.push('/');
        } catch(err) {
            console.log(err)
        }
    }

    const configAuthWrapper = {
        headline: 'Registration'
    }

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className='formWrap'>
                {
                    error.length > 0 && error
                }
                <form onSubmit={handleFormSubmit}>
                    <FormInput 
                        type="text" 
                        name="displayName" 
                        value={displayName} 
                        placeholder="Full name"
                        handleChange={(e) => setDisplayName(e.target.value)} 
                    />
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={email} 
                        placeholder="Email"
                        handleChange={(e) => setEmail(e.target.value)} 
                    />
                    <FormInput 
                        type="password" 
                        name="password" 
                        value={password} 
                        placeholder="Enter Password"
                        handleChange={(e) => setPassword(e.target.value)} 
                    />
                    <FormInput 
                        type="password" 
                        name="confirmPassword" 
                        value={confirmPassword} 
                        placeholder="Confirm Password"
                        handleChange={(e) => setConfirmPassword(e.target.value)} 
                    />

                    <Button type="submit">Register</Button>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default SignUp;