let helpers = {};

const USER_STORAGE_KEY = 'user';

helpers.setAuthToStorage = (user) => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
};

helpers.deleteAuthFromStorage = () => {
  localStorage.removeItem(USER_STORAGE_KEY);
};

helpers.getAuthFromStorage = () => {
  return JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
};

helpers.isAuth = () => {
  return !!helpers.getAuthFromStorage();
};

helpers.isGuest = () => {
  return !helpers.getAuthFromStorage();
};

export default helpers;
