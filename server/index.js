const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

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
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/products', function (req, res) {
    res.send(products);
})

app.get('/products/:id', function (req, res) {
    console.log(req.params);
    const id = req.params.id;
    if (products[id]) {
        res.send(products[`${req.params.id}`]);
    } else {
        res.send({ message: `id ${id} is not exisited` })
    }

});

app.post('/products', function (req, res) {
    const { name, price, year } = req.body;
    const id = products.length;
    const newProduct = {
        id, name, price, year
    };
    products.push(newProduct);
    res.send({ message: `new product with id:${id} is created` });

})

app.put('/products/:id', function (req, res) {
    const id = req.params.id;
    const { name, price, year } = req.body;
    if (products[id]) {
        products[id] = { id, name, price, year };
        res.send({ message: `id ${id} is updated` });
    } else {
        res.send({ message: `id ${id} is not existed` });
    }
})

app.delete('/products/:id', function (req, res) {
    const id = req.params.id;
    if (products[id]) {
        products.splice(id, 1);
        res.send({ message: `id ${id} is deleted` });
    } else {
        res.send({ message: `id ${id} is not existed` });
    }
})

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});