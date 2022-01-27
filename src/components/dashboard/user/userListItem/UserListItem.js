import { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { routes } from '../../../../routes/index';
import handle from '../../../../others/handle';
import { deleteUser } from '../../../../services/user';

import './userListItem.css';

export const UserListItem = ({ user }) => {
  useEffect(() => {
    console.log('created');
  },[]);

  const deleteUserAction = (userId) => {
    console.log('delete ok');
    handle(async () => {
     /* await deleteUser(userId);
      alert('ok')*/
    });
  };

  return (
    <div className="user-item">
      <div className="top">
        <NavLink to={routes.dashboard.children.userDetail.fullPath.replace(':userId', user.id)}>
          <img src="https://randomuser.me/api/portraits/men/83.jpg"/>
          <div className="username">
            {user.username}
          </div>
        </NavLink>
      </div>
      <div className="bottom">
        <div onClick={deleteUserAction(user.id)} className="delete-btn">
          delete
        </div>
      </div>
    </div>
  );
};
