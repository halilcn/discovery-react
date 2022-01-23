import { useEffect, useState } from 'react';

import { UserListItem } from './UserListItem';
import { getUsers } from '../../../services/user';
import handle from '../../../others/handle';

export const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsersAction();
  }, []);

  const getUsersAction = () => {
    handle(async () => {
      setUsers(await getUsers());
    }).finally(() => {
      setLoading(false);
    });
  };

  return (
    <div>
      {
        loading
          ? 'loading...'
          : <div className="flex w-full">
            {users.map(user => {
              return (
                <UserListItem user={user}/>
              );
            })}
          </div>
      }
    </div>
  );
};
