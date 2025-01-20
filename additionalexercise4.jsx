import React from "react";

import {useState} from "react";
 function App(){
const [length,setLength]=useState(null);
const [breadth,setBreadth]=useState(null);
const [area,setArea]=useState(null);
const [perimeter,setPerimeter]=useState(null);
const [angle,setAngle]=useState(null);
const[sin,setSin]=useState(null);
const[cos,setCos]=useState(null);
const[tan,setTan]=useState(null);
     const [value,setValue]=useState(null);
     const [round,setRound]=useState(null);
     
     function Rounding(){     
         const res=parseFloat(value);
         const ans=Math.round(res);
         setRound(ans);
     }
    function calculateArea(){
        const result=length*breadth;
        setArea(result);
    }
    function calculatePerimeter(){
        const result=Number(length)+Number(breadth);
        const res=result*2;
        setPerimeter(res);
    }
     function calculateSine(){
         const angleRadian=(Number(angle)*Math.PI)/180;
         const sine=Math.sin(angleRadian);
         setSin(sine);
         
     }
     function calculateCos(){
         const angleRadian=(Number(angle)*Math.PI)/180;
         const cosine=Math.cos(angleRadian);
         setCos(cosine);
         
     }
     function CalculateTan(){
         const angleRadian=(Number(angle)*Math.PI)/180;
         const Tan=Math.tan(angleRadian);
         setTan(Tan);
     }
    return(
        <div>
            <label>Enter the length:</label>
        <input type="number" value={length} onChange={(e)=>{setLength(e.target.value)}}></input><br></br>
            <label>Enter the breadth:</label>
        <input type="number" value={breadth} onChange={(e)=>{setBreadth(e.target.value)}}></input><br></br>
        <button onClick={calculateArea}>Area</button><br></br>
        <button onClick={calculatePerimeter}>Perimeter</button><br></br>
            <label>Enter the angle:</label>
            <input type="angle" value={angle} onChange={(e)=>{setAngle(e.target.value)}}/><br></br>
            <button onClick={calculateSine}>Sin</button>
               <button onClick={calculateCos}>cos</button>
            <button onClick={CalculateTan}>Tan</button><br></br>
            <label>Enter the value to round: </label>
          <input type="number" value={value} onChange={(e)=>{setValue(e.target.value)}}/><br></br>
            
            <button onClick={Rounding}>Round</button>
            
        <h1>Area:{area}</h1>
        <h2>Perimeter:{perimeter}</h2>
            <h2>{sin}</h2>
            <h3>{cos}</h3>
            <h3>{tan}</h3>
            <h4>{round}</h4>
        </div>
    )
}
export default App;
