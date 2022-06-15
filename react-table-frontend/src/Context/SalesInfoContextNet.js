import React, { createContext, useState, useEffect, useContext } from "react";

export const SalesInfoContextNet = createContext();

export function SalesInfoContextNetProvider ({ children }) {
  const [SalesInfo, setSalesInfo] = useState();

  console.log('I am Context')
  



  useEffect(() => {
    
    console.log('I am use useEffect')
    fetchData();
    
  }, []);




  async function fetchData(){
  
    console.log(`I am the start fetchData`)
    const result = await fetch('http://localhost:8080/PaymentManagerLaravel/public/api/sales')
    // let result = await fetch(`${process.env.REACT_APP_DATABASE}sales`)
    
    const parsedResult = await result.json()
    setSalesInfo(parsedResult)
    console.log(` fetchData `,parsedResult) 
      }  
  return (
    <SalesInfoContextNet.Provider
      value={{
        SalesInfo,
      }}
    >
      {children}
    </SalesInfoContextNet.Provider>
  );
}

export function useAPI() {
  const context = useContext(SalesInfoContextNet);
  if (context === undefined) {
  }
  return context;
}


export default SalesInfoContextNetProvider;
