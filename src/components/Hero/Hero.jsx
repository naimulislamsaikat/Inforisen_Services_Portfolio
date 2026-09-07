import React, { useState, useEffect } from 'react';
import { FaStar, FaRocket, FaShieldAlt, FaBolt, FaCheckCircle, FaFire } from 'react-icons/fa';
import heroImg from '../../assets/hero-smm.png';
import './Hero.css';

const popularPills = [
  '🔥 TikTok Likes & Views',
  '⚡ Instagram Real Followers',
  '🎯 YouTube Monetization Watchtime',
  '💎 Facebook Page Growth',
  '🚀 Telegram Channel Boost'
];

export default function Hero() {
  const [activePill, setActivePill] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const pillInterval = setInterval(() => {
      setActivePill((prev) => (prev + 1) % popularPills.length);
    }, 2800);
    return () => clearInterval(pillInterval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section className="hero" id="home" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Background Animated Blobs & Mesh */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />
      <div className="hero__grid-pattern" />

      {/* Floating Sparkle Particles */}
      <div className="hero__sparkles">
        {[...Array(12)].map((_, i) => (
          <span key={i} className={`hero__sparkle hero__sparkle--${i + 1}`} />
        ))}
      </div>

      <div className="container hero__inner">
        {/* Left Content */}
        <div className="hero__content">
          {/* Top Live Badge */}
          <div className="hero__pill-wrapper">
            <div className="hero__live-chip">
              <span className="hero__live-dot" />
              <span className="hero__live-text">Live Platform Status</span>
            </div>
            <div className="hero__trending-pill">
              <span className="hero__trending-text">{popularPills[activePill]}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="hero__rating">
            <div className="hero__stars">
              {[1, 2, 3, 4, 5].map(i => <FaStar key={i} className="hero__star" />)}
            </div>
            <span className="hero__rating-text">
              <strong>4.9 / 5.0</strong> rating from 18,500+ satisfied Bangladeshi clients
            </span>
          </div>

          <h1 className="hero__title">
            Best SMM Panel<br />
            in Bangladesh –{' '}
            <span className="hero__title-highlight">
              Fast, Safe
              <svg className="hero__title-underline" viewBox="0 0 200 12" fill="none">
                <path d="M2 9C50 3 150 3 198 9" stroke="#F97316" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
            {' '}& Organic Growth.
          </h1>

          <p className="hero__desc">
            SMM is Bangladesh's most reliable & cheap SMM panel for real social media
            growth. We built this platform for Bangladeshi businesses, creators, and agencies.
            You get fast delivery, safe methods, and followers that actually stay with
            high retention and 24/7 dedicated support.
          </p>

          <div className="hero__features-inline">
            <span className="hero__feat-item">
              <FaBolt className="hero__feat-icon" /> 60-Sec Instant Start
            </span>
            <span className="hero__feat-item">
              <FaShieldAlt className="hero__feat-icon" /> 100% Ban-Free
            </span>
            <span className="hero__feat-item">
              <FaCheckCircle className="hero__feat-icon" /> Guaranteed Refill
            </span>
          </div>

          <div className="hero__ctas">
            <a href="#services" className="btn-primary hero__cta-primary">
              <FaRocket className="hero__rocket-icon" /> View All Services
            </a>
            <a href="#signup" className="hero__cta-secondary">
              Create Free Account
            </a>
          </div>
        </div>

        {/* Right Visual with 3D Tilt and Floating Badges */}
        <div
          className="hero__visual"
          style={{
            transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 12}deg)`
          }}
        >
          <div className="hero__visual-glow" />
          <div className="hero__visual-circle-bg" />

          {/* Floating Metric Badges */}
          <div className="hero__float-card hero__float-card--top-left">
            <div className="hero__float-icon hero__float-icon--rocket">
              <FaRocket />
            </div>
            <div className="hero__float-text">
              <span className="hero__float-title">Instant Delivery</span>
              <span className="hero__float-sub">Starts in &lt;60 secs</span>
            </div>
          </div>

          <div className="hero__float-card hero__float-card--bottom-right">
            <div className="hero__float-icon hero__float-icon--shield">
              <FaShieldAlt />
            </div>
            <div className="hero__float-text">
              <span className="hero__float-title">100% Guaranteed</span>
              <span className="hero__float-sub">Safe & Non-Drop</span>
            </div>
          </div>

          <div className="hero__float-card hero__float-card--stats">
            <div className="hero__float-dot" />
            <div className="hero__float-text">
              <span className="hero__float-title">1,420+ Live Orders</span>
              <span className="hero__float-sub">Processing right now</span>
            </div>
          </div>

          {/* Main Visual Container */}
          <div className="hero__visual-container">
            <img
              src={heroImg}
              alt="Best SMM Panel Bangladesh"
              className="hero__illustration-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
