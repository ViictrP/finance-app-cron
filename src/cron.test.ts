jest.mock('node-cron', () => ({
  schedule: jest.fn().mockImplementation((_, callback) => callback()),
}));
jest.mock('./service/auth.service', () => ({
  login: async () => {
  },
}));
jest.mock('./service/month-closure.service', () => ({
  saveMonthClosure: jest.fn().mockImplementation(() => Promise.resolve({ month: 'JUN', year: 2023 })),
}));
import * as cron from 'node-cron';
import * as monthClosureService from './service/month-closure.service';

describe('Cron', () => {
  it('Should schedule a cron', async () => {
    require('./cron');
    await new Promise((r) => setTimeout(r, 1000));
    const scheduleSpy = jest.spyOn(cron, 'schedule');
    const saveMonthClosureSpy = jest.spyOn(monthClosureService, 'saveMonthClosure');
    expect(scheduleSpy).toHaveBeenCalledWith('0 2 30 * *', expect.any(Function));
    expect(saveMonthClosureSpy).toHaveBeenCalled();
  });
});
