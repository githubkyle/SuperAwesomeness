const { Sequelize } = require("sequelize");
const sequelize = require("../../config/database"); // Change the import statement

const Note = require("../models/note");
const Tag = require("../models/tag");
const User = require("../models/user");

const tagData = [
  {
    id: 1,
    tag_name: "Comedy"
  },
  {
    id: 2,
    tag_name: "Strange",
    note_id: 1
  },
  {
    id: 3,
    tag_name: "Horror",
    note_id: 3
  },
  {
    id: 4,
    tag_name: "Food"
  },
  {
    id: 5,
    tag_name: "Other",
    note_id: 2
  }
];

const noteData = [
  {
    note_title: "Numbers",
    note_text: 12345678987654321,
    note_tag: 2,
    note_gif: "testurl.com"
  },
  {
    note_title: "Second test",
    note_text: "Here's another test note",
    note_tag: 5,
    note_gif: "bigquiz.com"
  },
  {
    note_title: "Third test",
    note_text: "And the last of these three notes",
    note_tag: 3,
    note_gif: "anothertest.com"
  }
];
const userData = [
  {
    username: "Joey",
    email: "Joey@gmail.com",
    password: 123
  }
];
async function seed() {
  try {
    await sequelize.sync();

    // Seed notes
    await Note.bulkCreate(noteData);

    // Seed tags
    await Tag.bulkCreate(tagData);

    // Seed users
    await User.bulkCreate(userData);

    console.log("Database seeding completed!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await sequelize.close();
  }
}

seed();

module.exports = (tagData, noteData, userData);
