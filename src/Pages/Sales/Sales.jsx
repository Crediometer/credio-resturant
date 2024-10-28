import "./Sales.css"
import { FaSearch } from "react-icons/fa";

const Sales = () => {
    return ( 
        <div className="sales">
            <div className="sales-left">
                <div className="sales-left-top">
                    <h5>1- General</h5>
                    <FaSearch/>
                </div>
                <div className="menu-container">
                    {/* Row 1 */}
                    <div className="menu-item appetizers-salads">Appetizers & Salads</div>
                    <div className="menu-item entrees">Entrees</div>
                    <div className="menu-item sandwiches">Sandwiches</div>
                    <div className="menu-item desserts">Desserts</div>

                    {/* Row 2 */}
                    <div className="menu-item burgers">Bugers</div>
                    <div className="menu-item sushi-rolls">Sushi Rolls</div>
                    <div className="menu-item pizza">Pizza</div>
                    <div className="menu-item open-food">Open Food</div>

                    {/* Row 3 */}
                    <div className="menu-item red-wine">Red wine</div>
                    <div className="menu-item beer">Beer</div>
                    <div className="menu-item white-wine">White wine</div>
                    <div className="menu-item gift-cards">Gift Cards</div>

                    {/* Row 4 */}
                    <div className="menu-item classic-cocktails">Classic cocktails</div>
                    <div className="menu-item coffee">Coffee</div>
                    <div className="menu-item non-alcoholic">N/A Beverages</div>

                    {/* Row 5 */}
                    <div className="menu-item daily-dinner-special">Daily Dinner Special</div>
                    <div className="menu-item variable">variable</div>
                    <div className="menu-item daily-lunch-special">Daily Lunch Special</div>
                    <div className="menu-item variable">variable</div>

                    {/* Row 6 */}
                    <div className="menu-item to-go">To Go</div>
                    <div className="menu-item open-drawer">Open Drawer</div>
                    <div className="menu-item edit-customer">Edit Customer</div>
                    <div className="menu-item calculator">Calculator</div>
                </div>
            </div>
            <div className="sales-right">

            </div>
        </div>
    );
}
 
export default Sales;