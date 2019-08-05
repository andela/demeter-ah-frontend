import store from './index';

describe('STORE', () => {
  test('Test store', () => {
    expect(store).toMatchSnapshot();
  });
});
