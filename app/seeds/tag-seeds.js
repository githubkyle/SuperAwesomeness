const { Tag } = require("../models");

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

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
