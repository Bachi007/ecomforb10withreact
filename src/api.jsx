import axios from "axios";


const API=axios.create({
    baseURL:"http://localhost:4300"
})

export const getProducts=()=>API.get("/products")
export const addProducts=(newproduct)=>API.post("/addproducts",newproduct);
export const deleteProduct=(pid)=>API.delete(`/products/${pid}`)
export const updateProduct=(id,product)=>API.put(`/products/${id}`,product);

export default API;