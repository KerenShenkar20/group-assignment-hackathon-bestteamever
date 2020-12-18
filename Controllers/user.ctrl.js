const User = require('../Models/user');

exports.userDbcontroller={
    getUser(req, res){
        const id= req.params.id
        User.find({id:id})
        .then(docs=>{res.json(docs)})
        .catch(err=>console.log(`Erorr getting the data from db: ${err}`));
    },

    getUsers(req, res){
        let filter={ };
        if('email' in req.query)
            filter.email=req.query.email;
        User.find(filter)
            .then(docs=>{res.json(docs)})
            .catch(err=>console.log(`Error getting the data from db: ${err}`));

    },
    

}