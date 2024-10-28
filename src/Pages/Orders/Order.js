import "./Order.css"
import { FaSearch } from "react-icons/fa";
import Navbar from "../../Components/layout/Navbar/Navbar";
import { useState } from "react";
import OrderCard from "../../Components/Card/OrderCard";
import { orderData } from "../../Components/data";
const Orders = () => {
    const [value, setValue] = useState(0)
    const handleAll = () =>{
        setValue(0)
    }
    const handleProcess = () =>{
        setValue(1)
    }
    const handleCompleted = () =>{
        setValue(2)
    }
    const handleCancel = () =>{
        setValue(3)
    }
    return ( 
        <div className="orders">
            <Navbar pageName="Orders"/>
            <div className="orders-top">
                <div className="orders-top-left">
                    <nav>
                        <ul>
                            <li className={value == 0 && "active"} onClick={handleAll}>All</li>
                            <li className={value == 1 && "active"} onClick={handleProcess}>In Process</li>
                            <li className={value == 2 && "active"} onClick={handleCompleted}>Completed</li>
                            <li className={value == 3 && "active"} onClick={handleCancel}>Cancelled</li>
                        </ul>
                    </nav>
                </div>
                <div className="orders-top-right">
                    <div className="order-search">
                        <input placeholder="Search a name, oder or etc"></input>
                        <FaSearch/>
                    </div>
                </div>
            </div>
            <div className="orders-body">
                {orderData.map((order)=>{
                    return(
                        <OrderCard
                            id={order.id}
                            tableNo={order.tableNo}
                            status = {order.status}
                            date={order.date}
                            time={order.time}
                            orders={order.orders}
                            total={order.total}
                        />
                    )
                })}
                {/* <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/>
                <OrderCard/> */}
            </div>
        </div>
    );
}
 
export default Orders;