import React from 'react';
import navImg from "../../assets/logo.png"
import dollarIcon from "../../assets/dollar.png"
const Navbar = ({availableBalance}) => {
    return (
        <div className="navbar">
            <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-50  rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><a>Home</a></li>
                <li><a>Fixture</a></li>
                <li><a>Teams</a></li>
                <li><a>Schedules</a></li>
                </ul>
            </div>
            <a className="text-xl">
                <img src={navImg} className='w-[60px] object-cover' alt="site logo" />
            </a>
            </div>
            <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-xl text-gray-600">
                <li><a>Home</a></li>
                <li><a>Fixture</a></li>
                <li><a>Teams</a></li>
                <li><a>Schedules</a></li>
            </ul>
            </div>
            <div className="navbar-end">
            <a className="btn bg-white shadow-none text-black border-1 border-gray-100">
                <span>{availableBalance}</span>
                <span>Coin</span>
                <img className='w-[20px] object-cover' src={dollarIcon} alt="" />
            </a>
            </div>
      </div>
    );
};

export default Navbar;