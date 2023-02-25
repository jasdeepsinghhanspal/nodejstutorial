const express=require("express");
const app=express();
require("./config");
const p=require("./products");
app.use(express.json());
app.post("/add",(req,resp)=>{
	console.log(req.body);
	resp.send("booya");
});
app.get("/list",async (req,resp)=>{
	let d=await p.find();
	resp.send(d);
});
app.listen(1903);