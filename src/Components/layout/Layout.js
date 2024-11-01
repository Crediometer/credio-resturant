import './Layout.css'
import { Outlet } from "react-router-dom";
import {Sidebar} from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";
import { useState } from 'react';
import ClockoutModal from '../Modal/Clockout';
const Layout = () => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = (checked) => {setIsOpen (checked);}
    const [show, setShow] = useState(false)
    const handleShow = ()=>{
        setShow(!show)
    }
    const [show1, setShow1] = useState(false)
    const handleShow1 = () =>{
        setShow1(!show1)
    }
    return ( 
        <div className="layout">
            <div className="layout-left">
                <Sidebar handleShow={handleShow1}/>
            </div>
            <div className="layout-right">
                <div className="layout-main">
                    <Outlet/>
                </div>
                {show1 && <ClockoutModal handleShow={handleShow1}/>}
            </div>
        </div>
    );
}
 
export default Layout;