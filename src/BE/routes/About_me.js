const express = require('express');
const router = express.Router();
const formMiddleware = require('C:/Users/Abdullah/OneDrive/Desktop/html/src/BE/formMiddleware.js');

router.use(formMiddleware);

router.get('/', (req, res) => {
    res.send('About me');
});

router.post('/', (req, res) => {
    res.send('Form submission processed');
});
module.exports = router;