import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { Top } from '../../components/dashboard/shared/top/Top';
import helpers from '../../others/helpers';
import { routes } from '../../routes/index';

import './dashboard.css';

export const Dashboard = () => {
  let history = useNavigate();

  useEffect(() => {
    if (!helpers.isAuth()) {
      history(routes.login.path);
    }
  });

  return (
    <div className="home">
      <Top/>
      <div className="dynamic-component-container">
        <Outlet/>
      </div>
    </div>
  );
};
