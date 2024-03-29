import React from "react";
import {NavLink} from "react-router-dom";

const Login = () => {
    return (
        <div className="container shadow my-5">
            <div className="row">
                <div className="col-md-5 d-flex flex-column align-items-center text-white justify-content-center form">
                    <h2 className="display-4 fw-bold">Welcome Back</h2>
                    <p className="lead text-center">
                        Enter Your Credential To Login
                    </p>
                    <h5 className="mb-4">OR</h5>
                    <NavLink
                        to="/register "
                        className="btn btn-outline-light rounded-pill pb-2 w-50">
                        Register
                    </NavLink>
                </div>
                <div className="col-md-6 p-5">
                    <h2 className="display-6 fw-bold mb-5">LOGIN</h2>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" class="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label
                                for="exampleInputPassword1"
                                class="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                            />
                        </div>
                        <div class="mb-3 form-check">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="exampleCheck1"
                            />
                            <label class="form-check-label" for="exampleCheck1">
                                Remembe me
                            </label>
                        </div>
                        <button type="submit" class="btn btn-primary w-100 mt-4 rounded-pill" >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
