const User = require('../models/schedule');

exports.scheduleDbcontroller = {
    getSchedule(req, res) {
        const id = req.params.id
        User.find({ id: id }).
            then(docs => { res.json(docs) })
            .catch(err => console.log('Erorr getting the data from db: ${err}'));
    },
    getSchedule(req, res) {
        let filter= { };
        if('date' in req.query)
            filter.date=req.query.date;
        if('time' in req.query)
            filter.time= req.query.time;
        User.find(filter)
            .then(docs => { res.json(docs) })
            .catch(err => console.log('Error getting the data from db: ${err}'));

    },

    addSchedule(req, res) {
        const newSchedule = new Schedule(req.body);
        const result = newSchedule.save()
            .then(result => {
                if (result) {
                    res.json(result)
        
                }
                else {
                    res.status(404).send("Error saving a user");
                }
            })
            .catch(err => console.log('Error saving the data from db: ${err}'))
        


    },
