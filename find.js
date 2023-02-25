const dbConnect=require('./file7');
const findfun=async ()=>{
	let data=await dbConnect();
	let r=await data.find().toArray();
	console.log(r);
}
findfun();//calling the function
//find all record