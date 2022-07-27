import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './signup.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUserStart } from '../../redux/User/user.actions';
import { Link } from 'react-router-dom';
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
                <form onSubmit={handleFormSubmit} className="signup-form">
                    <h1>Sign Up</h1>
                    <div className='txtb'>
                        <input 
                            type="text" 
                            name="displayName" 
                            value={displayName} 
                            required
                            onChange={(e) => setDisplayName(e.target.value)} 
                        />
                        <span data-placeholder='Nume'></span>
                    </div>
                    
                    <div className='txtb'>
                        <input 
                            type="email" 
                            name="email" 
                            value={email} 
                            required
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <span data-placeholder='Email'></span>
                    </div>
                    
                    <div className='txtb'>
                        <input 
                            type="password" 
                            name="password" 
                            value={password} 
                            required
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <span data-placeholder='Parola'></span>
                    </div>
                    
                    <div className='txtb'>
                        <input 
                            type="password" 
                            name="confirmPassword" 
                            value={confirmPassword} 
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                        <span data-placeholder='Confirma Parola'></span>
                    </div>

                    <Button type="submit">Confirma</Button>

                    <div className='links'>
                            <p>Ai deja cont? Apasa <Link to="/login" className='underline bold'> aici</Link></p>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default SignUp;