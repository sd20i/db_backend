import chai from "chai";
import { expect } from "chai";
import chaiHttp from "chai-http";

import server from "../src/app";

chai.use(chaiHttp);

describe("/GET /", () => {
  it("should get root endpoint", done => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        if (err) {
          console.log(err);
        }
        expect(res.body).to.be.string;
        done();
      });
  });
});
