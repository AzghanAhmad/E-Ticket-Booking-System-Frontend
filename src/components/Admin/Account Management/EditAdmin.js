import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import "./EditAdmin.css";

const EditAdmin = ({ admins, setAdmins }) => {
    const [formData, setFormData] = useState({ name: "", email: "", role: "", status: "" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const adminToEdit = admins.find((admin) => admin.id === parseInt(id));
            setFormData(adminToEdit || { name: "", email: "", role: "", status: "" });
        }
    }, [id, admins]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.role || !formData.status) {
            alert("All fields are required!");
            return;
        }

        setAdmins((prevAdmins) =>
            prevAdmins.map((admin) => (admin.id === parseInt(id) ? formData : admin))
        );
        alert("Admin details updated successfully!");
        navigate("/admin/accounts");
    };

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Edit Admin</h1>
            <div className="home-header"></div>
            <motion.div
                className="edit-admin"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="form-title">Edit Admin</h1>
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
                        type="text"
                        name="role"
                        placeholder="Admin Role"
                        value={formData.role}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="status"
                        placeholder="Status"
                        value={formData.status}
                        onChange={handleInputChange}
                        required
                    />
                    <motion.button
                        type="submit"
                        className="submit-button"
                        whileHover={{ scale: 1.1 }}
                    >
                        Update
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default EditAdmin;