import axios from 'axios';
import { api } from './api';

jest.mock('axios', () => ({
  create: jest.fn(() => ({})),
}));

describe('Api', () => {
  it('Should create Axios instance', () => expect(api).toBeTruthy());
});
