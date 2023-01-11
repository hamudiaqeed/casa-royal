import React, { useState, useEffect } from 'react';
import './signin.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import Button from '../forms/button/button.component';
import { Link, useHistory } from 'react-router-dom';
import AuthWrapper from '../authWrapper/index';
import { auth } from '../../firebase/utils';

const mapState = ({user}) => ({
    currentUser: user.currentUser
});

const SignIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

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

    const handleSubmit = async e => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));

        if(email && password) {
            try {
                setError('');
                await auth.signInWithEmailAndPassword(email, password);
            } catch (err) {
                if(err && err.toString().includes('There is no user record corresponding to this identifier.')) {
                    setError('Utilizator inexistent.');
                } else if (err && err.toString().includes('The password is invalid or the user does not have a password.')) {
                    setError('Parola incorecta.')
                } else if (err && err.toString().includes('Access to this account has been temporarily disabled due to many failed login attempts.')) {
                    setError('Parola a fost introdusa gresita de mai multe ori. Va rugam incercati mai tarziu.')
                } else {
                    setError('Ceva nu a mers bine, va rugam reveniti mai tarziu');
                }
            }
        }
    
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
                    <span className='error'>{error && error.toString()}</span>
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