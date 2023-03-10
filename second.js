/*
Types of middleware:
1.application level 
2.router level
3.error-handling
4.built-in
5.third party 
*/
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
//app.use(rfunc);
app.get('/host',rfunc,(req,resp)=>{
	resp.send('welcome to the host page')
});
app.get('/fox',(req,resp)=>{
	resp.send('welcome to fox page')
});
app.listen(1989);