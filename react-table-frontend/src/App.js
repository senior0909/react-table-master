
import './App.css';
import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import AllSales from './AllSales'
import ReactTables from './ReactTable/ReactTableSales'
import ReactTableSalesOld from './ReactTable/ReactTableSalesOld'
import UploadJewelrySalesCsv from './Components/UploadJewelrySalesCsv'
import SalesInfoContextNetProvider from './Context/SalesInfoContextNet'




import Header from './Header'

function App() {
  return (
    
  <BrowserRouter>
  <Header/>
  <Switch>
  
  <Route path="/Sales">
  
      
      <AllSales/>
    </Route>


    {/* <Route path="/react_table">
    <SalesInfoContextTwo.Provider >
      <ReactTable/>
     </SalesInfoContextTwo.Provider>
    </Route> */}

    <SalesInfoContextNetProvider>

    <Route path="/upload_csv">
      <UploadJewelrySalesCsv/>
     
    </Route>
    <Route path="/react_table">
      <ReactTables/>
    </Route>

    <Route path="/react_table_old">
      <ReactTableSalesOld/>
     
    </Route>
     
    
      </SalesInfoContextNetProvider>

      
  <Route path="/">
    {/* <NavbarPage /> */}

    </Route>

       
    

    </Switch> 
   
       

  </BrowserRouter>  
  );
}

export default App;
