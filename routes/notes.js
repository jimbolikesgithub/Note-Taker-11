// express.Router() function is used to create a NEW router obj... (making notes a router)
// ...Used when you wish to create a new router obj to handle requests
// note: This is better for readability, and also not getting confused if it's called 'app'
const notes = require('express').Router();
// uuid is how you generate the id for node
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, writeToFile, readFromFile } = require('../helpers/helper.js');
// _____________________________________________________________________________________________
// GET Route for retrieving all notes
notes.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then((data) => 
        res.json(JSON.parse(data))
    );
});
// _____________________________________________________________________________________________
// GET Route for a specific note
notes.get('/:note_id', (req, res) => {
    const noteID = req.params.note_id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const result = json.filter((note) => note.note_id === noteID);
        return result.length > 0 
        ? res.json(result) : res.json('No note with such an ID.');
    });
});

// DELETE Route for a specific note (bonus)
notes.delete('/:note_id', (req, res) => {
    const noteID = req.params.note_id;
    readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const deletion = json.filter((note) => note.note_id !== noteID);

        writeToFile('./db/db.json', deletion);

        res.json('Your note has been discarded.')
    })
})
// _____________________________________________________________________________________________
// POST Route for a new UX/UI note
notes.post('/', (req, res) => {
    // '.body' represents the DATA that is passed from the client-side
    console.log(req.body);
    // Creating a body of data which will be appended when...
    const { title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            note_id: uuidv4(),
        };
        // ...THIS is called
        readAndAppend(newNote, './db/db.json');
        res.json('Note was added!')
    } else {
        res.error('Could not add new note.')
    }
})
// _____________________________________________________________________________________________


// _____________________________________________________________________________________________
module.exports = notes;
// _____________________________________________________________________________________________
// WANT IT SO THAT, WHEN SAVE BUTTON CLICKED...
// ...ACCESS API ROUTE AND DISPLAY CONTENT TO PAGE
// Steps to do this
// 1. Make API Route on Server Side
// 2. 