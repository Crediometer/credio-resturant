import React, { useEffect, useState } from 'react';
import './Pinpad.css'; // Import a CSS file for styling
import { useNavigate } from 'react-router-dom';

const PinPad = () => {
    const history = useNavigate();
    const [pin, setPin] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'x') {
        // Handle backspace
        setPin((prev) => prev.slice(0, -1));
        } else if (pin.length < 4) {
        // Only allow a max of 4 digits
        setPin((prev) => prev + value);
        }
    };
    const onSubmit = (pin) =>{
        if(pin === "1111"){
            history('/clockin')
        }
    }
    useEffect(() => {
        if (pin.length === 4) {
        onSubmit(pin); // Automatically submit the pin when 4 digits are entered
        setPin(''); // Clear the PIN after submission
        }
    }, [pin, onSubmit]);

  return (
    <div className="pin-pad">
      <div className="pin-dots">
        {[...Array(4)].map((_, idx) => (
          <span key={idx} className={`dot ${idx < pin.length ? 'filled' : ''}`} />
        ))}
      </div>
      <div className="pin-buttons">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button key={num} onClick={() => handleButtonClick(num.toString())}>
            {num}
          </button>
        ))}
        <button className="zero" onClick={() => handleButtonClick('0')}>0</button>
        <button className="backspace" onClick={() => handleButtonClick('x')}>
          x
        </button>
      </div>
      
    </div>
  );
};

export default PinPad;
