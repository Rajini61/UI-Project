import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div className="container-fluid bg-light min-vh-100">

            {/* Navbar */}
            <nav className="navbar navbar-dark bg-primary">

                <div className="container">

                    <span className="navbar-brand fw-bold">
                        Vaccination Booking System
                    </span>

                </div>

            </nav>


            {/* Home Page */}
            <div className="container mt-5">

                <div className="text-center">

                    <h1 className="text-primary fw-bold">
                        Vaccination Booking System
                    </h1>

                    <p className="text-secondary">
                        Welcome to the Vaccination Booking System
                    </p>

                </div>


                {/* Links Side by Side */}
                <div className="row mt-5">

                    {/* Admin Login */}
                    <div className="col-md-4">

                        <div className="card shadow text-center p-4">

                            <h4 className="text-primary">
                                Admin Login
                            </h4>

                            <p>
                                Login as administrator to manage the system.
                            </p>

                            <Link
                                to="/admin-login"
                                className="btn btn-primary"
                            >
                                Admin Login
                            </Link>

                        </div>

                    </div>


                    {/* User Registration */}
                    <div className="col-md-4">

                        <div className="card shadow text-center p-4">

                            <h4 className="text-success">
                                User Registration
                            </h4>

                            <p>
                                Register as a new user.
                            </p>

                            <Link
                                to="/user-registration"
                                className="btn btn-success"
                            >
                                User Registration
                            </Link>

                        </div>

                    </div>


                    {/* User Login */}
                    <div className="col-md-4">

                        <div className="card shadow text-center p-4">

                            <h4 className="text-info">
                                User Login
                            </h4>

                            <p>
                                Login to book your vaccination.
                            </p>

                            <Link
                                to="/user-login"
                                className="btn btn-info text-white"
                            >
                                User Login
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;