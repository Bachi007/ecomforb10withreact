import { useState } from "react";
import { addProducts } from "./api";

function AddProducts(){

    var [productName,setName]=useState("");
    var [productDescription,setDescription]=useState("");
    var [productPrice,setPrice]=useState("");
    var [productImage,setImage]=useState("");
    var [productCategory,setCategory]=useState("")

    var addNow=async(e)=>{
        e.preventDefault();
        var response=await addProducts(
            {   productName,
                productDescription,
                productPrice,
                productCategory,
                productImage})
        console.log(response);
        alert(response.data.staus)
        setName("");
        setCategory("");
    }

    return(<>
    <div className="row">
        <div className="col-md-4">
            <form action="" onSubmit={addNow}>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Name</label>
                
                    <input type="text" name="" id="pname" 
                    onChange={(e)=>setName(e.target.value)} 
                    value={productName} className="form-control" />
                
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Price</label>
                    <input type="text" name="" id="pprice" onChange={(e)=>setPrice(e.target.value)} value={productPrice} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Category</label>
                    <input type="text" name="" id="pcat" onChange={(e)=>setCategory(e.target.value)} value={productCategory} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Description</label>
                    <input type="text" name="" id="pdesc" onChange={(e)=>setDescription(e.target.value)} value={productDescription} className="form-control" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Product Image</label>
                    <input type="text" name="" id="pimg" onChange={(e)=>setImage(e.target.value)} value={productImage} className="form-control" />
                </div>
                <div className="form-group">
                    <button className="btn btn-success" type="submit">Add Now</button>
                </div>
            </form>
        </div>
    </div>
    
    
    
    
    
    
    </>)

}

export default AddProducts;