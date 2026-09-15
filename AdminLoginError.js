import React from "react";
import { Link } from "react-router-dom";

function AdminLoginError() {

    return (
        <div className="bg-light min-vh-100" align="center">

            <div className="container d-flex justify-content-center align-items-center"
                style={{ minHeight: "100vh" }}>

                <div className="card shadow-lg p-5 text-center"
                    style={{ maxWidth: "450px" }}>

                    <div className="text-danger display-4 mb-3">
                        ✕
                    </div>

                    <h2 className="text-danger">
                        Admin Login Failed
                    </h2>

                    <p className="text-muted">
                        Invalid username or password.
                    </p>

                    <Link
                        to="/admin-login"
                        className="btn btn-primary"
                    >
                        Try Again
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default AdminLoginError;