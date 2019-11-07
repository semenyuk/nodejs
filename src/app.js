const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const router = require('./router');
const auth = require('./auth/auth');
const swaggerDocument = require('../swagger.json');

const app = express();
const port = 8080;

app.use('/api/v1/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(bodyParser.json());
app.use(auth.initialize());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.use('/', router);

app.use((req, res) => {
    res.status(404).send('Route ' + req.url + ' Not found.');
});

app.use((err, req, res, next) => {
    console.error('\x1b[31m', err.stack);
    res.status(500).send(process.env.NODE_ENV === 'development' ? err.stack : err.message);
});

app.listen(port, () => console.log(`nodejs-course app listening on port ${port}!`));