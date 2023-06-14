const mock = jest.fn(() =>
  Promise.resolve({ data: {} }));

import * as balanceService from './balance.service';
import { saveMonthClosure } from './month-closure.service';

jest.mock('axios', () => ({
  create: jest.fn(() => ({ post: mock })),
  post: mock,
  defaults: {
    headers: {
      common: {},
    },
  },
}));
jest.mock('./balance.service',
  () => ({ getBalance: jest.fn() }));

describe('MonthClosureService', () => {
  afterEach(() => jest.resetAllMocks());

  it('Should save month closure with success', async () => {
    jest.spyOn(balanceService, 'getBalance').mockImplementation(() => Promise.resolve({
      creditCards: [],
      transactions: [],
      recurringExpenses: [],
    }));

    const monthClosure = await saveMonthClosure();

    expect(monthClosure).toBeTruthy();
    expect(mock).toHaveBeenCalled();
  });
});
