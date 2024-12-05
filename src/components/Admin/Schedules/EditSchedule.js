import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./EditSchedule.css";

const EditSchedule = ({ schedules, setSchedules }) => {
    const { id } = useParams();
    const [formData, setFormData] = useState({
        routeName: "",
        departureTime: "",
        arrivalTime: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const scheduleToEdit = schedules.find((schedule) => schedule.id === parseInt(id));
        if (scheduleToEdit) {
            setFormData({
                routeName: scheduleToEdit.routeName,
                departureTime: scheduleToEdit.departureTime,
                arrivalTime: scheduleToEdit.arrivalTime,
            });
        } else {
            navigate("/admin/schedules");
        }
    }, [id, schedules, navigate]);

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

        const updatedSchedule = { ...formData, id: parseInt(id) };
        setSchedules((prevSchedules) =>
            prevSchedules.map((schedule) =>
                schedule.id === parseInt(id) ? updatedSchedule : schedule
            )
        );
        alert("Schedule updated successfully!");
        navigate("/admin/schedules");
    };

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Edit Schedule</h1>
            <div className="home-header"></div>
            <motion.div
                className="edit-schedule"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="form-title">Edit Schedule</h1>
                <form onSubmit={handleSubmit} className="schedule-form">
                    <label>Route Name</label>
                    <input
                        type="text"
                        name="routeName"
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
                        Update Schedule
                    </motion.button>
                </form>
            </motion.div>
        </div>
    );
};

export default EditSchedule;
