const fs = require("fs");

const cDrivePath = 'C:/';
const dDrivePath = 'D:/';

// Function to list files in a directory
function listFiles(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    console.log(`Files in ${directoryPath}:`);
    files.map(file => {
      console.log(file);
    });
  });
}

listFiles(cDrivePath);
listFiles(dDrivePath);