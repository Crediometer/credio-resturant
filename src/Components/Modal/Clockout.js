import PinPad from "../Pinpad/Pinpad";

const ClockoutModal = ({handleShow}) => {
    return ( 
        <div className="modal-background clockin-modal-background">
            {/* <div className="clockout-modal"> */}
                <div className="login-right">
                    <div className="login-right-inner">
                        <p>Enter your PIN</p>
                        <PinPad/>
                        <p className="cancel" onClick={handleShow}>Cancel Clock In/Out</p>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}
 
export default ClockoutModal;