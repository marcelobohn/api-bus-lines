let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = require("chai").expect;

let server = require('../bin/www');

chai.use(chaiHttp);

describe("route", function() {
  describe('api/lines', () => {
    it('POST api lines', (done) => {
      chai.request(server)
        .post('/api/lines')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res).to.be.json;
          expect(res.body).to.include.keys(['lines']);
          expect(res.body.lines).to.have.lengthOf(1);
          var firstLine = res.body.lines[0];
          expect(firstLine).to.include.keys(['originalData','route','departureHour','obs']);
          expect(firstLine.originalData).to.deep.include({"description": "07:10-IV-FDL-NH","group": "IV-NH-SL - SEGUNDA À SEXTA-FEIRA"});
          expect(firstLine.route).to.equal('IV-FDL-NH');
          expect(firstLine.departureHour).to.deep.include('07:10');

          done();
        });
    });          
  });
});