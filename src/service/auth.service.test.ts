const mock = jest.fn(() => Promise.resolve({ data: { accessToken: 'test' } }));

import axios from 'axios';
import { login } from './auth.service';

jest.mock('axios', () => ({
  create: jest.fn(() => ({ post: mock })),
  post: mock,
  defaults: {
    headers: {
      common: {}
    }
  }
}));

describe('AuthService', () => {
  afterEach(() => jest.resetAllMocks());

  it('Should log in with success', async () => {
    await login();
    expect(mock).toHaveBeenCalled();
    expect(axios.defaults.headers.common['x-authentication-token']).toBeDefined();
  });
});
