import cron from 'node-cron';
cron.schedule('* * * * *', () =>
  console.log('Executando a tarefa a cada 1 minuto')
);
