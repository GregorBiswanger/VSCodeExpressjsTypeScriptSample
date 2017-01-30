"use strict";
var express = require("express");
var app = express();
// For POST-Support
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.post('/api/sayhello', upload.array(), function (request, response) {
    var name = request.body.name;
    if (!isNaN(name)) {
        response
            .status(400)
            .send('No string as name');
    }
    else {
        console.log('Hello ' + name);
    }
    response.send('POST request to homepage');
});
app.get('/', function (request, response) {
    response.send('Hello World');
});
// http://localhost:3000/api/sayhello/John
app.get('/api/sayhello/:name', function (request, response) {
    var name = request.params.name;
    if (!isNaN(name)) {
        response
            .status(400)
            .send('No string as name');
    }
    else {
        response.json({
            'message': name
        });
    }
});
// http:localhost:3000/api/sayhello?name=NodeJS
app.get('/api/sayhello/', function (request, response) {
    var name = request.query.name;
    var result = {
        message: name
    };
    if (!isNaN(name)) {
        response
            .status(400)
            .send('No string as name');
    }
    else {
        response.json(result);
    }
});
app.listen(3000);
//# sourceMappingURL=index.js.map