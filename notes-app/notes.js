const fs = require("fs");
const chalk = require("chalk");

const fileName = "notes.json";

const getNotes = () => {
  return "Your Notes...";
};

// Add note
const addNote = (title, body) => {
  const notes = loadNotes(fileName);

  const duplicateNote = notes.filter(note => note.title === title);

  // console.log('duplicateNote:', duplicateNote)
  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note taken"));
  }

  saveNotes(notes);
};

// Remove Note
const removeNote = title => {
  const notes = loadNotes(fileName);

  const notesToKeep = notes.filter(note => note.title !== title);

  // console.log("notesToKeep:", notesToKeep);

  if (notes.length === notesToKeep.length)
    console.log(chalk.red.inverse("No Note Found"));
  else {
    console.log(chalk.green.inverse("Note Removed"));
    saveNotes(notesToKeep);
  }
};

// List Notes

const listNotes = () => {
  const notes = loadNotes(fileName);
  console.log(chalk.blue.inverse('Your Notes'))
  notes.forEach(note => console.log(note.title))
}

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
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes
};
