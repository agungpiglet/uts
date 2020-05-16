const express = require('express');
const bodyParser = require('body-Parser');

var morgan = require('morgan');
const app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));


var routes = require('./routes');
routes(app);

//daftar menu routes
app.use('/auth', require('./middleware'));

app.listen(3000, () => {
    console.log(`Server started on port`);
});