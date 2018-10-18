import React from 'react';
import '../sass/Header.css';


class Header extends React.Component {
    render() {
        return (
            <header className="header__content">
                <form>
                    <input type="text" placeholder="Search"/>
                </form>
                <div className="header__content--user">
                    {/* <img src="https://static.boredpanda.com/blog/wp-content/uploads/2016/10/worlds-most-beautiful-cats-3-57fb53b8a6127__700.jpg" alt="user profile"/> */}
                </div>
            </header>
        )
    }
}

export default Header;