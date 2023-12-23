import React from "react"
const ListAllRecord=()=>{
    return(
        <div className="container">
            <table   className="table table-bordered table-striped" style={{ color: "black", backgroundColor: "lightblue", fontFamily: "sans-serif" }} >
               <thead className="text-center">
                <tr>
                <th>c-Id</th>
                <th>customer_name</th>
                <th>Mobile_num</th>
                <th>Product_name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>total</th>
                <th>Discount</th>
                <th>gst_amount</th>
                <th>
                    Invoice_bill
                </th>
                </tr>
               </thead>
               
            </table>
        </div>
    )
}
export default ListAllRecord;