const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption:true,
      type: "string"
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string"
    }
  },
  handler: function(argv) {
    notes.addNote(argv.title, argv.body);
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

yargs.parse();