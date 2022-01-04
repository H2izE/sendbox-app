
const users = [
    {
        id: 1,
        name: 'a',
        nickname: 'b',
        email: 'c@gmail.com'
    },
    {
        id: 2,
        name: 'sujeongjang',
        nickname: 'jang1214',
        email: 'sujeongjang1214@gmail.com'
    },
]

const express = require('express');
const router = express.Router();

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
module.exports = router;