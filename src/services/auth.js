import helpers from '../others/helpers';
import axios from 'axios';

export const postLogin = async () => {
  //Fake login
  await new Promise((resolve) => setTimeout(resolve, 1000));
  helpers.setAuthToStorage({ username: 'halil', token: 'asad409534ıuejfd94rej' });
};

export const postRegister = async () => {
  const fakeData = {
    email: 'John@gmail.com',
    username: 'johnd',
    password: 'm38rmF$',
    name: {
      firstname: 'John',
      lastname: 'Doe'
    },
    address: {
      city: 'kilcoole',
      street: '7835 new road',
      number: 3,
      zipcode: '12926-3874',
      geolocation: {
        lat: '-37.3159',
        long: '81.1496'
      }
    },
    phone: '1-570-236-7033'
  };

  await axios.post('users', fakeData);
};
