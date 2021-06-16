const express = require('express');

const modelImports = require('./util/modelImports');


const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const session = require('express-session');
const mySqlStore = require('connect-session-sequelize')(session.Store);
const cookies = require('cookie-parser');

const adminRoutes = require('./routes/adminRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cookies());
app.use(cors());
app.use(express.json());
// secret - hash kod koji se koristi za kriptovanje 
app.use(session({
  secret: 'secret',
  resave: false, 
  saveUninitialized: false,
  store: new mySqlStore({db: sequelize}),
  unset: 'destroy'
}));
app.use(adminRoutes);
app.use(authRoutes);
app.use(express.urlencoded({ extended: false }));
// DEPRECIATED - app.use(bodyParser.urlencoded({ extended: false }));


modelImports.Destination.belongsTo(modelImports.Country, {constraints: true, onDelete: 'CASCADE'});
modelImports.Flight.belongsTo(modelImports.Airplane, {constraints: true});
modelImports.Flight.belongsTo(modelImports.Destination, {constraints: true});
modelImports.Seat.belongsTo(modelImports.Flight, {constraints: true, onDelete: 'CASCADE'});
modelImports.Ticket.belongsTo(modelImports.User, {constraints: true, onDelete: 'CASCADE'});
modelImports.Ticket.belongsTo(modelImports.Seat, {constraints: true, onDelete: 'CASCADE'});
modelImports.Ticket.belongsTo(modelImports.Package, {constraints: true, onDelete: 'CASCADE'});

sequelize
  // .sync({force: true})
  .sync()
  .then(result => {
    console.log(result);
    app.listen(9000);
  })
  .catch(err => {
    console.log(err);
  });


