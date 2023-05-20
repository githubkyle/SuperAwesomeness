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

async function Pusher() {
  let upping = await sequelize.query(
    `UPDATE note SET note_text=${Editing} WHERE note_title=${TitleFinder}`
  );
  console.log("Updated that note!");
}

function Nuker() {
  let nuking = sequelize.query(
    `DELETE note FROM note WHERE note_title=${DestroyTitle}`
  );
  console.log("Nuked that note!");
}

UpdatePush.addEventListener("submit", Pusher);
Destroyer.addEventListener("submit", Nuker);
