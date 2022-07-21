import React, { useState, useEffect } from 'react';
import './signin.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/User/user.actions';
import Button from '../forms/Button/button.component';
import FormInput from '../forms/FormInput/forminput.component';
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
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        handleChange={(e) => setEmail(e.target.value)}
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        placeholder="Parola"
                        value={password}
                        handleChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Login</Button>
                    <div className='socialSignin'>
                        <div className='row'>
                            <Button onClick={handleGoogleSignIn}>
                                Logare cu Google
                            </Button>
                        </div>
                    </div>
                    <div className='links'>
                        <Link to="/recovery">Reseteaza parola</Link>
                        <p>Nu ai cont? Creeaza unul <Link to="/registration" className='underline'> aici</Link></p>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default SignIn;