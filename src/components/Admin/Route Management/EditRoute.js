import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import "./EditRoute.css";

const EditRoute = ({ routes, setRoutes }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ routeName: "", origin: "", destination: "" });

    useEffect(() => {
        const routeToEdit = routes.find((route) => route.id === parseInt(id));
        if (routeToEdit) {
            setFormData(routeToEdit);
        } else {
            alert("Route not found!");
        }
    }, [id, routes]);

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

        setRoutes((prevRoutes) =>
            prevRoutes.map((route) =>
                route.id === parseInt(id) ? { ...route, ...formData } : route
            )
        );
        alert("Route updated successfully!");
        navigate("/admin/routes");
    };

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Edit Bus Route</h1>
            <div className="home-header"></div>
            <motion.div
                className="edit-route"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="form-title">Edit Route</h1>
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
                        Save Changes
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default EditRoute;
