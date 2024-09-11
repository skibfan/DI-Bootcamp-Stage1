import fs from "fs"

export const readFile = (fileName) => {
    const data = fs.readFileSync(fileName, "utf-8")
    console.log(data);
    
}

export const writeFile = (fileName, newData) => {
    const data = fs.writeFile(fileName, newData, (err) => {if (err) {
        console.log(err)
    } else {
        console.log("Success");
    }
    })
}