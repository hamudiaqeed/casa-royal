import React from 'react';
import './button.styles.scss';

const Button = ({ children, ...otherProps }) => {
    return (
        <div className='middle'>
            <button className='btn' {...otherProps}>
                {children}
            </button>
        </div>
    );
}

export default Button;