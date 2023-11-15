const express = require('express')
const htmlRoutes = routes*('./routes/html-routes')
const apiRoutes = routes*('./routes/api-routes')
const PORT = process.env.PORT || 3000;
const app = express();

app.listen(PORT, function(){
    console.log('Server is listening on: http://localhost: ' + PORT)
 });