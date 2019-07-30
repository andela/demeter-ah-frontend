import axios from 'axios';

export const axiosCall = async ({
  path, payload, method,
}) => {
  const app = process.env.APP_URL;
  const url = `${app}${path}`;
  const result = await axios[method](url, payload);

  const data = result && result.data;
  return data;
};

export const saveToLocationStorage = (user) => {
  const { token } = user.token;
  localStorage.setItem('token', token);
  localStorage.setItem('user', user);
};
