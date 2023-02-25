const  { MongoClient }=require('mongodb');
const url="mongodb://127.0.0.1/";
const database="college";
const client=new MongoClient(url);
const dbConnect=async ()=>{
	let m=await client.connect();
	db=m.db(database);
	return db.collection("products");
}
module.exports=dbConnect;

//MongoClient is used to make a connection between server and machine
//const is used that the value will not be changed in the entrire program
