[![Build Status](https://travis-ci.org/ujc/echo-server-with-api.svg?branch=master)](https://travis-ci.org/ujc/echo-server-with-api)

# echo-server-with-api
a simple http echo server that can be started and stopped programmatically through an API to help testing http clients

* all http requests are answered with a `200` OK status code, and a JSON representation of the request data as the body of the request (echo)

* add `?status=xxx` to the request url to have the server respond with `xxx` as the http-status-code (you still get the echo as the response body)

* add `?timeout` to tell the server to time-out your request (useful for testing how your http client handles server timeouts)

* unlike node's built-in http server, this echo server also closes **all** active connections (Keep-Alive) when calling `.stop()`, so the server really stops - instead of just "stops accepting new connections while keeping active connections alive"

* meant as an easy-to-use test server for http clients, with **Mocha** in mind (start \ stop the server from within mocha)

* supports query-string, cookies, form \ JSON payload, and more

* also provides a synchronous start \ stop API



---
## Install
```
npm install echo-server
```


---
## Usage
```javascript
const echoServer = require('echo-server');

// before your tests
echoServer.start(() => {
    console.log('serving echo @ ' + echoServer.location);
});

//
// test your http client by sending requests
// to the echo-server and running assertions on
// the resulting "echo" to make sure your client
// sends the expected HTTP requests, and properly
// handles the various response codes, timeouts, and payloads
//


// after your tests you can gracefully close the server
echoServer.stop((err) => {
    if (err) {
        console.log('boo..'); // this should never happen
    }

    console.log('echo server stopped');
});
```


---
## Example of an Echo-Response
**POST** http://localhost:54606/foo/bar?my=query
**PAYLOAD** qwe=asd
```javascript
{
    clientIP: '127.0.0.1',
    url     : '/foo/bar',
    method  : 'post',
    protocol: 'http',

    query   : {
        my: 'query'
    },

    cookies : {},

    headers : {
        'content-type'  : 'application/x-www-form-urlencoded',
        'content-length': '7',
        host            : 'localhost:54606',
        connection      : 'close'
    },

    body: {
        qwe: 'asd' }
    }
```



---
## API
`start([callback])`

starts the echo server. if a `callback` is used it will run once the server is up and running (listening for incoming requests)


`startSync()`

starts the echo server **synchronously**.
this is just a convenience method if you need a sync API instead of using async patterns (callbacks \ promises \ other)

`stop([callback])`

stops the echo server. if a `callback` is used it will run once the server has fully stopped (all active connections were destroyed and new connections cannot be made)


`stopSync()`

like `stop()`, just **synchronously**

`location`

the url where the server can be reached. normally this is something like `http://localhost:1234`.
when the server is not running, this is an empty string

`isListening`

a boolean. `true` when the server is running. `false` otherwise


---
## Test
```
npm run test
```


---
## Related
* [iisaacs/server-destroy](https://github.com/isaacs/server-destroy) --> original work for really closing the http server


