<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class SalesController extends Controller
{
        public function ViewAllSales(){

            return Order::all();
    }


    public function UpdateInformation(Request $request){

             
        $data = json_decode($request['json']);          
        $order = Order::where('id',$data->id)->first();       
         
        $order->PaidSupplier = $data->PaidSupplier;      
        $order->save();
        
      
}

}
