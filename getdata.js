const { MongoClient }=require('mongodb');
const url='mongodb://127.0.0.1/';
const client=new MongoClient(url);
async function getData(){
	let r=await client.connect();
	let db=r.db('student');
	let collection=db.collection('node');
	let r2=await collection.find({}).toArray();
	console.log(r2);
}
getData();
