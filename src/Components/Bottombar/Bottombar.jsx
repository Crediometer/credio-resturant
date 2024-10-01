import { Outlet } from "react-router-dom";
import "./Bottombar.css"
const Bottombar = () => {
    return ( 
        <div className="bottombar">
            <Outlet/>
            <div className="bottombar-inner">
                <div className="nav-con">
                    <p>Log Out</p>
                </div>
                <div className="nav-con">
                    <p>Accounts</p>
                </div>
                <div className="nav-con">
                    <p>Actions</p>
                </div>
                <div className="nav-con">
                    <p>Transactions</p>
                </div>
                <div className="nav-con">
                    <p>Orders</p>
                </div>
                <div className="nav-con">
                    <p>Sales</p>
                </div>
            </div>
        </div>
    );
}
 
export default Bottombar;