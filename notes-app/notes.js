const fs = require("fs");
const chalk = require("chalk");

const fileName = "notes.json";

const getNotes = function() {
  return "Your Notes...";
};

const addNote = function(title, body) {
  const notes = loadNotes(fileName);

  const duplicateNote = notes.filter(function(note) {
    return note.title === title;
  });

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

function saveNotes(notes) {
  const noteJSON = JSON.stringify(notes);
  fs.writeFileSync(fileName, noteJSON);
}

// Delete note by title
const removeNote = function(title) {
  const notes = loadNotes(fileName);

  const notesToKeep = notes.filter(function(note) {
    return note.title !== title;
  });

  // console.log("notesToKeep:", notesToKeep);

  if (notes.length === notesToKeep.length)
    console.log(chalk.red.inverse("No Note Found"));
  else {
    console.log(chalk.green.inverse("Note Removed"));
    saveNotes(notesToKeep);
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote
};
