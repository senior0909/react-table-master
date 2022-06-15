import React, { createContext, useState, useEffect } from 'react';

export const SalesInfoContextNet = createContext();


const SalesInfoContextNetProvider = (props) => {

const [SalesInfo,setSalesInfo] = useState([]

  )
  console.log('I am Provider')

  async function getData(){
  
    let result = await fetch(`${process.env.REACT_APP_DATABASE}sales`)
    console.log(`I am the result ${result}`)
    
    result = await result.json()
    setSalesInfo(result)
   
         
      }

 
      useEffect ( ()=>{
        console.log("I am useEffect")
        getData()
        
      },[]    
    )      


    return (
      <SalesInfoContextNet.Provider value={{ SalesInfo }}>
        {props.children}
      </SalesInfoContextNet.Provider>
    );
  }   


  export default SalesInfoContextNetProvider;