jest.mock('axios', () => ({
  create: jest.fn(() => ({
    get: () => Promise.resolve({
      data: {
        salary: 1000,
        expenses: 200,
        available: 800,
      },
    }),
  })),
  get: () => Promise.resolve({
    data: {
      salary: 1000,
      expenses: 200,
      available: 800,
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
    expect(balance.available).toBeTruthy();
    expect(balance.expenses).toBeTruthy();
    expect(balance.salary).toBeTruthy();
  });
});
