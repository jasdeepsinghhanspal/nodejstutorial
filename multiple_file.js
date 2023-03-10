const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'nodef');
for(i=1;i<=5;i++){
	fs.writeFileSync(dirPath+"/node"+i+".txt","hello_node_student");
}