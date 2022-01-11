import express from 'express';
import cors from 'cors';
import productRoute from './routes/products-routes.js';
import userRoute from './routes/users-routes.js';
import db from './db.js'

import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());


app.use(productRoute);
app.use(userRoute);

app.get('/', function (req, res) {
    res.send(db.data.products);
});


app.listen(process.env.PORT, () => {
    console.log(`Server is listening at ${procee.env.SERVER_URL}`);
});