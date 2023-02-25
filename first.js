const express=require('express');
const app=express();
const rfunc=(req,resp,next)=>{
	if(!req.query.age){
	resp.send('Enter age')
	}
	else if(req.query.age<18){
	resp.send('You are minor')
	}
	else{
	next();
	}
}
app.use(rfunc);
app.get('/host',(req,resp)=>{
	resp.send('welcome to the host page')
});
app.listen(1989);