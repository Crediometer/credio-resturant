import { FaCheck, FaSearch } from "react-icons/fa";
import Navbar from "../../Components/layout/Navbar/Navbar";
import "./TableView.css"
import { MdTableRestaurant } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import reserved from "../../assets/reserved.png"
import billed from "../../assets/billed.png"
import free from "../../assets/free.png"
import dinein from "../../assets/dinein.png"
import { useState } from "react";
const TableView = () => {
    const [page, setPage] = useState(0);
    const handlemain = ()=>{
        setPage(0)
    }
    const handlebar = ()=>{
        setPage(1)
    }
    const handlegarden = ()=>{
        setPage(2)
    }
    const handleroof = ()=>{
        setPage(3)
    }
    return ( 
        <div className="table-view">
            <Navbar pageName="Table View"/>
            <div className="table-view-top">
                <div className="table-view-top-left">
                    <div className="table-status">
                        <div className="free">

                        </div>
                        <p>Free</p>
                    </div>
                    <div className="table-status">
                        <div className="dinein">

                        </div>
                        <p>Dine In</p>
                    </div>
                    <div className="table-status">
                        <div className="billed">

                        </div>
                        <p>Billed</p>
                    </div>
                    <div className="table-status">
                        <div className="reserved">

                        </div>
                        <p>Reserved</p>
                    </div>
                </div>
                <div className="table-view-top-right">
                    <div onClick={handlemain} className={(page == 0) ? "view active-view" : "view"}>
                        <p>Main Hall</p>
                    </div>
                    <div onClick={handlebar} className={(page == 1) ? "view active-view" : "view"}>
                        <p>Bar Area</p>
                    </div>
                    <div onClick={handlegarden} className={(page == 2) ? "view active-view" : "view"}>
                        <p>Garden</p>
                    </div>
                    <div onClick={handleroof} className={(page == 3) ? "view active-view" : "view"}>
                        <p>RoofTop</p>
                    </div>
                </div>
            </div>
            <div className="table-view-body">
                {page == 0 && (
                    <div className="table-setup">
                        <div>
                            <img src={reserved}></img>
                        </div>
                        <div>
                            <img src={reserved}></img>
                        </div>
                        <div>
                            <img src={free}></img>
                        </div>
                        <div>
                            <img src={free}></img>
                        </div>
                        <div>
                            <img src={billed}></img>
                        </div>
                        <div>
                            <img src={free}></img>
                        </div>
                        <div>
                            <img src={billed}></img>
                        </div>
                        <div>
                            <img src={dinein}></img>
                        </div>
                        <div>
                            <img src={billed}></img>
                        </div>
                        <div>
                            <img src={billed}></img>
                        </div>
                    </div>
                )}
                {page == 1 && (
                    <div className="table-setup">
                        <div>
                            <img src={reserved}></img>
                        </div>
                        <div>
                            <img src={reserved}></img>
                        </div>
                        <div>
                            <img src={free}></img>
                        </div>
                        <div>
                            <img src={free}></img>
                        </div>
                        <div>
                            <img src={billed}></img>
                        </div>
                        <div>
                            <img src={free}></img>
                        </div>
                    </div>
                )}
                {page == 2 && (
                    <div className="table-setup">
                        <div>
                            <img src={reserved}></img>
                        </div>
                        <div>
                            <img src={reserved}></img>
                        </div>
                        <div>
                            <img src={free}></img>
                        </div>
                        
                    </div>
                )}
                {page == 3 && (
                    <div className="table-setup">
                        <div>
                            <img src={reserved}></img>
                        </div>
                        <div>
                            <img src={reserved}></img>
                        </div>
                    </div>
                )}
                <div className="table-tab">
                    <p className="tab-date">Thus. 11 January 2024</p>
                    <div className="tab-search">
                        <input
                            type="text"
                            placeholder="Search table number"
                        ></input>
                        <FaSearch/>
                    </div>
                    <div className="tab">
                        <div className="table-tab-status">
                            <p>T5</p>
                            <p>Dine In</p>
                        </div>
                        <div className="table-icon">
                            <MdTableRestaurant />
                            <p>3</p>
                        </div>
                        <div className="table-icon">
                            <IoIosPeople/>
                            <p>3</p>
                        </div>
                        <div className="table-tab-check">
                            <div className="tab-tick">
                                <FaCheck/>
                            </div>
                            <p>Paid</p>
                        </div>
                    </div>
                    <div className="tab">
                        <div className="table-tab-status">
                            <p>T5</p>
                            <p>Dine In</p>
                        </div>
                        <div className="table-icon">
                            <MdTableRestaurant />
                            <p>3</p>
                        </div>
                        <div className="table-icon">
                            <IoIosPeople/>
                            <p>3</p>
                        </div>
                        <div className="table-tab-check">
                            <div className="tab-tick">
                                <FaCheck/>
                            </div>
                            <p>Paid</p>
                        </div>
                    </div>
                    <div className="tab">
                        <div className="table-tab-status">
                            <p>T5</p>
                            <p>Dine In</p>
                        </div>
                        <div className="table-icon">
                            <MdTableRestaurant />
                            <p>3</p>
                        </div>
                        <div className="table-icon">
                            <IoIosPeople/>
                            <p>3</p>
                        </div>
                        <div className="table-tab-check">
                            <div className="tab-tick">
                                <FaCheck/>
                            </div>
                            <p>Paid</p>
                        </div>
                    </div>
                    <div className="tab">
                        <div className="table-tab-status">
                            <p>T5</p>
                            <p>Dine In</p>
                        </div>
                        <div className="table-icon">
                            <MdTableRestaurant />
                            <p>3</p>
                        </div>
                        <div className="table-icon">
                            <IoIosPeople/>
                            <p>3</p>
                        </div>
                        <div className="table-tab-check">
                            <div className="tab-tick">
                                <FaCheck/>
                            </div>
                            <p>Paid</p>
                        </div>
                    </div>
                    <div className="tab">
                        <div className="table-tab-status">
                            <p>T5</p>
                            <p>Dine In</p>
                        </div>
                        <div className="table-icon">
                            <MdTableRestaurant />
                            <p>3</p>
                        </div>
                        <div className="table-icon">
                            <IoIosPeople/>
                            <p>3</p>
                        </div>
                        <div className="table-tab-check">
                            <div className="tab-tick">
                                <FaCheck/>
                            </div>
                            <p>Paid</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
 
export default TableView;