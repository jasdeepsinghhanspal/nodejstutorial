const dbConnect=require('./mongoo');
async function main(){
	let data=await dbConnect();
	data=await data.find().toArray();
	console.warn(data);
}
main();