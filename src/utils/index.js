import axios from 'axios';
import Cryptr from 'cryptr';
import Pusher from 'pusher-js';
import toast from '../components/Toast';
// eslint-disable-next-line import/no-cycle
import { getUser } from '../store/actions/signup';

let callDispatch;
export const setDispatch = ({ dispatch }) => {
  callDispatch = dispatch;
};

export const clearLocalStorage = () => {
  localStorage.clear();
};


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

  try {
    const result = await axios(axiosdata);
    const data = result && result.data;
    return data;
  } catch (error) {
    const { response } = error;
    if (response.data.message === 'Unauthorized access') {
      clearLocalStorage();
      toast('Kindly login', 'error');
      callDispatch(getUser());
      return;
    }
    throw error;
  }
};

export const saveToLocalStorage = (user) => {
  if (user) {
    const token = user.token || localStorage.getItem('token');
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    token ? localStorage.setItem('isAuthenticated', true) : '';
  }
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
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 99.98%, rgba(255, 255, 255, 0) 99.99%, rgba(255, 255, 255, 0.2) 100%), url(${imgURL})`,
  };
  return card;
};


export const featuredImgStyle = (imgURL) => {
  const featured = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundImage: `linear-gradient(179.9deg, rgba(255, 255, 255, 0) 25.3%, rgba(10, 9, 9, 0.67) 79.04%), url(${imgURL})`,
  };
  return featured;
};

export const relatedArticleImg = (imgURL) => {
  const style = {
    height: '10rem',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundImage: `url(${imgURL})`
  };
  return style;
};
export const ImageStyle = (imgURL) => {
  const card = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.5) 99.98%, rgba(255, 255, 255, 0) 99.99%, rgba(255, 255, 255, 0.2) 100%), url(${imgURL})`,
  };
  return card;
};

export const authorImage = img => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundImage: `url(${img})`,
  borderRadius: '9999px'
});

export const bookmarkImg = img => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundImage: `url(${img})`,
  alignSelf: 'flex-end',
  cursor: 'pointer'
});

export const starImg = img => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
  backgroundImage: `url(${img})`,
  alignSelf: 'flex-end',
  cursor: 'pointer'
});

export const pusher = new Pusher(process.env.PUSHER_KEY, {
  cluster: 'eu',
  forceTLS: true
});
