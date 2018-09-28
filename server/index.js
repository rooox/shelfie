require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const ctrl = require('./controller');
const massive = require('massive');
const port = 4000;

// const port = process.env.PORT;

const app = express();

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
.then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('connected to the db')
})
 .catch((err) => {
     console.log(err)
 })

app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );