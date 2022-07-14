import React, { useState } from 'react';
import './signin.styles.scss';
import Button from '../forms/button/button.component';
import FormInput from '../forms/formInput/forminput.component';
import { Link, useHistory } from 'react-router-dom';
import AuthWrapper from '../authWrapper';
import { signInWithGoogle, auth } from '../../firebase/utils';

const SignIn = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setEmail('');
            setPassword('');
            history.push('/');
        } catch (err) {
            console.log(err);
        }
    }

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
                            <Button onClick={signInWithGoogle}>
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