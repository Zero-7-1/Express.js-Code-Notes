/*
By Convention if we are creating any API or a MERN stack app and json related
we name the entry point as server.js

If we are buliding a node.js app that uses a template engine then th entry point 
name will be app.js 
*/

// For now here common js syntax is used but ES6+ is recommneded 

const express = require('express');  // Importing the 'express' module 
const path = require('path'); // // Importing the 'path' module

const app = express();


/*
Mostly we gonna deal with JSON data but if we want to serve html pages there
is better method for express than creating separate routes for all pages (Like
I did in certain point in Laravel, Express is better in terms of freedom for 
project organisation and structure that is we can go beyond rules and predefines). 

Using a static server (Express Static Middleware)
*/

// setup static server 
app.use(express.static(path.join(__dirname, 'public')));
// use extension name at last in url example- anything.html


app.get('/', (req, res) => {
    res.send('Hello From Express');
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});


app.listen(8000, () => console.log(`Sever is Running on port 8000`));
/*
Every time we need to restart the server, to automate that we make some changes to
scripts by including start and dev with watch (see package.json)
*/