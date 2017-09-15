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
        .end(async (err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res).to.be.json;
          expect(res.body).to.include.keys(['lines']);
          expect(res.body.lines).to.have.lengthOf(1);
          var firstLine = await res.body.lines[0];
          expect(firstLine).to.include.keys(['originalData','type','departure','arraival','busStops','obs']);
          expect(firstLine.originalData).to.deep.include({"description": "07:10-IV-FDL-NH","group": "IV-NH-SL - SEGUNDA À SEXTA-FEIRA"});
          expect(firstLine.type).to.equal('intercity');
          expect(firstLine.departure).to.deep.include({"city": "Ivoti","hour": "07:10"});
          expect(firstLine.arraival).to.deep.include({"city": "Novo Hamburgo"});

          done();
        });
    });    
  });
});