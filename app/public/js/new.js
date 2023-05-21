const sequelize = require("../../config/database");
let Titler = document.querySelector("#new-note-title").value;
let Texter = document.querySelector("#new-note-tag").value;
let Tagger = document.querySelector("#new-note-tag").value;
let NewSaver = document.querySelector("#save-new-note");

let GifGrabber = document.querySelector("#giphy-gif").value;
let GifShower = document.querySelector("#gifResult");
let GifButton = document.querySelector("#gifSearcher");
const apiKey = "iRq0Es5YKM1oDw1Ak0K9sI66QHHn9gKK";

function fetchAGif() {
  const searchTerm = GifGrabber;
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
        GifShower.innerHTML = gifUrl;
      } else {
        console.log("No such GIF found.");
      }
    })
    .catch(error => {
      console.log("Error fetching that GIF:", error);
    });
}

fetchAGif();

async function Newer() {
  sequelize.query(`INSERT INTO note(note_title, note_text, note_tag, note_gif)
      VALUES ('${Titler}','${Texter}','${Tagger}','${gifUrl}')`);
  console.log("Added new note!");
}

NewSaver.addEventListener("submit", Newer());
GifButton.addEventListener("submit", fetchAGif());
