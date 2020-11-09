import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/dbConnection";

//Manufacturers
class Manufacturers extends Model {
  public m_id!: number;
  public m_name!: string;
  public m_country!: string;
}

Manufacturers.init(
  {
    m_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    m_name: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
    m_country: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    sequelize,
    timestamps: false,
  }
);

export default Manufacturers;
