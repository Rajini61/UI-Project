import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserRegistration() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [pinCode, setPinCode] = useState("");

    const handleRegistration = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                "http://localhost:5000/api/users/register",
                {
                    name: name,
                    email: email,
                    password: password,
                    phone: phone,
                    pinCode: pinCode
                }
            );

            if (response.data.success === true) {

                alert("User registered successfully");

                navigate("/user-dashboard");

            } else {

                alert("Registration failed");

                navigate("/user-registration");
            }

        } catch (error) {

            console.log(error);

            alert("Registration failed");

            navigate("/user-registration");
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


            {/* Registration Form */}
            <div className="container mt-5">

                <div className="card shadow">

                    <div className="card-header bg-success text-white text-center">

                        <h3>
                            User Registration
                        </h3>

                    </div>


                    <div className="card-body">

                        <form onSubmit={handleRegistration}>

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


                            {/* Email */}
                            <div className="mb-3">

                                <label className="form-label">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) =>
                                        setEmail(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* Password */}
                            <div className="mb-3">

                                <label className="form-label">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />

                            </div>


                            {/* Phone */}
                            <div className="mb-3">

                                <label className="form-label">
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={phone}
                                    onChange={(e) =>
                                        setPhone(e.target.value)
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


                            {/* Register Button */}
                            <div className="mb-3">

                                <button
                                    type="submit"
                                    className="btn btn-success w-100"
                                >
                                    Register
                                </button>

                            </div>


                            {/* Back Button */}
                            <div>

                                <button
                                    type="button"
                                    className="btn btn-secondary w-100"
                                    onClick={() =>
                                        navigate("/")
                                    }
                                >
                                    Back to Home
                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default UserRegistration;