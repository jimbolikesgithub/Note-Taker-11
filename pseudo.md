# Note-Taker-11 Instructions

1. Run 'npm i'; ALWAYS FIRST
2. `GET /notes` should return the `notes.html` file. 
3. `GET *` should return the `index.html` file.
4. `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
5. `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).