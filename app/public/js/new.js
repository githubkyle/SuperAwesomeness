const sequelize = require("../../config/database");
let Titler = document.querySelector("#new-note-title").value;
let Texter = document.querySelector("#new-note-tag").value;
let Tagger = document.querySelector("#new-note-tag").value;
let NewSaver = document.querySelector("#save-new-note");

async function Newer() {
  sequelize.query(`INSERT INTO note(note_title, note_text, note_tag)
    VALUES ('${Titler}','${Texter}','${Tagger}')`);
  console.log("Added new note!");
}

NewSaver.addEventListener("submit", Newer());
