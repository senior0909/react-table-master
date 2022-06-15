
import React,{useState,useEffect}from "react";
import{DropdownButton,Dropdown} from 'react-bootstrap'


const YesNoDropDown()
{

  const [DropdownVale,setDropdown] = useState('DB')

  useEffect ( ()=>{
    console.log(DropdownVale)
  },
  )

  var Dropdown_HTML = DropdownVale


return (
  <Dropdown >
  <Dropdown.Toggle  variant="success" id="YesNoDropDown">
    {Dropdown_HTML}
  </Dropdown.Toggle>

  <Dropdown.Menu  >
    <Dropdown.Item onClick={(e)=>setDropdown(e.target.getAttribute('value'))}  value="Yes"  href="#/action-1">Yes</Dropdown.Item>
    <Dropdown.Item onClick={(e)=>setDropdown(e.target.getAttribute('value'))}  value="No" href="#/action-2">No</Dropdown.Item>
   
  </Dropdown.Menu>
</Dropdown>

  )
}
export default YesNoDropDown;
