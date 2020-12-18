const { Schema, model } = require('mongoose');

const scheduleSchema = new Schema({
    id: { type: Number},
    userId: { type: Number},
    date: { type: Date},
    time: { type: Number},
    game: { type: String},
}, {collection: 'schedules'});
const Schedule = model('Schedule', scheduleSchema);
module.exports = Schedule;