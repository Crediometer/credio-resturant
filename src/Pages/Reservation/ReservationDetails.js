import resturant from "../../assets/resturant.png"
import Navbar from "../../Components/layout/Navbar/Navbar";
const ReservationDetails = () => {
    return ( 
        <div className="reservation">
            <Navbar pageName="Reservations"/>
            <div className="reservation-top">
                <button>Add New Reservation</button>
            </div>
            <div className="reservation-body">
                <img src={resturant} alt="" className="resturant-image" />
                <h2 className="reservation-head">
                    Reservtions Details
                </h2>
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
                <h2 className="reservation-head">
                    Customer Details
                </h2>
                <div className="reservation-card">
                    <div className="reservation-details">
                        <h6>Title</h6>
                        <p>Mr</p>
                    </div>
                    <div className="reservation-details">
                        <h6>Full Name</h6>
                        <p>Watson Joyce</p>
                    </div>
                    <div className="reservation-details">
                        <h6>Phone number</h6>
                        <p>+1 (123) 123 4654</p>
                    </div>
                    <div className="reservation-details">
                        <h6>Email Address</h6>
                        <p>watsonjoyce112@gmail.com</p>
                    </div>
                </div>
                <h2 className="reservation-head">
                    Additional Information
                </h2>
                <div className="reservation-card">
                    <div className="reservation-details">
                        <h6>Customer ID</h6>
                        <p>#12354564</p>
                    </div>
                    <div className="reservation-details">
                        <h6>Payment Method</h6>
                        <p>Visa Card</p>
                    </div>
                    <div className="reservation-details">
                        <h6>Name</h6>
                        <p>Watson Joyce</p>
                    </div>
                    <div className="reservation-details">
                        <h6>Card Number</h6>
                        <p>**** 1236 4564 4546 4546</p>
                    </div>
                </div>
            </div>
            <div className="reservation-bottom">
                <p>Cancle Reservation</p>
                <button>Change Table</button>
            </div>
        </div>
    );
}
 
export default ReservationDetails;