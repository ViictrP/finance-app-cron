import cron from 'node-cron';
import { login } from './service/auth.service';
import { saveMonthClosure } from './service/month-closure.service';

function runCron() {
  cron.schedule('* * * * *', () => {
    saveMonthClosure().then(monthClosure =>
      console.log(`[Cron] task executed. Month Closure ${monthClosure.month}/${monthClosure.year} [id]: ${monthClosure.id} created`));
  });
}

console.log('[Cron] logging in');
login().then(() => {
  console.log('[Cron] successfully logged in, scheduling the task.');
  console.log('[Cron] task will be executed every (1) minutes.');
  runCron();
});
