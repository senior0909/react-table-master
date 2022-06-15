import React,{useState,useEffect}from "react";
import{Table,Form,Button} from 'react-bootstrap'
import YesNoDropDown from './utilities/YesNoDropDown'


function AllSales()
{

  const [data,setData] = useState([])

  useEffect ( ()=>{
    getData()
  },[]
  )

  async function getData(){
    let result = await fetch('http://localhost:8080/PaymentManagerLaravel/public/api/sales')
    result = await result.json()
    setData(result)
  
  }


  function UpdateDB(){
    
   
    
  const ItemsToUpdate = []  
  let all_box = document.querySelectorAll('[type=checkbox]');
  all_box.forEach(function (all_box) {
 
 
  
          if(all_box.checked == true)
          {
           
            ItemsToUpdate.push(
             {
              id: all_box.getAttribute('updatecheckboxid'),
              PaidSupplier: all_box.getAttribute('PaidSupplier')
             }
            )
            }    
  });

  console.log(ItemsToUpdate);
 
}



  return (

  <div className="info_table">
      
 
      <br /><br /><br />
      <h1>All Sales  </h1>

      <div className="col-xs-8 col-sm-3">

      <Table tripped bordered hover size="sm">

       
            <tr>
              <td>Update</td>
              <td>Order#</td>
              <td>Date Sold</td>
              <td>SKU</td>
              <td>Supplier</td>
              <td>Description</td>
              <td>Paid Supplier</td>
              <td>Paid Shipper</td>
              
            </tr>
           {
            data.map( (item)=>
             <tr  >
                  <td> <Form.Check 
                index={item.indexOf}    
                                       
                UpdateCheckBoxID={item.id}
               
              type='checkbox'
              
            /></td>  
             <td>{item.id}  </td>
             <td>{item.created_at}</td>
             <td>{item.SKU}</td>
             <td>{item.Supplier}</td>
             <td>{item.Description}</td>
             <td  Order_number_paid_supplier={item.id} >
             <YesNoDropDown PaidInfo={item.PaidSupplier} />
             {/* onChange={(e) => setNumberValue(e.target.value)} */}
            </td>
            <td Order_number_paid_shipper={item.id}>
            <YesNoDropDown PaidInfo={item.PaidShipping}/>
            </td>
           
          
           
        
           
           </tr>
          )  
        } 

      </Table>
      <Button onClick={UpdateDB} variant="primary">Update database</Button>

     </div>
  </div>     

  )


}

export default AllSales;

