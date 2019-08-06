import React from 'react';
import { Provider } from 'react-redux';
import { useSetUser } from '../store/hooks';
import Routes from '../routes';
import store from '../store';

const App = () => {
  useSetUser({ ...store });
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
