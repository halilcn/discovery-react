import { Outlet } from 'react-router-dom';
import { Top } from './shared/Top';

export const Home = (props) => {
  return (
    <div>
      <Top/>
      <Outlet/>
    </div>
  );
};
