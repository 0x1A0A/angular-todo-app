'use strict';

const express = require('express')
const app = express();

const mongoose = require('mongoose');
const model = require('./models/models.js');

require('dotenv').config();

const uri = `mongodb://${process.env.DBIP}:${process.env.DBPORT}/temp`;

app.use(express.json());

app.listen(process.env.SERVERPORT, () => {
    console.log("listen to port ", process.env.SERVERPORT);
});

async function mongoconnect()
{
    await mongoose.connect(uri, {auth: {authSource : "admin"}, user: process.env.DBUSER, pass: process.env.DBSECRET});
    console.log("successfully connected to ", process.env.DBIP);
};

mongoconnect();