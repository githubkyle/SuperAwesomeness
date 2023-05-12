const Note = require("./note");
const Tag = require("./tag");
Tag.hasMany(Note, {
  foreignKey: "id",
  onDelete: "CASCADE"
});

module.exports = {
  Tag,
  Note
};
