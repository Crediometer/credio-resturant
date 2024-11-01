import { useState } from "react";
import menuimage from "../../assets/menu.jpeg"
const MenuCard = () => {
    const [seats, setSeats] = useState(4);

    const increaseSeats = (e) => {
        e.preventDefault()
        setSeats((prevSeats) => prevSeats + 1);
    };
  
    const decreaseSeats = (e) => {
        e.preventDefault()
        if (seats > 0) {
            setSeats((prevSeats) => prevSeats - 1);
        }
    };
    return ( 
        <div className="menu-card">
            <div className="menu-card-top">
                <div className="food-image">
                    <img src={menuimage} alt="Food Image"/>
                </div>
                <div className="menu-details">
                    <h4>Chicken</h4>
                    <p>40 Available</p>
                    <p>NGN 5,000</p>
                    <div className="size-con">
                        <p>Size</p>
                        <div className="sizes">
                            <div className="size">
                                <p>S</p>
                            </div>
                            <div className="size">
                                <p>M</p>
                            </div>
                            <div className="size">
                                <p>L</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
            <div className="menu-card-bottom">
                <h4>Amount</h4>
                <div className="amount-controller">
                    <button onClick={decreaseSeats} className="counter-btn">-</button>
                    <span>{seats}</span>
                    <button onClick={increaseSeats} className="counter-btn">+</button>
                </div>
                <button className="add-button">Add+</button>
            </div>  
        </div>
    );
}
 
export default MenuCard;