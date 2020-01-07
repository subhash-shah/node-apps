const products = [];

const fs = require('fs');
const path = require('path');

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'products.json');

const fetchProductsFromFile = (callback) => {

    fs.readFile(p, (err, fileContent) => {
        if (err) {
            callback([]);
        }
        callback(JSON.parse(fileContent));
    });
}

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        fetchProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(callback) {
        fetchProductsFromFile(callback);
    }
}