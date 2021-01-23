const express = require('express');
const pro = require('./routes/products');  // Nas ruter (REST API)
const history = require('connect-history-api-fallback');
const path = require('path');
var cors = require('cors');

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET", "PUT", "POST", "DELETE", "OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Kazemo aplikaciji da za rute koje pocinju sa '/api' koristi nas ruter
app.use('/api', pro);

app.use(cors())

const staticMiddleware = express.static(path.join(__dirname, 'dist'));

app.use(staticMiddleware);
app.use(history());
app.use(staticMiddleware);

app.listen(8080);