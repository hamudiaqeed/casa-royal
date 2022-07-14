import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './signup.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, resetAllAuthForms } from '../../redux/user/user.actions';
import FormInput from '../forms/formInput/forminput.component';
import Button from '../forms/button/button.component';
import AuthWrapper from '../authWrapper';

const mapState = ({user}) => ({
    signUpSuccess: user.signUpSuccess,
    signUpError: user.signUpError
})

const SignUp = (props) => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();
    const { signUpSuccess, signUpError } = useSelector(mapState);

    useEffect(() => {
        if(signUpSuccess) {
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            dispatch(resetAllAuthForms());
            history.push('/');
        }
    }, [signUpSuccess]);

    useEffect(() => {
        if(Array.isArray(signUpError) && signUpError.length > 0)  {
            setError(signUpError)
        }
    }, [signUpError]);

    const handleFormSubmit = e => {
        e.preventDefault();

        dispatch(signUpUser({
            displayName,
            email,
            password,
            confirmPassword
        }));
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