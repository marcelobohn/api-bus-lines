let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = require("chai").expect;

let server = require('../bin/www');

chai.use(chaiHttp);

describe("route", function() {
  describe('/', () => {
    it('POST root path', (done) => {
      chai.request(server)
        .post('/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.include.keys(['title']);
          expect(res.body.title).to.equal('API bus lines');
          expect(res).to.be.json;
          done();
        });
    });
    it('GET root path', (done) => {
      chai.request(server)
        .get('/')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res).to.be.html;
          expect(res.body).to.be.an('object');
          done();
        });
    });      
  });
});