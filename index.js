var express=require('express');
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var app=express();


/*
Furkan Kaya
*/
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var movies=require('./movies.js');
var engine =require('./engine.js');
app.use('/engine',engine);
app.use('/movies',movies);

app.listen(3001);
