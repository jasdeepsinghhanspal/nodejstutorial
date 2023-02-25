const express=require('express');
const app=express();
app.use(express.json());
app.get('/',(req,resp)=>{
	resp.send('hello kitkat welcome to the class');
})
app.get('/long',(req,resp)=>{
	resp.send('hello pearl how are you');
})
app.post('/college',(req,resp)=>{
	console.log(req.body);
	resp.send("Write the name");
})

app.listen(1903);