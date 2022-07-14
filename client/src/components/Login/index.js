import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import styles from "./styles.module.css";

const Login = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // Handle Input
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        setUser({ ...user, [name]: value })
    }

    // Handle Login
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = user;
        try {
            const res = await fetch('/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            if (res.status === 400 || !res) {
                window.alert("Invalid Credentials")
            } else {
                window.alert("Login Successfull");
                navigate('/');
                window.location.reload();
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="container text-center">
                        <h1 className="display-6 fw-bolder mb-5">LOGIN</h1>

                        <form onSubmit={handleSubmit}>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    
                                    placeholder="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
									className={styles.input}
                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input
                                    type="password"
                                    
                                    placeholder="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
									className={styles.input}
                                />
                            </div>

                            <button type="submit" class="btn btn-primary">
                                Login
                            </button>

                        </form>

						<div className="text-center">
 							<h5 className="btn-pad">Don't have account ?</h5>
 							<a href="/SignUp" className="btn btn-outline-primary mt-3">SignUp</a>
 						</div>
						
                    </div>
                </div>
    )
}

export default Login;