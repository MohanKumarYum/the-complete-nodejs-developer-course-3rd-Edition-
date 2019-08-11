const fs = require("fs");

const fileName = "notes.json";

const getNotes = function() {
  return "Your Notes...";
};

const addNote = function(title, body) {
  const notes = loadNotes(fileName);

  const duplicateNote = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNote.length === 0) {
    notes.push({
      title: title,
      body: body
    });
    console.log("New note added!");
  } else {
    console.log('"Note taken":');
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

module.exports = {
  getNotes: getNotes,
  addNote: addNote
};
