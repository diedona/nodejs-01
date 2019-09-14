const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

// inicia aplicação
const app = express();
app.use(express.json());
app.use(cors());

//inicia DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

// inicia models
requireDir('./src/models');

// rotas
app.use('/api', require('./src/routes'));

app.listen(3001);