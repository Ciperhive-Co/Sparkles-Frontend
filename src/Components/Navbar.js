import React from 'react';
import './Navbar.css';
import logo from './logo1.png'
import location from './location.png'
import { FaShoppingCart } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("navmenu");
      const sticky = header.offsetTop;

      if (window.pageYOffset > sticky) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const menuItems = [
    'Accessories',
    'Kit',
    'Wash & Dry',
    'Soaps & Cleaners',
    'Exterior Care',
    'Interior Care',
    'Lubricants & Filters',
  ];

  const handleMenuItemClick = (item) => {
    // Handle the click on menu items here (e.g., navigate to the respective page)
    console.log(`Clicked on ${item}`);
  };

  return (

    <div id='FullNavbar' className={isSticky ? 'sticky' : ''}>
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img src={logo} alt="Your Logo" className={`logo ${isSticky ? 'logoS' : ''}`}/>
        </a>       
      </div>
      <div>
      <a href="/">
          <img src={location} alt="Your location" className="location" />
      </a> 
      <div className='location-btn-text'>FIND A STORE</div>
      </div>
      <div className="navbar-middle">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="navbar-right">
        <div className='child1'>
        <button className="login-btn"> 
        <FontAwesomeIcon icon={faUser} style={{ fontSize: '48px', color: '#24245a' }} />
        <div className='login-btn-text'>Log in</div>
        </button>
        </div>

        <div className='child2'>
        <button className="cart-btn"> 
        <FaShoppingCart style={{ fontSize: '48px', color: '#24245a' }} />
        <div className='cart-btn-text'>Cart</div>
        </button>
        </div>
      </div>
    </nav>
    <div id="navmenu" className="navbar-menu">
        {menuItems.map((item) => (
          <div key={item} className="menu-item" onClick={() => handleMenuItemClick(item)}>
            {item}
            <div className="dropdown-menu">
              {/* Dropdown menu content goes here */}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Navbar;
