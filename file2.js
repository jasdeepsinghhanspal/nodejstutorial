//const express=require('express');
//const app=express();
const dbConnect=require('./file1');
const insert= async () =>{
	const db=await dbConnect();
	const r= await db.insert(
	{name:'roney',age:23}
	);
	console.log("Inserted");
}
insert();
//app.listen(1989);