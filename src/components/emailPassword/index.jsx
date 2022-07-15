import React, {useState, useEffect} from "react";
import AuthWrapper from '../authWrapper';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FormInput from '../forms/formInput/forminput.component';
import { resetPasswordStart, resetUserState } from "../../redux/user/user.actions";
import Button from '../forms/button/button.component';

const mapState = ({ user }) => ({
    resetPasswordSuccess: user.resetPasswordSuccess,
    userErr: user.userErr
});

const EmailPassword = () => {

    const history = useHistory();
    const { resetPasswordSuccess, userErr } = useSelector(mapState);
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if(resetPasswordSuccess) {
            dispatch(resetUserState());
            history.push('/login');
        }
    }, [resetPasswordSuccess]);

    useEffect(() => {
        if(Array.isArray(userErr) && userErr.length > 0) {
            setError(userErr)
        }
    }, [userErr]);

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(resetPasswordStart({ email }));
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