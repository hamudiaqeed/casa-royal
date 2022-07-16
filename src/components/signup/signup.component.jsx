import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './signup.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUserStart } from '../../redux/User/user.actions';
import FormInput from '../forms/FormInput/forminput.component';
import Button from '../forms/Button/button.component';
import AuthWrapper from '../AuthWrapper';

const mapState = ({user}) => ({
    currentUser: user.currentUser,
    userErr: user.userErr
})

const SignUp = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();
    const { currentUser, userErr } = useSelector(mapState);

    useEffect(() => {
        if(currentUser) {
            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            history.push('/');
        }
    }, [currentUser]);

    useEffect(() => {
        if(Array.isArray(userErr) && userErr.length > 0)  {
            setError(userErr)
        }
    }, [userErr]);

    const handleFormSubmit = e => {
        e.preventDefault();

        dispatch(signUpUserStart({
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