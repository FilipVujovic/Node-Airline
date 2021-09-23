const express = require('express');

const modelImports = require('./util/modelImports');


const cors = require('cors');
const sequelize = require('./util/database');
const session = require('express-session');
const mySqlStore = require('connect-session-sequelize')(session.Store);
const authRoutes = require('./routes/authRoutes');
const airplaneRoutes = require('./routes/airplaneRoutes');
const countryRoutes = require('./routes/countryRoutes');
const destinationRoutes = require('./routes/destinationRoutes');
const flightRoutes = require('./routes/flightRoutes');
const packageRoutes = require('./routes/packageRoutes');
const seatRoutes = require('./routes/seatRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const app = express();


app.use(cors());
app.use(express.json());

app.use(authRoutes);
app.use(airplaneRoutes);
app.use(countryRoutes);
app.use(destinationRoutes);
app.use(flightRoutes);
app.use(packageRoutes);
app.use(seatRoutes);
app.use(ticketRoutes);
app.use(express.urlencoded({ extended: false }));

modelImports.Destination.belongsTo(modelImports.Country, {constraints: true, onDelete: 'CASCADE'});
modelImports.Flight.belongsTo(modelImports.Airplane, {constraints: true});
modelImports.Flight.belongsTo(modelImports.Destination, {constraints: true});
modelImports.Seat.belongsTo(modelImports.Flight, {constraints: true, onDelete: 'CASCADE'});
modelImports.Ticket.belongsTo(modelImports.User, {constraints: true, onDelete: 'CASCADE'});
modelImports.Ticket.belongsTo(modelImports.Seat, {constraints: true, onDelete: 'CASCADE'});
modelImports.Ticket.belongsTo(modelImports.Package, {constraints: true, onDelete: 'CASCADE'});
modelImports.Ticket.belongsTo(modelImports.Flight, {constraints: true, onDelete: 'CASCADE'});

sequelize
  // .sync({force: true})
  .sync()
  .then(result => {
    app.listen(9000);
  })
  .catch(err => {
    console.log(err);
  });