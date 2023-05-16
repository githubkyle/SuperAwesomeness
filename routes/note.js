const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

// GET all notes
router.get("/", noteController.getAllNotes);

// GET a single note by ID
router.get("/:id", noteController.getNoteById);

// POST a new note
router.post("/", noteController.createNote);

// PUT (update) an existing note
router.put("/:id", noteController.updateNote);

// DELETE a note
router.delete("/:id", noteController.deleteNote);

module.exports = router;
