import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'
import{Form} from 'react-bootstrap'
import './ReactTable.css'

export const GlobalFilter = ({ filter, setFilter }) => {
  const [value, setValue] = useState(filter)
  const onChange = useAsyncDebounce(value => {
    setFilter(value || undefined)
  }, 1000)
  return (

    <>
  
 
  
 Filter table:
 
  <Form.Control className="mb-3" placeholder=" Filter table" value={value || ''}
      onChange={e => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}/>
   
  
 
</>


  )
}