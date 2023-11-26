const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Home page');
});

app.get('/about', (req, res) => {
    res.send('About me.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is up`);
});