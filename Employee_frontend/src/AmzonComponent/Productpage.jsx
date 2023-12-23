import React, { useState } from "react"
import axios from "axios"
function Productpage(){
    const[id,setid]=useState('')
    const[name,setname]=useState('')
    const[mobile,setmobile]=useState('')
    const[product,setproduct]=useState('')
    const[price,setprice]=useState('')
    const[quantity,setquantity]=useState('')
    const adddetails=(e)=>{
        e.preventDefault()
        const formData = {
            id,
            name,
           mobile,
           product,
           price,
           quantity
          };
        axios.put("https://localhost/5000/api/save",formData).then((response)=>{
            console.log(response.data)
        }).catch(errors=>console.log(errors))
    }
    return(
        <div className="container">
    <div className="row">
    <div className="card col-md-6 offset-md-3 offset-md-3">
       <h1  className="text-canter">Amazon product Page</h1>
        <div  className="card-body">
            <form>
            <div  className="form-group md-3">
                <label>Customer id</label>
                <input  type="text"
                placeholder="customer id"
                value={id}
                className="form-control"
                onChange={(e)=>setid(e.target.value)}
                />
            </div>
            <div  className="form-group md-3">
                <label>Customer Name</label>
                <input  type="text"
                placeholder="customer name"
                value={name}
                className="form-control"
                onChange={(e)=>setname(e.target.value)}
                />
            </div>
            <div  className="form-group md-3">
                <label>Customer Mobile Number</label>
                <input  type="text"
                placeholder="Customer Mobile Number"
                value={mobile}
                className="form-control"
                onChange={(e)=>setmobile(e.target.value)}
                />
            </div>
            <div  className="form-group md-3">
                <label>product name</label>
                <input  type="text"
                placeholder="product name"
                value={product}
                className="form-control"
                onChange={(e)=>setproduct(e.target.value)}
                />
            </div>
            <div  className="form-group md-3">
                <label>Price</label>
                <input  type="text"
                placeholder="price"
                value={price}
                className="form-control"
                onChange={(e)=>setprice(e.target.value)}
                />
            </div>
            <div  className="form-group md-3">
                <label>product name</label>
                <input  type="text"
                placeholder="product name"
                value={quantity}
                className="form-control"
                onChange={(e)=>setquantity(e.target.value)}
                />
            </div>
            <div>
                <button className="btn btn-success"  onClick={(event)=>adddetails(event)}>PrintInvoice</button>
            </div>
            </form>

</div>
            </div>
        </div>
        </div>
    )
}
export default Productpage;