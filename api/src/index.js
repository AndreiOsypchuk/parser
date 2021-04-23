const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());

const { establishDbConnection } = require('./dbconf/connection');
const { authRouter, apiRouter } = require('./controller/index');
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.get('/', (req, res) => res.send('hello'));
establishDbConnection(console.log);
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log('listening to', PORT));
