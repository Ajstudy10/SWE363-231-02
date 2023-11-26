const express = require('express');
const app = express();
const path = require('path');
const port = 5500;

const indexRouter = require('C:\\Users\\Abdullah\\OneDrive\\Desktop\\html\\src\\BE\\routes\\Home.js');
const aboutRouter = require('C:\\Users\\Abdullah\\OneDrive\\Desktop\\html\\src\\BE\\routes\\About_me.js');

app.use('/', indexRouter);
app.use('/about', aboutRouter);

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join('/Abdullah/OneDrive/Desktop/html/src/My_website', '/Users')));
// Start the server
app.listen(port, () => {
    console.log(`Server is up`);
});