// importing fs from "fs";
const fs = require("fs")

fs.writeFile("./text.txt", "Hello Anil", ()=>{})


console.log({__dirname,__filename,module,require});

function greet(name) {
    console.log(`Hello ${name}`);
}

// exporting greet function so that we can access this function into another file
export default greet;

// there is a filesystem which hold the functionality like __dirname , __filename, module , require , and exports
// module and require are used for importing the packages form the different module.
