describe("route", function() {
  describe('api/lines', () => {
    it('POST api lines', (done) => {
      chai.request(server)
        .post('/api/lines/socaltur')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res).to.be.json;
          expect(res.body).to.include.keys(['items']);
          expect(res.body.items).to.have.lengthOf(4);
          done();
        });
    });
    it('POST api lines filter by route', (done) => {
      chai.request(server)
        .post('/api/lines/socaltur')
        .send({ filterRoute: 'IV-EV-NH-SL' })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res).to.be.json;
          expect(res.body).to.include.keys(['items']);
          expect(res.body.items).to.have.lengthOf(1);
          const line = res.body.items[0];
          expect(line).to.include.keys(['originalData','route','departureHour','obs']);
          expect(line.originalData).to.deep.include({"description": "05:10-IV-EV-NH-SL","group": "IV-NH-SL - SEGUNDA À SEXTA-FEIRA"});
          expect(line.route).to.equal('IV-EV-NH-SL');
          expect(line.departureHour).to.deep.include('05:10');
          done();
        });
    });
    it('POST api find a line by id', (done) => {
      chai.request(server)
        .post('/api/lines/socaltur/3')
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
