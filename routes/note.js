const express = require("express");
const router = express.Router();

const { Note, Tag, User } = require("../app/models");

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

module.exports = router;
