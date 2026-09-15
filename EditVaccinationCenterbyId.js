import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditCenter() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [center, setCenter] = useState(null);

    const [availableSlots, setAvailableSlots] = useState("");
    const [status, setStatus] = useState("");

    const fetchCenter = async () => {

        try {

            const response = await axios.get(
                `http://localhost:5000/api/admin/centers/${id}`
            );

            if (response.data.success === true) {

                setCenter(response.data.data);

                setAvailableSlots(
                    response.data.data.available_slots
                );

                setStatus(
                    response.data.data.status
                );
            }

        } catch (error) {

            console.log(error);

            alert("Failed to fetch vaccination center");

            navigate("/vaccination-centers");
        }
    };

    useEffect(() => {
        fetchCenter();
    }, [id]);

    const handleUpdate = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.put(
                `http://localhost:5000/api/admin/centers/${id}`,
                {
                    availableSlots: Number(availableSlots),
                    status: status
                }
            );

            if (response.data.success === true) {

                alert("Vaccination center updated successfully");

                navigate("/vaccination-centers");
            }

        } catch (error) {

            console.log(error);

            alert("Failed to update vaccination center");
        }
    };

    if (center === null) {

        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-primary"></div>
                <h4 className="mt-3">
                    Loading...
                </h4>
            </div>
        );
    }

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

                <div className="card shadow-lg">

                    <div className="card-header bg-warning text-dark text-center">

                        <h3 className="mb-0">
                            Edit Vaccination Centre
                        </h3>

                    </div>

                    <div className="card-body p-4">

                        <div className="row">

                            <div className="col-md-6">

                                <p>
                                    <b>ID:</b> {center.id}
                                </p>

                                <p>
                                    <b>Name:</b> {center.name}
                                </p>

                                <p>
                                    <b>Address:</b> {center.address}
                                </p>

                                <p>
                                    <b>City:</b> {center.city}
                                </p>

                                <p>
                                    <b>State:</b> {center.state}
                                </p>

                            </div>

                            <div className="col-md-6">

                                <p>
                                    <b>Pin Code:</b> {center.pin_code}
                                </p>

                                <p>
                                    <b>Contact Number:</b>{" "}
                                    {center.contact_number}
                                </p>

                                <p>
                                    <b>Vaccine Name:</b>{" "}
                                    {center.vaccine_name}
                                </p>

                            </div>

                        </div>

                        <hr />

                        <form onSubmit={handleUpdate}>

                            <div className="mb-3">

                                <label className="form-label fw-bold">
                                    Available Slots
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    value={availableSlots}
                                    onChange={(e) =>
                                        setAvailableSlots(e.target.value)
                                    }
                                    required
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label fw-bold">
                                    Status
                                </label>

                                <select
                                    className="form-select"
                                    value={status}
                                    onChange={(e) =>
                                        setStatus(e.target.value)
                                    }
                                >
                                    <option value="ACTIVE">
                                        ACTIVE
                                    </option>

                                    <option value="INACTIVE">
                                        INACTIVE
                                    </option>

                                </select>

                            </div>

                            <div className="text-center">

                                <button
                                    type="submit"
                                    className="btn btn-warning px-4 me-2"
                                >
                                    Update Centre
                                </button>

                                <button
                                    type="button"
                                    className="btn btn-secondary px-4"
                                    onClick={() =>
                                        navigate("/vaccination-centers")
                                    }
                                >
                                    Back
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default EditCenter;