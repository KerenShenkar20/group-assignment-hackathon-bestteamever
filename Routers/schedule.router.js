const { Router } = require('express');
const { scheduleDbcontroller } = require('../Controllers/schedule.ctrl');

const scheduleRouter= new Router;

//scheduleRouter.get('/', scheduleDbcontroller.getSchedules);
scheduleRouter.get('/:id', scheduleDbcontroller.getSchedule);
//scheduleRouter.post('/', scheduleDbcontroller.addSchedule);
scheduleRouter.put('/:id', scheduleDbcontroller.updateSchedule);
scheduleRouter.delete('/:id', scheduleDbcontroller.deleteSchedule);

exports.ScheduleRouter = scheduleRouter;

