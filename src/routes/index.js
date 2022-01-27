import { Login } from '../views/general/login/Login';
import { Register } from '../views/general/register/Register';
import { Dashboard } from '../views/dashboard/Dashboard';
import { UserList } from '../components/dashboard/user/userList/UserList';
import { Main } from '../components/dashboard/main/Main';
import { UserDetail } from '../components/dashboard/user/userDetail/UserDetail';
import { NoPage } from '../views/general/noPage/NoPage';

export const routes = {
  login: {
    path: '/login',
    element: <Login/>
  },
  register: {
    path: '/register',
    element: <Register/>
  },
  noPage: {
    path: '/404',
    element: <NoPage/>
  },
  dashboard: {
    path: '/dashboard/',
    element: <Dashboard/>,
    children: {
      main: {
        path: 'main',
        fullPath: '/dashboard/main',
        element: <Main/>
      },
      users: {
        path: 'users',
        fullPath: '/dashboard/users',
        element: <UserList/>
      },
      userDetail: {
        path: 'users/:userId',
        fullPath: '/dashboard/users/:userId',
        element: <UserDetail/>
      }
    }
  }
};
