import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Role = () => {
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
            <p>Select a Job</p>
            <Link to="/clockin/board">
                <button>Server</button>
            </Link>
            <Link to="/clockin/board">
                <button>Bartender</button>
            </Link>
        </div>
    );
}
 
export default Role;