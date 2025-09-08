import { Link, Outlet } from "react-router-dom";

function Dashboard(){

    return(<>
    
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">

        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to="/user/home">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/user/view">View Products</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/user/add">Add Products</Link>
        </li>
        



        </ul>
    </nav>

        <div className="container-fluid">
            <Outlet/>
        </div>

    </>)




}
export default Dashboard;