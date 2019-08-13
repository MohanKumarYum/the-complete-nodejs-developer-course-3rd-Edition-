const fs = require("fs");
const chalk = require("chalk");

const fileName = "notes.json";

// Add note
const addNote = (title, body) => {
  const notes = loadNotes(fileName);

  debugger;

  const duplicateNote = notes.filter(note => note.title === title);

  // console.log('duplicateNote:', duplicateNote)
  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note taken"));
  }
};

// Remove Note
const removeNote = title => {
  const notes = loadNotes(fileName);

  const notesToKeep = notes.filter(note => note.title !== title);

  // console.log("notesToKeep:", notesToKeep);

  if (notes.length === notesToKeep.length)
    console.log(chalk.red.inverse("No Note Found"));
  else {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note Removed"));
  }
};

// List Notes

const listNotes = () => {
  const notes = loadNotes(fileName);
  console.log(chalk.blue.inverse("Your Notes"));
  notes.forEach(note => console.log(note.title));
};

// Read notes

const readNotes = title => {
  const notes = loadNotes(fileName);
  const note = notes.find(note => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else console.log(chalk.red.inverse("Note Not found!"));
};

// Load the file
function loadNotes(fileName) {
  try {
    const dataBuffer = fs.readFileSync(fileName);
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (error) {
    return [];
  }
}

// Save the dat to file
function saveNotes(notes) {
  const noteJSON = JSON.stringify(notes);
  fs.writeFileSync(fileName, noteJSON);
}

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes
};
