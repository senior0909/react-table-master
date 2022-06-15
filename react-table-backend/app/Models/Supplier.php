<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;


class Supplier extends Model
{ 
    use HasFactory;

    static public function CreateNewSupplier($SupplierName)
    {
        // This method checks if the supplier exists in the DB if not it creats it as new 
        // supplier

              
                $supplier = Supplier::where('name', $SupplierName)->first();
               
               // I tried to cover a lower or upper case unsuccessful
                // $supplier = whereRAW("lower('name') LIKE '%".strtolower($supplier)."%'")->first();

                    if ($supplier == null) {
                  
                    $supplier = new Supplier;
                    $supplier->name = Str::ucfirst($SupplierName);                              
                    $supplier->save();


                    }
                }   

             
    
}
