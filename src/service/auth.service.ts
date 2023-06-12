import { api } from '../lib/api';
import TokenDto from '../dto/token.dto';
import axios from 'axios';

export const login = async (): Promise<void> => {
  const { data: token } = await api.post<TokenDto>('/login', {
    'email': process.env['ADMIN_EMAIL'],
    'password': process.env['ADMIN_PASSWORD'],
  });
  axios.defaults.headers.common['x-authentication-token'] = `${token.accessToken}`;
};
