const express = require('express');
const app = express();

const serviceProvidersRoutes = require('./api/routes/serviceProviders');

//routes which should handle request
app.use('/serviceProviders',serviceProvidersRoutes);


module.exports = app;
