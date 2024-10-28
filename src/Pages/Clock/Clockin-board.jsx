import { useEffect, useState } from "react";
import "./Clockin.css"
import { Link, useParams } from "react-router-dom";
const ClockInBoard = () => {
    const {id} = useParams() 
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
            <p>Clocked in as {id}</p>
            <p>You will be working from 8:00AM - 8:00PM<br></br> on sit 1,2,3,4 </p>
            <Link to="/home">
                <button>Continue to Dinepoint for Restaurants</button>
            </Link>
        </div>
    );
}
 
export default ClockInBoard;