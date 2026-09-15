import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ShowAllUsers() {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/admin/users"
            );

            if (response.data.success === true) {

                setUsers(response.data.data);

            }

        } catch (error) {

            console.log(error);

            alert("Failed to fetch users");
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div className="bg-light min-vh-100" align="center">

            <nav className="navbar navbar-dark bg-primary">

                <div className="container">

                    <span className="navbar-brand fw-bold">
                        Vaccination Booking System
                    </span>

                </div>

            </nav>

            <div className="container py-5">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <div>

                        <h2 className="text-primary fw-bold">
                            Registered Users
                        </h2>

                        <p className="text-muted">
                            List of all registered users
                        </p>

                    </div>

                    <span className="badge bg-primary fs-6">
                        Total Users: {users.length}
                    </span>

                </div>

                <div className="card shadow-lg">

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover align-middle text-center">

                                <thead className="table-primary">

                                    <tr>

                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Pin Code</th>
                                        <th>Created At</th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {users.map((user) => (

                                        <tr key={user.id}>

                                            <td>
                                                {user.id}
                                            </td>

                                            <td className="fw-bold">
                                                {user.name}
                                            </td>

                                            <td>
                                                {user.email}
                                            </td>

                                            <td>
                                                {user.phone}
                                            </td>

                                            <td>
                                                {user.pin_code}
                                            </td>

                                            <td>
                                                {user.created_at}
                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    </div>

                </div>

                <div className="mt-4">

                    <Link
                        to="/admin-dashboard"
                        className="btn btn-secondary"
                    >
                        ← Back to Dashboard
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default ShowAllUsers;