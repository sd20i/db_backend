import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/dbConnection";
import { Products } from "./Products";

class Stock extends Model {
  public s_id!: number;
  public s_size!: string;
  public s_color_name!: string;
  public s_color_hex!: string;
}

Stock.init(
  {
    s_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    s_size: {
      type: new DataTypes.STRING(20),
      allowNull: true,
    },
    s_color_name: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
    s_color_hex: {
      type: new DataTypes.STRING(10),
      allowNull: true,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    timestamps: false,
  }
);

Stock.hasOne(Products, {
  sourceKey: "p_id",
  foreignKey: "pt_id",
});

export { Stock };
