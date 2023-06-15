jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: () => Promise.resolve({
      data: {
        creditCards: [],
        transactions: [],
        recurringExpenses: [],
      },
    }),
  })),
  get: () => Promise.resolve({
    data: {
      creditCards: [],
      transactions: [],
      recurringExpenses: [],
    },
  }),
  defaults: {
    headers: {
      common: {},
    },
  },
}));
import { getBalance } from './balance.service';

describe('BalanceService', () => {
  afterEach(() => jest.resetAllMocks());

  it('Should get balance with success', async () => {
    const balance = await getBalance(null, null);
    expect(balance.creditCards).toBeTruthy();
    expect(balance.transactions).toBeTruthy();
    expect(balance.recurringExpenses).toBeTruthy();
  });
});
