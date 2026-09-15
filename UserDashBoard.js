import React from "react";
import { Link } from "react-router-dom";

function UserDashboard() {

    return (
        <div className="container-fluid bg-light min-vh-100">

            {/* Navbar */}
            <nav className="navbar navbar-dark bg-primary">

                <div className="container-fluid">

                    <span className="navbar-brand fw-bold">
                        Vaccination Booking System
                    </span>

                    <Link
                        to="/"
                        className="btn btn-danger"
                    >
                        Logout
                    </Link>

                </div>

            </nav>


            {/* Dashboard */}
            <div className="container mt-5">

                <div className="card shadow text-center p-5">

                    <h1 className="text-success">
                        User Dashboard
                    </h1>

                    <p className="text-secondary mt-3">
                        Welcome to the Vaccination Booking System.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default UserDashboard;