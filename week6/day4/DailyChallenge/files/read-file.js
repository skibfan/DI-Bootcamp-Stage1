import fs from 'fs'



export const reading = async (fileName) => {
    const data = fs.readFile(fileName, "utf-8", (err, data) => {
        console.log(data);
    })
  }