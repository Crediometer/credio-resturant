import { useEffect, useState } from "react";
import "./Clockin.css"
import { Link } from "react-router-dom";
const ClockInBoard = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
  
      // Cleanup the interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
  
    const formatTime = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
          }).format(date); // Formats like 12:40 PM
    };
    return ( 
        <div className="clockin">
            <h4>{formatTime(currentTime)}</h4>
            <p>Clocked in as Server</p>
            <p className="add-note">Add Notes</p>
            <Link to="/">
                <button>Continue to Dinepoint for Restaurats</button>
            </Link>
        </div>
    );
}
 
export default ClockInBoard;