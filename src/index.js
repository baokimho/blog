const express = require('express');
const sass = require('sass');
const path = require('path');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')
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
app.set('view cache', false);
app.engine(
    'hbs',
    handlebars.engine({
        extname: 'hbs',
        cache: false,
        helpers: {
            sum: (a, b) => a + b,
        }
    }),
);

app.set('view engine', 'hbs');
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'resources', 'views'));

route(app);

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
