let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = require("chai").expect;

let server = require('../../../bin/www');

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
          expect(res.body).to.include.keys(['items']);
          expect(res.body.items).to.have.lengthOf(1);
          done();
        });
    });
    it('POST api find a line', (done) => {
      chai.request(server)
        .post('/api/lines/1')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res).to.be.json;
          expect(res.body).to.include.keys(['originalData','route','departureHour','obs']);
          expect(res.body.originalData).to.deep.include({"description": "07:10-IV-FDL-NH","group": "IV-NH-SL - SEGUNDA À SEXTA-FEIRA"});
          expect(res.body.route).to.equal('IV-FDL-NH');
          expect(res.body.departureHour).to.deep.include('07:10');
          done();
        });
    });      
  });
});