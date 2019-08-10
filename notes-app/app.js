var chalk = require("chalk");

const getNotes = require("./notes");

const msg = getNotes();

console.log(msg);

console.log(chalk.green("Success!"));

console.log(chalk.yellow.bgRed.bold("Success!"));

console.log(chalk.green.inverse("Success!"));

