import axios from 'axios';

export const getUsers = async () => {
  return (await axios.get('users')).data;
};

export const getUserDetail = async (userId) => {
  return (await axios.get(`users/${userId}`)).data;
};

export const deleteUser = async (userId) => {
  await axios.delete(`users/${userId}`);
};
