import React, { useState } from 'react'
function HocComponent(WrappedComponent){
    function Highercomponent(){
        const[Value,setValue]=useState(0)
        // const[Value1,setValue2]=useState(0)
        // const[Value2,setValue2]=useState(0)
        function Handle(){
            setValue(Value+1)
           
        }
        function Handle1(){

             if(Value>0)
             {
                setValue(Value-1)
             }
            
          
        }
        function Handle2(){
           
            setValue(0)
        }

   
    return(
        <>
        <WrappedComponent value={Value} submit={Handle}  submit1={Handle1} submit2={Handle2} />
        </>
    )
}
return Highercomponent;

}
export default HocComponent;


