import { useState } from 'react';
import './HowItWorks.css';
import {
  FiUserPlus,
  FiCreditCard,
  FiSliders,
  FiZap,
  FiArrowRight,
  FiCheck,
  FiShield,
  FiClock,
  FiTrendingUp,
} from 'react-icons/fi';

const steps = [
  {
    num: '01',
    badge: 'Quick Setup',
    icon: <FiUserPlus />,
    title: 'Create Free Account',
    desc: 'Sign up in under 30 seconds with just an email. No social media passwords or private credentials needed.',
    highlights: ['Instant dashboard access', 'No password required'],
  },
  {
    num: '02',
    badge: 'Instant Credit',
    icon: <FiCreditCard />,
    title: 'Add Funds Easily',
    desc: 'Deposit safely using bKash, Nagad, Rocket, local cards, or crypto. Balance is added to your wallet automatically.',
    highlights: ['bKash & Nagad instant', 'Minimum deposit from ৳50'],
  },
  {
    num: '03',
    badge: 'Custom Plans',
    icon: <FiSliders />,
    title: 'Select Your Service',
    desc: 'Choose from 1,000+ packages across Facebook, Instagram, YouTube, and TikTok tailored to your budget and goals.',
    highlights: ['Transparent rates', 'Targeted followers & engagement'],
  },
  {
    num: '04',
    badge: 'Auto Delivery',
    icon: <FiZap />,
    title: 'Submit & Watch Growth',
    desc: 'Enter your public profile or post link and confirm. Our automated system begins gradual, authentic delivery right away.',
    highlights: ['Starts in 30-60 seconds', 'Live order status tracking'],
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="how-it-works__header">
          <div className="how-it-works__badge-wrapper">
            <span className="how-it-works__badge-line"></span>
            <span className="how-it-works__badge">WORKING PROCESS</span>
            <span className="how-it-works__badge-line"></span>
          </div>
          <h2 className="how-it-works__title">
            Grow Your Socials In <span>4 Simple Steps</span>
          </h2>
          <p className="how-it-works__desc">
            From registration to automated fulfillment in under 2 minutes. Transparent, 
            ban-safe, and engineered for effortless social media expansion.
          </p>
        </div>

        {/* Steps Flow Grid */}
        <div className="how-it-works__grid">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`how-it-works__card ${activeStep === idx ? 'is-active' : ''}`}
              onMouseEnter={() => setActiveStep(idx)}
              onMouseLeave={() => setActiveStep(null)}
            >
              {/* Card Top Row: Step Pill + Badge */}
              <div className="how-it-works__card-header">
                <div className="how-it-works__step-tag">
                  <span className="how-it-works__step-label">STEP</span>
                  <span className="how-it-works__step-num">{step.num}</span>
                </div>
                <span className="how-it-works__pill-badge">{step.badge}</span>
              </div>

              {/* Icon Container */}
              <div className="how-it-works__icon-wrap">
                <div className="how-it-works__icon-box">{step.icon}</div>
                <div className="how-it-works__icon-glow" />
              </div>

              {/* Step Content */}
              <h3 className="how-it-works__card-title">{step.title}</h3>
              <p className="how-it-works__card-desc">{step.desc}</p>

              {/* Highlights Checklist */}
              <div className="how-it-works__highlights">
                {step.highlights.map((highlight, hIdx) => (
                  <div className="how-it-works__highlight-item" key={hIdx}>
                    <div className="how-it-works__check-icon">
                      <FiCheck />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Step Flow Arrow (Connector between cards on desktop) */}
              {idx < steps.length - 1 && (
                <div className="how-it-works__step-arrow" aria-hidden="true">
                  <FiArrowRight />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Feature & Action Strip */}
        <div className="how-it-works__footer-bar">
          <div className="how-it-works__trust-items">
            <div className="how-it-works__trust-item">
              <FiShield className="trust-icon" />
              <span>100% Safe • Never Asks for Passwords</span>
            </div>
            <div className="how-it-works__trust-divider"></div>
            <div className="how-it-works__trust-item">
              <FiClock className="trust-icon" />
              <span>Average Order Start: Under 60 Seconds</span>
            </div>
            <div className="how-it-works__trust-divider"></div>
            <div className="how-it-works__trust-item">
              <FiTrendingUp className="trust-icon" />
              <span>Natural & Non-Drop Delivery Speed</span>
            </div>
          </div>

          <a href="#services" className="how-it-works__cta-btn">
            <span>Explore Services</span>
            <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
