import React,{useState} from 'react'
function PureComponent(){
    const[counter0,setCounter0]=useState(1)
    const[counter1,setCounter1]=useState(1)
    
    return(
        <>  <h1>PureComponent</h1>
             <p>Click Counter</p>
            <p>{counter0}</p>
             <button onClick={()=>{setCounter0(counter0+1)}}>Increment</button>
             <button onClick={()=>{ if(counter0>0){setCounter0(counter0-1)}}}>Decrement</button>
             <button  onClick={()=>{setCounter0(0)}}>Reset</button>
             <h1>PureComponent</h1>
             <p>Hover Counter</p>
              <p>{counter1}</p>
              <button  onMouseOver={()=>{setCounter1(counter1+1)}}>Increment</button>
              <button  onMouseOver={()=>{if(counter1>0){setCounter1(counter1-1)}}}>Increment</button>
              <button  onMouseOver={()=>{setCounter1(0)}}>Reset</button>
        </>
    )
}
export default PureComponent;