import React from "react";
import HocComponent from "./HocComponent";

function HigherO(props){
    console.log(props);
    return(
        <>
         <h1>Hoc Component</h1>
         <p>{props.value}</p>
          <button onClick={props.submit}>Increment</button>
          <button onClick={props.submit1}>Decrement</button>
          <button onClick={props.submit2}>Reset</button>
        </>
    )
}
export default HocComponent(HigherO);