const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/motos", { useNewUrlParser: true, useUnifiedTopology: true});

const Schema = mongoose.Schema;

const MotosSchema = new Schema({
    name: String,
    desc: String,
    horses: String,
	color: String,
	autonomy: String
 });

 module.exports = MotosSchema;