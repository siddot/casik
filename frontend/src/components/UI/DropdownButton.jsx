import React from 'react';
import './DropdownButton.css';
import { SiDiscord } from "react-icons/si";
import { SiTelegram } from "react-icons/si";
import { SiGithub } from "react-icons/si";




const DropdownButton = props => {
  
    return (
      <div className="btn-group">
        <button type="button" className="btn dropdownBtnOutline" data-bs-toggle="dropdown" data-bs-auto-close="inside" aria-expanded="false">...</button>
        <ul className="dropdown-menu dropdown-back">
          <li><a className="dropdown-item on-cursor" href="#">Language</a></li>
          <hr></hr>
          <li><a className="dropdown-item on-cursor" href="#">Theme</a></li>
          <hr></hr>
          <li><a className="dropdown-item on-cursor" href="#">Whitepaper</a></li>
          <hr></hr>
          <li><hr className="dropdown-divider"/></li>
          <li>
            <p className="dropdown-item links">
              <a className="social-media" href="#"><SiDiscord size={35}/></a>
              <a className="social-media" href="#"><SiTelegram size={35}/></a>
              <a className="social-media" href="#"><SiGithub size={35}/></a>
            </p>
          </li>
        </ul>
      </div>
    )
  }
  
  export default DropdownButton;
