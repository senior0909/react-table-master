
import React,{useState,useEffect,Component}from "react";
import{DropdownButton,Dropdown} from 'react-bootstrap'


function YesNoDropDown({PaidInfo,UpdatePaidInfo,ID})

{

  const [DropdownVale,setDropdown] = useState(PaidInfo)

 

  
  useEffect ( ()=>{
  //  console.log(DropdownVale)
 
  },
  )

 

  
  

  var Dropdown_HTML = DropdownVale


return (

  <div >
  {[DropdownButton].map((DropdownType, idx) => (
    <DropdownType onClick={()=>{UpdatePaidInfo(ID)}}
    
      key={idx}
      
      size="sm"
      variant="secondary"
      title= {Dropdown_HTML}
    >
      <Dropdown.Item onClick={(e)=>setDropdown(e.target.getAttribute('value'))} value="Yes"  href="#/action-1">Yes</Dropdown.Item>
       <Dropdown.Item onClick={(e)=>setDropdown(e.target.getAttribute('value'))}  value="No" href="#/action-2">No</Dropdown.Item>
      
    </DropdownType>
  ))}
</div> 
  )
}
export default YesNoDropDown;
