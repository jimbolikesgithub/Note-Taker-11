// New file to keep read, write, and append SEPARATED for readabiliyu
const fs = require('fs');
const util = require('util');

// Promise for fs.readFile
const readFromFile = util.promisify(fs.readFile);

/**
 *  Function to write data to the JSON file given a destination and some content
 *  @param {string} destination The file you want to write to.
 *  @param {object} content The content you want to write to the file.
 *  @returns {void} Nothing
 */

// Writing data to JSON file when given a destination and content
const writeToFile = (destination, content) =>
    // Using file system to write a file when given a destination, and converting values of content into strings
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => 
        // IF error, console log the error... ELSE, if no all runs as expected, console log the following string
        err ? console.error(err) : console.info(`\nThe data has been written here: ${destination}`)
    );

/**
 *  Function to read data from a given a file and append some content
 *  @param {object} content The content you want to append to the file.
 *  @param {string} file The path to the file you want to save to.
 *  @returns {void} Nothing
 */

// Reads file, then...
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        // ...IF there's an error...
        if (err) {
            // ...console log the error...
            console.error(err);
            // ...ELSE...
        } else {
            // ...the data (strings) are parsed in a JSON format, added to a new variable, and then...
            const parsedData = JSON.parse(data);
            // ...that variable's content is pushed...
            parsedData.push(content);
            // ...and to the file is appended the data
            writeToFile(file, parsedData);
        }
    });
};

// Exporting functions
module.exports = { readAndAppend, writeToFile, readFromFile };