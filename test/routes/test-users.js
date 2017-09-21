describe("users", function() {
  describe('/', () => {
    it('GET users path', (done) => {
      chai.request(server)
        .get('/users')
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.include.keys(['title']);
          expect(res.body.title).to.equal('do not implemented');      
          expect(res).to.be.json;
          done();
        });
    });
  });
});