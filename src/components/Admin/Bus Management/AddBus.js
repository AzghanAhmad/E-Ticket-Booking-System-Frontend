import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./AddBus.css";

const AddBus = ({ buses, setBuses }) => {
    const [formData, setFormData] = useState({ name: "", type: "", capacity: "" });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.type || !formData.capacity) {
            alert("All fields are required!");
            return;
        }

        const newBus = {
            id: buses.length + 1, // Generate a new ID
            name: formData.name,
            type: formData.type,
            capacity: parseInt(formData.capacity, 10),
        };

        setBuses([...buses, newBus]);
        alert("Bus added successfully!");
        navigate("/admin/buses");
    };

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Add Bus</h1>
            <div className="home-header"></div>
            <motion.div
                className="add-bus"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="form-title">Add New Bus</h1>
                <form onSubmit={handleSubmit} className="bus-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Bus Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="type"
                        placeholder="Bus Type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="number"
                        name="capacity"
                        placeholder="Capacity"
                        value={formData.capacity}
                        onChange={handleInputChange}
                        required
                    />
                    <motion.button
                        type="submit"
                        className="submit-button"
                        whileHover={{ scale: 1.1 }}
                    >
                        Add Bus
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default AddBus;
