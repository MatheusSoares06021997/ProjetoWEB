const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/motos", { useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;
const Model = mongoose.model;

const MotosSchema = new Schema({
    name: String,
    desc: String,
    horses: String,
	color: String,
	autonomy: String
 });

 const MotoModel = new Model('MotoModel', MotosSchema);

 module.exports = MotoModel;