import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import logo from '../assets/images/logo.png';

import '../styles/header.scss';

const Header = () => {
  const [, setScrollY] = useState(0);
  const [header, setHeader] = useState('header default-pos clearfix');

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      setScrollY(window.scrollY);

      if (window.scrollY> 10) {
        setHeader('header scrolled-pos clearfix');
        //console.log('window.scrollY', window.scrollY);
      } else {
        setHeader(header);
      }
      //console.log('window.scrollY', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={header}>
      <div className="logo-container">
        <a href="/" className="logo">
          <img width="50" height="50" src={logo} alt="RP Tools logo" />
          <span className='logo-text'>iStoyanov</span>
        </a>
      </div>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <FontAwesomeIcon className="navicon" icon={solid('bars')} size="1x" />
      </label>
      <ul className="menu">
        <li>
          <HashLink className="menu_item" smooth to="#">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('house')} size="1x" fixedWidth />
            Home
          </HashLink>
        </li>
        <li className="dropdown">
          <HashLink className="menu_item" smooth to="#web-development">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('code')} size="1x" />
            Web Development
          </HashLink>
          <ul className="dropdown-content">
            <li>
              <HashLink smooth to="#general-projects">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('laptop-code')} size="1x" />
                General Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#opensource-projects">
                <FontAwesomeIcon className="icon_menu_li" icon={brands('github')} size="1x" />
                OpenSource Projects
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#cms-projects">
                <FontAwesomeIcon className="icon_menu_li" icon={brands('wordpress-simple')} size="1x" />
                CMS Projects
              </HashLink>
            </li>
          </ul>
        </li>
        <li className="dropdown">
          <HashLink className="menu_item" smooth to="#multimedia-design">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('pen-ruler')} size="1x" fixedWidth />
            Multimedia Desgin
          </HashLink>
          <ul className="dropdown-content">
            <li>
              <HashLink smooth to="#ui-ux">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('desktop')} size="1x" fixedWidth />
                Design & Research
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#mixed-media">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('globe')} size="1x" fixedWidth />
                Mixed Media
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="#useful-resources">
                <FontAwesomeIcon className="icon_menu_li" icon={solid('book-open')} size="1x" fixedWidth />
                Useful Resources
              </HashLink>
            </li>
          </ul>
        </li>
        <li>
          <HashLink className="menu_item" smooth to="#art-and-graphic-design">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('palette')} size="1x" fixedWidth />
            Art & Graphics
          </HashLink>
        </li>
        <li>
          <HashLink className="menu_item" smooth to="#myself-and-reach">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('user-ninja')} size="1x" fixedWidth />
            Who am I?
          </HashLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;