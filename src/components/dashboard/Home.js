import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Top } from './shared/Top';
import { useNavigate } from 'react-router-dom';
import helpers from '../../helpers';
import { routes } from '../../routes/index';

export const Home = (props) => {
  let history = useNavigate();

  useEffect(() => {
    if (!helpers.isAuth()) {
      console.log(helpers.isAuth());
      history(routes.login.path);
    }
  }, []);

  return (
    <div>
      <Top/>
      <Outlet/>
    </div>
  );
};
