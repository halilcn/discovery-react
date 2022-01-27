import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { getUserDetail } from '../../../../services/user';
import handle from '../../../../others/handle';
import { Loading } from '../../shared/loading/Loading';

import './userDetail.css';

export const UserDetail = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  let { userId } = useParams();

  useEffect(() => {
    handle(async () => {
      setUser(await getUserDetail(userId));
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {
        loading ? (
          <Loading textLineCount={5}/>
        ) : (
          <div className="user-info">
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
                    test 121
                  </div>
                  <div className="value">
                    sadadskasdsoa das
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
