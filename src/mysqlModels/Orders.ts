import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/dbConnection";
import { Customers } from "./Customer";
import { OrderItems } from "./OrderItems";

class Orders extends Model {
  public o_id!: number;
  public o_tracking_number!: string;
}

Orders.init(
  {
    o_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    o_tracking_number: {
      type: new DataTypes.STRING(60),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    sequelize,
    timestamps: false,
  }
);

Orders.hasOne(Customers, {
  sourceKey: "o_id",
  foreignKey: "c_id",
});

Orders.hasMany(OrderItems, {
  sourceKey: "o_id",
  foreignKey: "order_fk",
});

const fetchOrderById = async () => {
  const findOrder = await Orders.findOne({
    include: [
      {
        model: Customers,
        required: true,
      },
      {
        model: OrderItems,
        required: true,
      },
    ],
  });
  if (findOrder !== null) {
    return findOrder;
  } else {
    return "Nothing found";
  }
};

export { Orders, fetchOrderById };
