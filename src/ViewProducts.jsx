import { useEffect, useState } from "react";
import { getProducts } from "./api";
import Card from "./Card";

function ViewProducts(){

    var [products,setProducts]=useState([]);
  var fetchProducts=async()=>{
        var response=await getProducts();   
        setProducts(response.data);
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    return(<>
    <h1>Products</h1>
        <div className="row">
            {
            products.map((p)=>(
                <div className="col-md-4" key={p._id}>
                                    <Card product={p}/>
                </div>
            ))
        }
        </div>

    </>)

}
export default ViewProducts;