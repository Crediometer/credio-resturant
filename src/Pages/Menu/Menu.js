import "./Menu.css"
import Navbar from "../../Components/layout/Navbar/Navbar";
import { BiSolidDashboard } from "react-icons/bi";
import { GiChickenOven, GiFullPizza } from "react-icons/gi";
import { FaBurger } from "react-icons/fa6";
import { RiDrinks2Fill } from "react-icons/ri";
import { MdEdit, MdTableRestaurant } from "react-icons/md";
import { IoIosCash, IoIosPeople } from "react-icons/io";
import { TbCash } from "react-icons/tb";
import { FaCreditCard, FaWallet } from "react-icons/fa";
import MenuCard from "../../Components/Card/MenuCard";
const Menu = () => {
    return ( 
        <div className="menu">
            <Navbar pageName="menu"/>
            <div className="menu-body">
                <div className="menu-body-left">
                    <div className="menu-body-top">
                        <div className="menu-category">
                            <div className="menu-icon">
                                <BiSolidDashboard/>
                            </div>
                            <div className="menu-detail">
                                <h6>ALL</h6>
                                <p>116 items</p>
                            </div>
                        </div>
                        <div className="menu-category">
                            <div className="menu-icon">
                                <GiFullPizza/>
                            </div>
                            <div className="menu-detail">
                                <h6>Pizza</h6>
                                <p>20 items</p>
                            </div>
                        </div>
                        <div className="menu-category">
                            <div className="menu-icon">
                              <FaBurger />
                            </div>
                            <div className="menu-detail">
                                <h6>Burger</h6>
                                <p>15 items</p>
                            </div>
                        </div>
                        <div className="menu-category">
                            <div className="menu-icon">
                                <GiChickenOven />
                            </div>
                            <div className="menu-detail">
                                <h6>Chicken</h6>
                                <p>10 items</p>
                            </div>
                        </div>
                        <div className="menu-category">
                            <div className="menu-icon">
                                <RiDrinks2Fill />
                            </div>
                            <div className="menu-detail">
                                <h6>Beverage</h6>
                                <p>12 items</p>
                            </div>
                        </div>
                    </div>
                    <div className="menu-bottom">
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                        <MenuCard/>
                    </div>
                </div>
                <div className="menu-body-right">
                    <div className="menu-body-right-top">
                        <div className="menu-table-details">
                            <p className="menu-table">Table T3</p>
                            <div>
                                <div className="table-icon">
                                    <MdTableRestaurant />
                                    <p>3</p>
                                </div>
                                <div className="table-icon">
                                    <IoIosPeople/>
                                    <p>3</p>
                                </div>
                            </div>
                        </div>
                        <div className="menu-table-edit">
                            <MdEdit />
                        </div>
                    </div>
                    <div className="menu-payment">
                        <div className="subtotal-menu">
                            <div className="subtotal">
                                <p>Subtotal</p>
                                <p>NGN 10,000</p>
                            </div>
                            <div className="subtotal">
                                <p>Subtotal</p>
                                <p>NGN 10,000</p>
                            </div>
                        </div>
                        <div className="total">
                            <p>Total</p>
                            <p>NGN 10,500</p>
                        </div>
                        <div className="dine-option">
                            <p>Dinning Option</p>
                            <div>
                                <button className="dine-button">Dine In</button>
                                <button className="take-button">Take Out</button>
                            </div>
                        </div>
                        <div className="payment-method">
                            <p>Payment Method</p>
                            <div className="payment-types">
                                <div className="methods">
                                    <div className="method-icons">
                                        <IoIosCash />
                                    </div>
                                    <p>Cash</p>
                                </div>
                                <div className="methods">
                                    <div className="method-icons">
                                        <FaCreditCard />
                                    </div>
                                    <p>Debit Card</p>
                                </div>
                                <div className="methods">
                                    <div className="method-icons">
                                        <FaWallet    />
                                    </div>
                                    <p>Transfer</p>
                                </div>
                            </div>
                        </div>
                        <div className="menu-button">
                            <button className="send-to-kitchen">Send To Kitchen</button>
                            <button className="print-receipt">Print Receipt</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Menu;