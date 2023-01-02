const express = require('express');

const router = express.Router();

router.get('/', (req,res) => {
    console.log('Olá');
    res.send();
})

router.post('/', (req,res) => {
    console.log(req.body);
    res.status(200).send(req.body);
})

module.exports = router