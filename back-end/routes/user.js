'use struct';

const model = require('../models/user');

module.exports = {
    create : async function(req,res) {
        console.log(req.body);
        const user = new model.User( req.body );
        
        if (user.validateSync()) {
            res.send("ERROR");
            return;
        }

        res.status(200);
        res.set("Content-Type","application/json");
        res.send(user.toJSON());
    },
};
