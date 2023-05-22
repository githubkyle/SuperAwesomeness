const { Model, DataTypes } = require("sequelize");

const sequelize = require("../../config/database");

class Tag extends Model {}

Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      }
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

Tag.belongsTo(note, { foreignKey: "id" });

module.exports = Tag;
