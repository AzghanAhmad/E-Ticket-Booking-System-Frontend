import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./BusList.css";

const BusList = ({ buses, setBuses }) => {
    const navigate = useNavigate();

    const deleteBus = (id) => {
        setBuses(buses.filter((bus) => bus.id !== id));
    };

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Bus Management</h1>
            <div className="home-header"></div>
            <div className="bus-list">
                <h1 className="list-title">Bus Details</h1>
                <table className="bus-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Bus Name</th>
                            <th>Type</th>
                            <th>Capacity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {buses.map((bus) => (
                            <tr key={bus.id}>
                                <td>{bus.id}</td>
                                <td>{bus.name}</td>
                                <td>{bus.type}</td>
                                <td>{bus.capacity}</td>
                                <td className="actions">
                                    <motion.button
                                        className="edit-button"
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => navigate(`/admin/buses/edit/${bus.id}`)}
                                    >
                                        Edit
                                    </motion.button>
                                    <motion.button
                                        className="delete-button"
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => deleteBus(bus.id)}
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
                    onClick={() => navigate("/admin/buses/add")}
                >
                    Add New Bus
                </motion.button>
            </div>
        </div>
    );
};

export default BusList;
