var express = require('express');
var app=express();
var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://127.0.0.1/mydb",function(err,db)
{
 	if(!err){
		console.log("we are connected");
		app.use(express.static('public'));

		app.get('/', function(req,res){
			res.sendFile(__dirname+'/'+'2b.html')
		})

		app.get('/insert.html', function(req,res)
		{
			res.sendFile(__dirname+'/'+'2b1.html');
		});

		app.get('/insert',function(req,res)
		{
			var usn=req.query.usn;
			var namee=req.query.namee;
			var company=req.query.company;
			db.collection('student').insert({usn:usn,name:namee,company:company});
			res.end(JSON.stringify(req.query));
		});

		app.get('/display',function(req,res)
		{
			db.collection('student').find({company:'infosys'}).count(function(err,count){
			console.log(count);
			db.collection('student').find({company:'infosys'}).sort().toArray(
				function(err,data){
					console.log(data);
					res.end("count is : "+count+" "+JSON.stringify(data));
				});
			});
		});


		app.listen(5000);
	}
});