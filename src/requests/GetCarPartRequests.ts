import { Products } from "../mysqlModels/Products";
import { ProductType } from "../mysqlModels/ProductType";
import { Manufacturers } from "../mysqlModels/Manufacturers";
// get a list of car bodies
const GetProductsByTypeId = async (product_type: number) => {
  return Products.findAll({
    include: [
      {
        model: ProductType,
        required: true,
      },
      {
        model: Manufacturers,
        required: true,
      },
    ],
    where: {
      product_type_fk: product_type,
    },
  });
};

export default GetProductsByTypeId;
