'use strict';

require('dotenv').config();

const express = require('express')
const app = express();
const mongoose = require('mongoose');
const router = require('./routers/routers');

const uri = `mongodb://${process.env.DBIP}:${process.env.DBPORT}/todo_app`;

app.use(express.json());

app.post("/user", router.User.create);

app.listen(process.env.SERVERPORT, () => {
    console.log("listen to port ", process.env.SERVERPORT);
});

async function mongoconnect()
{
    await mongoose.connect(uri, {auth: {authSource : "admin"}, user: process.env.DBUSER, pass: process.env.DBSECRET});
    console.log("successfully connected to ", process.env.DBIP);
};

mongoconnect();