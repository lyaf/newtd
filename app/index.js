var express = request('express');

var app = express();

app.get('/',function(req,res){
    "use strict";
    res.send('<h1>骚操作又出现了...</h1>');
});