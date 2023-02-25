const http=require('http');
const data=(req,resp)=>{
	resp.write("<h1>hello my name is roney</h1>");
	resp.write("<h1>I have completed my studies from IIT delhi</h1>");
	resp.end();
}
http.createServer(data).listen(1999);