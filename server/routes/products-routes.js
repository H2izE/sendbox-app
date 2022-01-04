const products = [
    {
        id: 1,
        name: 'di',
        price: 30000,
        year: 2002,
    },
    {
        id: 2,
        name: 'di2',
        price: 30200,
        year: 2003,
    },
    {
        id: 3,
        name: 'di3',
        price: 303300,
        year: 2004,
    },
]

const express = require('express');
const router = express.Router();

router.get('/products', function (req, res) {
    res.send(products);
})


router.get('/products/:id', function (req, res) {
    const id = parseInt(req.params.id);
    if (products.find((obj) => obj.id === id)) {
        res.send(products.find((obj) => obj.id === id));
    } else {
        res.send({ message: `id ${id} is not exisited` })
    }

});

router.post('/products', function (req, res) {
    const { name, price, year } = req.body;
    const id = products.length;
    const newProduct = {
        id, name, price, year
    };
    products.push(newProduct);
    res.send({ id });

})

router.put('/products/:id', function (req, res) {
    const id = parseInt(req.params.id);
    const { name, price, year } = req.body;
    if (products.find(obj => obj.id === id)) {
        const idx = products.findIndex(obj => obj.id === id);
        products[idx] = { id, name, price, year };
        res.send({ id });
    } else {
        res.send({ message: `id ${id} is not existed` });
    }
})

router.delete('/products/:id', function (req, res) {
    const id = parseInt(req.params.id);
    if (products.find(obj => obj.id === id)) {
        const idx = products.findIndex(obj => obj.id === id);
        products.splice(idx, 1);
        res.send({ id });
    } else {
        res.send({ message: `id ${id} is not existed` });
    }
})

module.exports = router;