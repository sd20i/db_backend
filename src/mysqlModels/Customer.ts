import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/dbConnection";

class Customers extends Model {
  public c_id!: number;
  public c_name!: string;
  public c_phone!: number;
  public c_email!: string;
  public c_floor!: number;
  public c_street!: string;
  public c_zip!: number;
  public c_city!: string;
  public c_country!: string;
  public c_number!: number;
}

Customers.init(
  {
    c_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    c_name: {
      type: new DataTypes.STRING(20),
      allowNull: false,
    },
    c_phone: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    c_email: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    c_floor: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    c_street: {
      type: new DataTypes.STRING(40),
      allowNull: false,
    },
    c_zip: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    c_city: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    c_country: {
      type: new DataTypes.STRING(100),
      allowNull: false,
    },
    c_number: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    sequelize,
    timestamps: false,
  }
);

export { Customers };
