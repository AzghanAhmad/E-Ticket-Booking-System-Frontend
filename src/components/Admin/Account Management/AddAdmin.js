import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./AddAdmin.css";

const AddAdmin = ({ setAdmins }) => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", role: "Admin", status: "Active" });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.password) {
            alert("All fields are required!");
            return;
        }

        setAdmins((prevAdmins) => [
            ...prevAdmins,
            { ...formData, id: prevAdmins.length ? prevAdmins[prevAdmins.length - 1].id + 1 : 1 },
        ]);
        alert("Admin added successfully!");
        navigate("/admin/accounts");
    };

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Add Admin</h1>
            <div className="home-header"></div>
            <motion.div
                className="add-admin"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="form-title">Add New Admin</h1>
                <form onSubmit={handleSubmit} className="admin-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Admin Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Admin Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
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

export default AddAdmin;