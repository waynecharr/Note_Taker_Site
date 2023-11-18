const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

// html and api routes
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, function(){
    console.log('Server is listening on: http://localhost: ' + PORT)
 });