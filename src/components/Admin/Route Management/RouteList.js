import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RouteList.css";

const RouteList = ({ routes, setRoutes }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRoutes = async () => {
            if (!routes || routes.length === 0) {
                setLoading(true);
                setError(null);
                try {
                    const response = await axios.get("http://localhost:5000/api/routes");
                    setRoutes(response.data);
                } catch (err) {
                    console.error("Error fetching routes:", err);
                    setError("Failed to fetch routes. Please try again later.");
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchRoutes();
    }, [routes, setRoutes]);

    const deleteRoute = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/routes/${id}`);
            setRoutes(routes.filter((route) => route._id !== id));
        } catch (err) {
            console.error("Error deleting route:", err);
        }
    };

    if (loading) {
        return (
            <motion.div animate={{ scale: [0.8, 1] }} className="loading">
                Loading...
            </motion.div>
        );
    }

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Bus Routes</h1>
            <div className="home-header"></div>
            <div className="route-list">
                <h1 className="list-title">Route Details</h1>
                {routes.length === 0 ? (
                    <p>No routes available. Please add a new route.</p>
                ) : (
                    <table className="route-table">
                        <thead>
                            <tr>
                                <th>Start</th>
                                <th>End</th>
                                <th>Stops</th>
                                <th>Distance (km)</th>
                                <th>Estimated Duration</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {routes.map((route) => (
                                <tr key={route._id}>
                                    <td>{route.start}</td>
                                    <td>{route.end}</td>
                                    <td>{route.stops ? route.stops.join(", ") : "None"}</td>
                                    <td>{route.distance}</td>
                                    <td>{route.estimatedDuration || "N/A"}</td>
                                    <td className="actions">
                                        <motion.button
                                            className="edit-button"
                                            whileHover={{ scale: 1.1 }}
                                            onClick={() => navigate(`/admin/routes/edit/${route._id}`)}
                                        >
                                            Edit
                                        </motion.button>
                                        <motion.button
                                            className="delete-button"
                                            whileHover={{ scale: 1.1 }}
                                            onClick={() => deleteRoute(route._id)}
                                        >
                                            Delete
                                        </motion.button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <br />
                <motion.button
                    className="add-button"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => navigate("/admin/routes/add")}
                >
                    Add New Route
                </motion.button>
            </div>
        </div>
    );
};

export default RouteList;
