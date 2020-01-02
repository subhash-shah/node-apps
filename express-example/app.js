const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const router = express.Router();
app.use(bodyParser.urlencoded({ extended: false }));

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST">' +
        'Product Name: <input type="text" name="name" />' +
        '<button type="submit">Add</button>' +
        '</form>');
});

router.post('/product', (req, res, next) => {
    res.send(req.body.name + ' added.' +
        '<hr />' +
        '<a href="/">Home</a>');
});

router.get('/', (req, res, next) => {
    res.send('<a href="/add-product">Add Product</a>');
});

app.use(router);

app.listen(3000);