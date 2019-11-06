const fs = require('fs');
const { Router } = require('express');
const book = require('./controllers/book');
const user = require('./controllers/user');

const router = Router();


router.get('/api/v1/books', book.getAll);
router.post('/api/v1/books', book.create);
router.get('/api/v1/books/:id', book.get);
router.post('/api/v1/books/:id/rate', book.rate);
router.delete('/api/v1/books/:id', book.delete);
router.get('/api/v1/books/author/:id', book.getByAuthor);
router.get('/api/v1/books/rating/:rating', book.getByRating);

router.post('/api/v1/users', user.create);

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