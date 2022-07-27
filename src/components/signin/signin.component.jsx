import React, { useState, useEffect } from 'react';
import './signin.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/User/user.actions';
import Button from '../forms/Button/button.component';
import { Link, useHistory } from 'react-router-dom';
import AuthWrapper from '../AuthWrapper/index';

const mapState = ({user}) => ({
    currentUser: user.currentUser
});

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

    useEffect(() => {
        if(currentUser) {
            setEmail('');
            setPassword('');
            history.push('/');
        }
    }, [currentUser]);

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(emailSignInStart({email, password}));
    };

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart());
    };

    const configAuthWrapper = {
        headline: 'Login'
    };

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className='formWrap'>
                <form onSubmit={handleSubmit} className="login-form">
                    <h1>Login</h1>
                    <div className='txtb'>
                        <input 
                            type="email"
                            name="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span data-placeholder='Email'></span>
                    </div>
                    <div className='txtb'>
                        <input 
                            type="password"
                            name="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span data-placeholder='Parola'></span>
                    </div>
                    <Button type="submit">Login</Button>
                    <div className='bottom-text'>
                        <div className='socialSignin'>
                            <div className='row'>
                                <Button onClick={handleGoogleSignIn}>
                                    Logare cu Google
                                </Button>
                            </div>
                        </div>
                        <div className='links'>
                            <Link to="/recovery" className='bold'>Reseteaza parola</Link>
                            <p>Nu ai cont? Creeaza unul <Link to="/registration" className='underline bold'> aici</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default SignIn;