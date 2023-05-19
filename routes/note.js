const express = require("express");
const router = express.Router();
// const noteController = require("../controllers/noteController");
const { Note, Tag, User } = require("../app/models");
// const connection = require("./config/database");

// GET all notes
// router.get("/", async (req, res) => {
//   try {
//     var NPO = await Note.findAll({
//       attributes: ["id", "note_text"],
//       include: [
//         {
//           model: Tag,
//           attributes: ["tag_name"],
//           include: {
//             model: User,
//             attributes: ["username"]
//           }
//         }
//       ]
//     });
//     res.status(200).json(NPO);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/note/:id", async (req, res) => {
  try {
    var N = await Note.find({
      attributes: ["id"],
      where: {
        id: req
      }
    });
    res.status(200).json(N);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post("/note", async (req, res) => {
  Note.create({ note_text: req });
  if (err) throw err;
  res = console.log("Successfully created note");
});

router.put("/note/:id", (req, res) => {
  Note.update({ note_text: req });
  if (err) throw err;
  res = console.log("Successfully updated that note");
});

router.delete("/note/:id", (req, res) => {
  Note.destroy(req);
  if (err) throw err;
  res = console.log("Successfully nuked that note");
});

// GET a single note by ID
// router.get("/:id", noteController.getNoteById);

// // POST a new note
// router.post("/", noteController.createNote);

// // PUT (update) an existing note
// router.put("/:id", noteController.updateNote);

// // DELETE a note
// router.delete("/:id", noteController.deleteNote);

module.exports = router;
