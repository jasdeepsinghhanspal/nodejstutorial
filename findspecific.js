const dbConnect=require('./file7');
const findfun=async ()=>{
	let data=await dbConnect();
	let r=await data.find({name:"sai harshitha"}).toArray();
	console.log(r);
}
findfun();//calling the function