var express = require('express')
var app = express()

app.get('/', function(req,res){
	res.sendFile(__dirname+'/'+"index.html")
})

app.get('/home', function(req,res){
	res.sendFile(__dirname+'/'+"index.html")
})
app.get('/register', function(req,res){
	res.sendFile(__dirname+'/'+"register.html")
})

app.get('/announcement', function(req,res){
	res.sendFile(__dirname+'/'+"announcement.html")
})

app.get('/contact', function(req,res){
	res.sendFile(__dirname+'/'+"contact.html")
})
app.listen(5000);
