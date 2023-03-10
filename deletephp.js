const express=require('express');
const app=express();
const con=require("./phpconn.js");
app.use(express.json());
app.put("/",(req,resp)=>{
	let data=[req.body.name,req.body.id];
	con.query("UPDATE classes SET name=? WHERE id=?",data,(err,r,f)=>{
		if(err) throw err;
		resp.send(r);
	});
})
app.delete("/",(req,resp)=>{
	let data=[req.body.name];
	con.query("DELETE FROM classes WHERE name=?",data,(err,r)=>{
		if (err) throw err;
		console.warn("deleted");
		resp.send(r);
	});
}
);
app.listen(2000);