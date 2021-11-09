var express = require('express');
var app = express();
const PORT = 8080;

const products = [
    {
        name: 'aa',
        price: 30000,
        year: 2002,
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