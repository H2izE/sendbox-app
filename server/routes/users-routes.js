import express from 'express';
import { db } from '../db';

const router = express.Router();
const { users } = db.data;

router.post('/users', function (req, res) {
    const { nickname } = req.body;

    if (users.find(obj => obj.nickname === nickname)) {
        const idx = users.findIndex(obj => obj.nickname === nickname);
        res.send(users[idx]);
    } else {
        res.status(401).send({ message: 'no username' });
    }
})
//logins

router.post('/users/new', (req, res) => {
    const newUser = req.body;
    if (users.find((obj) => obj.nickname === newUser.nickname)) {
        res.status(401).send({ message: 'user already exists' });
    } else {
        const id = users.length;
        users.push({ ...newUser, id });
        res.send(users[id]);
    }
})
//signup
export default router;