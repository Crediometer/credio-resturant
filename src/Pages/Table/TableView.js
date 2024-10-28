import { FaCheck, FaSearch } from "react-icons/fa";
import Navbar from "../../Components/layout/Navbar/Navbar";
import "./TableView.css"
import { MdTableRestaurant } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
const TableView = () => {
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
                    <div className="view">
                        <p>Main Hall</p>
                    </div>
                    <div className="view">
                        <p>Bar Area</p>
                    </div>
                    <div className="view">
                        <p>Garden</p>
                    </div>
                    <div className="view">
                        <p>Main Hall</p>
                    </div>
                </div>
            </div>
            <div className="table-view-body">
                <div className="table-setup">

                </div>
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