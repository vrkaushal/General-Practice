var should  = require('chai').should();
var request = require('request');

var echoServer = require('../index.js');

describe('echo server', () => {

    afterEach(done => echoServer.stop(done));

    it('can be started async', done => {
        echoServer.start(done);
    });

    it('can be started synchronously', () => {
        echoServer.startSync();
        echoServer.isListening.should.be.true;
    });

    it('can be stopped', done => {
        echoServer.startSync();
        echoServer.stop(done);
    });

    it('can be stopped synchronously', () => {
        echoServer.startSync();
        echoServer.stopSync();
        echoServer.isListening.should.be.false;
    });

    it('can accept http requests', done => {
        echoServer.start(() => {
            request(echoServer.location, done);
        });
    });

    it('echo: url', done => {
        echoServer.start(()=>{
            request(echoServer.location, (err, res, body) => {
                JSON.parse(body).url.should.equal('/');
                done();
            });
        });
    });

    it('echo: method', done => {
        echoServer.start(()=>{
            request(echoServer.location, (err, res, body) => {
                JSON.parse(body).method.should.equal('get');
                done();
            });
        });
    });

    it('echo: query-string', done => {
        echoServer.start(()=>{
            request(echoServer.location + '?foo=bar', (err, res, body) => {
                JSON.parse(body).query.foo.should.equal('bar');
                done();
            });
        });
    });

    it('echo: headers', done => {
        echoServer.start(()=>{
            request({url:echoServer.location, headers: {'foo':'bar'}}, (err, res, body) => {
                JSON.parse(body).headers.foo.should.equal('bar');
                done();
            });
        });
    });

    it('echo: cookies', done => {
        echoServer.start(()=>{
            request({url:echoServer.location, headers: {'cookies':'foo=bar=123'}}, (err, res, body) => {
                JSON.parse(body).cookies.foo.should.equal('bar=123');
                done();
            });
        });
    });

    it('echo: body (form params)', done => {
        echoServer.start(()=>{
            request.post(echoServer.location, {form: {foo:'bar'}}, (err, res, body) => {
                JSON.parse(body).body.foo.should.equal('bar');
                done();
            });
        });
    });

    it('echo: body (json)', done => {
        echoServer.start(()=>{
            request.post({url:echoServer.location, json:{foo:'bar'}}, (err, res, body) => {
                body.body.foo.should.equal('bar');
                done();
            });
        });
    });

    it('echo: client-ip', done => {
        echoServer.start(()=>{
            request.post(echoServer.location, (err, res, body) => {
                should.exist(JSON.parse(body).clientIP);
                done();
            });
        });
    });

    it('echo: on-demand status code', done => {
        echoServer.start(()=>{
            request.post(echoServer.location + '?status=404', (err, res, body) => {
               res.statusCode.should.equal(404);
               done();
            });
        });
    });

    it('echo: on-demand timeout', done => {
        echoServer.start(()=>{
            request.post({url:echoServer.location + '?timeout',timeout:1500}, (err, res, body) => {
               should.not.exist(res);
               should.not.exist(body);
               should.exist(err);
               done();
            });
        });
    });
});