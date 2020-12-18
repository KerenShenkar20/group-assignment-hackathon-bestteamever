const { Router } = require('express');
const {gameReqontroller}= require('../Controllers/gameReq.ctrl');

const userRouter= new Router;

userRouter.get('/', gameReqontroller.getReqs);
userRouter.get('/:id', gameReqontroller.getReq);
userRouter.post('/', gameReqontroller.addReq);
userRouter.put('/:id', gameReqontroller.updateReq);
userRouter.delete('/:id', gameReqontroller.deleteReq);

exports.UserRouter = userRouter;