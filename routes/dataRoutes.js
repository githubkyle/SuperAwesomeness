const router = require("express").Router();

const { Note } = require("../app/models");

router.get("/", async (req, res) => {
  try {
    const notesData = await Note.findAll();
    const notes = notesData.map(note => note.get({ plain: true }));
    res.render("homepage", { notes });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
