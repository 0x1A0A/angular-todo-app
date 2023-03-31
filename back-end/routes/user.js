'use struct';

const model = require('../models/user');

module.exports = {
    create : async function(req,res) {
        const user = new model.User( req.body );
        res.set("Content-Type","application/json");
        
        if (user.validateSync()) {
            res.send({
                Error: {
                    name: "InvalidPayload",
                }
            });
            return;
        }
        
        try {
            await user.save();
        } catch (err) {
            res.send({
                Error: {
                    name: err.name,
                    code: err.code,
                }
            });
            return;
        }

        res.status(200);
        res.send(user.toJSON());
    },
};
