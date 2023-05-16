const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");
const { Note, Tag, User } = require("../app/models");
const connection = require("./config/database");

// GET all notes
router.get("/", (req, res) => {
  Note.findAll({
    attributes: ["id", "note_text"],
    include: [
      {
        model: Tag,
        attributes: ["tag_name"],
        include: {
          model: User,
          attributes: ["username"]
        }
      }
    ]
  });
});

router.get("/note/:id", (req, res) => {
  var N = Note.findByPk(req);
  res = N;
});

router.post("/note", (req, res) => {
  Note.create({ note_text: req });
  if (err) throw err;
  res = console.log("Successfully created note");
});

router.put("/note/:id", (req, res) => {
  Note.update({ note_text: req });
  if (err) throw err;
  res = console.log("Successfully updated that note");
});

router.destroy("/note/:id", (req, res) => {
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

// module.exports = router;
