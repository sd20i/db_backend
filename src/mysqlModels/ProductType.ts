import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/dbConnection";

class ProductType extends Model {
  public pt_id!: number;
  public pt_name!: string;
}

ProductType.init(
  {
    pt_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    pt_name: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    sequelize,
    timestamps: false,
  }
);

async function getProducttype(id: number) {
  const project = await ProductType.findOne({ where: { pt_id: id } });
  if (project === null) {
    return "not found";
  } else {
    return project;
  }
}

export { ProductType, getProducttype };
