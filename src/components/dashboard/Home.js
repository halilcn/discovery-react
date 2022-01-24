import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { Top } from './shared/Top';
import helpers from '../../others/helpers';
import { routes } from '../../routes/index';

import './home.css';

export const Home = (props) => {
  let history = useNavigate();

  useEffect(() => {
    if (!helpers.isAuth()) {
      history(routes.login.path);
    }
  }, []);

  return (
    <div className="home">
      <Top/>
      <div className="dynamic-component-container">
        <Outlet/>
      </div>
    </div>
  );
};
