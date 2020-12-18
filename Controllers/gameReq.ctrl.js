///Gamerequests CRUD controler


const GameReq = require('../models/gameReq');
const User = require('../Models/user');
const { userDbcontroller } = require('./user.ctrl');

exports.gameReqontroller = {
    getReq(req, res) {
        const id = req.params.id
        GameReq.find({ id: id }).
            then(docs => { res.json(docs) })
            .catch(err => console.log(`Erorr getting the data from db: ${err}`));
    },
    getReqs(req, res) {
        GameReq.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log('Error getting the data from db: ${err}'));

    },

    addReq(req, res) {
        const newReq = new GameReq(req.body);
        User.findOne({ id: newReq.userId })
            .then(user => {
                if(user)
                {
                    const result = newReq.save()
                    .then(result => {
                        if (result) {
                            res.json(result)

                        }
                        else {
                            res.status(404).send("Error saving a request");
                        }
                    })
                    .catch(err => console.log('Error saving the data from db: ${err}'))
                }
                else{
                    res.status(404).send("Error invalid user");
                }
                

            })




    },
    updateReq(req, res) {
        GameReq.updateOne({ id: req.params.id }, {
            userId: req.params.id,
            date: req.body.date,
            time: req.body.time,
        })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error update user from db : ${req.params.id}`));
    },

    deleteReq(req, res) {
        GameReq.deleteOne({ id: req.params.id })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error deleting user from db : ${req.params.id}`));
    }
}



