const express = require('express');
const bodyParser = require('body-Parser');
const app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Server started on port`);
});