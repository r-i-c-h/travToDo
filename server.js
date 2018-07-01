const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const winston = require('winston');

const logger = winston.createLogger({
  level:'verbose',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ]
});

const items = require('./routes/api/items');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));


const db = require('./config/keyz.js').mongoURI;
mongoose
  .connect(db)
  .then(()=> console.log('MongoDB Connected'))
  .catch( err => console.error(`DB Connection Error:${err}`));

app.use('/api/items', items);

app.listen(PORT,()=>console.log(`Server UP and listening on port:${PORT}`));