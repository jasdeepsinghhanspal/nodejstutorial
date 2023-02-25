var { MongoClient } = require('mongodb');
var url = "mongodb://127.0.0.1/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("college");
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("products").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});