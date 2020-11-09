import { Model, DataTypes } from "sequelize";
import Manufacturers from "./Manufacturers";
import { ProductType } from "./ProductType";
import { sequelize } from "../database/dbConnection";

class Products extends Model {
  public p_id!: number;
  public p_model_name!: string;
  public p_price!: number;
  public p_description!: string;
}

Products.init(
  {
    p_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    p_model_name: {
      type: new DataTypes.STRING(40),
      allowNull: false,
    },
    p_price: {
      type: new DataTypes.DOUBLE(),
      allowNull: false,
    },
    p_description: {
      type: new DataTypes.TEXT(),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    sequelize,
    timestamps: false,
  }
);

Products.hasOne(ProductType, {
  sourceKey: "p_id",
  foreignKey: "pt_id",
});

Products.hasOne(Manufacturers, {
  sourceKey: "p_id",
  foreignKey: "m_id",
});

const fetchProduct = async () => {
  const findProduct = await Products.findAll({
    include: [
      {
        model: ProductType,
        required: true,
      },
      { model: Manufacturers, required: true },
    ],
  });
  if (findProduct !== null) {
    return findProduct;
  } else {
    return "Nothing found";
  }
};

export { Products, fetchProduct };
