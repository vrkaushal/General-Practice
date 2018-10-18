import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            // this is the header of the website
            <header>
                <div className="header">
                    <div className="header__left">
                        <a href="/"><img className="logo" src="../Assets/Icons/brainflix-logo.svg" alt="BrainFlix Logo"/></a>
                    </div>
                    
                    <form className="header__form">
                        <input className="form__inputForm" type="text" placeholder="Search" />
                        <button className="form__searchBtn">
                            <img src="../Assets/Icons/Search.svg" alt="Search Icon" />
                        </button>
                    </form>
                    
                    <div className="header__right">
                        <div className="user__profile--share">
                            <Link to="/upload"><img className="upload" src="../Assets/Icons/upload.svg" /></Link>
                        </div>
                        <div className="user__profile--img">
                            <img src="../Assets/Images/john_gibbons.jpg" />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;