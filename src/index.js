const express = require('express');
const sass = require('sass');
const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'resources/public')));
app.use(express.urlencoded({ extended: true }));

db.connect();
app.use(express.json());

// app.use(morgan('combined'))
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
    }),
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources/views'));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
