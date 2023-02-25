const express=require('express');
const app=express();
app.use(express.json())
app.post('/brick',(req,resp)=>{
	console.log(req.body);
	resp.send('hello guys enter the data');
})
app.listen(1989);