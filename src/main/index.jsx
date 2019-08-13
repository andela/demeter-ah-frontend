import React from 'react';
import { Provider } from 'react-redux';
import { useSetUser } from '../store/hooks';
import AuthWrapper from './AuthWrapper';
import store from '../store';

const App = () => {
  useSetUser({ ...store });
  return (
    <Provider store={store}>
      <AuthWrapper />
    </Provider>
  );
};

export default App;
