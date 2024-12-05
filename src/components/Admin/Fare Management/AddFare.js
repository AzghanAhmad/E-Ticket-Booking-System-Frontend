import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./AddFare.css";

const AddFare = ({ fares, setFares, buses, routes }) => {
    const [formData, setFormData] = useState({ routeName: "", busType: "", amount: "" });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.routeName || !formData.busType || !formData.amount) {
            alert("All fields are required!");
            return;
        }

        const newFare = { 
            id: fares.length + 1, 
            routeName: formData.routeName, 
            busType: formData.busType, 
            amount: parseFloat(formData.amount) 
        };

        setFares([...fares, newFare]);
        alert("Fare added successfully!");
        navigate("/admin/fares");
    };

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Add Fare</h1>
            <div className="home-header"></div>
            <motion.div
                className="add-fare"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="form-title">Add Fare</h1>
                <form onSubmit={handleSubmit} className="fare-form">
                    <select name="routeName" onChange={handleInputChange} required>
                        <option value="">Select Route</option>
                        {routes.map((route) => (
                            <option key={route.id} value={route.routeName}>
                                {route.routeName}
                            </option>
                        ))}
                    </select>
                    <select name="busType" onChange={handleInputChange} required>
                        <option value="">Select Bus Type</option>
                        {buses.map((bus) => (
                            <option key={bus.id} value={bus.type}>
                                {bus.type}
                            </option>
                        ))}
                    </select>
                    <input
                        type="number"
                        name="amount"
                        placeholder="Fare Amount (PKR)"
                        value={formData.amount}
                        onChange={handleInputChange}
                        required
                    />
                    <motion.button
                        type="submit"
                        className="submit-button"
                        whileHover={{ scale: 1.1 }}
                    >
                        Submit
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default AddFare;
