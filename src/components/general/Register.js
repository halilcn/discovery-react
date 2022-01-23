import { useEffect } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import helpers from '../../others/helpers';
import { routes } from '../../routes/index';
import handle from '../../others/handle';
import { postLogin, postRegister } from '../../services/auth';

export const Register = (props) => {
  let history = useNavigate();

  useEffect(() => {
    if (helpers.isAuth()) {
      history(routes.dashboard.children.main.fullPath);
    }
  }, []);

  const register = () => {
    handle(async () => {
      await postRegister();
      await postLogin();
      history(routes.dashboard.children.main.fullPath);
    });
  };

  return (
    <div className="bg-gray-100 h-full flex items-center justify-center">
      <div className="bg-white w-1/3 rounded-xl p-5 shadow-lg ">
        <input type="email"
               placeholder="E-mail"
               className="w-full mb-3 p-4 border border-gray-200 rounded-lg text-gray-500 focus:border-gray-300 focus:shadow-md"/>
        <input type="password" placeholder="Password"
               className="w-full mb-3 p-4 border border-gray-200 rounded-lg text-gray-500 focus:border-gray-300 focus:shadow-md"/>
        <input type="password" placeholder="Repeat Password"
               className="w-full mb-3 p-4 border border-gray-200 rounded-lg text-gray-500 focus:border-gray-300 focus:shadow-md"/>
        <div
          className="text-blue-600 mt-6 py-3 bg-blue-50 text-center mb-5 rounded-lg w-full font-bold text-xl tracking-wider cursor-pointer transition hover:bg-blue-100 hover:-translate-y-1"
          onClick={register}>
          Register
        </div>
        <NavLink to={routes.login.path}
                 className="text-gray-400 underline font-medium">
          login
        </NavLink>
      </div>
    </div>
  );
};
