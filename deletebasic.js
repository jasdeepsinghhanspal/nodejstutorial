const dbConnect=require('./mongoo');
const deletefun=async()=>{
	let data=await dbConnect();
	let r=await data.deleteOne({name:'deepak'});
}
deletefun();