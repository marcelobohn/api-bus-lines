let chai = require('chai');
let expect = require("chai").expect;

const routes = require('../../models/routes');

describe("model", function() {
  describe.only('routes', () => {
    it('validate enterprise', (done) => {
      const r = routes.get('socaltur').value();
      expect(r).to.include.keys(['items']);
      done();
    });
    it('validate enterprise undefined', (done) => {
      const r = routes.get('naoexiste').value();
      expect(r).to.be.undefined;
      done();
    });
    it('validate item in enterprise', (done) => {
      const r = routes.get('socaltur').get('items[0]').value();
      expect(r).to.include.keys(['resume','type','departure','arraival','obs']);
      done();
    });
  });
});
