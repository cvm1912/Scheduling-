import schedule from 'node-schedule';

schedule.scheduleJob('*/30 * * * * *', () => {
  console.log('👋 Hello Scheduler! Time:', new Date().toLocaleTimeString());
});


const date = new Date(Date.now() + 60000);
schedule.scheduleJob(date, () => {
    console.log("This runs 1 minute from now", date.toLocaleTimeString());

});


console.log('Scheduler is running...');
console.log("hello");


