import React, { useState, useEffect } from 'react';
import './IntroLoader.css';

export default function IntroLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Smooth progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Accelerate smoothly
        const diff = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 350);

      const finishTimer = setTimeout(() => {
        setHidden(true);
        if (onComplete) onComplete();
      }, 1100);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setIsExiting(true);
    setTimeout(() => {
      setHidden(true);
      if (onComplete) onComplete();
    }, 500);
  };

  if (hidden) return null;

  return (
    <div className={`intro-loader ${isExiting ? 'intro-loader--exit' : ''}`} onClick={handleSkip}>
      {/* Background ambient orbs */}
      <div className="intro-loader__glow intro-loader__glow--1" />
      <div className="intro-loader__glow intro-loader__glow--2" />
      <div className="intro-loader__grid" />

      {/* Floating particles */}
      <div className="intro-loader__particles">
        {[...Array(16)].map((_, i) => (
          <span key={i} className={`particle particle--${i + 1}`} />
        ))}
      </div>

      <div className="intro-loader__content">
        {/* Animated Brand Emblem */}
        <div className="intro-loader__logo-wrapper">
          <div className="intro-loader__pulse-ring intro-loader__pulse-ring--1" />
          <div className="intro-loader__pulse-ring intro-loader__pulse-ring--2" />
          <div className="intro-loader__logo">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                fill="url(#lightningGrad)"
                stroke="#FFE8D6"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="lightningGrad" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFF" />
                  <stop offset="0.4" stopColor="#F97316" />
                  <stop offset="1" stopColor="#EA580C" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Brand Name */}
        <div className="intro-loader__title-wrap">
          <h1 className="intro-loader__title">
            INFORISEN <span className="intro-loader__badge">SMM</span>
          </h1>
          <p className="intro-loader__subtitle">
            Bangladesh's #1 Social Media Growth Platform
          </p>
        </div>

        {/* Cyber Progress Indicator */}
        <div className="intro-loader__progress-box">
          <div className="intro-loader__bar-container">
            <div
              className="intro-loader__bar"
              style={{ width: `${progress}%` }}
            />
            <div
              className="intro-loader__bar-glow"
              style={{ left: `${progress}%` }}
            />
          </div>
          <div className="intro-loader__status">
            <span className="intro-loader__status-text">
              {progress < 40 ? 'Initializing Engine...' : progress < 85 ? 'Securing Server Routes...' : 'Ready to Elevate!'}
            </span>
            <span className="intro-loader__percentage">{progress}%</span>
          </div>
        </div>

        {/* Skip Prompt */}
        <div className="intro-loader__skip-hint">
          <span>Click anywhere to explore</span>
        </div>
      </div>
    </div>
  );
}
