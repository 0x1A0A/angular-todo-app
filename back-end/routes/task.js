'use struct';

const model = require('../models/task');

module.exports = {
    create : async function(req,res) {
        const task = new model.Task( req.body );
        res.set("Content-Type","application/json");
        
        if (task.validateSync()) {
            res.send({
                Error: {
                    name: "InvalidPayload",
                }
            });
            return;
        }
        
        try {
            await task.save();
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
        res.send(task.toJSON());
    },
};
