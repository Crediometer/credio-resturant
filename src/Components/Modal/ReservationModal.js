import { FaArrowRight } from "react-icons/fa";
import "./modal.css"
const ReservationModal = () => {
    return ( 
        <div className="modal-background">
            <div className="modal-box guest-modal">
                <div className="reservation-modal-top">
                    <p>Add New Reservation</p>
                    <div>
                        <FaArrowRight/>
                    </div>
                </div>
                <div className="reservation-details-form">
                    <p>Reservation Details</p>
                    <form>
                        <div className="modal-form">
                            <div className="form-1">
                                <label>Table Number</label>
                                <select>
                                    <optgroup>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                        <option>05</option>
                                        <option>06</option>
                                        <option>07</option>
                                    </optgroup>
                                </select>
                            </div>
                            <div className="form-1">
                                <label>People</label>
                                <input
                                    type="text"
                                    placeholder="05 Persons"
                                ></input>
                            </div>
                        </div>
                        <div className="modal-form">
                            <div className="form-1">
                                <label>Reservation Date</label>
                                <input type="date"></input>
                            </div>
                            <div className="form-1">
                                <label>Reservation Time</label>
                                <input
                                    type="time"
                                ></input>
                            </div>
                        </div>
                        <div className="modal-form">
                            <div className="form-1">
                                <label>Deposit Fee</label>
                                <input type="date"></input>
                            </div>
                            <div className="form-1">
                                <label>Status</label>
                                <select>
                                    <optgroup>
                                        <option>Confirmed</option>
                                        <option>Pending</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="reservation-details-form">
                    <p>Customer Details</p>
                    <form>
                        <div className="modal-form">
                            <div className="form-2">
                                <label>Title</label>
                                <select>
                                    <optgroup>
                                        <option>Mr</option>
                                        <option>Mrs</option>
                                        <option>Miss</option>
                                        <option>Ms</option>
                                    </optgroup>
                                </select>
                            </div>
                        </div>
                        <div className="modal-form">
                            <div className="form-1">
                                <label>Full Name</label>
                                <input type="text" placeholder="Watson"></input>
                            </div>
                            <div className="form-1">
                                <label></label>
                                <input
                                    type="text"
                                    placeholder="Joyce"
                                ></input>
                            </div>
                        </div>
                        <div className="modal-form">
                            <div className="form-1">
                                <label>Phone Number</label>
                                <input type="text" placeholder="+234 908877 8877 8"></input>
                            </div>
                            <div className="form-1">
                                <label>Email</label>
                                <input type="text" placeholder="watsonjoyce112@gmail.com"></input>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default ReservationModal;