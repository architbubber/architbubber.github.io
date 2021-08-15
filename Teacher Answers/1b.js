var express = require('express')
var app = express()
var mongoClient = require('mongodb').MongoClient

app.get('/', function(req,res){
	res.sendFile(__dirname + '/' + '1b.html');
})

app.get('/insert', function(req,res){
	name = req.query.name;
	usn = req.query.usn;
	scode = req.query.scode;
	marks = parseInt(req.query.marks);
	mongoClient.connect('mongodb://127.0.0.1:27017/mydb', function(err, db){
		if(err) throw err;
		var collection = db.collection('student')
		collection.insert({usn:usn, name:name, scode:scode, marks:marks}, function(err, docs){
			if(err)	throw err;
		});
		collection.find({marks: {$lt: 20}},function(err, docs){
			if(err) throw err;
			console.log(docs);
			res.send(docs);
		});
		db.close();
	});
});


app.listen(5000, function(){
	console.log("Listening on 5000")
});