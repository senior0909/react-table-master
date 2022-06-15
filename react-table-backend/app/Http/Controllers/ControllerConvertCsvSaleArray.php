<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Supplier;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Imports\JewelrySelllsInfo;
use Maatwebsite\Excel\Facades\Excel;


class ControllerConvertCsvSaleArray extends Controller
{
    // This calss gets the CSV file with information regarding all sales and converts
    // it to PHP array and in puts all the information to the DB


    public function ConvertCsvSaleArrayMain(Request $request)


    { 
      $supplier = new Supplier;


      $file  = $request->file('file')->get();
      $file_path ='csv_imports/jewelry_sellls_info.csv';
      Storage::put($file_path,$file);
      $Jewelry_info_array = Excel::toArray(new JewelrySelllsInfo, $file_path);


    //Flattering the Array as we get a nested array that has the spreadsheet info
    // it can cause confusion therefore we flatten it 
      $Jewelry_info_array = $Jewelry_info_array[0];
      
     
           

      foreach ($Jewelry_info_array as $Jewelry_info) {
       
        $order_db = New Order;
        
        
        Supplier::CreateNewSupplier($Jewelry_info['owner']);

        $order_db->id = $Jewelry_info['cd2u_item'];
        $order_db->SKU = $Jewelry_info['cd2u_item'];
        $order_db->Supplier = $Jewelry_info['owner'];
        $order_db->Description = $Jewelry_info['description'];
        $order_db->Cost_USD  = $Jewelry_info['cost'];
        $order_db->Shipping_USD = $Jewelry_info['shipping'];
        $order_db->₪_Rate = round($Jewelry_info['ils_rate'],2);     
        $order_db->IsrealSellingPriceUSD = round($Jewelry_info['israel_selling_price_us'],2);
                                                         
        $order_db->VATPaidSupplierILS = $Jewelry_info['amount_vat_paid_to_supplier'];
        $order_db->ReportedVATForVatBack = $Jewelry_info['was_reported_to_vat_for_vat_back'];             
        $order_db->ReportedVatExport = $Jewelry_info['was_reported_to_vat_as_export'];
        $order_db->PaidIsreal = $Jewelry_info['paid_isreal'];
        $order_db->PaidShipping = $Jewelry_info['paid_shipper'];
        $order_db->PaidSupplier = $Jewelry_info['paid_supplier'];         
        $order_db->CD2U_Invoice = $Jewelry_info['cd2u_invoice'];
        $order_db->PaymnetILReport = $Jewelry_info['paymnet_il_report'];

        // There is no indication of this in salles spreadsheet therefore we are not writing it to DB 
        // $order_db->PaymentType = $Jewelry_info['payment_type'];
        $order_db->CheckInfo = $Jewelry_info['supplier_check'];
        $order_db->Reshimon = $Jewelry_info['reshimon'];

           
        $order_db->save();
      

      }
   
     
  
      
      
       

    }
}
