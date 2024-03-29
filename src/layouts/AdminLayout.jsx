import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOutUserStart } from '../redux/user/user.actions';
import './AdminLayout.styles.scss';

import VerticalNav from '../components/VerticalNav/vertical.components';

const AdminLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <div className="adminLayout">
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/admin">
                  Home
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;