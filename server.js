const express = require('express')
const htmlRoutes = routes*('./routes/html-routes')
const apiRoutes = routes*('./routes/api-routes')
const PORT = process.env.PORT || 3001;
const app = express();

app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT)
 });