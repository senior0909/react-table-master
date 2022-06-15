import YesNoDropDown from '../utilities/YesNoDropDown'


const UpdatePaidInfo = (ID) => {
  console.log(`The id is ${ID}`);
}

export const COLUMNS = [
  
  {
    Header: 'Date Sold',
    accessor: 'created_at',
  
  },
  {
    Header: 'Order#',
    accessor: 'id',
   
  },
  
  {
    Header: 'SKU',
    accessor: 'SKU',
   
  },
  {
    Header: 'Supplier',
    accessor: 'Supplier',
   
  },
  {
    Header: 'Cost $',
    accessor: 'Cost_USD',

  },
  {
    Header: 'Description',
    accessor: 'Description',

  },
  {
   
    Header: 'Paid Supplier',
    accessor:'PaidSupplier',
  
    Cell: (cell) => (
      
      
      < YesNoDropDown PaidInfo={cell.row.values.PaidSupplier} ID={cell.row.values.id} UpdatePaidInfo={UpdatePaidInfo}/>
   
    ),
    

  },
 


//   In the original model we had a “paid suppliers”  &  PaidShipping
// look into the original to add it later on

]