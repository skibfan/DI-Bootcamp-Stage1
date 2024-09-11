import fs from 'fs'


fs.copyFile("source.txt", "destination.txt", (err) => {
    if (err) return console.error(err);
    console.log("File copied");
  });