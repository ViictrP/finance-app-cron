import cron from 'node-cron';
import { login } from './service/auth.service';
import { saveMonthClosure } from './service/month-closure.service';

function runCron() {
  cron.schedule('0 2 30 * *', () => {
    saveMonthClosure().then(monthClosure =>
      console.log(`[Cron] task executed. Month Closure ${monthClosure.month}/${monthClosure.year} [id]: ${monthClosure.id} created`));
  });
}

console.log('[Cron] logging in');
login().then(() => {
  console.log('[Cron] successfully logged in, scheduling the task.');
  console.log('[Cron] task will be executed every 30th of each month at 2h00 AM.');
  runCron();
});
