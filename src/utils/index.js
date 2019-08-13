import axios from 'axios';
import Cryptr from 'cryptr';

export const axiosCall = async ({
  path, payload, method, contentType
}) => {
  const url = `${process.env.SERVER_URL}${path}`;
  const headers = {
    'x-access-token': localStorage.token,
    'Content-Type': contentType || 'application/json',
  };
  const axiosdata = {
    method,
    url,
    data: payload,
    headers,
    json: true,
  };
  const result = await axios(axiosdata);
  const data = result && result.data;
  return data;
};

export const saveToLocalStorage = (user) => {
  if (user) {
    const token = user.token || localStorage.getItem('token');
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    token ? localStorage.setItem('isAuthenticated', true) : '';
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

export const cardStyle = (imgURL) => {
  const card = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImage: `url(${imgURL})`,
  };
  return card;
};
