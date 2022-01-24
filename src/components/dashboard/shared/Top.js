import { NavLink, useNavigate } from 'react-router-dom';

import helpers from '../../../others/helpers';
import { routes } from '../../../routes/index';

import './top.css';

export const Top = () => {
  let history = useNavigate();

  const logoutHandle = () => {
    helpers.deleteAuthFromStorage();
    history(routes.login.path);
  };

  return (
    <div className="header">
      <NavLink className="link" exact activeClassName="underline" to={routes.dashboard.children.main.fullPath}>
        main page
      </NavLink>

      <NavLink className="link" exact activeClassName="underline" to={routes.dashboard.children.users.fullPath}>
        users
      </NavLink>

      <div className="link logout" onClick={logoutHandle}>
        logout
      </div>
    </div>
  );
};
