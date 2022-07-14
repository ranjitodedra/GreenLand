import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import "./Login.css"

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
				window.location.reload();
				navigate('/');
			}

		} catch (error) {
			console.log(error);
		}
	}

	return (
		<>
	
		<div className="shape_up"></div>

		<div className="Outer">
			<div className="Inner">
				<h1 className="cl">Login</h1>
			</div>

			<div className="contactDiv">
				<div className="Row">
					<div className="loginStyle">
						<form onSubmit={handleSubmit} className="formContainer">
							<div className="input_div1">

								<label for="exampleInputEmail1" class="formLabel">
									Email address
								</label>

								<input
									type="email"
									className="input"
									id="exampleInputEmail1"
									name="email"
									required
									value={user.email}
									onChange={handleChange}
									placeholder="E-mail"
								/>

							</div>

							<div className="input_div2">

								<label for="exampleInputPassword1" class="formLabel">Password</label>

								<input
									type="password"
									className="input"
									id="exampleInputPassword1"
									name="password"
									required
									value={user.password}
									onChange={handleChange}
									placeholder="Password"
								/>

							</div>
						<div className="login_out">
							<button type="submit" className="loginB">
								Login
							</button>
						</div>

						</form>

						<div className="ask">
							<h5 className="">Don't have account ?</h5>
							<NavLink className="reg" aria-current="page" to="/register">Register</NavLink>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div className="shape_down"></div>
		</>
	)
}

export default Login;