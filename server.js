const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');

// import express sessions
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore ({
        db: sequelize
    })
};

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));
// turn routes on
app.use(routes);

// turn connection to db and server on
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});

/*
//IMPORT HANDLEBARS
const exphbs = require('express-handlebars');


//IMPORT HANDLEBARS HELPERS
const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
*/