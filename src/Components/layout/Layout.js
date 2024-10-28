import './Layout.css'
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { useState } from 'react';
const Layout = () => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = (checked) => {setIsOpen (checked);}
    const [show, setShow] = useState(false)
    const handleShow = ()=>{
        setShow(!show)
    }
    return ( 
        <div className="layout">
            <div className="layout-left">
                <Sidebar/>
            </div>
            <div className="layout-right">
                <div className="layout-main">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
 
export default Layout;