const { ObjectID } = require('bson');
const { Schema, model } = require('mongoose');

const gameReqSchema = new Schema({
    userId: { type: Number, required:true  },
    date: { type: Date, required:true },
    time: { type: Number, required:true },
}, {collection: 'gameReqs'});
const GameReq = model('GameReq', gameReqSchema);
module.exports = GameReq;