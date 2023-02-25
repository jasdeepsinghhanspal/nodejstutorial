const { MongoClient }=require('mongodb');
const url="mongodb://127.0.0.1/";
const database='college';
const client=new MongoClient(url);
async function dbConnect(){
	let r=await client.connect();
	db=r.db(database);
	return db.collection('products');
}
module.exports=dbConnect;