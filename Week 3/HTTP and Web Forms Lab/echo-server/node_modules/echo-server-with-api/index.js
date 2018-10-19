///////////////////////////////////////////////////////////
// echo-server                                           //
///////////////////////////////////////////////////////////
// a very simple echo server that allows you to start and
// stop it through API
// also provides a synchronous version for stop\start
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
// dependencies                                          //
///////////////////////////////////////////////////////////
var deasync           = require('deasync');
var http              = require('http');
var express           = require('express');
var bodyParser        = require('body-parser');
var cookie            = require('cookie');
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
// init                                                  //
///////////////////////////////////////////////////////////
var app               = express();
var server            = http.createServer();
var formParser        = bodyParser.urlencoded({extended:true});
var jsonParser        = bodyParser.json();
var activeConnections = {};
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
// requests are processed with express                   //
///////////////////////////////////////////////////////////
app.use(jsonParser);
app.use(formParser);
app.use(echo);
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
// the echo function                                     //
///////////////////////////////////////////////////////////
function echo(req, res){

    // allow a client to request that the server will not answer (i.e timeout)
    if ('timeout' in req.query){
        return;
    }

    // status is always 200, unless the client requests a specific status code
    res.status(req.query.status || 200)
       .json({
            clientIP: req.connection.remoteAddress.split(':').pop(),
            url: req.originalUrl,
            method: req.method.toLowerCase(),
            protocol: req.protocol,
            query: req.query,
            cookies: cookie.parse(req.headers.cookies || ''),
            headers: req.headers,
            body: req.body
        });
}
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
// nodejs doesn't close 'keep-alive' connections by
// default, so if really want our server to "stop", we need
// to manualy keep track of them so that we can
// destroy them later
///////////////////////////////////////////////////////////
function initNewConnection(connection){
    var key = connection.remoteAddress + ':' + connection.remotePort;
    activeConnections[key] = connection;

    connection.once('close', () => {
        delete connection[key];
    });
}

function killActiveConnections(){
    for (key in activeConnections){
        activeConnections[key].destroy();
    }
}
///////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////
// public API                                            //
///////////////////////////////////////////////////////////
module.exports = {
    start: function start (callback=()=>{}) {

        // already running ?
        if (this.isListening){
            return callback();
        }

        server.once('listening', () => {
            this.location    = 'http://localhost:' + server.address().port;
            this.isListening = true;
            callback();
        });

        server.on('connection', initNewConnection);
        server.on('request', app);
        server.listen();
    },

    stop: function stop(callback=()=>{}) {

        // already stopped ?
        if (!this.isListening) {
            return callback();
        }

        server.close(err => {
            this.location    = '';
            this.isListening = false;

            server.removeListener('request', app);
            server.removeListener('connection', initNewConnection);

            if (typeof callback === 'function'){
                callback(err);
            }
        });

        killActiveConnections();
    },

    startSync: function startSync() {
        this.start();
        deasync.loopWhile(() => !this.isListening);
    },

    stopSync: function stopSync() {
        this.stop();
        deasync.loopWhile(() => this.isListening);
    },

    on  : server.on.bind(server),
    once: server.once.bind(server),

    isListening: false,
    location   : ''
};
///////////////////////////////////////////////////////////