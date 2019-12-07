const mongoose = require('mongoose');
const coonString = "mongodb://localhost/motos"

mongoose.connect(connString, {userNewUrlParser:true, useUnifiedTopology:true});

const Schema = mongoose.Schema;
const Model = mongoose.model;

const MotosSchema = new Schema({
    _id: Number,
    name: String,
    desc: String,
    horses: String,
	color: String,
	autonomy: String
 });

 const MotosModel = new Model('MotosModel', MotosSchema);