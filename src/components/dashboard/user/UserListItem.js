import { NavLink } from 'react-router-dom';

import './user-list-item.css';
import { routes } from '../../../routes/index';

export const UserListItem = ({ user }) => {
  return (
    <div className="user-item">
      <NavLink to={routes.dashboard.children.userDetail.fullPath.replace(':userId',user.id)} className="top">
        <img src="https://randomuser.me/api/portraits/men/83.jpg"/>
        <div className="username">
          {user.username}
        </div>
      </NavLink>
      <div className="bottom">
        <div className="delete-btn">
          delete
        </div>
      </div>
    </div>
  );
};
