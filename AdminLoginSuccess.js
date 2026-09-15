import React from "react";
import { Link } from "react-router-dom";

function AdminLoginSuccess() {

    return (
        <div className="bg-light min-vh-100" align="center">

            <nav className="navbar navbar-dark bg-primary">

                <div className="container">

                    <span className="navbar-brand fw-bold">
                        Vaccination Booking System
                    </span>

                    <Link
                        to="/"
                        className="btn btn-light text-danger fw-bold"
                    >
                        Logout
                    </Link>

                </div>

            </nav>

            <div className="container py-5">

                <div className="text-center">

                    <h1 className="text-primary fw-bold">
                        ADMIN DASHBOARD
                    </h1>

                    <p className="text-muted">
                        Welcome Admin
                    </p>

                </div>

                <div className="row justify-content-center g-4 mt-3">

                    <div className="col-md-4">

                        <div className="card shadow text-center p-4">

                            <h4>
                                Create Vaccination Centre
                            </h4>

                            <Link
                                to="/create-center"
                                className="btn btn-primary mt-3"
                            >
                                Create Centre
                            </Link>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow text-center p-4">

                            <h4>
                                Vaccination Centres
                            </h4>

                            <Link
                                to="/vaccination-centers"
                                className="btn btn-success mt-3"
                            >
                                View Centres
                            </Link>

                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="card shadow text-center p-4">

                            <h4>
                                Registered Users
                            </h4>

                            <Link
                                to="/show-all-users"
                                className="btn btn-info text-white mt-3"
                            >
                                Show All Users
                            </Link>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default AdminLoginSuccess;