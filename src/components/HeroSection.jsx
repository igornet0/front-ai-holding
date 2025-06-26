// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Можно заменить на .gif / .webm, если нужно

const HeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <div className="hero-wrapper">
      <div className="hero-overlay" />
      <div className="hero-content">
        <img src={logo} alt="Logo" className="hero-logo-img" />
        <h1 className="hero-title">AI-SPBHOLDING</h1>
        <p className="hero-subtitle">INTELLIGENT INVESTMENT SOLUTIONS</p>
        <button className="hero-button" onClick={() => navigate('/welcome')}>
          GETSTARTED
        </button>
      </div>
    </div>
  );
};

export default HeroSection;