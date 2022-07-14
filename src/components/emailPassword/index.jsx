import React, {useState} from "react";
import AuthWrapper from '../authWrapper';
import { useHistory } from "react-router-dom";
import FormInput from '../forms/formInput/forminput.component';
import Button from '../forms/button/button.component';
import {auth} from '../../firebase/utils';

const EmailPassword = () => {

    const history = useHistory();

    const configAuthWrapper = {
        headline: 'Email Password'
    }

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const config = {
                url: 'http://localhost:3000/login'
            };
            await auth.sendPasswordResetEmail(email, config)
                .then(() => {
                    history.push('/login');
                }).catch(() => {
                    setError('Email not found');
                })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrap">
                {error && error}
                <form onSubmit={handleSubmit}>
                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={(e) => setEmail(e.target.value)}
                    />
                    <Button type="submit">Email Password</Button>
                </form>
            </div>
        </AuthWrapper>
    )
}

export default EmailPassword;