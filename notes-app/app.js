const validator = require("validator");

const getNotes = require("./notes");

const msg = getNotes();

console.log(msg);

// console.log(validator.isEmail("MohanKumarYum@Gmail.com"));
console.log(validator.isURL("http:/mead.io"));