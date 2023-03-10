const dbConnect=require('./file7');
const insert=async ()=>{
	const db=await dbConnect();
	const r=await db.insert({name:"5star",hobbies:"tennis"});
	console.log("Inserted");
}
insert();//caling the function