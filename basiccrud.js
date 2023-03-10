const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,"nodef");
const filepath=`${dirPath}/apple.txt`;
//fs.writeFileSync(filepath,"this_is_simple_text_file");//to write
// fs.readFile(filepath,'utf8',(err,item)=>{
// 	console.warn(item);
// })//read operation
// fs.appendFile(filepath,"melbin_is_my_freind",(err)=>{
// 	if(!err)
// 		console.warn("updated");
// });//update operation
// fs.rename(filepath,`${dirPath}/frits.txt`,(err)=>{
// 	if(!err)
// 		console.warn("renamed");
// })//rename the file
fs.unlinkSync(`${dirPath}/frits.txt`);//delete file