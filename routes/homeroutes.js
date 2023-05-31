const express = require("express");
const router = express.Router();
// const { Note } = require("../app/models/note");

router.get("/", async (req, res) => {
  try {
    // const notes = await Note.findAll();
    res.render("main.hbs");
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

module.exports = router;
