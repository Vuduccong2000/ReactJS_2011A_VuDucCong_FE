import React from 'react';
import { useState } from 'react';
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";
import * as Setting from "./../../constants/Setting";
function Register(props) {
	const [useName, setUseName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");

	let history = useHistory();

	async function createAccount(e) {
		e.preventDefault();
		const data = {
			name:useName,
			email: email,
			password: password,
			confirm_password:repeatPassword,
		};
		console.log(data);
		const config = {
			headers: {
				Accept: "application/json",
				"Content-type": "application/json",
				"X-Requested-With": "XMLHttpRequest",
			},
		};
		let url = (await Setting.URL) + "api/auth/signup";
		try {
			return axios(url, {
				method: "POST",
				data: data,
				config,
			})
				.then((res) => {
					if (res.status === 201) {
						alert("Đăng ký tài khoản thành công");
						history.push("/login");
					} else {
						alert("Đăng ký tài khoản không thành công");
					}
				})
				.catch((err) => {
					alert("Đăng ký tài khoản không thành công");
					console.log(err);
				});
		} catch (err) {
			alert("Đăng ký tài khoản không thành công");
			console.log(err);
		}
	}
	return (
		<div className="c-app flex-row align-items-center">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-md-6">
						<div className="card mx-4">
							<div className="card-body p-4">
								<h1>Register</h1>
								<p className="text-muted">Create your account</p>
								<form>
									<div className="input-group mb-3">
										<div className="input-group-prepend"><span className="input-group-text">
											<svg className="c-icon">
												<use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-user" />
											</svg></span></div>
										<input className="form-control" type="text" name="name" placeholder="Username" value={useName} onChange={(e) => setUseName(e.target.value)}/>
									</div>
									<div className="input-group mb-3">
										<div className="input-group-prepend"><span className="input-group-text">
											<svg className="c-icon">
												<use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open" />
											</svg></span></div>
										<input className="form-control" type="text" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
									</div>
									<div className="input-group mb-3">
										<div className="input-group-prepend"><span className="input-group-text">
											<svg className="c-icon">
												<use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
											</svg></span></div>
<input className="form-control" type="password" name="password" placeholder="Password" value={password} minLength='0' maxLength='11' onChange={(e) => setPassword(e.target.value)} />
									</div>
									<div className="input-group mb-4">
										<div className="input-group-prepend"><span className="input-group-text">
											<svg className="c-icon">
												<use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
											</svg></span></div>
										<input className="form-control" type="password" name="repeatPassword" placeholder="Repeat password" value={repeatPassword} minLength='0' maxLength='11' onChange={(e) => setRepeatPassword(e.target.value)} />
									</div>
								</form>
								<button onClick={createAccount} className="btn btn-block btn-success" type="submit">Create Account</button>
							</div>
							<div className="card-footer p-4">
								<div className="row">
									<div className="col-6">
										<button className="btn btn-block btn-facebook" type="button"><span>facebook</span></button>
									</div>
									<div className="col-6">
										<button className="btn btn-block btn-twitter" type="button"><span>twitter</span></button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Register;