const dbConnect=require('./file7');
const deleteData=async ()=>{
	let data=await dbConnect();
	let r=await data.deleteOne({name:"Company Inc"});
	console.log("deleted");
}
deleteData();//calling the function