const mongoose =require('mongoose');
const main=async ()=>{
	await mongoose.connect("mongodb://127.0.0.1/college");
	const p=new mongoose.Schema({
		name:String,
		age:Number
	});
	const p2=mongoose.model("products",p);
	let d =new p2({
		name:"bhanu",
		age:23,
		hobbies:"poker player"
	})
	let r=await d.save();
	console.log(r);
}
main();