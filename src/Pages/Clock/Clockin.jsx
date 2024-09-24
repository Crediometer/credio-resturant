import "./Clockin.css"
import Topbar from "../../Components/Topbar/Topbar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Clockin = () => {
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
            <p>No scheduled shifts</p>
            <p>No shift worked so far today</p>
            <Link to="/clockin/role"><button>Clock in</button></Link>
        </div>
    );
}
 
export default Clockin;