jest.mock('axios', () => ({
  create: jest.fn(() => ({ post: () => Promise.resolve({ data: {} }) })),
  post: () => Promise.resolve({ data: {} }),
  defaults: {
    headers: {
      common: {},
    },
  },
}));
jest.mock('./balance.service',
  () => ({ getBalance: jest.fn() }));
import * as balanceService from './balance.service';
import { saveMonthClosure } from './month-closure.service';


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
  });
});
