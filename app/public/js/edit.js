const sequelize = require("../../config/database");
let TitleFinder = document.querySelector("#editedTitle").value;
let Updater = document.querySelector("#updating-field");
let FoundNote = await sequelize.query(
  `SELECT note FROM note WHERE note_title=${TitleFinder}`
);
Updater.innerHTML = FoundNote;

let Editing = document.querySelector("#editedContent").value;
let UpdatePush = document.querySelector("#update");
let Destroyer = document.querySelector("#delete");
let DestroyTitle = document.querySelector("#deleteTitle").value;
let NewTag = document.querySelector("#editedTag").value;

async function Pusher() {
  await sequelize.query(
    `UPDATE note SET note_text='${Editing}', note_tag='${NewTag} WHERE note_title='${TitleFinder}'`
  );
  console.log("Updated that note!");
}

async function Nuker() {
  await sequelize.query(`DELETE FROM note WHERE note_title='${DestroyTitle}'`);
  console.log("Nuked that note!");
}

UpdatePush.addEventListener("submit", Pusher());
Destroyer.addEventListener("submit", Nuker());
