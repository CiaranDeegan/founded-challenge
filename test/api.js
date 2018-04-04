const chai = require('chai'),
    expect = chai.expect,
    chaiHTTP = require('chai-http'),
    app = require('../server.js');

describe('API /GET', function() {
    before(function() {
        chai.use(chaiHTTP);
    });

    it('GET all cats', function() {
        return new Promise(function(resolve, reject) {
            chai.request(app)
                .get('/api/cats')
                .end((err, res) => {
                    if(err) reject(err);
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.urls).to.be.an('array');
                    expect(res.body.urls.length).to.equal(10);
                    expect(res.body.urls[0]).to.be.a('string');
                    
                    resolve();
                });
        });
    });

    it('GET all sharks', function() {
        return new Promise(function(resolve, reject) {
            chai.request(app)
                .get('/api/sharks')
                .end((err, res) => {
                    if(err) reject(err);
                    expect(res.status).to.equal(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body.urls).to.be.an('array');
                    expect(res.body.urls.length).to.equal(10);
                    expect(res.body.urls[0]).to.be.a('string');
                    
                    resolve();
                });
        });
    });
});