/*
put,post,get,delete
*/
const express=require('express')
const app=express();
app.use(express.json())
app.get('/kitkat',(req,resp)=>{
	resp.send('hello guys this is the class of node.js');
})
app.post('/brick',(req,resp)=>{
	console.log(req.body);
	resp.send('hello kitkat how are you');
})
app.listen(1903);