# Note-Taker-11 Instructions

<!-- DONE -->
1. Run 'npm i'; ALWAYS FIRST
<!--  -->
2. `GET /notes` should return the `notes.html` file. 
    - Right now, it says 'Cannot GET /notes' when the 'Get Started' button is clicked
    - Create a 'routes' folder with a 'notes.js' file inside
    - So far only works on back-end with what is in the 'server.js' file...
<!--  -->
3. `GET *` should return the `index.html` file.
    - Create a file, 'index.js' in 'routes' folder
4. `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.
    - Write this in the 'notes.js' file in the 'routes' folder
5. `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
    - Write this in the 'notes.js' file in the 'routes' folder