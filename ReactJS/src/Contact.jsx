import React from "react";

const Contact = ()=>{
    
    function Myinfo(){
        const number="8707XXX557";
        const Email="xyz@gmail.com";
        
        return(
            <div>
                <h1>{number}</h1>
                <h2>{Email}</h2>
            </div>
        )
    }


    return <>
    {Myinfo()}
    </>
    
}

export {Contact}