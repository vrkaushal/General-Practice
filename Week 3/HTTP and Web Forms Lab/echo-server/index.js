const echoServer = require('echo-server-with-api');
 
// before your tests
echoServer.start(() => {
    console.log('serving echo @ ' + echoServer.location);
});