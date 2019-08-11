const chalk = require("chalk");
const yargs = require("yargs");
const getNotes = require("./notes");

yargs.version("1.2.0");

yargs.command({
  command: "add",
  describe: "Add a note",
  handler: function() {
    console.log("Adding a note!");
  }
});

yargs.command({
  command: "remove",
  describe: "Removing a note",
  handler: function() {
    console.log("Removing a note!");
  }
});

yargs.command({
  command: "list",
  describe: "List a note",
  handler: function() {
    console.log("Listing out all notes!");
  }
});

yargs.command({
  command: "read",
  describe: "Reading a note",
  handler: function() {
    console.log("Reading a note!");
  }
});

console.log(yargs.argv);