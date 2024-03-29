import React from 'react';
import './forminput.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {

    return (
        <div className='formRow'>
            {label && (
                <label>{label}</label>
            )}

            <input className='formInput' required onChange={handleChange} {...otherProps} />
        </div>
    );
}

export default FormInput;