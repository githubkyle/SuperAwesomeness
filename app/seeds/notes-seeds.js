const { Note } = require("../models");

const noteData = [
  {
    note_text: 12345678987654321
  },
  {
    note_text: "Here's another test note"
  },
  {
    note_text: "And the last of these three notes"
  }
];

const seedNotes = () => Note.bulkCreate(noteData);

module.exports = seedNotes;
