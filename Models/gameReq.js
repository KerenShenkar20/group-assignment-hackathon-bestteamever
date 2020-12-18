const { ObjectID } = require('bson');
const { Schema, model } = require('mongoose');

const gameReqSchema = new Schema({
}, {collection: 'gameReqs'});
const GameReq = model('GameReq', gameReqSchema);
module.exports = GameReq;