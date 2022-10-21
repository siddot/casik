import React from 'react';
import Navbar from '../Navbar';
import GameCard from '../UI/GameCard';



const Games = () => {
    return (
        <div>
            <Navbar activeItem="Games"/>
            <div className="container">
                <GameCard/>
                <GameCard/>
                <GameCard/>
                <GameCard/>
                <GameCard/>
                <GameCard/>
                <GameCard/>
                <GameCard/>
            </div>
        </div>

    );
}

export default Games;
