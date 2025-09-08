function Card(props){

    return(<>
    <div className="card">
        <div className="card-header">
            <h1>{props.product.productName}</h1>
        </div>
        <div className="card-body">
            <p>Description : {props.product.productDescription}</p>
            <p>price : <span className="badge bg-primary">{props.product.productPrice}</span></p>
        </div>
        <div className="card-footer">
            <button className="btn btn-success">Buy Now</button>
        </div>
    </div>
    
    </>)


}
export default Card;