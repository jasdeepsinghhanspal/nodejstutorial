const express=require("express");
const EventEmitter=require("events");
const app=express();
let count=0;
const event=new EventEmitter();
event.on("countAPI",()=>{
	count++;
	console.log("event called=",count);
})
app.get("/",(req,resp)=>{
	resp.send("vijey sir is my freind");
	event.emit("countAPI");
})
app.get("/search",(req,resp)=>{
	resp.send("sai harshitha is my friend");
	event.emit("countAPI");
})
app.get("/g11",(req,resp)=>{
	resp.send("this is g11 group");
	event.emit("countAPI");
})
app.listen(1999);
//REPL(READ-EVAL-PRINT-LOOP)