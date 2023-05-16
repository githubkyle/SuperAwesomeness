// const connection = require("./config/database");

// function getAllNotes() {
//   connection.query(`SELECT * FROM Note`);
// }

// function getOneNote(id) {
//   connection.query(`SELECT Note FROM note WHERE id =${id}`);
// }

// function createNewNote(text) {
//   connection.query(`INSERT INTO note(note_text)
//     VALUES (${text})`);
//   if (err) throw err;
//   console.log("Successfully created note");
// }

// function updateNote(text) {
//   connection.query(`UPDATE note
//     SET note_text=${text}
//     WHERE id=?`);
//   if (err) throw err;
//   else console.log("Successfully updated note");
// }

// function nukeNote(id) {
//   connection.query(`DELETE FROM note WHERE id=${id}`);
//   if (err) throw err;
//   console.log("Successfully nuked note");
// }

// module.exports = {
//   getAllNotes,
//   getOneNote,
//   createNewNote,
//   updateNote,
//   nukeNote
// };
