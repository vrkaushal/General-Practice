import React from 'react';
import {Link} from 'react-router-dom';
import '../sass/Sidebar.css';

// import '../assets/icons/Back\ Arrow.svg';

class Sidebar extends React.Component {
    render() {
        return (
            <div className="sidebar__content">
                <div className="sidebar__content--logo">
                    <img src="/wordmark/Wordmark.svg" alt="logo" />
                </div>
                {/* src={`${window.location.origin}/images/whatever.jpg`} */}
                
                <div className="sidebar__content--list">
                    <nav>
                        <ul>
                            <li>
                                <Link to={'/inventory'} className="nav__links">
                                    <img src="icons/Inventory.svg" /> 
                                    <h3>Inventory</h3>  
                                </Link>
                            </li>
                            <li>
                                <Link to={'/warehouse'} className="nav__links">
                                    <img src="icons/Location.svg" />
                                    <h3>Locations</h3>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/warehouse'} className="nav__links">
                                    <img src="icons/User.svg" />
                                    <h3>Users</h3>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="sidebar__content--version">
                    <p>Version 1.0</p>
                </div>
            </div>
        )
    }
}

export default Sidebar;