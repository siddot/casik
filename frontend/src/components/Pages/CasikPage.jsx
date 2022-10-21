import React from 'react';
import Navbar from '../Navbar';
import home_casik from "../../images/home-casik.png"

import "./CasikPage.css"


const CasikPage = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <h1 className="text">123456</h1>
                <ul className="params">
                    <li>winning symbol: 777</li>
                    <li>prize pool: 10 ETH</li>
                    <li>% to winner: 90%</li>
                </ul>
                <img className="slot" src={home_casik} height="300" width="300"/>
                <div className="d-grid gap-2 col-6 mx-auto callBtns">
                    <button className="btn playBtn" type="button">PLAY FOR <i>0.1</i> ETH</button>
                </div>
            </div>
            
        </div>
    );
}

export default CasikPage;
