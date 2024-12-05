import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./ScheduleList.css";

const ScheduleList = ({ schedules, setSchedules }) => {
    const [loading] = useState(false);
    const navigate = useNavigate();

    const deleteSchedule = (id) => {
        setSchedules(schedules.filter((schedule) => schedule.id !== id));
    };

    if (loading) {
        return <motion.div animate={{ scale: [0.8, 1] }} className="loading">Loading...</motion.div>;
    }

    return (
        <div className="home-container">
            <h1 className="dashboard-title">Schedules</h1>
            <div className="home-header"></div>
            <div className="schedule-list">
                <h1 className="list-title">Schedule Details</h1>
                <table className="schedule-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Route Name</th>
                            <th>Departure Time</th>
                            <th>Arrival Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {schedules.map((schedule) => (
                            <tr key={schedule.id}>
                                <td>{schedule.id}</td>
                                <td>{schedule.routeName}</td>
                                <td>{schedule.departureTime}</td>
                                <td>{schedule.arrivalTime}</td>
                                <td className="actions">
                                    <motion.button
                                        className="edit-button"
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => navigate(`/admin/schedules/edit/${schedule.id}`)}
                                    >
                                        Edit
                                    </motion.button>
                                    <motion.button
                                        className="delete-button"
                                        whileHover={{ scale: 1.1 }}
                                        onClick={() => deleteSchedule(schedule.id)}
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
                    onClick={() => navigate("/admin/schedules/add")}
                >
                    Add New Schedule
                </motion.button>
            </div>
        </div>
    );
};

export default ScheduleList;
