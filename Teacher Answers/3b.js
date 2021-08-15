var express = require('express')
var app = express()
var mongoClient = require('mongodb').MongoClient;

app.get('/', function(req,res){
	res.sendFile(__dirname + '/'+ "3b.html")
})

app.get('/register', function(req,res){
	var v = parseInt(req.query.vote)
	mongoClient.connect("mongodb://127.0.0.1/vote", function(err,db){
		if(err) throw err
		else
		var collection = db.collection('voting');
		collection.insert({"name": v},{$inc: { "vote": 1}}, function(err, data){
			if(err) throw err;
			res.send("Thanks for voting!<br>Your vote has been registered!")	
		})
		db.close();
	})

})
app.get('/summary', function(req,res){
	mongoClient.connect("mongodb://127.0.0.1/vote", function(err,db){
		if(err) throw err
		var collection = db.collection('voting');
		
		collection.aggregate([
         {"$group" : {_id:"$name", count:{$sum:1}}},{$sort:{"_id":1}}]).toArray(function(err, data){
			if(err) throw err
			console.log(data);

			var result="Party-1:" + data[0]["count"]+", Party-2: "+data[1]["count"]+", Party-3: "+data[2]["count"];
			res.send(result)
		})
		db.close();
	})

})
app.listen(5000, function(){
	console.log("Listening on 5000")
})