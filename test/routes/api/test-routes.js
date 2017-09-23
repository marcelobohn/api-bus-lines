describe("route from bus routes", function() {
  describe('api/routes', () => {   
    it('POST api all routes', (done) => {
      chai.request(server)
        .post('/api/routes/socaltur')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res).to.be.json;
          expect(res.body).to.include.keys(['items']);
          expect(res.body.items).to.have.lengthOf(4);          
          done();
        });
    });
    it('POST api lines filter departure city Ivoti', (done) => {
      chai.request(server)
        .post('/api/routes/socaltur')
        .send({ filterDepartureCity: 'Ivoti' })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res).to.be.json;
          expect(res.body).to.include.keys(['items']);
          expect(res.body.items).to.have.lengthOf(3);
          done();
        });
    });
    it('POST api lines filter departure city Novo Hamburgo', (done) => {
      chai.request(server)
        .post('/api/routes/socaltur')
        .send({ filterDepartureCity: 'Novo Hamburgo' })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res).to.be.json;
          expect(res.body).to.include.keys(['items']);
          expect(res.body.items).to.have.lengthOf(1);
          done();
        });
    });      
    it('POST api find a route', (done) => {
      chai.request(server)
        .post('/api/routes/socaltur/IV-FDL-NH')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res).to.be.json;
          expect(res.body).to.include.keys(['resume','type','departure','arraival','obs']);
          expect(res.body.resume).to.equal('IV-FDL-NH');
          expect(res.body.type).to.equal('intercity');
          expect(res.body.departure).to.deep.include({"city": "Ivoti"});
          expect(res.body.arraival).to.deep.include({"city": "Novo Hamburgo"});
          expect(res.body.obs).to.equal('Via federal');
          done();
        });
    });        
    it('POST api route undefined', (done) => {
      chai.request(server)
        .post('/api/routes/socaltur/ERROR_ROUTE')
        .end((err, res) => {
          expect(res.status).to.equal(404);
          expect(res.body).to.be.an('object');
          expect(res).to.be.json;
          expect(res.body).to.include.keys(['error']);
          expect(res.body.error).to.equal('Not found route');
          done();
        });
    });          
  });
});