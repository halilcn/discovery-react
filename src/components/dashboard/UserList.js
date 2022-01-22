import axios from 'axios';
import { useEffect } from 'react';

export const UserList = (props) => {

  useEffect(() => {
    getUsers();
  });

  const getUsers = async () => {
    const test = await axios.get('https://fakestoreapi.com/users');
    console.log(test);
  };

  return (
    <div>
      user list page
    </div>
  );
};
