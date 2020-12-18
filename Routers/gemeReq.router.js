const { Router } = require('express');
const {gameReqontroller}= require('../Controllers/gameReq.ctrl');

const ReqRouter= new Router;

//ReqRouter.get('/', gameReqontroller.getReqs);
ReqRouter.get('/:id', gameReqontroller.getReq);
//ReqRouter.post('/', gameReqontroller.addReq);
ReqRouter.put('/:id', gameReqontroller.updateReq);
ReqRouter.delete('/:id', gameReqontroller.deleteReq);

exports.ReqRouter = ReqRouter;