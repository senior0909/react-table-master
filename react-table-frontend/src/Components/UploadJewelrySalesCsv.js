
import{Form,Button} from 'react-bootstrap'
import { useState,useContext } from 'react'
import {  SalesInfoContextNet }  from '../Context/SalesInfoContextNet'


function UploadJewelrySalesCsv()
{
  const { SalesInfo } = useContext(SalesInfoContextNet)
  console.log(SalesInfo)

 

  const [file,setFile]=useState("") 

  async function UploadCSV(){
    const formData =  new FormData();
    formData.append('file',file)
    console.log(file)
   

    let result = await fetch((`${process.env.REACT_APP_DATABASE}upload_sales_csv`),{
      method:'POST',
      body:formData
    })  
  }

return (
  <div className="col-sm-6 offset-sm-3">
    <Form>
       <Form.Group controlId="formFile" className="mb-3">
    <Form.Label>  Upload jewelry sales CSV </Form.Label>
    <Form.Control type="file" onChange={(e)=>setFile(e.target.files[0])} placeholder="Eli"/>
  </Form.Group>
  <Button variant="primary" type="submit" onClick={UploadCSV}>
    Submit
  </Button>
  </Form>

  
  
  </div>
  )
}
export default UploadJewelrySalesCsv;
