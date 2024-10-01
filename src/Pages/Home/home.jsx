import "./home.css";
import { TbArrowBadgeLeftFilled, TbArrowBadgeRightFilled } from "react-icons/tb";
import table from "../../assets/table.png"
import { useState } from "react";
const Home  = () => {
    const [number, setNumber] = useState(true)
    const handleTable = () =>{
        setNumber(!number)
    }
    return (
        <div className="home-outer">
            <div className="home-top">
                {!number && (
                    <TbArrowBadgeLeftFilled onClick={handleTable}/>
                )}
                {number && (
                    <TbArrowBadgeRightFilled onClick={handleTable}/>
                )}
                
            </div>
            {number && (
                <div className="home">
                    <div className="row-1">
                        <div className="row-box">
                            <p className="sit-text">19</p>
                        </div>
                        <div className="row-box">
                            <p className="sit-text">19</p>
                        </div>
                        <div className="row-box">
                            <p className="sit-text">19</p>
                        </div>
                        <div className="row-box">
                            <p className="sit-text">19</p>
                        </div>
                        <div className="row-box">
                            <p className="sit-text">19</p>
                        </div>
                        <div className="row-box">
                            <p className="sit-text">19</p>
                        </div>
                    </div>
                    <div className="row-2">
                        <div className="row-kite">
                        <   p className="sit-text">20</p>
                        </div>
                        <div className="row-kite">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-kite">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-kite">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-kite">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-kite">
                            <p className="sit-text">20</p>
                        </div>
                    </div>
                    <div className="row-3">
                        <div className="row-rectangle">
                        <p className="sit-text">20</p>
                        </div>
                        <div className="row-rectangle">
                        <p className="sit-text">20</p>
                        </div>
                        <div className="row-rectangle">
                        <p className="sit-text">20</p>
                        </div>
                        <div className="row-rectangle">
                        <p className="sit-text">20</p>
                        </div>
                        <div className="row-rectangle">
                        <p className="sit-text">20</p>
                        </div>
                        <div className="row-rectangle">
                        <p className="sit-text">20</p>
                        </div>
                    </div>
                    <div className="row-4">
                        <div className="row-circle">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-circle">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-circle">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-circle">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-circle">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-circle">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-circle">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-circle">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-circle">
                            <p className="sit-text">20</p>
                        </div>
                        <div className="row-circle">
                            <p className="sit-text">20</p>
                        </div>
                    </div>
                    <div className="bar">
                        <p className="sit-text">Bar</p>
                    </div>
                </div>
            )}
            {!number && (
                <div className="home">
                    <div className="table-row">
                        <img src={table}></img>
                        <img src={table}></img>
                        <img src={table}></img>
                    </div>
                    <div className="table-row">
                        <img src={table}></img>
                        <img src={table}></img>
                        <img src={table}></img>
                    </div>
                </div>
            )}
        </div>
    );
}
 
export default Home ;