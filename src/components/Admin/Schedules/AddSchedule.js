import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./AddSchedule.css";

const AddSchedule = ({ schedules, setSchedules }) => {
    const [formData, setFormData] = useState({
        routeName: "",
        departureTime: "",
        arrivalTime: "",
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.routeName || !formData.departureTime || !formData.arrivalTime) {
            alert("All fields are required!");
            return;
        }

        const newSchedule = {
            id: schedules.length + 1,  // Simple way to generate a new ID
            routeName: formData.routeName,
            departureTime: formData.departureTime,
            arrivalTime: formData.arrivalTime,
        };
        setSchedules([...schedules, newSchedule]);
        alert("Schedule added successfully!");
        navigate("/admin/schedules");
    };

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Add Schedule</h1>
            <div className="home-header"></div>
            <motion.div
                className="add-schedule"
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="form-title">Add New Schedule</h1>
                <form onSubmit={handleSubmit} className="schedule-form">
                    <label>Route Name</label>
                    <input
                        type="text"
                        name="routeName"
                        placeholder="Route Name"
                        value={formData.routeName}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Departure Time</label>
                    <input
                        type="time"
                        name="departureTime"
                        value={formData.departureTime}
                        onChange={handleInputChange}
                        required
                    />
                    <label>Arrival Time</label>
                    <input
                        type="time"
                        name="arrivalTime"
                        value={formData.arrivalTime}
                        onChange={handleInputChange}
                        required
                    />
                    <motion.button
                        type="submit"
                        className="submit-button"
                        whileHover={{ scale: 1.1 }}
                    >
                        Add Schedule
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default AddSchedule;
