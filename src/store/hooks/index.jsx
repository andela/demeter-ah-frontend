import { useEffect } from 'react';
import { getUser } from '../actions/signup';

export const useSetUser = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getUser());
  }, []);
  return [];
};
