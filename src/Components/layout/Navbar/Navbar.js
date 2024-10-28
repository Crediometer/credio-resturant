import './Navbar.css';
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { IoLocationOutline, IoNotifications, IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";
import avatar from '../../../assets/Avatar.svg'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';
const Navbar = ({isOpen, pageName}) => {
    const [show, setshow] = useState(false);
    const [location, setLocation] = useState({title:'Futa South Gate', des: "No 23 off owode road futa southgate Akure, Ondo state."})
    const dropdownRef = useRef(null);
    const handleshow = () =>{
        setshow(!show)
    }
    const handleLocation = (loc)=>{
        setLocation(loc)
    }
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setshow(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
    },[]);
    return ( 
        <div className="navbar">
            <div className="navbar-left">
                <div className="back-arrow">
                    <FaChevronLeft/>
                </div>
                <p>{pageName}</p>
            </div>
            <div className="navbar-right">
                <div className="notification">
                    <IoNotifications/>
                    <div className="notification-number">
                        <p>4</p>
                    </div>
                </div>
                <div className="user-image">
                    <img src={avatar}>
                    </img>
                </div>
            </div>
        </div>
    );
}


export default Navbar;
