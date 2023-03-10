const {MongoClient}=require('mongodb');
const url='mongodb://127.0.0.1/';
const client=new MongoClient(url);
const database='calculator';
async function get()
{
    let r=await client.connect();
     let db=r.db(database);
    return db.collection('add');
    
    //let response=await collection.find({}).toArray();
    //console.log(response);

}
module.exports=get;