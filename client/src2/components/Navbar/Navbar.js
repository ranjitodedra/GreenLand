// import React from 'react';
import { NavLink } from 'react-router-dom';
// import "../../App.css";

function Navbar(props) {
    return (
        <>
            <div className="navBar">
                <ul className="list">

                    {/* <li class="item"> */}
                        <NavLink className="nav-link active i" aria-current="page" to="/home">Home</NavLink>
                    {/* </li> */}

                    {/* <li class="item"> */}
                        
                        <NavLink className="nav-link i1" to="/properties">
                        Properties
                        <ul className='SubMenu'>
                            <NavLink className="nav-link active i" aria-current="page" to="/buy">Buy</NavLink>
                            <NavLink className="nav-link active i" aria-current="page" to="/rent">Rent</NavLink>
                        </ul>
                        </NavLink>
                    {/* </li> */}

                    {/* <li class="item"> */}
                        <NavLink className="nav-link i" to="/contact" id="con">Contact Us</NavLink>
                    {/* </li> */}

                    {
                        props.auth?
                            <>
                                    <NavLink className="nav-link i" to="/login">Login</NavLink>
                            </> : <>
                                    <NavLink className="nav-link i" to="/logout">Logout</NavLink>
                            </>
                    }

                </ul>

            </div>
        </>
    );
}

export default Navbar;