const { Sequelize } = require('sequelize');
const sequelize = require('../../config/database'); // Change the import statement

const Note = require('../models/Note');
const Tag = require('../models/Tag');

const tagData = [
  // ...
];

const noteData = [
  // ...
];

async function seed() {
  try {
    await sequelize.sync();

    // Seed notes
    await Note.bulkCreate(noteData);

    // Seed tags
    await Tag.bulkCreate(tagData);

    console.log('Database seeding completed!');
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await sequelize.close();
  }
}

seed();
