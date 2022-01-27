import { useEffect, useState } from 'react';

import { Loading } from '../../shared/loading/Loading';
import { UserListItem } from '../userListItem/UserListItem';
import { getUsers } from '../../../../services/user';
import handle from '../../../../others/handle';

import './userList.css';

export const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsersAction();
  }, []);

  const getUsersAction = () => {
    handle(async () => {
      setUsers(await getUsers());
    })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteUserFromState = (userId) => {
    setUsers(users => {
      return users.filter(user => user.id !== userId);
    });
  };

  return (
    <div>
      {
        loading ? (
            <Loading textCount={4} textLineCount={5}/>
          )
          : (
            <div className="user-list">
              {
                users.map(user => (
                  <UserListItem key={user.id}
                                user={user}
                                deleteUserFromState={deleteUserFromState}/>
                ))
              }
            </div>
          )
      }
    </div>
  );
};
