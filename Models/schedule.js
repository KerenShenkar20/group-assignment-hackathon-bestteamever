const { Schema, model } = require('mongoos');

const scheduleSchema = new Schema({
    id: { type: Number},
    userId: { type: Number},
    date: { type: Date},
    time: { type: Number},
    game: { type: String},
}, {collection: 'orders'});