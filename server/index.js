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

const users = [
    {
        id: 1,
        name: 'aa',
        nickname: 'bb',
        email: 'c@gmail.com'
    }
]
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/products', function (req, res) {
    res.send(products);
})

app.get('/products/:id', function (req, res) {
    const id = parseInt(req.params.id);
    if (products.find((obj) => obj.id === id)) {
        res.send(products.find((obj) => obj.id === id));
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
    res.send({ id });

})

app.put('/products/:id', function (req, res) {
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

app.delete('/products/:id', function (req, res) {
    const id = parseInt(req.params.id);
    if (products.find(obj => obj.id === id)) {
        const idx = products.findIndex(obj => obj.id === id);
        products.splice(idx, 1);
        res.send({ id });
    } else {
        res.send({ message: `id ${id} is not existed` });
    }
})

app.post('/users', function (req, res) {
    const { nickname } = req.body;
    if (users.find(obj => obj.nickname === nickname)) {
        const idx = users.find(obj => obj.nickname === nickname);
        res.send(users[idx]);
    } else {
        res.status(401).send({ message: 'Password dont match' });
    }
})
//logins

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});