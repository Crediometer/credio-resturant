import { FaTimes } from "react-icons/fa";
import "./modal.css"
const GuestModal = ({togglemodal}) => {
    const data = [1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    return ( 
        <div className="modal-background">
            <div className="modal-box guest-modal">
                <div className="guest-modal-top">
                    <FaTimes onClick={togglemodal}/>
                    <p>22 Numbers of Guests</p>
                    <p className="cover-text">No Cover</p>
                </div>
                <ol className="guest-list">
                    {data.map((data, index)=>{
                        return(
                            <li key={index}>{data}</li>
                        )
                    })}
                </ol>
            </div>
        </div>
    );
}
 
export default GuestModal;