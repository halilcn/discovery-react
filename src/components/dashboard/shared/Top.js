import { NavLink } from 'react-router-dom';
import { routes } from '../../../routes/index';

export const Top = () => {
  return (
    <div>
      <NavLink exact activeClassName="underline" to={routes.dashboard.children.main.fullPath}>
        main page
      </NavLink>

      <NavLink exact activeClassName="underline"  to={routes.dashboard.children.users.fullPath}>
        users
      </NavLink>
    </div>
  );
};
