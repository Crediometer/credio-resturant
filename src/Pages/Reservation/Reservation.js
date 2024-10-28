import "./Reservation.css"
import Navbar from "../../Components/layout/Navbar/Navbar";
import { Link } from "react-router-dom";
import ReservationModal from "../../Components/Modal/ReservationModal";
import { useState } from "react";

const Reservation = () => {
    const [show, setShow] = useState(false)
    const handleShow = () =>{
        setShow(!show)
    }
    return ( 
        <div className="reservation">
            <Navbar pageName="Reservations"/>
            <div className="reservation-top">
                <button onClick={handleShow}>Add New Reservation</button>
            </div>
            <div className="reservation-body">
                <h2 className="reservation-head">
                    Reservtions
                </h2>
                <Link to="/home/reservation/details">
                    <div className="reservation-card">
                        <div className="reservation-details">
                            <h6>Table Number</h6>
                            <p>01</p>
                        </div>
                        <div className="reservation-details">
                            <h6>Pax Number</h6>
                            <p>05 persons</p>
                        </div>
                        <div className="reservation-details">
                            <h6>Reservation Date</h6>
                            <p>28. 03. 2024</p>
                        </div>
                        <div className="reservation-details">
                            <h6>Reservation Time</h6>
                            <p>03 : 18 PM</p>
                        </div>
                        <div className="reservation-details">
                            <h6>Deposit Fee</h6>
                            <p>NGN 10,000</p>
                        </div>
                        <div className="reservation-details">
                            <h6>Status</h6>
                            <p>Confirmed</p>
                        </div>
                    </div>
                </Link>
            </div>
            {show && (
                <ReservationModal/>
            )}
        </div>
    );
}
 
export default Reservation;