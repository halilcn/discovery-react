import { useEffect, useState } from 'react';

import { NavLink, useParams } from 'react-router-dom';

import { getUserDetail } from '../../../../services/user';
import handle from '../../../../others/handle';
import { Loading } from '../../shared/loading/Loading';
import { routes } from '../../../../routes/index';

import './userDetail.css';

export const UserDetail = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  let { userId } = useParams();

  useEffect(() => {
    handle(async () => {
      setUser(await getUserDetail(userId));
      setLoading(false);
      console.log(user);
    });
  }, []);

  return (
    <div>
      {
        loading ? (
          <Loading textLineCount={5}/>
        ) : (
          <div className="user-info">
            <NavLink className="back-btn" to={routes.dashboard.children.users.fullPath}>
              back
            </NavLink>
            <div className="top">
              <img src="https://randomuser.me/api/portraits/men/83.jpg"/>
              <div className="username">
                isim soyisi
              </div>
            </div>
            <div className="bottom">
              <div className="other-infos">
                <div className="item">
                  <div className="title">
                    Phone
                  </div>
                  <div className="value">
                    {user.phone}
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    E-mail
                  </div>
                  <div className="value">
                    {user.email}
                  </div>
                </div>
                <div className="item">
                  <div className="title">
                    City
                  </div>
                  <div className="value">
                    {user.address.city}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};
