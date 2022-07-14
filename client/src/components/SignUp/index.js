import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import styles from "./styles.module.css";

const Signup = () => {

   
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: "",
        email: "",
        password: ""
    });

    // Handle Inputs
    const handleInput = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    // Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { username, email, password } = user;
        try {

            const res = await fetch('/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username, email, password
                })
            })
            console.log(res)
            if (res.status === 400 || !res) {
                window.alert("Already Used Details")
            } else {
                window.alert("Registered Successfully");
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
                <div className="row justify-content-end">

                    <div className="col-md-5 d-flex flex-column align-items-center justify-content-center text-white form order-2">
                        <h1 className="display-4 fw-bolder">Hello Friend</h1>
                        <p className="lead text-center">Enter your Details to Register</p>
                        <h5 className="mb-4">OR</h5>
                        <NavLink to="/login" className="btn btn-outline-light rounded-pill pb-2 w-50">Login</NavLink>
                    </div>

                    <div className="text-center">

                    <h1 className="display-6 fw-bolder mb-5">SIGN IN</h1>

                        <form onSubmit={handleSubmit} method="POST">

                            <div class="mb-3">
                                <input
                                    type="text"
                                    id="name"
                                    name="username"
                                    value={user.name}
                                    onChange={handleInput}
									className={styles.input}
									placeholder="name"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInput}
									className={styles.input}
									placeholder="email"
                                />
                            </div>

                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input
									type="password"
									placeholder="Password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleInput}
									className={styles.input}
                                />
                            </div>
                            <button type="submit" class="btn btn-outline-primary">Register</button>
                        </form>

 							<h5 className="btn-pad">already have account ?</h5>
 							<NavLink to="/Login" className="btn btn-outline-primary mt-3">Login</NavLink>
                    </div>
                </div>
        </div>
    )
}

export default Signup;