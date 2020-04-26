import React from "react";
import SearchBar from './SearchBar';
import userPicture from '../images/leaf.png';

const Header = () => {
    return (
        <header className="header">
            <img src={userPicture} alt="logo" className="logo" />
            <SearchBar />
            <div className='user-nav'>
                <span className="user-nav__user-name">Ashok G </span>
                <img src={userPicture} alt="User" className="user-nav__user-photo" />
            </div>
        </header>
    );
};

export default Header;
