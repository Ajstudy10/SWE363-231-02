const express = require('express');
const router = express.Router();


router.use((req, res, next) => {
    // Process the form data (for now, just log it to the console)
    const { firstName, lastName } = req.body;

    console.log('Form data', { firstName, lastName });

    // Send a confirmation response to the user
    res.send('submitted');

});

module.exports = router;