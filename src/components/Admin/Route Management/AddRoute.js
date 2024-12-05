import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./AddRoute.css";

const AddRoute = ({ routes, setRoutes }) => {
    const [formData, setFormData] = useState({ routeName: "", origin: "", destination: "" });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.routeName || !formData.origin || !formData.destination) {
            alert("All fields are required!");
            return;
        }

        const newRoute = { 
            id: routes.length + 1,  // Simple way to generate a new ID
            routeName: formData.routeName, 
            origin: formData.origin, 
            destination: formData.destination 
        };
        
        setRoutes([...routes, newRoute]); // Add the new route to the list
        alert("Route added successfully!");
        navigate("/admin/routes");
    };

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Add Bus Route</h1>
            <div className="home-header"></div>
            <motion.div
                className="add-route"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="form-title">Add New Route</h1>
                <form onSubmit={handleSubmit} className="route-form">
                    <input
                        type="text"
                        name="routeName"
                        placeholder="Route Name"
                        value={formData.routeName}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="origin"
                        placeholder="Origin"
                        value={formData.origin}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="destination"
                        placeholder="Destination"
                        value={formData.destination}
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

export default AddRoute;
