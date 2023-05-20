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
      type: DataTypes.STRING,
      allowNull: false
    },
    note_text: {
      type: DataTypes.STRING,
      allowNull: false
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
