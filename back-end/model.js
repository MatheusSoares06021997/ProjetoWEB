const MotosSchema = require('./database');
const mongoose = require('mongoose');

const Model = mongoose.model;

const MotoModel = new Model('MotoModel', MotosSchema);

module.exports = MotoModel;