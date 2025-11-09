mport React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <h1>CampaignTracker</h1>
        </div>
        <nav className="nav">
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/login" className="nav-link cta">Get Started</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Manage Every Campaign Seamlessly</h2>
          <p>
            Plan, monitor, and improve campaigns with a single dashboard — built for teams that
            value precision and clarity.
          </p>

          <div className="stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Managed</span>
            </div>
            <div className="stat">
              <span className="stat-number">120K+</span>
              <span className="stat-label">Reports Generated</span>
            </div>
            <div className="stat">
              <span className="stat-number">90+</span>
              <span className="stat-label">Brands Connected</span>
            </div>
          </div>

          <Link to="/login" className="cta-button">Launch Dashboard</Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>Simple Steps to Get Started</h2>
        <div className="works-grid">
          <div className="work-card">
            <h3>1. Create a Campaign</h3>
            <p>Set up campaign details, assign tasks, and define milestones effortlessly.</p>
          </div>
          <div className="work-card">
            <h3>2. Monitor Performance</h3>
            <p>View real-time progress with live analytics and visual reports.</p>
          </div>
          <div className="work-card">
            <h3>3. Optimize Results</h3>
            <p>Identify trends, automate insights, and boost campaign efficiency.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose CampaignTracker</h2>
        <table className="features-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Manual Tools</th>
              <th>CampaignTracker</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Automated Scheduling</td>
              <td className="no">?</td>
              <td className="yes">?</td>
            </tr>
            <tr>
              <td>Team Collaboration</td>
              <td className="partial">!</td>
              <td className="yes">?</td>
            </tr>
            <tr>
              <td>Custom Analytics</td>
              <td className="no">?</td>
              <td className="yes">?</td>
            </tr>
            <tr>
              <td>Instant Notifications</td>
              <td className="no">?</td>
              <td className="yes">?</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Results Section */}
      <section className="results">
        <h2>Trusted by Marketing Teams Worldwide</h2>
        <div className="results-grid">
          <div className="result-card">
            <span className="result-number">95%</span>
            <p>Workflow Efficiency</p>
          </div>
          <div className="result-card">
            <span className="result-number">80%</span>
            <p>Reduced Reporting Time</p>
          </div>
          <div className="result-card">
            <span className="result-number">99.9%</span>
            <p>System Uptime</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Our Users Love It</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>"An amazing platform — simplified our daily reporting process completely!"</p>
          </div>
          <div className="testimonial-card">
            <p>"The clean dashboard and insights have made campaign tracking effortless."</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 CampaignTracker. Built for smarter marketing.</p>
        <div className="footer-links">
          <Link to="/login">Login</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </footer>
    </div>
  );
};

export default Home;
