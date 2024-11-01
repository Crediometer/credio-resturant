import './Layout.css'
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import { useState } from 'react';
import { KitchenSidebar } from './Sidebar/Sidebar';
const K_Layout = () => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = (checked) => {setIsOpen (checked);}
    const [show, setShow] = useState(false)
    const handleShow = ()=>{
        setShow(!show)
    }
    return ( 
        <div className="layout">
            <div className="layout-left">
                <KitchenSidebar/>
            </div>
            <div className="layout-right">
                <div className="layout-main">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
 
export default K_Layout;