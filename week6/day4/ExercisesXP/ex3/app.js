import { readFile, writeFile } from "./fileManager.js";


try {
    readFile("Hello_World.txt")

    writeFile("Bye_World.txt", "Bye, World!")

    
} catch(e) {
    console.log(e);
    
}