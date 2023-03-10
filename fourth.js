const get=require('./file');
//get();
 const insert=async ()=>{
    const sb=await get();
    const result=await sb.insert({name:'kitkat',hobbies:'dancing'})
   console.log(result.acknoledged);
}
insert();

