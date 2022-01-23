import { useEffect, useState } from 'react';

import { NavLink, useParams } from 'react-router-dom';

import { getUserDetail } from '../../../services/user';
import handle from '../../../others/handle';

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
      {loading ? (
        'loading'
      ) : (
        <div>
          -- {user.username}
        </div>
      )}
    </div>
  );
};
