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
          <li><a className="dropdown-item on-cursor" href="#">Theme</a></li>
          <li><a className="dropdown-item on-cursor" href="#">Whitepaper</a></li>
          <li><hr className="dropdown-divider"/></li>
          <li>
            <p className="dropdown-item links">
              <a className="social-media" href="#"><SiDiscord/></a>
              <a className="social-media" href="#"><SiTelegram/></a>
              <a className="social-media" href="#"><SiGithub/></a>
            </p>
          </li>
        </ul>
      </div>
    )
  }
  
  export default DropdownButton;
