mport React, { useState } from "react";
import { FiSearch, FiEdit, FiTrash2, FiSave, FiX } from "react-icons/fi";
import { updateCampaign, deleteCampaign } from "../api";
import "./CampaignList.css";

const CampaignList = ({ campaigns, onCampaignUpdated }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', clientName: '', status: '' });

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateCampaign(id, { status: newStatus });
      onCampaignUpdated();
    } catch {
      alert("Error updating campaign");
    }
  };

  const handleEdit = (campaign) => {
    setEditingId(campaign._id);
    setEditForm({
      name: campaign.name,
      clientName: campaign.clientName,
      status: campaign.status
    });
  };

  const handleSave = async () => {
    try {
      await updateCampaign(editingId, editForm);
      onCampaignUpdated();
      setEditingId(null);
    } catch {
      alert("Error updating campaign");
    }
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm(prev => ({ ...prev, [name]: value }));
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this campaign?")) {
      try {
        await deleteCampaign(id);
        onCampaignUpdated();
      } catch {
        alert("Error deleting campaign");
      }
    }
  };

  const filteredCampaigns = campaigns.filter(
    (campaign) =>
      campaign.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      campaign.clientName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="campaign-list-container">
      <div className="header-row">
        <h2><FiSearch /> Campaign List</h2>
        <div className="search-wrapper">
          <FiSearch className="search-icon" />
          <input
            type="text"
            className="search-bar"
            placeholder="Search by campaign or client name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="campaign-table">
          <thead>
            <tr>
              <th>Campaign Name</th>
              <th>Client Name</th>
              <th>Start Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCampaigns.length > 0 ? (
              filteredCampaigns.map((campaign) => (
                <tr key={campaign._id} className={editingId === campaign._id ? 'editing-row' : ''}>
                  <td>
                    {editingId === campaign._id ? (
                      <input
                        type="text"
                        name="name"
                        value={editForm.name}
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    ) : (
                      campaign.name
                    )}
                  </td>
                  <td>
                    {editingId === campaign._id ? (
                      <input
                        type="text"
                        name="clientName"
                        value={editForm.clientName}
                        onChange={handleInputChange}
                        className="edit-input"
                      />
                    ) : (
                      campaign.clientName
                    )}
                  </td>
                  <td>{new Date(campaign.startDate).toLocaleDateString()}</td>
                  <td>
                    {editingId === campaign._id ? (
                      <select
                        name="status"
                        value={editForm.status}
                        onChange={handleInputChange}
                        className="status-select edit-input"
                      >
                        <option value="Active">Active</option>
                        <option value="Paused">Paused</option>
                        <option value="Completed">Completed</option>
                      </select>
                    ) : (
                      <select
                        value={campaign.status}
                        onChange={(e) =>
                          handleStatusChange(campaign._id, e.target.value)
                        }
                        className="status-select"
                      >
                        <option value="Active">Active</option>
                        <option value="Paused">Paused</option>
                        <option value="Completed">Completed</option>
                      </select>
                    )}
                  </td>
                  <td>
                    {editingId === campaign._id ? (
                      <>
                        <button onClick={handleSave} className="save-btn"><FiSave /> Save</button>
                        <button onClick={handleCancel} className="cancel-btn"><FiX /> Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => handleEdit(campaign)} className="edit-btn"><FiEdit /> Edit</button>
                        <button
                          onClick={() => handleDelete(campaign._id)}
                          className="delete-btn"
                        >
                          <FiTrash2 /> Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-data">
                  No campaigns found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignList;

