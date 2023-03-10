const mongoose=require('mongoose');
const p=new mongoose.Schema({
	name:String,
	prize:Number
});
module.exports=mongoose.model("products",p);