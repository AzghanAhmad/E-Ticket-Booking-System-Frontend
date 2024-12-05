import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./AdminList.css";

const AdminList = ({ admins, setAdmins }) => {
    const [loading] = useState(false);
    const navigate = useNavigate();

    const deleteAdmin = (id) => {
        setAdmins(admins.filter((admin) => admin.id !== id));
    };

    if (loading) {
        return <motion.div animate={{ scale: [0.8, 1] }} className="loading">Loading...</motion.div>;
    }

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Admin Accounts</h1>
            <div className="home-header"></div>
            <div className="admin-list">
                <h1 className="list-title">Admin Details</h1>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {admins.map((admin) => (
                            <tr key={admin.id}>
                                <td>{admin.id}</td>
                                <td>{admin.name}</td>
                                <td>{admin.email}</td>
                                <td>{admin.role}</td>
                                <td className="actions">
                                    <motion.button
                                        className="edit-button"
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => navigate(`/admin/accounts/edit/${admin.id}`)}
                                    >
                                        Edit
                                    </motion.button>
                                    <motion.button
                                        className="delete-button"
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => deleteAdmin(admin.id)}
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
                    onClick={() => navigate("/admin/accounts/add")}
                >
                    Add New Admin
                </motion.button>
            </div>
        </div>
    );
};

export default AdminList;