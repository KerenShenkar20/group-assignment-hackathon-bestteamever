const { Router } = require('express');
const {userDbcontroller}= require('../Controllers/user.ctrl');

const userRouter= new Router;

//userRouter.get('/', userDbcontroller.getUsers);
userRouter.get('/:id', userDbcontroller.getUser);

exports.UserRouter = userRouter;





