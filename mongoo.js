const { MongoClient }=require('mongodb');
const url="mongodb://127.0.0.1/";
const database='student';
const client=new MongoClient(url);
async function dbConnect(){
	let r=await client.connect();
	db=r.db(database);
	return db.collection('node');
}
module.exports=dbConnect;