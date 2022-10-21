import React from 'react';
import './Navbar.css';
import ConnectButton from './UI/ConnectButton';
import logo from "../images/logo.png"
import DropdownButton from './UI/DropdownButton';
import NetworkButton from './UI/NetworkButton';

const Navbar = (props) => {
    return(
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 ">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <img src={logo} height="50" width="50" />
                </a>
        
                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="/" className={props.activeItem === "Main" ? "nav-item active-item nav-link px-2" : "nav-item nav-link px-2"}>Main</a></li>
                    <li><a href="/home" className={props.activeItem === "Home" ? "nav-item active-item nav-link px-2" : "nav-item nav-link px-2"}>Home</a></li>
                    <li><a href="/games" className={props.activeItem === "Games" ? "nav-item active-item nav-link px-2" : "nav-item nav-link px-2"}>Games</a></li>
                    <li><a href="/rating" className={props.activeItem === "Rating" ? "nav-item active-item nav-link px-2" : "nav-item nav-link px-2"}>Rating</a></li>
                </ul>
        
                <div className="col-md-3 text-end">
                    <NetworkButton/>
                    <ConnectButton/>
                    <DropdownButton/>
                </div>
            </header>
        </div>
    )
}

export default Navbar;

// const Navbar = (props) => {
//     return (
//         <div>
//             <div className="leftNav">
//                 <div className="my-2">
//                     <img className="logo-img" height="40" width="40" src={logo}></img>
//                 </div>
//             </div>
//             <div className="menuNav">
//                 <div className="my-2 buttonContainer buttonContainerTop">
//                     <Link to="/"><PageButton name={"Home"} isBold={props.activeItem === "Home" ? true : false}/></Link>
//                     <Link to="/games"><PageButton name={"Games"} isBold={props.activeItem === "Games" ? true : false}/></Link>
//                     <Link to="/rating"><PageButton name={"Rating"} isBold={props.activeItem === "Rating" ? true : false}/></Link>
//                 </div>



//                 <div className="rightNav">
//                     <div className="connectButtonContainer">
//                         <ConnectButton/>  
//                     </div>
//                     <div className="my-2 buttonContainer">
//                         <PageButton name={"..."} isBold={true} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Navbar;
