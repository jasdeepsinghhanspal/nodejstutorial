const dbConnect=require('./mongoo');
const update=async()=>{
	let data=await dbConnect();
	let r=await data.updateOne({
		name:'roney'},{$set:{hobbies:'ddos'}
	})
};
update();