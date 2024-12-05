import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import "./EditBus.css";

const EditBus = ({ buses, setBuses }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", type: "", capacity: "" });

    useEffect(() => {
        const busToEdit = buses.find((bus) => bus.id === parseInt(id));
        if (busToEdit) {
            setFormData(busToEdit);
        } else {
            alert("Bus not found!");
            navigate("/admin/buses");
        }
    }, [id, buses, navigate]);

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

        setBuses((prevBuses) =>
            prevBuses.map((bus) =>
                bus.id === parseInt(id) ? { ...bus, ...formData } : bus
            )
        );
        alert("Bus details updated successfully!");
        navigate("/admin/buses");
    };

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Edit Bus</h1>
            <div className="home-header"></div>
            <motion.div
                className="edit-bus"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="form-title">Edit Bus Details</h1>
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
                        Save Changes
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default EditBus;
