const mongodb=require('mongodb');
const dbConnect=require('./file7');
const express=require('express');
const app=express();
app.delete("/:id",async (req,resp)=>{
	const data=await dbConnect();
	const r=await data.deleteOne({_id:new mongodb.ObjectId(req.param.id)});
	console.log(r);
});
app.listen(1989);