const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");

// inicia aplicação
const app = express();

//inicia DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

// inicia models
requireDir('./src/models');

// rotas
app.use('/api', require('./src/routes'));

app.listen(3001);