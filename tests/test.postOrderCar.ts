import * as chai from "chai";
import chaiHttp = require("chai-http");
import server from "../src/app";
chai.use(chaiHttp);
const expect = chai.expect;

const customerDetails: Object = {
  id: 1,
  first_name: "Danni",
  last_name: "Olsen",
};
const orderItems: Object = {
  order_id: 1, // id of the order
  bodyType: 2, // car body type is sports car, 2 is a fk
  tireType: 3, // race wheel type, 3 is a fk
  windowType: 1, // normal window type, 1 is a fk
  colorType: 0, // default color, 0 is a fk
  engineType: 2, // electric engine, 2 is a fk
};

describe("/POST /postOrderCar", () => {
  it("should send an object of a customer and a list of carparts, Takes two objects, a customer and an array of car parts", (done) => {
    chai
      .request(server)
      .post("/postOrderCar")
      .set("Connection", "keep alive")
      .set("Content-Type", "application/json")
      .type("form")
      .send({
        customer: customerDetails,
        order: orderItems,
      })
      .end((_error: any, res: any) => {
        expect(res.body).to.have.property("customer");
        expect(res.body.customer).to.have.property("id");
        expect(res.body.customer).to.have.property("first_name");
        expect(res.body.customer.first_name).to.be.a("string");
        expect(res.body.customer).to.have.property("last_name");
        expect(res.body.customer.last_name).to.be.a("string");
        expect(res.status).to.eql(200);
        done();
      });
  });
});
