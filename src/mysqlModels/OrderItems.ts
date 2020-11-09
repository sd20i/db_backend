import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/dbConnection";

class OrderItems extends Model {
  public oi_id!: number;
}

OrderItems.init(
  {
    oi_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    freezeTableName: true,
    sequelize,
    timestamps: false,
  }
);

export { OrderItems };
