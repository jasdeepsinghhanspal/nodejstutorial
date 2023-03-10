const express=require('express');
const path=require('path');
const app=express();
const publicpath=path.join(__dirname,'nodef');
app.get('*',(req,resp)=>{
	resp.sendFile(`${publicpath}/error404.html`);
});
app.listen(1999);