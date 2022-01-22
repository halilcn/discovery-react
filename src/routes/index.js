import { Login } from '../components/general/Login';
import { Register } from '../components/general/Register';
import { Home } from '../components/dashboard/Home';
import { UserList } from '../components/dashboard/user/UserList';
import { Main } from '../components/dashboard/Main';

export const routes = {
  login: {
    path: '/login',
    element: <Login/>
  },
  register: {
    path: '/register',
    element: <Register/>
  },
  dashboard: {
    path: '/dashboard/',
    element: <Home/>,
    children: {
      users: {
        path: 'users',
        fullPath: '/dashboard/users',
        element: <UserList/>
      },
      main: {
        path: 'main',
        fullPath: '/dashboard/main',
        element: <Main/>
      }
    }
  }

};
