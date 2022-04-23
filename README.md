# Note-Taker-11

--- This challenge had us create and refactor a note taking app, which,
when input is put in and the save button clicked, should append the title
and text to the page. Had more fun with this one. I learned a lot that I
didn't know would work. Lo and behold, it did. ---

 - 1st things first
----------
* Ran 'npm init -y', 'npm install express'

* Added a gitignore

 - server.js 
----------
* Added PORT 

* Added html Routes AND API Routes

routes/ - 
---------
* Created 'notes.js' and another 'index.js' for backend logic

* In 'notes.js', created route for retrieving (getting) all notes...
* ...for DELETING a specific note...
* ... and for POSTING a new UX/UI note

public/ -
---------
* Refactored 'index.js' on the client side

* Allowed backend logic to work IN CONJUNCTION with the frontend...
* ...both appending data to the '/db/db.js' AND displaying it

package.json - 
----------
* Package.json includes express, path, and uuid

https://github.com/jimbolikesgithub/Note-Taker-11
![Video](https://drive.google.com/file/d/1jL8wncZXSnT9RQ36Gd77HCvPy4cOoZlL/view?usp=sharing)
![Note-Taker-Sreenshot](https://user-images.githubusercontent.com/97565085/164874164-96992ea1-0a15-4319-8a31-08ee74cfc1b8.png)

Acknowledgements
----------------
AskBCS
Anthony Chang</br>
Brian Samuels <br/>
Lina Choi <br/>
Seamona Stewart (Host)
