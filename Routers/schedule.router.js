const { Router } = require('express');
const { scheduleDbcontroller } = require('../Controllers/schedule.ctrl');

const scheduleRouter= new Router;

scheduleRouter.get('/', scheduleDbcontroller.getSchedules);
scheduleRouter.get('/:id', scheduleDbcontroller.getSchedule);
userRouter.post('/', scheduleDbcontroller.addSchedule);
userRouter.put('/:id', scheduleDbcontroller.updateSchedule);
userRouter.delete('/:id', scheduleDbcontroller.deleteSchedule);

exports.ScheduleRouter = scheduleRouter;

