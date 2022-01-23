import axios from 'axios';
import { useEffect, useState } from 'react';
import { UserDetailItem } from './UserDetailItem';

export const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    setUsers(users);
    setLoading(false);
  };

  return (
    <div>
      {
        loading
          ? 'loading...'
          : <div className="flex w-full">
            {users.map(user => {
              return (
                <UserDetailItem user={user}/>
              );
            })}
          </div>
      }
    </div>
  );
};
