var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://db:27017/test');

var Cat = mongoose.model('Cat', { name: String });

var app = express();

app.get('/',function(req,res){
    "use strict";

    var kitty = new Cat({ name: 'Zildjian' });
    kitty.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('meow');
        }
    });
    res.send('<h2>骚操作又出现了...</h2>');
});

app.listen(3000,function () {
    console.log('server start at:3000');
});