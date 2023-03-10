const dbConnect=require('./file7');
const update= async () =>{
	let data=await dbConnect();
	let r=await data.updateOne(
		{name:"Bhanu"},{$set:{hobbies:"football"}});
	console.log("updated");
}
update();//calling the function

