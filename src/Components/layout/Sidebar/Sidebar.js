import './Sidebar.css'
import logo from '../../../assets/logo.png'
import classNames from 'classnames'
import { kitchensidebar, mainsidebar } from './SidebarDetails'
import { Link, useLocation } from 'react-router-dom'
import { FaPowerOff } from 'react-icons/fa'
export const Sidebar = () => {  
    const location = useLocation();
    // const isLinkActive = (val) => {
    //     return location.pathname(val.link);
    // };
    return ( 
        <div className="sidebar">
            <div className="company-logo">
                <div className="company-logo-inner">
                    <img src={logo} className='logo'></img>
                </div>
            </div>
            <div className="sidebar-links">
                <nav>
                    {mainsidebar.map((val, index)=>{
                        return(
                            <li 
                                key={index}
                            >
                                <Link to={val.link}
                                className={ classNames('link', { ['active2']: location.pathname == val.link})}
                                >
                                    <div className="nav-icon">
                                        {val.icon}
                                    </div>
                                    <p>{val.title}</p>
                                </Link>
                            </li>
                        )
                    })}
                </nav>
            </div>
            <div className="sidebar-bottom">
                <nav>
                    <li >
                        <Link to='/dashboard/settings'
                        className={ classNames('link', { ['active2']: location.pathname === '/dashboard/settings'})}
                        >
                            <FaPowerOff />
                            <p>Clock Out</p>
                        </Link>
                    </li>
                </nav>
            </div>
        </div>
    );
}


export const KitchenSidebar = () => {  
    const location = useLocation();
    // const isLinkActive = (val) => {
    //     return location.pathname(val.link);
    // };
    return ( 
        <div className="sidebar">
            <div className="company-logo">
                <div className="company-logo-inner">
                    <img src={logo} className='logo'></img>
                </div>
            </div>
            <div className="sidebar-links">
                <nav>
                    {kitchensidebar.map((val, index)=>{
                        return(
                            <li 
                                key={index}
                            >
                                <Link to={val.link}
                                className={ classNames('link', { ['active2']: location.pathname == val.link})}
                                >
                                    <div className="nav-icon">
                                        {val.icon}
                                    </div>
                                    <p>{val.title}</p>
                                </Link>
                            </li>
                        )
                    })}
                </nav>
            </div>
            <div className="sidebar-bottom">
                <nav>
                    <li >
                        <Link to='/dashboard/settings'
                        className={ classNames('link', { ['active2']: location.pathname === '/dashboard/settings'})}
                        >
                            <FaPowerOff />
                            <p>Clock Out</p>
                        </Link>
                    </li>
                </nav>
            </div>
        </div>
    );
}
