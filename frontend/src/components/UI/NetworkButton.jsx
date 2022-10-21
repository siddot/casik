import React from 'react';
import './NetworkButton.css';
import eth_net from "../../images/networks-imgs/eth-net.png";


const NetworkButton = () => {
    return (
        <div class="btn-group">
            <button type="button" class="btn network-btn dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                    <img src={eth_net} height="28" width="20"/>
                    Ethereum
            </button>

            <ul class="dropdown-menu dropdown-menu-lg-end dropdown-back">
                <li><a class="dropdown-item on-cursor" href="#">Ethereum</a></li>
                <li><a class="dropdown-item on-cursor" href="#">Polygon</a></li>
                <li><a class="dropdown-item on-cursor" href="#">Optimism</a></li>

            </ul>
        </div>
    );
}

export default NetworkButton;
