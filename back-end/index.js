const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mongoose = require('./database');

const app = express();

app.use(cors());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));

require('./controller')(app);

app.listen(4200);