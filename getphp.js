const express=require('express');
const app=express();
const con=require("./phpconn.js");
app.use(express.json());
app.get("/",(req,resp)=>{
	con.query("select * from classes",(err,result)=>{
		if(err){
			resp.send("error")
		}
		else{
			resp.send(result)
		}
	});
})
app.get("/name",(req,resp)=>{
	con.query("select name from classes",(err,result)=>{
		if(err){
			resp.send("error")
		}
		else{
			resp.send(result)
		}
	});
})
app.post("/",(req,resp)=>{
	const data={name:"Bhanu",phone:787878787878};
	con.query('INSERT INTO classes set ?',data,(err,r,f)=>{
		if(err) err;
		resp.send(r);
	})
});
// app.post("/insert",(req,resp)=>{
// 	const data=req.body;
// 	con.query('INSERT INTO classes SET ?',data,(err,r,f)=>{
// 		if(err) throw err;
// 		resp.send(r);
// 	});
// })

app.put("/",(req,resp)=>{
	const data=[7878787878,"Bhanu"];
	con.query="Update classes SET phone=? where name=?",data,(err,r,f)=>{
		if(err) throw err;
		resp.send(r);
	}
});

app.listen(1999);