import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function VaccinationCenter() {

    const [centers, setCenters] = useState([]);

    const fetchCenters = async () => {

        try {

            const response = await axios.get(
                "http://localhost:5000/api/admin/centers"
            );

            if (response.data.success === true) {
                setCenters(response.data.data);
            }

        } catch (error) {

            console.log(error);

            alert("Failed to fetch vaccination centers");
        }
    };

    useEffect(() => {
        fetchCenters();
    }, []);

    return (
        <div className="bg-light min-vh-100">

            <nav className="navbar navbar-dark bg-primary">

                <div className="container">

                    <span className="navbar-brand fw-bold">
                        Vaccination Booking System
                    </span>

                </div>

            </nav>

            <div className="container-fluid py-4">

                <div className="d-flex justify-content-between align-items-center mb-4">

                    <h2 className="text-primary fw-bold">
                        Vaccination Centres
                    </h2>

                    <Link
                        to="/create-center"
                        className="btn btn-success"
                    >
                        + Create Centre
                    </Link>

                </div>

                <div className="card shadow">

                    <div className="card-body">

                        <div className="table-responsive">

                            <table className="table table-bordered table-hover align-middle text-center">

                                <thead className="table-primary">

                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Pin Code</th>
                                        <th>Contact Number</th>
                                        <th>Vaccine Name</th>
                                        <th>Available Slots</th>
                                        <th>Status</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {centers.map((center) => (

                                        <tr key={center.id}>

                                            <td>{center.id}</td>

                                            <td className="fw-bold">
                                                {center.name}
                                            </td>

                                            <td>{center.address}</td>

                                            <td>{center.city}</td>

                                            <td>{center.state}</td>

                                            <td>{center.pin_code}</td>

                                            <td>{center.contact_number}</td>

                                            <td>{center.vaccine_name}</td>

                                            <td>
                                                <span className="badge bg-success">
                                                    {center.available_slots}
                                                </span>
                                            </td>

                                            <td>
                                                <span
                                                    className={
                                                        center.status === "ACTIVE"
                                                            ? "badge bg-success"
                                                            : "badge bg-danger"
                                                    }
                                                >
                                                    {center.status}
                                                </span>
                                            </td>

                                            <td>

                                                <Link
                                                    to={`/edit-center/${center.id}`}
                                                    className="btn btn-warning btn-sm"
                                                >
                                                    Edit
                                                </Link>

                                            </td>

                                            <td>

                                                <Link
                                                    to={`/delete-center/${center.id}`}
                                                    className="btn btn-danger btn-sm"
                                                    onClick={(e) => {

                                                        const result =
                                                            window.confirm(
                                                                "Are you sure you want to delete this vaccination center?"
                                                            );

                                                        if (!result) {
                                                            e.preventDefault();
                                                        }

                                                    }}
                                                >
                                                    Delete
                                                </Link>

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

export default VaccinationCenter;