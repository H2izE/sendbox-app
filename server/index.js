var express = require('express');
var app = express();
const PORT = 8090;

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

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
});