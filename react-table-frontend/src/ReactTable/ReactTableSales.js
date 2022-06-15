import React,{useState,useEffect,useMemo, useContext}from "react";
import{Button} from 'react-bootstrap'
// import YesNoDropDown from '../utilities/YesNoDropDown'
import { useTable, useSortBy, useGlobalFilter,useFilters } from 'react-table'
import {COLUMNS} from './Columns'
import './ReactTable.css'
import {GlobalFilter } from './GlobalFilter'
import {ColumnFilter } from './ColumnFilter'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faSortUp ,faSort } from '@fortawesome/free-solid-svg-icons'
import {SalesInfoContextNet} from '../Context/SalesInfoContextNet';


function ReactTableSales()
{

  // const   SalesInfo  = useContext(SalesInfoContextNet);
  const { SalesInfo } = useContext(SalesInfoContextNet)

  console.log('moshe',SalesInfo)

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter
    }),
    []
  )
  
  const [data,setData] = useState([]

    )

   useEffect(() => {
    console.log(SalesInfo);
    console.log('yeshlikaka');
    setData(SalesInfo)
   }, [SalesInfo])
   

  const columns = useMemo(()=> COLUMNS,[]) 
  // const TableData = useMemo(()=> data,[]) 

  const tableInstance = useTable({columns: columns,
    data
   },
  )

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


const {
  getTableProps,
  getTableBodyProps,
  headerGroups,
  rows,
  prepareRow,
  state,
  setGlobalFilter
} = useTable({
  columns,
  data,defaultColumn},useGlobalFilter,useFilters,useSortBy)



const {globalFilter} = state


  return (

   <>

<div className="col-xs-8 col-sm-3">
    <div className="info_table">
    <br /><br /><br />

    <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

   
        <table  {...getTableProps()} tripped bordered hover size="sm">
            <thead>
              {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()}>
                    {column.render('Header')}
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                    <span>
                  
                    {column.isSorted ? (column.isSortedDesc ? <FontAwesomeIcon icon={faSortDown} size = '2x'/> :
                    <FontAwesomeIcon icon={faSortUp} size = '2x'/>) : <FontAwesomeIcon icon={faSort} size = '2x'/>}
              

                    </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
   

        
            <tbody {...getTableBodyProps()}>
              {rows.map(row => {
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                      return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })}
            </tbody>


          
          </table>
 </div>
    

    
         <br /><br /><br />
         <div  className="padding-left_button">  
      <Button onClick={UpdateDB} variant="primary">Update database</Button>
      </div>
  </div>
 
  </>
  )

  
}

export default ReactTableSales;
