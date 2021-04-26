const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');

const Airplane = require('./models/airplane');
const Country = require('./models/country');
const Destination = require('./models/destination');
const Flight = require('./models/flight');
const Package = require('./models/package');
const Seat = require('./models/seat');
const Ticket = require('./models/ticket');
const User = require('./models/user');

const adminRoutes = require('./routes/adminRoutes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json());
app.use(adminRoutes);
app.use(bodyParser.urlencoded({ extended: false }));

Destination.belongsTo(Country, {constraints: true, onDelete: 'CASCADE'});
Flight.belongsTo(Airplane, {constraints: true});
Flight.belongsTo(Destination, {constraints: true});

Seat.belongsTo(Flight, {constraints: true, onDelete: 'CASCADE'});
Ticket.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
Ticket.belongsTo(Seat, {constraints: true, onDelete: 'CASCADE'});
Ticket.belongsTo(Package, {constraints: true, onDelete: 'CASCADE'});

sequelize
  // .sync({force: true})
  .sync()
  .then(result => {
    console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });


