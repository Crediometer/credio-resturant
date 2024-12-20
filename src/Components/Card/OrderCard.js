import { FaCheck } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import "./Card.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
const OrderCard = ({
    id,
    tableNo,
    status,
    date,
    time,
    orders,
    total
}) => {
    return ( 
        <div className="order-card">
            <div className="order-card-top">
                <div className="order-card-top-inner">
                    <div className="order-card-top-left">
                        <div className="order-no">
                            <h1>{id}</h1>
                        </div>
                        <div>
                            <h5 className="table-no">Table T{tableNo}</h5>
                            <p className="table-no-small">Table T{tableNo}</p>
                        </div>
                    </div>
                    <div className="order-card-top-right">
                        <div className={status== 0?"order-status ready": "order-status inprocess"}>
                            <FaCheck/>
                            <p>{status == 0 ? "Ready" : "In Process"}</p>
                        </div>
                        <div className="order-state">
                            <div className={status== 0?"order-color ready": "order-color inprocess"}>

                            </div>
                            <p>{status == 0 ? "Ready to Serve" : "Cooking now"}</p>
                        </div>
                    </div>
                </div>
                <div className="order-timeline">
                    <p>{date}</p>
                    <p>{time}</p>
                </div>
            </div>
            <div className="order-card-body">
                <div className="order-card-body-inner">
                    <table>
                        <tr>
                            <th>Qty</th>
                            <th>Items</th>
                            <th className="price-head">Price</th>
                        </tr>
                        {orders.map((order)=>{
                            return(
                                <tr>
                                    <td>{order.id}</td>
                                    <td>{order.item}</td>
                                    <td>NGN {order.price}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>
                <div className="total-order">
                    <p>SubTotal</p>
                    <p>NGN {total}</p>
                </div>
            </div>
            <div className="order-card-bottom">
                <div className="order-icon">
                    <MdModeEdit/>
                </div>
                <div className="order-icon">
                    <RiDeleteBin5Fill />
                </div>
                <button>
                    Pay Bill 
                </button>
            </div>
        </div>
    );
}
 
export default OrderCard;