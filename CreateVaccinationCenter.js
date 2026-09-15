import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateCenter() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [pinCode, setPinCode] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [vaccineName, setVaccineName] = useState("");
    const [availableSlots, setAvailableSlots] = useState("");
    const [status, setStatus] = useState("ACTIVE");

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/api/admin/centers",
                {
                    name: name,
                    address: address,
                    city: city,
                    state: state,
                    pinCode: pinCode,
                    contactNumber: contactNumber,
                    vaccineName: vaccineName,
                    availableSlots: Number(availableSlots),
                    status: status
                }
            );

            if (response.data.success === true) {

                alert("Vaccination center created successfully");

                navigate("/vaccination-centers");
            }

        } catch (error) {

            console.log(error);

            alert("Failed to create vaccination center");
        }
    };

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


            {/* Form */}
            <div className="container mt-5">

                <div className="card shadow">

                    <div className="card-header bg-primary text-white text-center">

                        <h3>
                            Create Vaccination Centre
                        </h3>

                    </div>


                    <div className="card-body">

                        <form onSubmit={handleSubmit}>

                            {/* Name */}
                            <div className="mb-3">

                                <label className="form-label">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* Address */}
                            <div className="mb-3">

                                <label className="form-label">
                                    Address
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={address}
                                    onChange={(e) =>
                                        setAddress(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* City */}
                            <div className="mb-3">

                                <label className="form-label">
                                    City
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={city}
                                    onChange={(e) =>
                                        setCity(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* State */}
                            <div className="mb-3">

                                <label className="form-label">
                                    State
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={state}
                                    onChange={(e) =>
                                        setState(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* Pin Code */}
                            <div className="mb-3">

                                <label className="form-label">
                                    Pin Code
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={pinCode}
                                    onChange={(e) =>
                                        setPinCode(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* Contact Number */}
                            <div className="mb-3">

                                <label className="form-label">
                                    Contact Number
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={contactNumber}
                                    onChange={(e) =>
                                        setContactNumber(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* Vaccine Name */}
                            <div className="mb-3">

                                <label className="form-label">
                                    Vaccine Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={vaccineName}
                                    onChange={(e) =>
                                        setVaccineName(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* Available Slots */}
                            <div className="mb-3">

                                <label className="form-label">
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


                            {/* Status */}
                            <div className="mb-3">

                                <label className="form-label">
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


                            {/* Create Button */}
                            <div className="mb-3">

                                <button
                                    type="submit"
                                    className="btn btn-success w-100"
                                >
                                    Create Centre
                                </button>

                            </div>


                            {/* Back Button */}
                            <div>

                                <button
                                    type="button"
                                    className="btn btn-secondary w-100"
                                    onClick={() =>
                                        navigate("/admin-dashboard")
                                    }
                                >
                                    Back to Dashboard
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default CreateCenter;