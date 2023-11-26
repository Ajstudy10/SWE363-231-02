const express = require('express');
const app = express();
const port = 3000;

const indexRouter = require('C:\\Users\\Abdullah\\OneDrive\\Desktop\\html\\src\\BE\\routes\\Home.js');
const aboutRouter = require('C:\\Users\\Abdullah\\OneDrive\\Desktop\\html\\src\\BE\\routes\\About_me.js');

app.use('/', indexRouter);
app.use('/about', aboutRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is up`);
});