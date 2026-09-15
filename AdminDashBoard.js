import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {

    return (
        <div className="container-fluid bg-light min-vh-100" align="center">

            {/* Navbar */}
            <nav className="navbar navbar-dark bg-primary">

                <div className="container-fluid" align="left">

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

                <div className="text-center">

                    <h1 className="text-primary fw-bold">
                        ADMIN DASHBOARD
                    </h1>

                    <p className="text-secondary">
                        Manage vaccination centres and users
                    </p>

                </div>


                {/* Links Side by Side */}
                <div className="row mt-5">

                    {/* Create Centre */}
                    <div className="col-md-4">

                        <div className="card shadow text-center p-4">

                            <h4 className="text-primary">
                                Create Vaccination Centre
                            </h4>

                            <p>
                                Create a new vaccination centre.
                            </p>

                            <Link
                                to="/create-center"
                                className="btn btn-primary"
                            >
                                Create Centre
                            </Link>

                        </div>

                    </div>


                    {/* View Centres */}
                    <div className="col-md-4">

                        <div className="card shadow text-center p-4">

                            <h4 className="text-success">
                                View Vaccination Centres
                            </h4>

                            <p>
                                View, edit and delete vaccination centres.
                            </p>

                            <Link
                                to="/vaccination-centers"
                                className="btn btn-success"
                            >
                                View Centres
                            </Link>

                        </div>

                    </div>


                    {/* Show Users */}
                    <div className="col-md-4">

                        <div className="card shadow text-center p-4">

                            <h4 className="text-info">
                                Show All Users
                            </h4>

                            <p>
                                View all registered users.
                            </p>

                            <Link
                                to="/show-all-users"
                                className="btn btn-info text-white"
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

export default AdminDashboard;