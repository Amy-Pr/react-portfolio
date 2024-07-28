import { useState } from 'react';
import menu from '../assets/open_menu.svg';
import close from '../assets/close_menu.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header>
            <span>Amy Preci</span>
            <button className="menu-btn"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Navigation Menu"
            aria-expanded={isOpen}
            >
                <img src={isOpen ? close : menu} alt="menu"/>
            </button>
            {/* if state is open then give this a class of both 'nav' and 'open' */}
            <nav className= {`nav ${isOpen ? 'open' : ''}`}> 
                <ul>
                    <li>
                        <a href='#about'>About</a>
                    </li>
                    <li>
                        <a href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;