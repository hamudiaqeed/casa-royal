import React, { useState, useEffect } from 'react';
import './signin.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser, signInWithGoogle, resetAllAuthForms } from '../../redux/user/user.actions';
import Button from '../forms/button/button.component';
import FormInput from '../forms/formInput/forminput.component';
import { Link, useHistory } from 'react-router-dom';
import AuthWrapper from '../authWrapper';

const mapState = ({user}) => ({
    signInSuccess: user.signInSuccess
});

const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();
    const { signInSuccess } = useSelector(mapState);

    useEffect(() => {
        if(signInSuccess) {
            setEmail('');
            setPassword('');
            dispatch(resetAllAuthForms());
            history.push('/');
        }
    }, [signInSuccess]);

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(signInUser({email, password}));
    };

    const handleGoogleSignIn = () => {
        dispatch(signInWithGoogle());
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
                        placeholder="Password"
                        value={password}
                        handleChange={(e) => setPassword(e.target.value)}
                    />
                    <Button type="submit">Login</Button>
                    <div className='socialSignin'>
                        <div className='row'>
                            <Button onClick={handleGoogleSignIn}>
                                Sign in with Google
                            </Button>
                        </div>
                    </div>
                    <div className='links'>
                        <Link to="/recovery">Reset password</Link>
                    </div>
                </form>
            </div>
        </AuthWrapper>
    );
}

export default SignIn;