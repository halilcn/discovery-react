import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import { routes } from '../../../../routes/index';
import handle from '../../../../others/handle';
import { deleteUser } from '../../../../services/user';

import './userListItem.css';

export const UserListItem = ({ user, deleteUserFromState }) => {
  const [deletingUserId, setDeletingUserId] = useState(null);

  const deleteUserAction = (userId) => () => {
    handle(async () => {
      setDeletingUserId(userId);
      await deleteUser(userId);
      deleteUserFromState(userId);
    })
      .finally(() => {
        setDeletingUserId(null);
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
        <div onClick={deleteUserAction(user.id)}
             className={`delete-btn ${deletingUserId === user.id && 'disable'}`}>
          delete
        </div>
      </div>
    </div>
  );
};
