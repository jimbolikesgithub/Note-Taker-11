// Importing Express Library
const express = require('express');
// Importing the 'notes.js' file from the 'routes' folder
const notesRouter = require('./notes');
// Calling Express method
const app = express();

// USING the notesRouter variable when in '/notes'
app.use('/notes', notesRouter);
// Exporting 'app'
module.exports = app;