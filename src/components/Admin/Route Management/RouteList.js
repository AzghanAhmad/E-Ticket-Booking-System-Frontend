import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./RouteList.css";

const RouteList = ({ routes, setRoutes }) => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Fetch routes from the backend
    useEffect(() => {
        const fetchRoutes = async () => {
            setLoading(true);
            try {
                const response = await axios.get("http://localhost:5000/api/routes");
                setRoutes(response.data);
            } catch (error) {
                console.error("Error fetching routes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRoutes();
    }, [setRoutes]);

    const deleteRoute = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/routes/${id}`);
            setRoutes(routes.filter((route) => route.id !== id));
        } catch (error) {
            console.error("Error deleting route:", error);
        }
    };

    if (loading) {
        return (
            <motion.div
                animate={{ scale: [0.8, 1] }}
                className="loading"
            >
                Loading...
            </motion.div>
        );
    }

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Bus Routes</h1>
            <div className="home-header"></div>
            <div className="route-list">
                <h1 className="list-title">Route Details</h1>
                <table className="route-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Route Name</th>
                            <th>Origin</th>
                            <th>Destination</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {routes.map((route) => (
                            <tr key={route.id}>
                                <td>{route.id}</td>
                                <td>{route.routeName}</td>
                                <td>{route.origin}</td>
                                <td>{route.destination}</td>
                                <td className="actions">
                                    <motion.button
                                        className="edit-button"
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => navigate(`/admin/routes/edit/${route.id}`)}
                                    >
                                        Edit
                                    </motion.button>
                                    <motion.button
                                        className="delete-button"
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => deleteRoute(route.id)}
                                    >
                                        Delete
                                    </motion.button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
