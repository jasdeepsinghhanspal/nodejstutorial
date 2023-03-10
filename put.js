const dbConnect=require('./file7');
const express=require('express');
const app=express();
app.put('/', async (req,resp)=>{
	let data=await dbConnect();
	let r=data.updateOne(
	{
		name:"Bhanu"
	},
	{$set:{hobbies:"golf"}}
	)
	resp.send({result:"hero"});
} );
app.listen(1989);