import React from 'react';
import Navbar from '../Navbar';
import logo from "../../images/logo.png"
import home_casik from "../../images/home-casik.png"

import './Home.css'


const Home = () => {
    return (
        <div>
            <Navbar activeItem="Home"/>
            <div className="container">
                <h1 className="text">Make Money</h1>
                <h2 className="text">Play! Or create your own casino in-game!</h2>
                <img src={home_casik} height="300" width="300"/>
                <div class="d-grid gap-2 col-6 mx-auto callBtns">
                    <button class="btn createBtn" type="button">CREATE YOU OWN CASINO</button>
                    <button class="btn playBtn" type="button">PLAY CASINO</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
