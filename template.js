const express=require('express');
const app=express();
app.set('views engine','ejs');
app.get('/profile',(req,resp)=>{
	const user={
		name:"melbin",
		email:"melbin"
	}
})