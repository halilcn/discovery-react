import axios from 'axios';

export const getUsers = async () => {
  return (await axios.get('https://fakestoreapi.com/users')).data;
};
