import React from 'react';
import './notfound.styles.scss';
import { Link } from 'react-router-dom';

const NotFound = props => {
  return (
    <div className='notfound-background'>
        <div className='notfound-container'>
            <h2>Oops! Pagina nu a fost gasita.</h2>
            <h1>404</h1>
            <p>Nu am putut gasi pagina cautata.</p>
            <Link to='/'>Intoarce-te pe prima pagina</Link>
        </div>
    </div>
  );
};

export default NotFound;