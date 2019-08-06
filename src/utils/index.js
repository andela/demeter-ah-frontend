import axios from 'axios';
import Cryptr from 'cryptr';

export const axiosCall = async ({
  path, payload, method,
}) => {
  const url = `${process.env.SERVER_URL}${path}`;
  const result = await axios[method](url, payload);
  const data = result && result.data;
  return data;
};

export const saveToLocalStorage = (user) => {
  if (user) {
    const { token } = user;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }
};

export const clearLocalStorage = () => {
  localStorage.clear();
};

export const decryptQuery = (string) => {
  const cryptr = new Cryptr(process.env.SECRET);
  const decryptedString = cryptr.decrypt(string);
  return decryptedString;
};
