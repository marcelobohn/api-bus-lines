let chai = require('chai');
let expect = require("chai").expect;

const lines = require('../../models/lines');

describe("model", function() {
  describe('lines', () => {
    it('validate enterprise', (done) => {
      const r = lines.get('socaltur').value();
      expect(r).to.include.keys(['items']);
      done();
    });

    it('validate item in enterprise', (done) => {
      const r = lines.get('socaltur').get('items[0]').value();
      expect(r).to.include.keys(['originalData','route','departureHour','obs']);
      done();
    });
  });
});
