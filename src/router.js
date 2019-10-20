const fs = require('fs');
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.send('Hello World!'));

router.get('/api/v1/readme', (req, res, next) => {
    fs.readFile('./README.md', (err, data) => {
        if (err) {
            return next(err);
        }

        res.send(data.toString())
    });
});

module.exports = router;