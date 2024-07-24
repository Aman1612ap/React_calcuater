
 import "./Griting.css";
 import { useState } from "react";

function Griting() {
  const[input,setinput]=useState('');
  const[output,setoutput]=useState();

  const handlechange=(e)=>{
    if(e=='c'){
      setinput('');
      setoutput('');
    }
    else if(e=="B"){
      setinput();
    }
    else if (e == '←') {
      setinput(input.slice(0, -1));
    }
    else{
      setinput(input+e);
    }
  }
  const handlechanges=()=>{
    let result=eval(input);
    setoutput(result);
  }
  return(
    <div className="Main">
          <div className="output_screen" >Input: {input}</div>
          <div className="output_screen">Output: {output}</div>
          <div className="button_text">
            <div className="all_button">
            <button className="text"onClick={()=>handlechange("+")}>+</button>
            <button className="text"onClick={()=>handlechange("-")}>-</button>
            <button className="text"onClick={()=>handlechange("*")}>*</button>
            <button className="text"onClick={()=>handlechange("/")}>/</button>
            <button className="text"onClick={()=>handlechange("c")}>C</button>
            <button className="text"onClick={()=>handlechange("←")}>←</button>
            <button className="text"onClick={()=>handlechange(1)}>1</button>
            <button className="text"onClick={()=>handlechange(2)}>2</button>
            <button className="text"onClick={()=>handlechange(3)}>3</button>
            <button className="text"onClick={()=>handlechange(4)}>4</button>
            <button className="text"onClick={()=>handlechange(5)}>5</button>
            <button className="text"onClick={()=>handlechange(6)}>6</button>
            <button className="text"onClick={()=>handlechange(7)}>7</button>
            <button className="text"onClick={()=>handlechange(8)}>8</button>
            <button className="text"onClick={()=>handlechange(9)}>9</button>
            <button className="text"onClick={()=>handlechange(0)}>0</button>
            <button onClick={handlechanges} className="text">=</button>

            </div>
          </div>
    </div>

  );
}

export default Griting;

//  function Griting() {

//   return (
//     <div>
//       hii
//     </div>
//   );
//  }
//  export default Griting;




