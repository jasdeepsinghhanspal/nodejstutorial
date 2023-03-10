const dbConnect=require('./mongoo');
const insert=async ()=>{
	console.log("insert function");
	const db=await dbConnect();
	const r=await db.insert(
		{name:'deepak',hobbies:'dancing'},
		{name:'antony',hobbies:'art'}
		)
	}
insert();