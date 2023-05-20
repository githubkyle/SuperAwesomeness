const { Sequelize } = require("sequelize");
const sequelize = require("../../config/database"); // Change the import statement

const Note = require("../models/Note");
const Tag = require("../models/Tag");

const tagData = [
  {
    id: 1,
    tag_name: "Comedy"
  },
  {
    id: 2,
    tag_name: "Strange"
  },
  {
    id: 3,
    tag_name: "Horror"
  },
  {
    id: 4,
    tag_name: "Food"
  },
  {
    id: 5,
    tag_name: "Other"
  }
];

const noteData = [
  {
    note_title: "Numbers",
    note_text: 12345678987654321
  },
  {
    note_title: "Second test",
    note_text: "Here's another test note"
  },
  {
    note_title: "Third test",
    note_text: "And the last of these three notes"
  }
];

async function seed() {
  try {
    await sequelize.sync();

    // Seed notes
    await Note.bulkCreate(noteData);

    // Seed tags
    await Tag.bulkCreate(tagData);

    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
  }
}

seed();

module.exports = (tagData, noteData);
