import React, {useState, useEffect} from "react";
import AuthWrapper from '../authWrapper';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FormInput from '../forms/formInput/forminput.component';
import { resetPassword, resetAllAuthForms } from "../../redux/user/user.actions";
import Button from '../forms/button/button.component';

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    resetPasswordError: user.resetPasswordError
});

const EmailPassword = () => {

    const history = useHistory();
    const { resetPasswordSuccess, resetPasswordError } = useSelector(mapState);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if(resetPasswordSuccess) {
            dispatch(resetAllAuthForms());
            history.push('/login');
        }
    }, [resetPasswordSuccess]);

    useEffect(() => {
        if(Array.isArray(resetPasswordError) && resetPasswordError.length > 0) {
            setError(resetPasswordError)
        }
    }, [resetPasswordError]);

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(resetPassword({ email }));
    }

    const configAuthWrapper = {
        headline: 'Email Password'
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