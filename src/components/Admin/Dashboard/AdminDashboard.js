import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
    return (
        <div className="home-container">
            <h1 className="dashboard-title">Admin Dashboard</h1>

            {/* Background Image Section */}
            <div className="home-header"></div>
            <motion.div
                className="admin-dashboard"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="dashboard-cards">
                    {/* Admin Accounts Card */}
                    <motion.div
                        className="dashboard-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2>Manage Accounts</h2>
                        <p>Manage admin accounts efficiently.</p>
                        <div className="dashboard-buttons">
                            <Link to="/admin/accounts" className="dashboard-button">
                                View Admin Accounts
                            </Link>
                            <Link to="/admin/accounts/add" className="dashboard-button">
                                Add New Admin
                            </Link>
                            <Link to="/admin/accounts/edit/1" className="dashboard-button">
                                Edit Admin
                            </Link>
                        </div>
                    </motion.div>

                    {/* Routes Card */}
                    <motion.div
                        className="dashboard-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2>Routes</h2>
                        <p>View and edit bus routes.</p>
                        <div className="dashboard-buttons">
                            <Link to="/admin/routes" className="dashboard-button">
                                View Routes
                            </Link>
                            <Link to="/admin/routes/add" className="dashboard-button">
                                Add New Route
                            </Link>
                        </div>
                    </motion.div>

                    {/* Schedules Card */}
                    <motion.div
                        className="dashboard-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2>Schedules</h2>
                        <p>Manage bus schedules efficiently.</p>
                        <div className="dashboard-buttons">
                            <Link to="/admin/schedules" className="dashboard-button">
                                View Schedules
                            </Link>
                            <Link to="/admin/schedules/add" className="dashboard-button">
                                Add New Schedule
                            </Link>
                        </div>
                    </motion.div>

                    {/* Buses Card */}
                    <motion.div
                        className="dashboard-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2>Manage Buses</h2>
                        <p>View and Edit Buses</p>
                        <div className="dashboard-buttons">
                            <Link to="/admin/buses" className="dashboard-button">
                                View Buses
                            </Link>
                            <Link to="/admin/buses/add" className="dashboard-button">
                                Add New Bus
                            </Link>
                        </div>
                    </motion.div>

                    {/* Drivers Card */}
                    <motion.div
                        className="dashboard-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2>Manage Drivers</h2>
                        <p>View and manage drivers.</p>
                        <div className="dashboard-buttons">
                            <Link to="/admin/drivers" className="dashboard-button">
                                View Drivers
                            </Link>
                            <Link to="/admin/drivers/add" className="dashboard-button">
                                Add New Driver
                            </Link>
                        </div>
                    </motion.div>

                    {/* Fare Management Card */}
                    <motion.div
                        className="dashboard-card"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2>Fare Management</h2>
                        <p>Manage and update fares for routes.</p>
                        <div className="dashboard-buttons">
                            <Link to="/admin/fares" className="dashboard-button">
                                View Fares
                            </Link>
                            <Link to="/admin/fares/add" className="dashboard-button">
                                Add New Fare
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminDashboard;
