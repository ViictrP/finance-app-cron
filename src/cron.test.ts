import * as cron from 'node-cron';
jest.mock('node-cron', () => ({
  schedule: jest.fn(),
}));

jest.mock('./service/auth.service', () => ({
  login: async () =>  {}
}));

describe('Cron', () => {
  it('Should schedule a cron', async () => {
    require('./cron');
    await new Promise((r) => setTimeout(r, 1000));
    const scheduleSpy = jest.spyOn(cron, 'schedule');
    expect(scheduleSpy).toHaveBeenCalledWith('* * * * *', expect.any(Function));
  });
});
