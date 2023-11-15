// --------------- import ---------------
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const ip = require('ip');
const ipAddress = ip.address();
const app = express();

// --------------- routes ---------------
const mainRoutes = require('./routes/main');
const errorController = require('./controllers/errorcontroller');
// -------------- views ---------------
app.set('view engine', 'ejs');
app.set('views', 'views');

// Body parser, static files
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// --------------- use routes ---------------
app.use(mainRoutes);
app.use(errorController.get404);

// ------------- port ---------------
const port = 7011;
app.listen(port, () => { 
    console.log(`Pathfinder Server listening on port ${port}`);
    console.log(`Network access via: ${ipAddress}:${port}`);
});