const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const reviewController = require('./controllers/reviewController')

const PORT = 2000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'view'))); // Serve static files from the 'public' directory

app.use('/' , reviewController);



app.listen(PORT , ()=>{
    console.log(`working on ${PORT}`);
})

