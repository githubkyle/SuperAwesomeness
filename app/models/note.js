const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../config/database");

class Note extends Model {}

Note.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    note_title: {
      type: DataTypes.STRING
    },
    note_text: {
      type: DataTypes.STRING
    },
    note_tag: {
      type: DataTypes.INTEGER
    },
    note_gif: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "note"
  }
);

module.exports = Note;
