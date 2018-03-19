const express = require('express');
const app = express();
const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
const bodyParser = require('body-parser');
const path = require("path");
const mainRequests = require('./routes/main_route');
const searchRequests = require('./routes/search_route');
const db = mongoose.connection;
const mongoDBURL = "mongodb://USERNAME:PASSWORD@cluster0-shard-00-00-d0iqf.mongodb.net:27017,cluster0-shard-00-01-d0iqf.mongodb.net:27017,cluster0-shard-00-02-d0iqf.mongodb.net:27017/CarsModels?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin";

mongoose.connect(mongoDBURL);
db.on('error', console.error.bind(console, 'MongoDB connection error!\n'));


app.use('/', mainRequests);
app.use("/search-cars-model", searchRequests);

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());


app.listen(3000,function () {
    console.log("Server Started!");
});
