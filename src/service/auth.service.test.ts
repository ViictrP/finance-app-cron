import axios from 'axios';
import { login } from './auth.service';

jest.mock('axios', () => ({
  create: jest.fn(() => ({ post: () => Promise.resolve({ data: { accessToken: 'test' } }) })),
  post: () => Promise.resolve({ data: { accessToken: 'test' } }),
  defaults: {
    headers: {
      common: {},
    },
  },
}));

describe('AuthService', () => {
  afterEach(() => jest.resetAllMocks());

  it('Should log in with success', async () => {
    await login();
    expect(axios.defaults.headers.common['x-authentication-token']).toBeDefined();
  });
});
