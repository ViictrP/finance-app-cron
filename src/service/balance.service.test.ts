const mock = jest.fn(() =>
  Promise.resolve({
    data: {
      creditCards: [],
      transactions: [],
      recurringExpenses: []
    },
  }));
import { getBalance } from './balance.service';

jest.mock('axios', () => ({
  create: jest.fn(() => ({ get: mock })),
  get: mock,
  defaults: {
    headers: {
      common: {},
    },
  },
}));

describe('BalanceService', () => {
  afterEach(() => jest.resetAllMocks());

  it('Should get balance with success', async () => {
    const balance = await getBalance();
    expect(balance.creditCards).toBeTruthy();
    expect(balance.transactions).toBeTruthy();
    expect(balance.recurringExpenses).toBeTruthy();
    expect(mock).toHaveBeenCalled();
  });
});
