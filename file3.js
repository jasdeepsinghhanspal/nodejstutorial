const express=require('express');
const app=express();
app.use(express.json());
app.post('/',(req,resp)=>{
	console.log(req.body);
	resp.send('welcome to loading page');
})
app.listen(1989);