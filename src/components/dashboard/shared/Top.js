import { NavLink, useNavigate } from 'react-router-dom';
import helpers from '../../../others/helpers';
import { routes } from '../../../routes/index';

export const Top = () => {
  let history = useNavigate();

  const logoutHandle = () => {
    helpers.deleteAuthFromStorage();
    history(routes.login.path);
  };

  return (
    <div>
      <NavLink exact activeClassName="underline" to={routes.dashboard.children.main.fullPath}>
        main page
      </NavLink>

      <NavLink exact activeClassName="underline" to={routes.dashboard.children.users.fullPath}>
        users
      </NavLink>

      <div onClick={logoutHandle}>
        logout
      </div>
    </div>
  );
};
