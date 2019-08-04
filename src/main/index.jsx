import React from 'react';
import { Provider } from 'react-redux';
import Routes from '../routes';
import store from '../store';
import { useSetUser } from '../store/hooks';

const App = () => {
  useSetUser({ ...store });
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
