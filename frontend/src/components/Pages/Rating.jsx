import React from 'react';
import Navbar from '../Navbar';
import "./Rating.css"



const Rating = () => {
    return (
        <div>
            <Navbar activeItem="Rating"/>
            <div className="container text-center">
                <div className="row">
                    <div className="col winners">
                        <h1>Winners</h1>
                        <div className="card winner">
                            <div className="card-body">
                                0x78b... –– 100$ 
                            </div>
                        </div>
                        <div className="card winner">
                            <div className="card-body">
                                0x78b... –– 100$ 
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1">

                    </div>
                    <div className="col owners">
                        <h1>Owners</h1>
                        <div className="card winner">
                            <div className="card-body">
                                0x78b... –– 100$ 
                            </div>
                        </div>
                        <div className="card winner">
                            <div className="card-body">
                                0x78b... –– 100$ 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rating;
