// Importing Express Library
const express = require('express');
// Native node library
const path = require('path');
const dbData = require('./db/db.json');
const api = require('./routes/index.js')
// Calling Express method
const app = express();

// Unassigned port OR 3001
const PORT = process.env.port || 3001;

// uuid is how you generate the id for node

// _____________________________________________________________________________________________
// Express app handles data parsing (middleware)
// Allows for the implementation of custom/depedant softwares
// 'app.use(express.urlencoded({ extended: true}));' allows us to pass data through the url 
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// STILL TAKES ME TO NOTES WITHOUT BREAKING
app.use('/api', api);
// _____________________________________________________________________________________________
// Location (folder) of front-end files
app.use(express.static('public'));
// _____________________________________________________________________________________________
// GET API Route (on server side FIRST) to 'db.json' file (returns successfully)
// After 'http://localhost:3001/', type in '/api/notes' to see the db.json file return
// ALSO returns 'Test Title' to the left sidebar (with the trashcan (delete) emoji)
// This connects to the client-side 'index.js', line 28
app.get('/api/notes', (req, res) => res.json(dbData));
// _____________________________________________________________________________________________
// GET Route for 'index.html' page
// note: You won't see anything in the html address, since you've only specified '/'
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);
// _____________________________________________________________________________________________
// GET Route for 'notes.html' page
// Type /notes after 3001 like so to test...
// ...'http://localhost:3001/notes'
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);
// _____________________________________________________________________________________________
// Just a test
// app.get('/pikachu', (req, res) => {
//   res.json('I like pikachu.')
// })
// _____________________________________________________________________________________________
// Local host sends to 'index.html' page
// node server.js will take you to the index page. Clicking the button will now take you to...
// ...the notes page!
app.listen(PORT, () => 
    console.log(`Local host: http://localhost:${PORT}`)
);
// _____________________________________________________________________________________________
// note: UNTIL you KILL the server, your terminal will continue to be taken up by the server...
// ...TWO solutions:
// - Open new terminal (obviously)
// - KILL server (ctrl + c)

// note: You MUST kill any other running terminals (only ONE AT A TIME)

// note: GET is GETING information FROM the DATABASE
// note: POST is POSTING information FROM the DATABASE