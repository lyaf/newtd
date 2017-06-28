var express = require('express');

var app = express();

app.get('/',function(req,res){
    "use strict";
    res.send('<h2>骚操作又出现了...</h2>');
});

app.listen(3000,function () {
    console.log('server start at 3000');
});