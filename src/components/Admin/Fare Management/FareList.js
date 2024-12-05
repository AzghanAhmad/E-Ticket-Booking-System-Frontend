import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./FareList.css";

const FareList = ({ fares, setFares, buses, routes }) => {
    const navigate = useNavigate();

    const deleteFare = (id) => {
        setFares(fares.filter((fare) => fare.id !== id));
    };

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Fare Management</h1>
            <div className="home-header"></div>
            <div className="fare-list">
                <h1 className="list-title">Fare Details</h1>
                <table className="fare-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Route</th>
                            <th>Bus Type</th>
                            <th>Fare (PKR)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fares.map((fare) => (
                            <tr key={fare.id}>
                                <td>{fare.id}</td>
                                <td>{fare.routeName}</td>
                                <td>{fare.busType}</td>
                                <td>{fare.amount}</td>
                                <td className="actions">
                                    <motion.button
                                        className="edit-button"
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => navigate(`/admin/fares/edit/${fare.id}`)}
                                    >
                                        Edit
                                    </motion.button>
                                    <motion.button
                                        className="delete-button"
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => deleteFare(fare.id)}
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
                    onClick={() => navigate("/admin/fares/add")}
                >
                    Add New Fare
                </motion.button>
            </div>
        </div>
    );
};

export default FareList;
