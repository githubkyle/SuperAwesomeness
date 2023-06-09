const express = require("express");
const router = express.Router();
const { Note } = require("../app/models/note");

const app = express();

router.get("/", async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.render("main.hbs", { notes });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const noteId = req.params.id;

    const note = await Note.findOne({
      where: {
        id: noteId
      }
    });

    if (note) {
      res.status(200).json(note);
    } else {
      res.status(404).json({ message: "Note not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const note = await Note.create({
      note_title: req.body.note_title,
      note_text: req.body.note_text,
      note_tag: req.body.note_tag,
      note_gif: req.body.note_gif
    });
    res.status(201).json({ message: "Successfully created note", note });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const noteId = req.params.id;
    const updatedNote = await Note.update(
      {
        note_title: req.body.note_title,
        note_text: req.body.note_text,
        note_tag: req.body.note_tag,
        note_gif: req.body.note_gif
      },
      {
        where: {
          id: noteId
        }
      }
    );
    res.status(200).json({ message: "Updated that note" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const noteTarget = req.params.id;

    await Note.destroy({
      where: {
        id: noteTarget
      }
    });

    res.status(200).json({ message: "Note nuked" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.use(router);

module.exports = router;
