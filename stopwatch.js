import React from 'react';
import ReactDom from 'react-dom';
import {useState,useEffect} from 'react';
const Stopwatch =()=>{
	const [count,setCount]=useState(0);
	useEffect(()={
	setCount(()=>count+1);
	}[count]);
	return(
	<>
	<h1>Count:-{count}</h1>
	<button onClick={()=>setCount((c)=>c+1)}>click me</button>
	<p>Count:-{count}</p>
	</>
	);
}
module.exports=Stopwatch;