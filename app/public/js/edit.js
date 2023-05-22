const sequelize = require("../../config/database");
let TitleFinder = document.querySelector("#editedTitle").value;
let Updater = document.querySelector("#updating-field");
let FoundNote = await sequelize.get(
  `SELECT note FROM note WHERE note_title=${TitleFinder}`
);
Updater.innerHTML = FoundNote;

let Editing = document.querySelector("#editedContent").value;
let UpdatePush = document.querySelector("#update");
let Destroyer = document.querySelector("#delete");
let DestroyTitle = document.querySelector("#deleteTitle").value;
let NewTag = document.querySelector("#editedTag").value;

let EditGiffer = document.querySelector("#editGif").value;
let EditGifShow = document.querySelector("#editGifShow");
let GifButton = document.querySelector("#editGifB");
const apiKey = "iRq0Es5YKM1oDw1Ak0K9sI66QHHn9gKK";

function fetchAGif() {
  const searchTerm = EditGiffer;
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=1`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (data.data.length > 0) {
        const gifUrl = data.data[0].images.original.url;
        const gifTitle = data.data[0].title;
        console.log(`Random GIF: ${gifTitle}`);
        console.log(`URL: ${gifUrl}`);
        // Display the GIF in your application as needed
        EditGifShow.innerHTML = gifUrl;
      } else {
        console.log("No such GIF found.");
      }
    })
    .catch(error => {
      console.log("Error fetching that GIF:", error);
    });
}

async function Pusher() {
  if (EditGiffer) {
    await sequelize.put(
      `UPDATE note SET note_text='${Editing}', note_tag='${NewTag}, note_gif='${gifUrl}' WHERE note_title='${TitleFinder}'`
    );
    console.log("Updated that note!");
  } else if (NewTag) {
    await sequelize.put(
      `UPDATE note SET note_text='${Editing}', note_tag='${NewTag} WHERE note_title='${TitleFinder}'`
    );
    console.log("Updated that note!");
  } else {
    await sequelize.put(
      `UPDATE note SET note_text='${Editing}', WHERE note_title='${TitleFinder}'`
    );
    console.log("Updated that note!");
  }
}
async function Nuker() {
  await sequelize.query(`DELETE FROM note WHERE note_title='${DestroyTitle}'`);
  console.log("Nuked that note!");
}

UpdatePush.addEventListener("submit", Pusher());
Destroyer.addEventListener("submit", Nuker());
GifButton.addEventListener("submit", fetchAGif());
