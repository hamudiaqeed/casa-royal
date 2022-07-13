import React, { useState } from 'react';
import './signin.styles.scss';
import Button from '../forms/button/button.component';
import FormInput from '../forms/formInput/forminput.component';
import { signInWithGoogle, auth } from '../../firebase/utils';

const SignIn = (props) => {

    const [information, setInformation] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setInformation({...information, [name]: value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = information;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            setInformation({
                email: '',
                password: ''
            });
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div className='signin'>
            <div className='wrap'>
                <h2>Login</h2>
                <div className='formWrap'>
                    <form onSubmit={handleSubmit}>
                        <FormInput 
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={information.email}
                            onChange={(e) => handleChange(e)}
                        />
                        <FormInput 
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={information.password}
                            onChange={(e) => handleChange(e)}
                        />
                        <Button type="submit">Login</Button>
                        <div className='socialSignin'>
                            <div className='row'>
                                <Button onClick={signInWithGoogle}>
                                    Sign in with Google
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn;