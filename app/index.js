var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://lyf:test@db:27017/test',function(err){
    "use strict";
    if(err){
        console.log('数据连接失败..');
    }else{
        console.log('数据库连接成功...');
    }
});

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
    res.send('<h2>骚操作之数据库验证...</h2>');
});

app.listen(3000,function () {
    console.log('server start at:3000');
});