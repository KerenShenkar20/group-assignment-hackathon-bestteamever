const Schedule = require('../Models/schedule');

exports.scheduleDbcontroller = {
    getSchedule(req, res) {
        const id = req.params.id
        Schedule.find({ id: id }).
            then(docs => { res.json(docs) })
            .catch(err => console.log('Erorr getting the data from db: ${err}'));
    },
    getSchedules(req, res) {
        let filter= { };
        if('date' in req.query)
            filter.date=req.query.date;
        if('time' in req.query)
            filter.time= req.query.time;
        Schedule.find(filter)
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
                    res.status(404).send("Error saving a Schedule");
                }
            })
            .catch(err => console.log('Error saving the data from db: ${err}'))
        
    },

    updateSchedule(req, res) {
        Schedule.updateOne({ id: req.params.id }, {
            userId: req.body.userId,
            date: req.body.date,
            time: req.body.time,
            game: req.body.game
        })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error update schedule from db : ${req.params.id}`));
    },
    deleteSchedule(req, res) {
        Schedule.deleteOne({ id: req.params.id })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error deleting schedule from db : ${req.params.id}`));
    }
}
