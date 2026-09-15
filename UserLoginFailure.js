import React from "react";
import { Link } from "react-router-dom";

function UserLoginFailure() {

    return (
        <div className="container-fluid bg-light min-vh-100">

            <div className="container d-flex justify-content-center">

                <div
                    className="card shadow text-center mt-5 p-5"
                    style={{ width: "400px" }}
                >

                    <h2 className="text-danger">
                        User Login Failed
                    </h2>

                    <div className="alert alert-danger mt-3">
                        Invalid email or password.
                    </div>


                    <Link
                        to="/user-login"
                        className="btn btn-primary"
                    >
                        Try Again
                    </Link>


                    <Link
                        to="/"
                        className="btn btn-secondary mt-2"
                    >
                        Back to Home
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default UserLoginFailure;