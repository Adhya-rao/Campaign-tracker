import React, { useState } from "react";
import { createCampaign } from "../api";
import "./CampaignForm.css";

const CampaignForm = ({ onCampaignAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    clientName: "",
    startDate: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCampaign(formData);
      setFormData({ name: "", clientName: "", startDate: "", status: "Active" });
      onCampaignAdded();
    } catch (error) {
      alert("Error creating campaign");
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2 className="form-heading">Add New Campaign</h2>
        <form onSubmit={handleSubmit} className="form-content">
          <div className="form-group">
            <label>Campaign Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter campaign name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Client Name</label>
            <input
              type="text"
              name="clientName"
              placeholder="Enter client name"
              value={formData.clientName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="Active">Active</option>
              <option value="Paused">Paused</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            âž• Add Campaign
          </button>
        </form>
      </div>
    </div>
  );
};

export default CampaignForm;

