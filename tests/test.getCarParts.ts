import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import server from "../src/app";

chai.use(chaiHttp);

// get getting car bodies
describe("/GET /getBodies", () => {
  it("should return an array of car bodies", done => {
    chai
      .request(server)
      .get("/getBodies")
      .set("Accept", "application/json; charset=utf-8")
      .end((_err, res) => {
        expect(res.body.bodies).to.be.an("array");
        done();
      });
  });
});

// test getting car tires
describe("/GET /getTires", () => {
  it("should return an array of car tires", done => {
    chai
      .request(server)
      .get("/getTires")
      .set("Accept", "application/json; charset=utf-8")
      .end((_err, res) => {
        expect(res.body.tires).to.be.an("array");
        done();
      });
  });
});

// test getting window types
describe("/GET /getWindowTypes", () => {
  it("should return an array of window types", done => {
    chai
      .request(server)
      .get("/getWindowTypes")
      .set("Accept", "application/json; charset=utf-8")
      .end((_err, res) => {
        expect(res.body.windowTypes).to.be.an("array");
        done();
      });
  });
});
