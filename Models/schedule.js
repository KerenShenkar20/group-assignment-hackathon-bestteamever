const { Schema, model } = require('mongoos');

const scheduleSchema = new Schema({
    id: { type: Number},
    userId: { type: Number},
    date: { type: Date},
    game: { type: String},
}, {collection: 'orders'});