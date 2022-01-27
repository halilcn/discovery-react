import { Login } from '../components/general/Login';
import { Register } from '../components/general/Register';
import { Home } from '../components/dashboard/Home';
import { UserList } from '../components/dashboard/user/UserList';
import { Main } from '../components/dashboard/main/Main';
import { UserDetail } from '../components/dashboard/user/UserDetail';
import { NoPage } from '../components/general/NoPage';

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
    element: <Home/>,
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
