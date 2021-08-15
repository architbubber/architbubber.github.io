var express = require('express');
var app=express();
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://127.0.0.1/college",function(err,db)
{
	if(!err){
		console.log("we are connected");
		app.use(express.static('public'));
		app.get('/', function(req,res){
			res.sendFile(__dirname+'/'+'6b.html')
		});
		app.get('/insert.html', function(req,res)
		{
			res.sendFile(__dirname+'/'+'6b1.html');
		});

		app.get('/insert',function(req,res)
		{
			var id=req.query.id;
			var namee=req.query.namee;
			var title=req.query.title;
			var branch=req.query.branch;
			db.collection('department').insert({id:id,name:namee,title:title,branch:branch});
			res.end(JSON.stringify(req.query));
		});

		app.get('/display',function(req,res)
		{
			db.collection('department').find({branch:'cse',title:'professor'}).sort().toArray(
			function(err,data){
				console.log(data);
				res.end(JSON.stringify(data));
			});
		});

		app.listen(5000);
	}
});