import { Outlet } from "react-router-dom";
import "./Topbar.css"
import { FaTimes } from "react-icons/fa";

const Topbar = () => {
    return ( 
        <div className="topbar-outer">
            <div className="topbar">
                <div className="topbar-close">
                    <FaTimes/>
                </div>
                <p>Jonathan Venegoni</p>
            </div>
            <Outlet/>
        </div>
    );
}
 
export default Topbar;