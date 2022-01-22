import axios from 'axios';
import { useEffect, useState } from 'react';
import { Top } from '../shared/Top';
import { UserDetailItem } from './UserDetailItem';

export const UserList = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const users = (await axios.get('https://fakestoreapi.com/users')).data;
    setUsers(users);
    setLoading(false);
  };

  return (
    <div>
      <Top/>
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
