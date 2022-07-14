import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navigate, NavLink } from "react-router-dom";
import './Navbar.css';
import Login from "../Login";
import Properties from "../Properties/Properties";

const Navbar = (props) => {

    return (
        <>
            <div className="container-fluid">
                <nav class="navbar navbar-dark navbar-expand-lg">
                    <div class="container-fluid">

                        <NavLink exact className="navbar-brand" to="/">greenLand.com</NavLink>

                        <button class="navbar-toggler bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>


                        <div class="collapse navbar-collapse" id="navbarSupportedContent">

                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                                <li class="nav-item">
                                    <NavLink exact className="nav-link active" aria-current="page" to="/">Home</NavLink>
                                </li>

                                <li class="nav-item">
                                    <NavLink exact className="nav-link active" aria-current="page" to="/about">About</NavLink>
                                </li>

                                <li class="nav-item">
                                    <NavLink exact className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
                                </li>

                                {
                                    props.auth ?
                                        <>
                                            <li class="nav-item">
                                                <NavLink exact className="nav-link active" to="/login">
                                                    Login
                                                </NavLink>
                                            </li>
                                        </> : <>
                                            <li class="nav-item">
                                                <NavLink exact className="nav-link active" to="/create">
                                                    Create
                                                </NavLink>
                                            </li>
                                            <li class="nav-item">
                                                <NavLink exact className="nav-link active" to="/logout">
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </>
                                }

                            </ul>

                        </div>

                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;