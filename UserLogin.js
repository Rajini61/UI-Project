import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/api/users/login",
                {
                    email: email,
                    password: password
                }
            );

            if (response.data.success === true) {

                alert("User login successful");

                navigate("/user-dashboard");

            } else {

                navigate("/user-login-failure");

            }

        } catch (error) {

            console.log(error);

            navigate("/user-login-failure");
        }
    };

    return (
        <div className="container-fluid bg-light min-vh-100" align="center">

            {/* Navbar */}
            <nav className="navbar navbar-dark bg-primary">

                <div className="container">

                    <span className="navbar-brand fw-bold">
                        Vaccination Booking System
                    </span>

                </div>

            </nav>


            {/* Login Form */}
            <div className="container mt-5">

                <div
                    className="card shadow mx-auto p-4"
                    style={{ maxWidth: "400px" }}
                >

                    <div className="card-header bg-primary text-white text-center">

                        <h3>
                            User Login
                        </h3>

                    </div>


                    <div className="card-body">

                        <form onSubmit={handleLogin}>

                            {/* Email */}
                            <div className="mb-3">

                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* Password */}
                            <div className="mb-3">

                                <label className="form-label">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* Login Button */}
                            <div className="mb-3">

                                <button
                                    type="submit"
                                    className="btn btn-primary w-100"
                                >
                                    Login
                                </button>

                            </div>


                            {/* Back to Home */}
                            <div>

                                <button
                                    type="button"
                                    className="btn btn-secondary w-100"
                                    onClick={() =>
                                        navigate("/")
                                    }
                                >
                                    Back to Home
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default UserLogin;