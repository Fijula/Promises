## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs');

// Function to write content to a file
function writeFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`);
      return;
    }

    console.log('File write operation completed.');
  });
}

// Specify the file path and content to write
const filePath = 'path/to/your/file.txt';
const fileContent = 'Hello, World!';

// Call the writeFile function
writeFile(filePath, fileContent);
