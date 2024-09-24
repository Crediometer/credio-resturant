import { useEffect, useState } from "react";
import "./Login.css"
import PinPad from "../../Components/Pinpad/Pinpad";
const Login = () => {
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
  
    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          }).format(date); // Formats like Friday, September 28
    };
  
    return ( 
        <div className="login">
            <div className="login-left">
                <div className="login-top">
                    <p>{formatTime(currentTime)}</p>
                    <p>{formatDate(currentTime)}</p> 
                </div>
                <div className="login-bottom">
                    <p>Welcome to Eat&Dine</p>
                </div>
            </div>
            <div className="login-right">
                <div className="login-right-inner">
                    <p>Enter your PIN</p>
                    <PinPad/>
                    <p className="cancel">Cancel Clock In/Out</p>
                </div>
            </div>
        </div>
    );
}
 
export default Login;