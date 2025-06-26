import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import img_nn from '../assets/img_nn.png';
import img_ai_module from '../assets/img_ai_module.png';
import analytics from '../assets/analytics.png';
import transformation from '../assets/transformation.png';
import '../App.css';

function WelcomePage() {
  const [activeTab, setActiveTab] = useState(0);
  
  const features = [
    {
      title: "ADVANCED AI MODELS",
      img: img_ai_module,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "IN-DEPTH ANALYSIS",
      img: analytics,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      title: "AUTOMATED STRATEGIES",
      img: transformation,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Duis aute irure dolor in reprehenderit in voluptate velit."
    }
  ];

  return (
    <div className="welcome-page">
      {/* Header */}
      <header className="welcome-header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="hero-logo" />
          <h1 className="logo">AI-SPBHOLDING</h1>
        </div>
        <nav>
          <button className={activeTab === 0 ? 'active' : ''} onClick={() => setActiveTab(0)}>Home</button>
          <button className={activeTab === 1 ? 'active' : ''} onClick={() => setActiveTab(1)}>Services</button>
          <button className={activeTab === 2 ? 'active' : ''} onClick={() => setActiveTab(2)}>About</button>
          <button className={activeTab === 3 ? 'active' : ''} onClick={() => setActiveTab(3)}>Contact</button>
        </nav>
      </header>

      {/* Hero Section */}
        <section className="hero">
        <div className="hero-container">
            <div className="hero-content">
            <h1>Welcome to Intelligent Investment</h1>
            <p>Transforming investment strategies with cutting-edge AI technology</p>
            </div>
            <div className="hero-image">
                <img src={img_nn} alt="AI Neural Network" />
            </div>
        </div>
        </section>
        <section className="features">
            <div className="features-grid">
            {features.map((feature, index) => (
                <div className="feature-card" key={index}>
                <div className="feature-icon">
                    <div className="icon-circle">
                        <div className="icon-shape">
                            <img src={feature.img} alt={feature.title} className='feature-icon-img'/>
                        </div>
                    </div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                </div>
            ))}
            </div>
      </section>

      {/* Empowering Section */}
      <section className="empowering">
        <div className="empowering-content">
          <h2>EMPOWERING YOUR INVESTMENTS</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <div className="stats">
            <div className="stat-item">
              <div className="stat-value">99.7%</div>
              <div className="stat-label">Accuracy</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">24/7</div>
              <div className="stat-label">Monitoring</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">10x</div>
              <div className="stat-label">ROI Potential</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>AI-SPBHOLDING</h3>
            <p>INTELLIGENT INVESTMENT SOLUTIONS</p>
          </div>
          <div className="footer-links">
            <p to="/">Home</p>
            <p to="/welcome">Services</p>
            <p to="/">About</p>
            <p to="/">Contact</p>
          </div>
          <div className="footer-contact">
            <p>contact@ai-sbpholding.com</p>
            <p>+1 (800) AI-INVEST</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 AI-SPBHOLDING. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default WelcomePage;