
// Import our modular routers for /tips and /feedback
const apiroutes = require('./apiroutes.js');
const htmlroutes = require('./htmlroutes.js');

const app = require("express").Router();

app.use('/api', apiroutes);
app.use('/', htmlroutes);


module.exports = app;