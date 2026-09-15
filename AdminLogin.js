import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/api/admin/login",
                {
                    username: username,
                    password: password
                }
            );

            if (response.data.success === true) {

                navigate("/admin-dashboard");

            } else {

                navigate("/admin-login-error");

            }

        } catch (error) {

            console.log(error);

            navigate("/admin-login-error");
        }
    };

    return (
        <div className="bg-light min-vh-100" align="center">

            <nav className="navbar navbar-dark bg-primary">
                <div className="container">
                    <span className="navbar-brand fw-bold">
                        Vaccination Booking System
                    </span>
                </div>
            </nav>

            <div className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: "80vh" }}>

                <div
                    className="card shadow-lg p-4"
                    style={{ width: "400px" }}
                >

                    <div className="text-center">

                        <h2 className="text-primary fw-bold">
                            Admin Login
                        </h2>

                        <p className="text-muted">
                            Login to access Admin Dashboard
                        </p>

                    </div>

                    <form onSubmit={handleLogin}>

                        <div className="mb-3">

                            <label className="form-label fw-bold">
                                Username
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) =>
                                    setUsername(e.target.value)
                                }
                                required
                            />

                        </div>

                        <div className="mb-3">

                            <label className="form-label fw-bold">
                                Password
                            </label>

                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                        >
                            Login
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}

export default AdminLogin;