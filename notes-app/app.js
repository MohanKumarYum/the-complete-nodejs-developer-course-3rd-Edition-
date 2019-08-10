const fs = require("fs");

fs.writeFileSync("notes.txt", "My Name is Mohan Kumar.");

fs.appendFileSync("notes.txt"," I Live in Sydney, Australia.");
