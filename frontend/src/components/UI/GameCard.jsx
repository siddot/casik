import React from 'react';
import "./GameCard.css"

const GameCard = () => {
    return (
        <div className="card column" style={{width: "18rem"}}>
            <div className="card-header">
                <h5 className="card-title creator">0x78b...</h5>
                <h6 className="card-subtitle mb-2 text-muted id">#123456</h6> 
            </div>
            <div className="card-body info">
                <ul className="pool-params">
                    <li>winning symbol: 777</li>
                    <li>prize pool: 10 ETH</li>
                    <li>% to winner: 90 %</li>
                </ul>
            </div>
            <div className="card-footer">
                <a type="button" href="/games/123456" className="btn play-btn">Play</a>
            </div>
        </div>
    );
}

export default GameCard;
