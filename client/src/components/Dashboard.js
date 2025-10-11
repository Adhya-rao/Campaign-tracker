import React, { useState } from "react";
import CampaignList from "./CampaignList";
import CampaignForm from "./CampaignForm";
import "./Dashboard.css";

const Dashboard = ({ campaigns, onLogout }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [animate, setAnimate] = useState(true);

  const handleTabChange = (tab) => {
    setAnimate(false);
    setActiveTab(tab);
    setTimeout(() => setAnimate(true), 100);
  };

  const total = campaigns.length;
  const active = campaigns.filter((c) => c.status === "Active").length;
  const paused = campaigns.filter((c) => c.status === "Paused").length;
  const completed = campaigns.filter((c) => c.status === "Completed").length;

  const refresh = () => window.location.reload();

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div className="overview">
            <h2>Campaign Overview</h2>
            <div className="cards">
              <div className="card total">
                <div className="card-icon">📈</div>
                <h3>{total}</h3>
                <p>Total Campaigns</p>
              </div>
              <div className="card active">
                <div className="card-icon">▶</div>
                <h3>{active}</h3>
                <p>Active</p>
              </div>
              <div className="card paused">
                <div className="card-icon">⏸</div>
                <h3>{paused}</h3>
                <p>Paused</p>
              </div>
              <div className="card completed">
                <div className="card-icon">✓</div>
                <h3>{completed}</h3>
                <p>Completed</p>
              </div>
            </div>
            {total > 0 && (
              <div className="progress-section">
                <h3>Active Campaigns Progress</h3>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${Math.round((active / total) * 100)}%` }}
                  ></div>
                  <span>{Math.round((active / total) * 100)}%</span>
                </div>
              </div>
            )}
            <div className="recent-section">
              <h3>Recent Campaigns</h3>
              <div className="recent-list">
                {campaigns.slice(0, 3).map((campaign) => (
                  <div key={campaign._id} className="recent-item">
                    <span className="campaign-name">{campaign.name}</span>
                    <span className={`status ${campaign.status.toLowerCase().replace(' ', '-')}`}>
                      {campaign.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "campaigns":
        return <CampaignList campaigns={campaigns} onCampaignUpdated={refresh} />;
      case "add":
        return <CampaignForm onCampaignAdded={refresh} />;
      case "settings":
        return (
          <div className="settings">
            <h2>Settings</h2>
            <button onClick={onLogout} className="logout-btn">
              Logout
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="logo">Campaign Tracker</h2>
        <ul>
      <li className={activeTab === "overview" ? "active" : ""} onClick={() => handleTabChange("overview")}>
        Overview
      </li>
      <li className={activeTab === "campaigns" ? "active" : ""} onClick={() => handleTabChange("campaigns")}>
        Campaigns
      </li>
      <li className={activeTab === "add" ? "active" : ""} onClick={() => handleTabChange("add")}>
        Add Campaign
      </li>
      <li className={activeTab === "settings" ? "active" : ""} onClick={() => handleTabChange("settings")}>
        Settings
      </li>
        </ul>
      </aside>

      <main className="main">
        <header className="header">
          <h1>Welcome to {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Dashboard!</h1>
        </header>
        <section className={`content ${animate ? 'fade-in' : ''}`}>{renderContent()}</section>
      </main>
    </div>
  );
};

export default Dashboard;

