const dbConnect=require('./file7');
const insert=async ()=>{
	const db=await dbConnect();
	const r=await db.insert([
		{name:"pearl",hobbies:"tennis"},
		{name:"sai harshitha",hobbies:"photography"},
		{name:"Bhanu",hobbies:"cricket"}
		]);
	console.log("Inserted");
}
insert();//caling the function