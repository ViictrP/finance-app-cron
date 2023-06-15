jest.mock('node-cron', () => ({
  schedule: jest.fn(),
}));
jest.mock('./service/auth.service', () => ({
  login: async () =>  {}
}));
import * as cron from 'node-cron';

describe('Cron', () => {
  it('Should schedule a cron', async () => {
    require('./cron');
    await new Promise((r) => setTimeout(r, 1000));
    const scheduleSpy = jest.spyOn(cron, 'schedule');
    expect(scheduleSpy).toHaveBeenCalledWith('* * * * *', expect.any(Function));
  });
});
