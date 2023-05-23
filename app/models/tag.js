const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../config/database");

// const note = require("../note.js");
class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    tag_name: {
      type: DataTypes.STRING
    },
    note_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "note",
        key: "id"
      },
      allowNull: true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag"
  }
);

// Tag.belongsTo(note, { foreignKey: "id" });

module.exports = Tag;
