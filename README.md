# Node-Airline

This is a Node & Express backend for a mockup airline. 

The database is implemented in MySql and is being manipulated with the help of Sequelize. 
In the models folder there are 8 models that represent tables in the database. 

In addition to these 8 tables there is also a sessions table in the database that 
is added by express-session.

The controllers folder contains the controllers for each table with CRUD endpoints 
as well as the authController which is responsible for the signup, login & logout process.

Authentication is done via the is-auth middleware. The middleware simply checks if the 
session contains a loggedIn cookie. 

The is-admin middleware checks if the user trying to access the spesific resource is an admin.

For the sake of simplicity this is done by checking for the isAdmin cookie in the session which is added
to all users that signin with the @jakarta.com email.

All routes are contained in the routes folder.